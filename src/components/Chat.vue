<template>
  <div class="chat">
    <ul class="chat-container" ref="chatContainer">
      <transition-group name="fade">
        <li class="message" v-for="message in messages" :key="message.id" :class="{'is-mine': message.isMine}">
          <p>
            {{ message.text }}
            <img :src="message.attachment.url" v-if="message.attachment.type === 'image'"/>
            <video controls height="160" v-if="message.attachment.type === 'video'" autoplay="">
              <source :src="message.attachment.url" type="video/mp4">
            </video>
            <audio controls v-if="message.attachment.type === 'audio'" autoplay="">
              <source :src="message.attachment.url" type="audio/mp3">
            </audio>
          </p>

          <div class="actions" v-if="message.original.type === 'actions'">
            <div class="action" v-for="action in message.original.actions" :key="action.value"
                 @click="performAction(action.value, message.original)">
              <img v-if="action.image_url" :src="action.image_url" style="max-height: 25px"/>
              {{ action.text }}
            </div>
          </div>
        </li>
      </transition-group>
    </ul>
    <input type="text" class="message-input" @keyup.enter="sendMessage" v-model="newMessage"
           placeholder="Entrez votre message...">
  </div>
</template>

<style lang="scss">
  .chat {
    display: flex;
    flex-direction: column;
    height: 100%;
    & .chat-container {
      border: 2px solid whitesmoke;
      margin: 0;
      list-style: none;
      padding: 40px 20px;
      flex: 1;
      overflow-y: scroll;
      overflow-x: hidden;
      @include customScroolbar();
      & li.message {
        padding: 20px;
        border: 2px solid whitesmoke;
        position: relative;
        z-index: 2;
        margin-bottom: 40px;
        width: max-content;
        max-width: 100%;
        float: right;
        clear: both;
        & .actions {
          & .action {
            &:first-of-type {
              padding-top: 10px;
              margin-top: 10px;
              border-top: 2px solid whitesmoke;
            }
            font-size: 1rem;
            text-decoration: underline;
            transition: color 0.3s;
            &:hover {
              cursor: pointer;
              color: transparentize(whitesmoke, 0.1)
            }
          }
        }
        &:last-of-type {
          margin-bottom: 0;
        }
        &:before, :after {
          content: "\0020";
          display: block;
          position: absolute;
          z-index: 2;
          width: 0;
          height: 0;
          overflow: hidden;
          border: solid 20px transparent;
          border-top: 0;
          border-bottom-color: $main-color;
          top: calc(100% - 8px);
          right: -13px;
          transform: rotate(45deg);
        }
        &:before {
          top: calc(100% - 2px);
          right: -15px;
          transform: rotate(45deg);
          z-index: 1;
          border-bottom-color: whitesmoke;
        }
        &.is-mine {
          float: none;
          &:before, :after {
            content: "\0020";
            display: block;
            position: absolute;
            z-index: 2;
            width: 0;
            height: 0;
            overflow: hidden;
            border: solid 20px transparent;
            border-top: 0;
            border-bottom-color: $main-color;
            top: calc(100% - 8px);
            left: -13px;
            transform: rotate(135deg) scaleY(-1);
          }
          &:before {
            top: calc(100% - 2px);
            left: -15px;
            transform: rotate(135deg) scaleY(-1);
            z-index: 1;
            border-bottom-color: whitesmoke;
          }
        }
        & p {
          margin: 0;
          color: inherit;
          display: inline-block;
        }
      }
    }
    & .message-input {
      background: transparent;
      border: 2px solid whitesmoke;
      border-top: none;
      padding: 20px;
      outline: none;
      font-family: inherit;
      font-size: 1.4rem;
      color: inherit;
      &::placeholder {
        font-style: italic;
        color: transparentize(whitesmoke, 0.2);
      }
    }
  }
</style>

<script>
const axios = require('axios')

export default {
  props: {
    apiEndpoint: {
      default: 'http://localhost:8000/botman'
    },
    userId: {
      default: +(new Date())
    }
  },

  data () {
    return {
      messages: [
        {
          'isMine': false,
          'user': '🤖',
          'text': 'Salut ! Ici, tu peux parler avec moi si l\'envie te prends. Hésite pas à me dire coucou ! :)',
          'id': 'intro',
          'original': {
            'type': 'text',
            'text': 'Salut ! Ici, tu peux parler avec moi si l\'envie te prends. Hésite pas à me dire coucou ! :)',
            'attachment': null,
            'additionalParameters': []
          },
          'attachment': {}
        }
      ],
      newMessage: null
    }
  },
  methods: {
    callAPI (text, interactive = false, attachment = null, callback) {
      let data = new FormData()
      const postData = {
        driver: 'web',
        userId: this.userId,
        message: text,
        attachment,
        interactive,
        attachment_data: null
      }

      Object.keys(postData).forEach(key => data.append(key, postData[key]))
      axios.post(this.apiEndpoint, data).then(response => {
        const messages = response.data.messages || []
        messages.forEach(msg => {
          this._addMessage(msg.text, msg.attachment, false, msg)
        })
        if (callback) {
          callback(response.data)
        }
      })
    },

    performAction (value, message) {
      this.callAPI(value, true, null, (response) => {
        message.actions = null
      })
    },

    _addMessage (text, attachment, isMine, original = {}) {
      this.messages.push({
        'isMine': isMine,
        'user': isMine ? '👨' : '🤖',
        'text': text,
        'id': Date.now() + text,
        'original': original,
        'attachment': attachment || {}
      })
      this.$nextTick(() => {
        this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight
      })
    },

    sendMessage () {
      let messageText = this.newMessage
      this.newMessage = ''
      if (messageText === 'clear') {
        this.messages = []
        return
      }

      this._addMessage(messageText, null, true)

      this.callAPI(messageText)
    }
  }
}
</script>

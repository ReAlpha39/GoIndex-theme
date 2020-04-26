import Vue from "vue";

var govideo = Vue.component("govideo", {
  data: function () {
    return {
      apiurl: "",
      videourl: "",
      players: [
        {
          name: 'IINA',
          icon: 'https://www.iina.io/images/iina-icon-60.png',
          scheme: 'iina://weblink?url='
        },
        {
          name: 'PotPlayer',
          icon: 'https://cloud.jsonpop.cn/go2index/player/potplayer.png',
          scheme: 'potplayer://'
        },
        {
          name: 'VLC',
          icon: 'https://cloud.jsonpop.cn/go2index/player/vlc.png',
          scheme: 'vlc://'
        },
        {
          name: 'Thunder',
          icon: 'https://cloud.jsonpop.cn/go2index/player/thunder.png',
          scheme: 'thunder://'
        }
      ]
    };
  },
  methods: {
    render(path) {
      this.videourl = window.location.origin + path;
      this.apiurl =
        "https://api.jsonpop.cn/demo/blplyaer/?url=" + this.videourl;
    },
  },
  computed: {
    getThunder() {
      return Buffer.from("AA" + this.videourl + "ZZ").toString("base64")
    }
  },
  template: `
    <div class="content">
        <iframe width="100%" height="600px;" :src="apiurl" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    <span class="icon"><i class="fa fa-play-circle" aria-hidden="true"></i></span>
                    Play /
                    <span class="icon"><i class="fa fa-download" aria-hidden="true"></i></span>
                    Download
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                  <div class="columns is-mobile is-multiline has-text-centered">
                    <div class="column" v-for="item in players">
                      <p class="heading">
                        <a :href="item.scheme+(item.name==='Thunder'?getThunder:videourl)">
                          <figure class="image is-48x48" style="margin: 0 auto;">
                            <img class="icon" :src="item.icon" />
                          </figure>
                        </a>
                      </p>
                      <p class="">{{item.name}}</p>
                    </div>
                  </div>
                </div>
            </div>  
        </div>
    </div>
  `,
});

export default govideo;

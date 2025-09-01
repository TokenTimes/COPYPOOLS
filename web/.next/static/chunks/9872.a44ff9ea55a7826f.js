"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9872],{19872:(e,t,i)=>{i.r(t),i.d(t,{W3mWalletReceiveView:()=>C});var r=i(83138),o=i(98410),s=i(78964),a=i(58051),n=i(93481),c=i(65374),l=i(14744),d=i(45069),u=i(71305),w=i(67869),p=i(12319),h=i(36211);i(27837),i(45166),i(24772),i(38534);var m=i(71084),f=i(47327),g=i(20296);let k=(0,g.AH)`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    border: none;
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e["01"]};
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`;var b=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let y=class extends r.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return(0,r.qy)`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let e=this.networkImages.slice(0,5);return(0,r.qy)` <wui-flex class="networks">
      ${e?.map(e=>(0,r.qy)` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};y.styles=[m.W5,m.fD,k],b([(0,o.MZ)({type:Array})],y.prototype,"networkImages",void 0),b([(0,o.MZ)()],y.prototype,"text",void 0),y=b([(0,f.E)("wui-compatible-network")],y),i(40575),i(34563),i(41163);var v=i(73537);let x=(0,h.AH)`
  wui-compatible-network {
    margin-top: ${({spacing:e})=>e["4"]};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`;var $=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let C=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.address=a.U.state.address,this.profileName=a.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.unsubscribe.push(a.U.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):c.P.showError("Account not found")}),n.W.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-wallet-receive-view: No account provided");let e=l.$.getNetworkImage(this.network);return(0,r.qy)` <wui-flex
      flexDirection="column"
      .padding=${["0","4","4","4"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${h.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:4*!this.profileName,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["4","0","0","0"]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${d.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,s.J)(d.W.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=n.W.getAllRequestedCaipNetworks(),t=n.W.checkIfSmartAccountEnabled(),i=n.W.state.activeCaipNetwork,o=e.filter(e=>e?.chainNamespace===i?.chainNamespace);if((0,u.lj)(i?.chainNamespace)===v.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return i?(0,r.qy)`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[l.$.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;let s=(o?.filter(e=>e?.assets?.imageId)?.slice(0,5)).map(l.$.getNetworkImage).filter(Boolean);return(0,r.qy)`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${s}
    ></wui-compatible-network>`}onReceiveClick(){w.I.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(p.w.copyToClopboard(this.address),c.P.showSuccess("Address copied"))}catch{c.P.showError("Failed to copy")}}};C.styles=x,$([(0,o.wk)()],C.prototype,"address",void 0),$([(0,o.wk)()],C.prototype,"profileName",void 0),$([(0,o.wk)()],C.prototype,"network",void 0),C=$([(0,h.EM)("w3m-wallet-receive-view")],C)}}]);
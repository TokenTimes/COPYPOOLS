"use strict";exports.id=6260,exports.ids=[6260],exports.modules={26260:(a,b,c)=>{c.r(b),c.d(b,{AppKitModal:()=>aj,W3mModal:()=>ai,W3mModalBase:()=>ah,W3mRouterContainer:()=>am});var d=c(29856),e=c(44500),f=c(22734),g=c(63363),h=c(85601),i=c(20828),j=c(93175),k=c(57339),l=c(95209),m=c(10306),n=c(87977),o=c(69801),p=c(48421);let q={isUnsupportedChainView:()=>"UnsupportedChain"===n.I.state.view||"SwitchNetwork"===n.I.state.view&&n.I.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView()||await p.U.isSIWXCloseDisabled())return void j.W.shake();("DataCapture"===n.I.state.view||"DataCaptureOtpConfirm"===n.I.state.view)&&o.x.disconnect(),j.W.close()}};var r=c(5119),s=c(33504),t=c(13295),u=c(78066),v=c(74967),w=c(77292),x=c(14143),y=c(27680);let z=(0,y.AH)`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:a})=>a["8"]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:a})=>a.theme.foregroundPrimary};
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    overflow: hidden;
  }
`,A=class extends d.WF{render(){return(0,d.qy)`<slot></slot>`}};A.styles=[w.W5,z],A=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,x.E)("wui-card")],A),c(58581);var B=c(81104);c(19700),c(29272),c(64222);let C=(0,y.AH)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:a})=>a[2]};
    padding: ${({spacing:a})=>a[3]};
    border-radius: ${({borderRadius:a})=>a[6]};
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:a})=>a.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:a})=>a.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:a})=>a.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.core.backgroundError};

      wui-icon {
        color: ${({tokens:a})=>a.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:a})=>a["2"]};
    background-color: var(--local-icon-bg-value);
  }
`;var D=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let E={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"},F=class extends d.WF{constructor(){super(...arguments),this.message="",this.type="info"}render(){return(0,d.qy)`
      <wui-flex
        data-type=${(0,f.J)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${E[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){B.h.close()}};F.styles=[w.W5,C],D([(0,e.MZ)()],F.prototype,"message",void 0),D([(0,e.MZ)()],F.prototype,"type",void 0),F=D([(0,x.E)("wui-alertbar")],F);let G=(0,v.AH)`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:a})=>a["3"]};
    left: ${({spacing:a})=>a["4"]};
    right: ${({spacing:a})=>a["4"]};
    opacity: 0;
    pointer-events: none;
  }
`;var H=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let I={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}},J=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.open=B.h.state.open,this.onOpen(!0),this.unsubscribe.push(B.h.subscribeKey("open",a=>{this.open=a,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{message:a,variant:b}=B.h.state,c=I[b];return(0,d.qy)`
      <wui-alertbar
        message=${a}
        backgroundColor=${c?.backgroundColor}
        iconColor=${c?.iconColor}
        icon=${c?.icon}
        type=${b}
      ></wui-alertbar>
    `}onOpen(a){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):a||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};J.styles=G,H([(0,e.wk)()],J.prototype,"open",void 0),J=H([(0,v.EM)("w3m-alertbar")],J);var K=c(84177),L=c(40190),M=c(69710),N=c(26641);c(76968),c(67332);let O=(0,y.AH)`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:a})=>a[1]};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:a})=>a[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:a})=>a[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var P=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let Q={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},R={lg:"lg",md:"md",sm:"sm"},S=class extends d.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return(0,d.qy)`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){let a=Q[this.size];return this.text?(0,d.qy)`<wui-text color="primary" variant=${a}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return(0,d.qy)`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;let a=R[this.size];return(0,d.qy)` <wui-flex class="left-icon-container">
      <wui-icon size=${a} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};S.styles=[w.W5,w.fD,O],P([(0,e.MZ)()],S.prototype,"imageSrc",void 0),P([(0,e.MZ)()],S.prototype,"text",void 0),P([(0,e.MZ)()],S.prototype,"size",void 0),P([(0,e.MZ)()],S.prototype,"type",void 0),P([(0,e.MZ)({type:Boolean})],S.prototype,"disabled",void 0),S=P([(0,x.E)("wui-select")],S),c(96296),c(77041);var T=c(1317);let U=(0,v.AH)`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  wui-text {
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:a})=>a["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:a})=>a["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:a})=>a["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:a})=>a["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var V=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let W=["SmartSessionList"];function X(){let a=n.I.state.data?.connector?.name,b=n.I.state.data?.wallet?.name,c=n.I.state.data?.network?.name,d=b??a,e=l.a.getConnectors(),f=1===e.length&&e[0]?.id==="w3m-email";return{Connect:`Connect ${f?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:d??"Connect Wallet",ConnectingWalletConnect:d??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:d?`Get ${d}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:c??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:K.U.state.socialProvider?K.U.state.socialProvider.charAt(0).toUpperCase()+K.U.state.socialProvider.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in Progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from an Exchange",PayWithExchangeSelectAsset:"Select Asset"}}let Y=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.heading=X()[n.I.state.view],this.network=k.W.state.activeCaipNetwork,this.networkImage=L.$.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=n.I.state.view,this.viewDirection="",this.unsubscribe.push(M.j.subscribeNetworkImages(()=>{this.networkImage=L.$.getNetworkImage(this.network)}),n.I.subscribeKey("view",a=>{setTimeout(()=>{this.view=a,this.heading=X()[a]},T.o.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),k.W.subscribeKey("activeCaipNetwork",a=>{this.network=a,this.networkImage=L.$.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(a=>a())}render(){return(0,d.qy)`
      <wui-flex
        .padding=${["0","5","0","5"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){N.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),n.I.push("WhatIsAWallet")}async onClose(){await q.safeClose()}rightHeaderTemplate(){let a=i.H?.state?.features?.smartSessions;return"Account"===n.I.state.view&&a?(0,d.qy)`<wui-flex>
      <wui-icon-link
        icon="clock"
        variant="primary"
        @click=${()=>n.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return(0,d.qy)`
      <wui-icon-link
        icon="close"
        variant="primary"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){let a=W.includes(this.view);return(0,d.qy)`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text variant="lg-regular" color="primary" data-testid="w3m-header-text">
          ${this.heading}
        </wui-text>
        ${a?(0,d.qy)`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:a}=n.I.state,b="Connect"===a,c=i.H.state.enableEmbedded,e=i.H.state.enableNetworkSwitch;return"Account"===a&&e?(0,d.qy)`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,f.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,f.J)(this.networkImage)}
      ></wui-select>`:this.showBack&&!("ApproveTransaction"===a||"ConnectingSiwe"===a||b&&c)?(0,d.qy)`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:(0,d.qy)`<wui-icon-link
      data-hidden=${!b}
      id="dynamic"
      icon="helpCircle"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(N.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),n.I.push("Networks"))}isAllowedNetworkSwitch(){let a=k.W.getAllRequestedCaipNetworks(),b=!!a&&a.length>1,c=a?.find(({id:a})=>a===this.network?.id);return b||!c}onViewChange(){let{history:a}=n.I.state,b=T.o.VIEW_DIRECTION.Next;a.length<this.prevHistoryLength&&(b=T.o.VIEW_DIRECTION.Prev),this.prevHistoryLength=a.length,this.viewDirection=b}async onHistoryChange(){let{history:a}=n.I.state,b=this.shadowRoot?.querySelector("#dynamic");a.length>1&&!this.showBack&&b?(await b.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,b.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):a.length<=1&&this.showBack&&b&&(await b.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,b.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){n.I.goBack()}};Y.styles=U,V([(0,e.wk)()],Y.prototype,"heading",void 0),V([(0,e.wk)()],Y.prototype,"network",void 0),V([(0,e.wk)()],Y.prototype,"networkImage",void 0),V([(0,e.wk)()],Y.prototype,"showBack",void 0),V([(0,e.wk)()],Y.prototype,"prevHistoryLength",void 0),V([(0,e.wk)()],Y.prototype,"view",void 0),V([(0,e.wk)()],Y.prototype,"viewDirection",void 0),Y=V([(0,v.EM)("w3m-header")],Y),c(79763),c(1222);let Z=(0,y.AH)`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:a})=>a[1]};
    padding: ${({spacing:a})=>a[2]} ${({spacing:a})=>a[3]}
      ${({spacing:a})=>a[2]} ${({spacing:a})=>a[2]};
    border-radius: ${({borderRadius:a})=>a[20]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:a})=>a.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:a})=>a.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:a})=>a[1]};
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
    border-radius: ${({borderRadius:a})=>a.round} !important;
  }
`;var $=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let _=class extends d.WF{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return(0,d.qy)`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?(0,d.qy)`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:(0,d.qy)`<wui-icon-box
      size="md"
      color=${({success:"success",error:"error",warning:"warning",info:"default"})[this.variant]}
      icon=${({success:"checkmark",error:"warning",warning:"warningCircle",info:"info"})[this.variant]}
    ></wui-icon-box>`}};_.styles=[w.W5,Z],$([(0,e.MZ)()],_.prototype,"message",void 0),$([(0,e.MZ)()],_.prototype,"variant",void 0),_=$([(0,x.E)("wui-snackbar")],_);let aa=(0,d.AH)`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ab=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ac=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=s.P.state.open,this.unsubscribe.push(s.P.subscribeKey("open",a=>{this.open=a,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(a=>a())}render(){let{message:a,variant:b}=s.P.state;return(0,d.qy)` <wui-snackbar message=${a} variant=${b}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),s.P.state.autoClose&&(this.timeout=setTimeout(()=>s.P.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ac.styles=aa,ab([(0,e.wk)()],ac.prototype,"open",void 0),ac=ab([(0,v.EM)("w3m-snackbar")],ac),c(94235);var ad=c(71965);c(89766),c(95844);let ae=(0,v.AH)`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:a})=>a.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      backdrop-filter ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      border-radius ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]},
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    padding: ${({spacing:a})=>a[1]};
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    transition-delay: ${({durations:a})=>a.md};
    will-change: box-shadow;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:a})=>a.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:a})=>a["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:a})=>a["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      w3m-shake ${({durations:a})=>a.xl}
        ${({easings:a})=>a["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:a})=>a["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    }
  }
`;var af=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ag="scroll-lock";class ah extends d.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=i.H.state.enableEmbedded,this.open=j.W.state.open,this.caipAddress=k.W.state.activeCaipAddress,this.caipNetwork=k.W.state.activeCaipNetwork,this.shake=j.W.state.shake,this.filterByNamespace=l.a.state.filterByNamespace,this.initializeTheming(),m.N.prefetchAnalyticsConfig(),this.unsubscribe.push(j.W.subscribeKey("open",a=>a?this.onOpen():this.onClose()),j.W.subscribeKey("shake",a=>this.shake=a),k.W.subscribeKey("activeCaipNetwork",a=>this.onNewNetwork(a)),k.W.subscribeKey("activeCaipAddress",a=>this.onNewAddress(a)),i.H.subscribeKey("enableEmbedded",a=>this.enableEmbedded=a),l.a.subscribeKey("filterByNamespace",a=>{this.filterByNamespace===a||k.W.getAccountData(a)?.caipAddress||(m.N.fetchRecommendedWallets(),this.filterByNamespace=a)}),n.I.subscribeKey("view",()=>{this.dataset.border=ad.y.hasFooter()?"true":"false"}))}firstUpdated(){if(this.dataset.border=ad.y.hasFooter()?"true":"false",this.caipAddress){if(this.enableEmbedded){j.W.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),this.onRemoveKeyboardListener()}render(){return(this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--apkt-borderRadius-8), 44px)":"0px"};
    `,this.enableEmbedded)?(0,d.qy)`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?(0,d.qy)`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return(0,d.qy)` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,f.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(a){a.target===a.currentTarget&&await this.handleClose()}async handleClose(){await q.safeClose()}initializeTheming(){let{themeVariables:a,themeMode:b}=r.W.state,c=v.Zv.getColorTheme(b);(0,v.RF)(a,c)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),s.P.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let a=document.createElement("style");a.dataset.w3m=ag,a.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(a)}onScrollUnlock(){let a=document.head.querySelector(`style[data-w3m="${ag}"]`);a&&a.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let a=this.shadowRoot?.querySelector("wui-card");a?.focus(),window.addEventListener("keydown",b=>{if("Escape"===b.key)this.handleClose();else if("Tab"===b.key){let{tagName:c}=b.target;!c||c.includes("W3M-")||c.includes("WUI-")||a?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(a){let b=k.W.state.isSwitchingNamespace,c="ProfileWallets"===n.I.state.view;a?await this.onConnected({caipAddress:a,isSwitchingNamespace:b,isInProfileView:c}):b||this.enableEmbedded||c||j.W.close(),await p.U.initializeIfEnabled(a),this.caipAddress=a,k.W.setIsSwitchingNamespace(!1)}async onConnected(a){if(a.isInProfileView)return;let{chainNamespace:b,chainId:c,address:d}=g.C.parseCaipAddress(a.caipAddress),e=`${b}:${c}`,f=!t.w.getPlainAddress(this.caipAddress),h=await p.U.getSessions({address:d,caipNetworkId:e}),i=!p.U.getSIWX()||h.some(a=>a.data.accountAddress===d),k=a.isSwitchingNamespace&&i&&!this.enableEmbedded,l=this.enableEmbedded&&f;k?n.I.goBack():l&&j.W.close()}onNewNetwork(a){let b=this.caipNetwork,c=b?.caipNetworkId?.toString(),d=b?.chainNamespace,e=a?.caipNetworkId?.toString(),f=a?.chainNamespace,g=c!==e,i=b?.name===h.o.UNSUPPORTED_NETWORK_NAME,l="ConnectingExternal"===n.I.state.view,m="ProfileWallets"===n.I.state.view,o=!k.W.getAccountData(a?.chainNamespace)?.caipAddress,p="UnsupportedChain"===n.I.state.view,q=j.W.state.open,r=!1;this.enableEmbedded&&"SwitchNetwork"===n.I.state.view&&(r=!0),g&&u.GN.resetState(),q&&!l&&!m&&(o?g&&(r=!0):p?r=!0:g&&d===f&&!i&&(r=!0)),r&&"SIWXSignMessage"!==n.I.state.view&&n.I.goBack(),this.caipNetwork=a}prefetch(){this.hasPrefetched||(m.N.prefetch(),m.N.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}ah.styles=ae,af([(0,e.MZ)({type:Boolean})],ah.prototype,"enableEmbedded",void 0),af([(0,e.wk)()],ah.prototype,"open",void 0),af([(0,e.wk)()],ah.prototype,"caipAddress",void 0),af([(0,e.wk)()],ah.prototype,"caipNetwork",void 0),af([(0,e.wk)()],ah.prototype,"shake",void 0),af([(0,e.wk)()],ah.prototype,"filterByNamespace",void 0);let ai=class extends ah{};ai=af([(0,v.EM)("w3m-modal")],ai);let aj=class extends ah{};aj=af([(0,v.EM)("appkit-modal")],aj);let ak=(0,v.AH)`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:a})=>a.lg};
    --local-transition: ${({easings:a})=>a["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:a})=>a.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:a})=>a.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var al=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let am=class extends d.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px"}updated(a){if(a.has("history")){let a=this.history;""!==this.historyState&&this.historyState!==a&&this.onViewChange(a)}a.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),a.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(a=>{for(let b of a)if(b.target===this.getWrapper()){let a=b.contentRect.height,c=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");a+=c,this.style.setProperty("--local-border-bottom-radius",c?"var(--apkt-borderRadius-5)":"0px"),this.style.setProperty("--local-container-height",`${a}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${a}px`}}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){let a=this.getWrapper();a&&this.resizeObserver&&this.resizeObserver.unobserve(a)}render(){return(0,d.qy)`
      <div class="container">
        <div class="page" view-direction="${this.viewDirection}">
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(a){let b=a.split(",").filter(Boolean),c=this.historyState.split(",").filter(Boolean),d=c.length,e=b.length,f=b[b.length-1]||"",g=v.Zv.cssDurationToNumber(this.transitionDuration),h="";e>d?h="next":e<d?h="prev":e===d&&b[e-1]!==c[d-1]&&(h="next"),this.viewDirection=`${h}-${f}`,setTimeout(()=>{this.historyState=a,this.setView?.(f)},g),setTimeout(()=>{this.viewDirection=""},2*g)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}};am.styles=[ak],al([(0,e.MZ)({type:String})],am.prototype,"transitionDuration",void 0),al([(0,e.MZ)({type:String})],am.prototype,"transitionFunction",void 0),al([(0,e.MZ)({type:String})],am.prototype,"history",void 0),al([(0,e.MZ)({type:String})],am.prototype,"view",void 0),al([(0,e.MZ)({attribute:!1})],am.prototype,"setView",void 0),al([(0,e.wk)()],am.prototype,"viewDirection",void 0),al([(0,e.wk)()],am.prototype,"historyState",void 0),al([(0,e.wk)()],am.prototype,"previousHeight",void 0),am=al([(0,v.EM)("w3m-router-container")],am)}};
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8558],{68558:(e,t,i)=>{i.r(t),i.d(t,{W3mApproveTransactionView:()=>h,W3mRegisterAccountNameSuccess:()=>Y,W3mRegisterAccountNameView:()=>B,W3mUpgradeWalletView:()=>k});var r=i(83138),o=i(98410),n=i(52617),a=i(81701),s=i(55480),l=i(10899),d=i(45069),c=i(36211);let u=(0,r.AH)`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var p=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let h=class extends r.WF{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(a.W.subscribeKey("open",e=>{e||this.onHideIframe()}),a.W.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--apkt-easings-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";let e=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(t=>{let i=t?.[0]?.contentBoxSize,r=i?.[0]?.inlineSize;this.iframe.style.height="600px",e.style.height="600px",s.H.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():(r&&r<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset"),this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return(0,r.qy)`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){let e=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)"}async syncTheme(){let e=l.a.getAuthConnector();if(e){let t=d.W.getSnapshot().themeMode,i=d.W.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:i,w3mThemeVariables:(0,n.o)(i,t)})}}async updateFrameSizeForEmbeddedMode(){let e=this?.renderRoot?.querySelector("div");await new Promise(e=>{setTimeout(e,300)});let t=this.getBoundingClientRect();e.style.width="100%",this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top}px`,this.iframe.style.width=`${t.width}px`,this.iframe.style.height=`${t.height}px`,this.onShowIframe()}};h.styles=u,p([(0,o.wk)()],h.prototype,"ready",void 0),h=p([(0,c.EM)("w3m-approve-transaction-view")],h);var m=i(28977);i(40575),i(27837),i(45166),i(24772);var g=i(71084),f=i(47327),b=i(20296);let w=(0,b.AH)`
  a {
    border: none;
    border-radius: ${({borderRadius:e})=>e["20"]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`;var y=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let x={sm:"md-regular",md:"lg-regular",lg:"lg-regular"},v={success:"sealCheck",error:"warning",warning:"exclamationCircle"},$=class extends r.WF{constructor(){super(...arguments),this.type="success",this.size="md",this.imageSrc=void 0,this.disabled=!1,this.href="",this.text=void 0}render(){return(0,r.qy)`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${x[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?(0,r.qy)`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:(0,r.qy)`<wui-icon
      name=${v[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};$.styles=[g.W5,g.fD,w],y([(0,o.MZ)()],$.prototype,"type",void 0),y([(0,o.MZ)()],$.prototype,"size",void 0),y([(0,o.MZ)()],$.prototype,"imageSrc",void 0),y([(0,o.MZ)({type:Boolean})],$.prototype,"disabled",void 0),y([(0,o.MZ)()],$.prototype,"href",void 0),y([(0,o.MZ)()],$.prototype,"text",void 0),$=y([(0,f.E)("wui-semantic-chip")],$),i(41163);let k=class extends r.WF{render(){return(0,r.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${m.oU.SECURE_SITE_DASHBOARD}
          href=${m.oU.SECURE_SITE_DASHBOARD}
          imageSrc=${m.oU.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};k=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,c.EM)("w3m-upgrade-wallet-view")],k);var S=i(99865),R=i(45553),E=i(62609),A=i(58051),C=i(12319),N=i(70417),T=i(71305),O=i(93481),M=i(65374);i(21129),i(50505);let z=(0,b.AH)`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
      border-radius: ${({borderRadius:e})=>e[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var I=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let D=class extends r.WF{constructor(){super(...arguments),this.name="",this.registered=!1,this.loading=!1,this.disabled=!1}render(){return(0,r.qy)`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?(0,r.qy)`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?(0,r.qy)`<wui-tag variant="info" size="sm">Registered</wui-tag>`:(0,r.qy)`<wui-tag variant="success" size="sm">Available</wui-tag>`}};D.styles=[g.W5,g.fD,z],I([(0,o.MZ)()],D.prototype,"name",void 0),I([(0,o.MZ)({type:Boolean})],D.prototype,"registered",void 0),I([(0,o.MZ)({type:Boolean})],D.prototype,"loading",void 0),I([(0,o.MZ)({type:Boolean})],D.prototype,"disabled",void 0),D=I([(0,f.E)("wui-account-name-suggestion-item")],D);var W=i(78964);i(5089);let _=(0,b.AH)`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:e})=>e[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var P=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let j=class extends r.WF{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return(0,r.qy)`
      <wui-input-text
        value=${(0,W.J)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};j.styles=[g.W5,_],P([(0,o.MZ)()],j.prototype,"errorMessage",void 0),P([(0,o.MZ)({type:Boolean})],j.prototype,"disabled",void 0),P([(0,o.MZ)()],j.prototype,"value",void 0),P([(0,o.MZ)({type:Boolean})],j.prototype,"loading",void 0),P([(0,o.MZ)({attribute:!1})],j.prototype,"onKeyDown",void 0),j=P([(0,f.E)("wui-ens-input")],j),i(77237),i(51568),i(75484);var U=i(73537),q=i(21471);let F=(0,c.AH)`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[6]};
    padding: ${({spacing:e})=>e[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var Z=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let B=class extends r.WF{constructor(){super(),this.formRef=(0,S._)(),this.usubscribe=[],this.name="",this.error="",this.loading=E.f.state.loading,this.suggestions=E.f.state.suggestions,this.profileName=A.U.state.profileName,this.onDebouncedNameInputChange=C.w.debounce(e=>{e.length<4?this.error="Name must be at least 4 characters long":q.y.isValidReownName(e)?(this.error="",E.f.getSuggestions(e)):this.error="The value is not a valid username"}),this.usubscribe.push(E.f.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),A.U.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return(0,r.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["1","3","4","3"]}
      >
        <form ${(0,S.K)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){let e=this.suggestions.find(e=>e.name?.split(".")?.[0]===this.name&&e.registered);if(this.loading)return(0,r.qy)`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;let t=`${this.name}${R.o.WC_NAME_SUFFIX}`;return(0,r.qy)`
      <wui-icon-link
        ?disabled=${!!e}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?"default":"accent-primary"}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){let t=q.y.validateReownName(e.detail||"");this.name=t,this.onDebouncedNameInputChange(t)}onKeyDown(e){1!==e.key.length||q.y.isValidReownName(e.key)||e.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:(0,r.qy)`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(e=>(0,r.qy)`<wui-account-name-suggestion-item
            name=${e.name}
            ?registered=${e.registered}
            ?loading=${this.loading}
            ?disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`}isAllowedToSubmit(e){let t=e.split(".")?.[0],i=this.suggestions.find(e=>e.name?.split(".")?.[0]===t&&e.registered);return!this.loading&&!this.error&&!this.profileName&&t&&E.f.validateName(t)&&!i}async onSubmitName(e){try{if(!this.isAllowedToSubmit(e))return;N.E.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:(0,T.lj)(O.W.state.activeChain)===U.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await E.f.registerName(e),N.E.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:(0,T.lj)(O.W.state.activeChain)===U.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(t){M.P.showError(t.message),N.E.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:(0,T.lj)(O.W.state.activeChain)===U.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e,error:t?.message||"Unknown error"}})}}onEnterKey(e){if("Enter"===e.key&&this.name&&this.isAllowedToSubmit(this.name)){let e=`${this.name}${R.o.WC_NAME_SUFFIX}`;this.onSubmitName(e)}}};B.styles=F,Z([(0,o.MZ)()],B.prototype,"errorMessage",void 0),Z([(0,o.wk)()],B.prototype,"name",void 0),Z([(0,o.wk)()],B.prototype,"error",void 0),Z([(0,o.wk)()],B.prototype,"loading",void 0),Z([(0,o.wk)()],B.prototype,"suggestions",void 0),Z([(0,o.wk)()],B.prototype,"profileName",void 0),B=Z([(0,c.EM)("w3m-register-account-name-view")],B);var H=i(74678),K=i(67869);i(41028),i(90721),i(48352);let V=(0,r.AH)`
  .continue-button-container {
    width: 100%;
  }
`,Y=class extends r.WF{render(){return(0,r.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{C.w.openHref(H.T.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return(0,r.qy)` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return(0,r.qy)`<wui-flex
      .padding=${["0","4","0","4"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){K.I.replace("Account")}};Y.styles=V,Y=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,c.EM)("w3m-register-account-name-success-view")],Y)}}]);
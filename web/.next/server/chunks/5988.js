"use strict";exports.id=5988,exports.ids=[5988],exports.modules={5988:(a,b,c)=>{c.r(b),c.d(b,{W3mBuyInProgressView:()=>J,W3mFundWalletView:()=>O,W3mOnRampProvidersView:()=>A,W3mOnrampFiatSelectView:()=>o,W3mOnrampTokensView:()=>D,W3mOnrampWidget:()=>W,W3mWhatIsABuyView:()=>K});var d=c(29856),e=c(44500),f=c(22734),g=c(38837),h=c(69710),i=c(30147),j=c(20828),k=c(93175),l=c(74967);c(58581),c(66162),c(77041),c(30874);let m=(0,l.AH)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var n=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let o=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=g.aG.state.paymentCurrency,this.currencies=g.aG.state.paymentCurrencies,this.currencyImages=h.j.state.currencyImages,this.checked=i.o.state.isLegalCheckboxChecked,this.unsubscribe.push(g.aG.subscribe(a=>{this.selectedCurrency=a.paymentCurrency,this.currencies=a.paymentCurrencies}),h.j.subscribeKey("currencyImages",a=>this.currencyImages=a),i.o.subscribeKey("isLegalCheckboxChecked",a=>{this.checked=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=j.H.state,c=j.H.state.features?.legalCheckbox,e=!!(a||b)&&!!c&&!this.checked;return(0,d.qy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="2"
        class=${(0,f.J)(e?"disabled":void 0)}
      >
        ${this.currenciesTemplate(e)}
      </wui-flex>
    `}currenciesTemplate(a=!1){return this.currencies.map(b=>(0,d.qy)`
        <wui-list-item
          imageSrc=${(0,f.J)(this.currencyImages?.[b.id])}
          @click=${()=>this.selectCurrency(b)}
          variant="image"
          tabIdx=${(0,f.J)(a?-1:void 0)}
        >
          <wui-text variant="md-medium" color="primary">${b.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(a){a&&(g.aG.setPaymentCurrency(a),k.W.close())}};o.styles=m,n([(0,e.wk)()],o.prototype,"selectedCurrency",void 0),n([(0,e.wk)()],o.prototype,"currencies",void 0),n([(0,e.wk)()],o.prototype,"currencyImages",void 0),n([(0,e.wk)()],o.prototype,"checked",void 0),o=n([(0,l.EM)("w3m-onramp-fiat-select-view")],o);var p=c(57339),q=c(87977),r=c(13295),s=c(26641),t=c(23799),u=c(88693),v=c(40190);c(24307),c(96901),c(20356),c(47734);let w=(0,l.AH)`
  button {
    padding: ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["4"]};
    border: none;
    outline: none;
    background-color: ${({tokens:a})=>a.core.glass010};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${({spacing:a})=>a["3"]};
    transition: background-color ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: background-color;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .provider-image {
    width: ${({spacing:a})=>a["10"]};
    min-width: ${({spacing:a})=>a["10"]};
    height: ${({spacing:a})=>a["10"]};
    border-radius: calc(
      ${({borderRadius:a})=>a["4"]} - calc(${({spacing:a})=>a["3"]} / 2)
    );
    position: relative;
    overflow: hidden;
  }

  .network-icon {
    width: ${({spacing:a})=>a["3"]};
    height: ${({spacing:a})=>a["3"]};
    border-radius: calc(${({spacing:a})=>a["3"]} / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px ${({tokens:a})=>a.theme.foregroundPrimary},
      0 0 0 3px ${({tokens:a})=>a.theme.backgroundPrimary};
    transition: box-shadow ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px ${({tokens:a})=>a.core.glass010},
      0 0 0 3px ${({tokens:a})=>a.theme.backgroundPrimary};
  }
`;var x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let y=class extends d.WF{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return(0,d.qy)`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0,f.J)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="01">
          <wui-text variant="md-regular" color="primary">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="4">
            <wui-text variant="sm-medium" color="primary">
              <wui-text variant="sm-regular" color="secondary">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="2">
              <wui-icon name="bank" size="sm" color="default"></wui-icon>
              <wui-icon name="card" size="sm" color="default"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?(0,d.qy)`<wui-loading-spinner color="secondary" size="md"></wui-loading-spinner>`:(0,d.qy)`<wui-icon name="chevronRight" color="default" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let a=p.W.getAllRequestedCaipNetworks(),b=a?.filter(a=>a?.assets?.imageId)?.slice(0,5);return(0,d.qy)`
      <wui-flex class="networks">
        ${b?.map(a=>(0,d.qy)`
            <wui-flex class="network-icon">
              <wui-image src=${(0,f.J)(v.$.getNetworkImage(a))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};y.styles=[w],x([(0,e.MZ)({type:Boolean})],y.prototype,"disabled",void 0),x([(0,e.MZ)()],y.prototype,"color",void 0),x([(0,e.MZ)()],y.prototype,"name",void 0),x([(0,e.MZ)()],y.prototype,"label",void 0),x([(0,e.MZ)()],y.prototype,"feeRange",void 0),x([(0,e.MZ)({type:Boolean})],y.prototype,"loading",void 0),x([(0,e.MZ)()],y.prototype,"onClick",void 0),y=x([(0,l.EM)("w3m-onramp-provider-item")],y),c(4776);var z=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let A=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.providers=g.aG.state.providers,this.unsubscribe.push(g.aG.subscribeKey("providers",a=>{this.providers=a}))}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
    `}onRampProvidersTemplate(){return this.providers.filter(a=>a.supportedChains.includes(p.W.state.activeChain??"eip155")).map(a=>(0,d.qy)`
          <w3m-onramp-provider-item
            label=${a.label}
            name=${a.name}
            feeRange=${a.feeRange}
            @click=${()=>{this.onClickProvider(a)}}
            ?disabled=${!a.url}
            data-testid=${`onramp-provider-${a.name}`}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(a){g.aG.setSelectedProvider(a),q.I.push("BuyInProgress"),r.w.openHref(g.aG.state.selectedProvider?.url||a.url,"popupWindow","width=600,height=800,scrollbars=yes"),s.E.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:a.name,isSmartAccount:(0,t.lj)(p.W.state.activeChain)===u.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};z([(0,e.wk)()],A.prototype,"providers",void 0),A=z([(0,l.EM)("w3m-onramp-providers-view")],A),c(43367);let B=(0,l.AH)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var C=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let D=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=g.aG.state.purchaseCurrencies,this.tokens=g.aG.state.purchaseCurrencies,this.tokenImages=h.j.state.tokenImages,this.checked=i.o.state.isLegalCheckboxChecked,this.unsubscribe.push(g.aG.subscribe(a=>{this.selectedCurrency=a.purchaseCurrencies,this.tokens=a.purchaseCurrencies}),h.j.subscribeKey("tokenImages",a=>this.tokenImages=a),i.o.subscribeKey("isLegalCheckboxChecked",a=>{this.checked=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=j.H.state,c=j.H.state.features?.legalCheckbox,e=!!(a||b)&&!!c&&!this.checked;return(0,d.qy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="2"
        class=${(0,f.J)(e?"disabled":void 0)}
      >
        ${this.currenciesTemplate(e)}
      </wui-flex>
    `}currenciesTemplate(a=!1){return this.tokens.map(b=>(0,d.qy)`
        <wui-list-item
          imageSrc=${(0,f.J)(this.tokenImages?.[b.symbol])}
          @click=${()=>this.selectToken(b)}
          variant="image"
          tabIdx=${(0,f.J)(a?-1:void 0)}
        >
          <wui-flex gap="1" alignItems="center">
            <wui-text variant="md-medium" color="primary">${b.name}</wui-text>
            <wui-text variant="sm-regular" color="secondary">${b.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(a){a&&(g.aG.setPurchaseCurrency(a),k.W.close())}};D.styles=B,C([(0,e.wk)()],D.prototype,"selectedCurrency",void 0),C([(0,e.wk)()],D.prototype,"tokens",void 0),C([(0,e.wk)()],D.prototype,"tokenImages",void 0),C([(0,e.wk)()],D.prototype,"checked",void 0),D=C([(0,l.EM)("w3m-onramp-token-select-view")],D);var E=c(69801),F=c(5119),G=c(33504);c(21238),c(35419),c(48850),c(44133);let H=(0,l.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:a})=>a["1"]} * 9 - ${({borderRadius:a})=>a["3"]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:a})=>a["1"]} * -1);
    bottom: calc(${({spacing:a})=>a["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      transform ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:a})=>a["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:a})=>a["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:a})=>a["01"]} ${({spacing:a})=>a["2"]};
  }
`;var I=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let J=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=g.aG.state.selectedProvider,this.uri=E.x.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(g.aG.subscribeKey("selectedProvider",a=>{this.selectedOnRampProvider=a}))}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let a="Continue in external window";this.error?a="Buy failed":this.selectedOnRampProvider&&(a=`Buy in ${this.selectedOnRampProvider?.label}`);let b=this.error?"Buy can be declined from your side or due to and error on the provider app":`We’ll notify you once your Buy is processed`;return(0,d.qy)`
      <wui-flex
        data-error=${(0,f.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,f.J)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["4","0","0","0"]}
        >
          <wui-text variant="md-medium" color=${this.error?"error":"primary"}>
            ${a}
          </wui-text>
          <wui-text align="center" variant="sm-medium" color="secondary">${b}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="secondary">
          <wui-icon size="sm" color="default" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,r.w.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?(0,d.qy)`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let a=F.W.state.themeVariables["--w3m-border-radius-master"],b=a?parseInt(a.replace("px",""),10):4;return(0,d.qy)`<wui-loading-thumbnail radius=${9*b}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){G.P.showError("No link found"),q.I.goBack();return}try{r.w.copyToClopboard(this.selectedOnRampProvider.url),G.P.showSuccess("Link copied")}catch{G.P.showError("Failed to copy")}}};J.styles=H,I([(0,e.wk)()],J.prototype,"intervalId",void 0),I([(0,e.wk)()],J.prototype,"selectedOnRampProvider",void 0),I([(0,e.wk)()],J.prototype,"uri",void 0),I([(0,e.wk)()],J.prototype,"ready",void 0),I([(0,e.wk)()],J.prototype,"showRetry",void 0),I([(0,e.wk)()],J.prototype,"buffering",void 0),I([(0,e.wk)()],J.prototype,"error",void 0),I([(0,e.MZ)({type:Boolean})],J.prototype,"isMobile",void 0),I([(0,e.MZ)()],J.prototype,"onRetry",void 0),J=I([(0,l.EM)("w3m-buy-in-progress-view")],J);let K=class extends d.WF{render(){return(0,d.qy)`
      <wui-flex
        flexDirection="column"
        .padding=${["6","10","5","10"]}
        alignItems="center"
        gap="5"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="2" alignItems="center">
          <wui-text align="center" variant="md-medium" color="primary">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${q.I.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};K=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,l.EM)("w3m-what-is-a-buy-view")],K);var L=c(89078),M=c(851),N=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let O=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=p.W.state.activeCaipNetwork,this.features=j.H.state.features,this.remoteFeatures=j.H.state.remoteFeatures,this.exchangesLoading=L.g.state.isLoading,this.exchanges=L.g.state.exchanges,this.unsubscribe.push(j.H.subscribeKey("features",a=>this.features=a),j.H.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a),p.W.subscribeKey("activeCaipNetwork",a=>{this.activeCaipNetwork=a,this.setDefaultPaymentAsset()}),L.g.subscribeKey("isLoading",a=>this.exchangesLoading=a),L.g.subscribeKey("exchanges",a=>this.exchanges=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}async firstUpdated(){L.g.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await L.g.fetchExchanges())}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;let a=await L.g.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),b=a.find(a=>"USDC"===a.metadata.symbol)||a[0];b&&L.g.setPaymentAsset(b)}onrampTemplate(){if(!this.activeCaipNetwork)return null;let a=this.remoteFeatures?.onramp,b=M.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return a&&b?(0,d.qy)`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `:null}depositFromExchangeTemplate(){return this.activeCaipNetwork&&L.g.isPayWithExchangeSupported()?(0,d.qy)`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="download"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `:null}receiveTemplate(){return this.features?.receive?(0,d.qy)`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `:null}onBuyCrypto(){q.I.push("OnRampProviders")}onReceive(){q.I.push("WalletReceive")}onDepositFromExchange(){q.I.push("PayWithExchange")}};N([(0,e.wk)()],O.prototype,"activeCaipNetwork",void 0),N([(0,e.wk)()],O.prototype,"features",void 0),N([(0,e.wk)()],O.prototype,"remoteFeatures",void 0),N([(0,e.wk)()],O.prototype,"exchangesLoading",void 0),N([(0,e.wk)()],O.prototype,"exchanges",void 0),O=N([(0,l.EM)("w3m-fund-wallet-view")],O),c(79550);let P=(0,l.AH)`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:a})=>a["2"]};
    height: 40px;
    padding: ${({spacing:a})=>a["2"]} ${({spacing:a})=>a["2"]}
      ${({spacing:a})=>a["2"]} ${({spacing:a})=>a["2"]};
    min-width: 95px;
    border-radius: ${({borderRadius:a})=>a.round};
    border: 1px solid ${({tokens:a})=>a.theme.foregroundPrimary};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var Q=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let R=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=h.j.state.currencyImages,this.tokenImages=h.j.state.tokenImages,this.unsubscribe.push(g.aG.subscribeKey("purchaseCurrency",a=>{a&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(a))}),g.aG.subscribeKey("paymentCurrency",a=>{a&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(a))}),g.aG.subscribe(a=>{"Fiat"===this.type?this.currencies=a.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=a.paymentCurrencies.map(this.formatPaymentCurrency)}),h.j.subscribe(a=>{this.currencyImages={...a.currencyImages},this.tokenImages={...a.tokenImages}}))}firstUpdated(){g.aG.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.selectedCurrency?.symbol||"",b=this.currencyImages[a]||this.tokenImages[a];return(0,d.qy)`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?(0,d.qy)` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="1"
            @click=${()=>k.W.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,f.J)(b)}></wui-image>
            <wui-text color="primary">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:(0,d.qy)`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(a){return{name:a.id,symbol:a.id}}formatPurchaseCurrency(a){return{name:a.name,symbol:a.symbol}}};R.styles=P,Q([(0,e.MZ)({type:String})],R.prototype,"type",void 0),Q([(0,e.MZ)({type:Number})],R.prototype,"value",void 0),Q([(0,e.wk)()],R.prototype,"currencies",void 0),Q([(0,e.wk)()],R.prototype,"selectedCurrency",void 0),Q([(0,e.wk)()],R.prototype,"currencyImages",void 0),Q([(0,e.wk)()],R.prototype,"tokenImages",void 0),R=Q([(0,l.EM)("w3m-onramp-input")],R);let S=(0,l.AH)`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: ${({borderRadius:a})=>a["8"]};
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var T=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let U={USD:"$",EUR:"€",GBP:"\xa3"},V=[100,250,500,1e3],W=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=p.W.state.activeCaipAddress,this.loading=k.W.state.loading,this.paymentCurrency=g.aG.state.paymentCurrency,this.paymentAmount=g.aG.state.paymentAmount,this.purchaseAmount=g.aG.state.purchaseAmount,this.quoteLoading=g.aG.state.quotesLoading,this.unsubscribe.push(p.W.subscribeKey("activeCaipAddress",a=>this.caipAddress=a),k.W.subscribeKey("loading",a=>{this.loading=a}),g.aG.subscribe(a=>{this.paymentCurrency=a.paymentCurrency,this.paymentAmount=a.paymentAmount,this.purchaseAmount=a.purchaseAmount,this.quoteLoading=a.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="2">
            ${V.map(a=>(0,d.qy)`<wui-button
                  variant=${this.paymentAmount===a?"accent-secondary":"neutral-secondary"}
                  size="md"
                  textVariant="md-medium"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(a)}
                  >${`${U[this.paymentCurrency?.id||"USD"]} ${a}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?(0,d.qy)`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="accent-primary"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:(0,d.qy)`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||k.W.open({view:"OnRampProviders"})}openModal(){k.W.open({view:"Connect"})}async onPaymentAmountChange(a){g.aG.setPaymentAmount(Number(a.detail)),await g.aG.getQuote()}async selectPresetAmount(a){g.aG.setPaymentAmount(a),await g.aG.getQuote()}};W.styles=S,T([(0,e.MZ)({type:Boolean})],W.prototype,"disabled",void 0),T([(0,e.wk)()],W.prototype,"caipAddress",void 0),T([(0,e.wk)()],W.prototype,"loading",void 0),T([(0,e.wk)()],W.prototype,"paymentCurrency",void 0),T([(0,e.wk)()],W.prototype,"paymentAmount",void 0),T([(0,e.wk)()],W.prototype,"purchaseAmount",void 0),T([(0,e.wk)()],W.prototype,"quoteLoading",void 0),W=T([(0,l.EM)("w3m-onramp-widget")],W)},89078:(a,b,c)=>{c.d(b,{g:()=>z});var d=c(26972),e=c(90062),f=c(23799),g=c(851),h=c(13295),i=c(63363),j=c(20828);let k={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class l extends Error{}async function m(a,b){let c=function(){let{sdkType:a,sdkVersion:b,projectId:c}=j.H.getSnapshot(),d=new URL("https://rpc.walletconnect.org/v1/json-rpc");return d.searchParams.set("projectId",c),d.searchParams.set("st",a),d.searchParams.set("sv",b),d.searchParams.set("source","fund-wallet"),d.toString()}(),{projectId:d}=j.H.getSnapshot(),e={jsonrpc:"2.0",id:1,method:a,params:{...b||{},projectId:d}},f=await fetch(c,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),g=await f.json();if(g.error)throw new l(g.error.message);return g}async function n(a){return(await m("reown_getExchanges",a)).result}async function o(a){return(await m("reown_getExchangePayUrl",a)).result}async function p(a){return(await m("reown_getExchangeBuyStatus",a)).result}function q(a,b){let{chainNamespace:c,chainId:d}=i.C.parseCaipNetworkId(a),e=k[c];if(!e)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${c}`);let f=e.native.assetNamespace,g=e.native.assetReference;"native"!==b&&(f=e.defaultTokenNamespace,g=b);let h=`${c}:${d}`;return`${h}/${f}:${g}`}let r={ethereumETH:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseETH:{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseUSDC:{network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},baseSepoliaETH:{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ethereumUSDC:{network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},arbitrumUSDC:{network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},polygonUSDC:{network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},solanaUSDC:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ethereumUSDT:{network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},optimismUSDT:{network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},arbitrumUSDT:{network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},polygonUSDT:{network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaUSDT:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaSOL:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}};var s=c(84177),t=c(88912),u=c(57339),v=c(26641),w=c(33504);let x={paymentAsset:null,amount:10,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},y=(0,d.BX)(x),z={state:y,subscribe:a=>(0,d.B1)(y,()=>a(y)),subscribeKey:(a,b)=>(0,e.u$)(y,a,b),resetState(){Object.assign(y,{...x})},async getAssetsForNetwork(a){let b=Object.values(r).filter(b=>b.network===a),c=await z.getAssetsImageAndPrice(b),d=b.map(a=>{let b="native"===a.asset?(0,f.K1)():`${a.network}:${a.asset}`,d=c.find(a=>a.fungibles?.[0]?.address?.toLowerCase()===b.toLowerCase());return{...a,price:d?.fungibles?.[0]?.price||1,metadata:{...a.metadata,iconUrl:d?.fungibles?.[0]?.iconUrl}}});return y.assets=d,d},async getAssetsImageAndPrice(a){let b=a.map(a=>"native"===a.asset?(0,f.K1)():`${a.network}:${a.asset}`);return await Promise.all(b.map(a=>t.T.fetchTokenPrice({addresses:[a]})))},getTokenAmount(){if(!y?.paymentAsset?.price)throw Error("Cannot get token price");return Number(new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:8}).format(y.amount/y.paymentAsset.price))},setAmount(a){y.amount=a,y.paymentAsset?.price&&(y.tokenAmount=z.getTokenAmount())},setPaymentAsset(a){y.paymentAsset=a},isPayWithExchangeEnabled:()=>j.H.state.remoteFeatures?.payWithExchange||j.H.state.remoteFeatures?.payments||j.H.state.features?.pay,isPayWithExchangeSupported:()=>z.isPayWithExchangeEnabled()&&u.W.state.activeCaipNetwork&&g.oU.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(u.W.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{let a=z.isPayWithExchangeSupported();if(!y.paymentAsset||!a){y.exchanges=[],y.isLoading=!1;return}y.isLoading=!0;let b=await n({page:0,asset:q(y.paymentAsset.network,y.paymentAsset.asset),amount:y.amount.toString()});y.exchanges=b.exchanges.slice(0,2)}catch(a){throw w.P.showError("Unable to get exchanges"),Error("Unable to get exchanges")}finally{y.isLoading=!1}},async getPayUrl(a,b){try{let c=Number(b.amount),d=await o({exchangeId:a,asset:q(b.network,b.asset),amount:c.toString(),recipient:`${b.network}:${b.recipient}`});return v.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:a},configuration:{network:b.network,asset:b.asset,recipient:b.recipient,amount:c},currentPayment:{type:"exchange",exchangeId:a},source:"fund-from-exchange",headless:!1}}),d}catch(a){if(a instanceof Error&&a.message.includes("is not supported"))throw Error("Asset not supported");throw Error(a.message)}},async handlePayWithExchange(a){try{if(!s.U.state.address)throw Error("No account connected");if(!y.paymentAsset)throw Error("No payment asset selected");let b=h.w.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!b)throw Error("Could not create popup window");y.isPaymentInProgress=!0,y.paymentId=crypto.randomUUID(),y.currentPayment={type:"exchange",exchangeId:a};let{network:c,asset:d}=y.paymentAsset,e={network:c,asset:d,amount:y.tokenAmount,recipient:s.U.state.address},f=await z.getPayUrl(a,e);if(!f){try{b.close()}catch(a){console.error("Unable to close popup window",a)}throw Error("Unable to initiate payment")}y.currentPayment.sessionId=f.sessionId,y.currentPayment.status="IN_PROGRESS",y.currentPayment.exchangeId=a,b.location.href=f.url}catch(a){y.error="Unable to initiate payment",w.P.showError(y.error)}},async waitUntilComplete({exchangeId:a,sessionId:b,paymentId:c,retries:d=20}){let e=await z.getBuyStatus(a,b,c);if("SUCCESS"===e.status||"FAILED"===e.status)return e;if(0===d)throw Error("Unable to get deposit status");return await new Promise(a=>{setTimeout(a,5e3)}),z.waitUntilComplete({exchangeId:a,sessionId:b,paymentId:c,retries:d-1})},async getBuyStatus(a,b,c){try{if(!y.currentPayment)throw Error("No current payment");let d=await p({sessionId:b,exchangeId:a});return y.currentPayment.status=d.status,("SUCCESS"===d.status||"FAILED"===d.status)&&(y.currentPayment.result=d.txHash,y.isPaymentInProgress=!1,v.E.sendEvent({type:"track",event:"SUCCESS"===d.status?"PAY_SUCCESS":"PAY_ERROR",properties:{source:"fund-from-exchange",paymentId:c,configuration:{network:y.paymentAsset?.network||"",asset:y.paymentAsset?.asset||"",recipient:s.U.state.address||"",amount:y.amount},currentPayment:{type:"exchange",exchangeId:y.currentPayment?.exchangeId,sessionId:y.currentPayment?.sessionId,result:d.txHash}}})),d}catch(a){return{status:"UNKNOWN",txHash:""}}},reset(){y.currentPayment=void 0,y.isPaymentInProgress=!1,y.paymentId="",y.paymentAsset=null,y.amount=0,y.tokenAmount=0,y.priceLoading=!1,y.error=null,y.exchanges=[],y.isLoading=!1}}},96901:(a,b,c)=>{c(67332)}};
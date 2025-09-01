"use strict";exports.id=5546,exports.ids=[5546],exports.modules={29452:(a,b,c)=>{var d=c(29856),e=c(44500);c(19700),c(67332),c(42190),c(29272),c(64222);var f=c(77292),g=c(14143),h=c(27680);let i=(0,h.AH)`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:a})=>a[1]};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[32]};
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a[32]};
  }

  wui-text {
    padding-left: ${({spacing:a})=>a[1]};
    padding-right: ${({spacing:a})=>a[1]};
  }

  .left-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
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

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
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
`;var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k={lg:"lg-regular",md:"lg-regular",sm:"md-regular"},l={lg:"lg",md:"md",sm:"sm"},m=class extends d.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.text="",this.loading=!1}render(){return this.loading?(0,d.qy)` <wui-flex alignItems="center" gap="01" padding="01">
        <wui-shimmer width="20px" height="20px"></wui-shimmer>
        <wui-shimmer width="32px" height="18px" borderRadius="4xs"></wui-shimmer>
      </wui-flex>`:(0,d.qy)`
      <button ?disabled=${this.disabled} data-size=${this.size}>
        ${this.imageTemplate()} ${this.textTemplate()}
      </button>
    `}imageTemplate(){if(this.imageSrc)return(0,d.qy)`<wui-image src=${this.imageSrc}></wui-image>`;let a=l[this.size];return(0,d.qy)` <wui-flex class="left-icon-container">
      <wui-icon size=${a} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}textTemplate(){let a=k[this.size];return(0,d.qy)`<wui-text color="primary" variant=${a}
      >${this.text}</wui-text
    >`}};m.styles=[f.W5,f.fD,i],j([(0,e.MZ)()],m.prototype,"size",void 0),j([(0,e.MZ)()],m.prototype,"imageSrc",void 0),j([(0,e.MZ)({type:Boolean})],m.prototype,"disabled",void 0),j([(0,e.MZ)()],m.prototype,"text",void 0),j([(0,e.MZ)({type:Boolean})],m.prototype,"loading",void 0),m=j([(0,g.E)("wui-token-button")],m)},85546:(a,b,c)=>{c.r(b),c.d(b,{W3mSendSelectTokenView:()=>G,W3mWalletSendPreviewView:()=>Y,W3mWalletSendView:()=>D});var d=c(29856),e=c(44500),f=c(83342),g=c(78066),h=c(87977),i=c(13295),j=c(57339),k=c(74967);c(21238),c(58581),c(35419);var l=c(84600),m=c(69801);c(24307),c(77041);let n=(0,k.AH)`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:a})=>a["5"]};
    border: 1px solid ${({tokens:a})=>a.theme.foregroundPrimary};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-1"]};
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: ${({tokens:a})=>a.theme.textPrimary};
    margin: 0 ${({spacing:a})=>a["2"]};
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: ${({fontFamily:a})=>a.regular};
    font-style: normal;
    font-weight: var(--apkt-font-weight-light);
    line-height: 130%;
    letter-spacing: ${({typography:a})=>a["md-medium"].letterSpacing};
    color: ${({tokens:a})=>a.theme.textPrimary};
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var o=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let p=class extends d.WF{constructor(){super(...arguments),this.inputElementRef=(0,l._)(),this.instructionElementRef=(0,l._)(),this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=i.w.debounce(async a=>{if(!a.length)return void this.setReceiverAddress("");let b=j.W.state.activeChain;if(i.w.isAddress(a,b))return void this.setReceiverAddress(a);try{let b=await m.x.getEnsAddress(a);if(b){f.R.setReceiverProfileName(a),f.R.setReceiverAddress(b);let c=await m.x.getEnsAvatar(a);f.R.setReceiverProfileImageUrl(c||void 0)}}catch(b){this.setReceiverAddress(a)}finally{f.R.setLoading(!1)}})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return(0,d.qy)` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="01"
      .padding=${["8","4","5","4"]}
    >
      <wui-text
        ${(0,l.K)(this.instructionElementRef)}
        class="instruction"
        color="secondary"
        variant="md-medium"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral-secondary"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${(0,l.K)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(a){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:+!a},{opacity:+!!a}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.value||this.instructionHidden||this.focusInput()}onBlur(){this.value||!this.instructionHidden||this.pasting||this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;let a=await navigator.clipboard.readText();f.R.setReceiverAddress(a),this.focusInput()}onInputChange(a){let b=a.target;this.pasting=!1,this.value=a.target?.value,b.value&&!this.instructionHidden&&this.focusInput(),f.R.setLoading(!0),this.onDebouncedSearch(b.value)}setReceiverAddress(a){f.R.setReceiverAddress(a),f.R.setReceiverProfileName(void 0),f.R.setReceiverProfileImageUrl(void 0),f.R.setLoading(!1)}};p.styles=n,o([(0,e.MZ)()],p.prototype,"value",void 0),o([(0,e.wk)()],p.prototype,"instructionHidden",void 0),o([(0,e.wk)()],p.prototype,"pasting",void 0),p=o([(0,k.EM)("w3m-input-address")],p);var q=c(31886),r=c(58180),s=c(77292),t=c(14143),u=c(27680);let v=(0,u.AH)`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    color: ${({tokens:a})=>a.theme.textPrimary};
    font-feature-settings: 'case' on;
    font-size: 32px;
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: ${({tokens:a})=>a.theme.foregroundTertiary};
  }
`;var w=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let x=class extends d.WF{constructor(){super(...arguments),this.inputElementRef=(0,l._)(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),(0,d.qy)`<input
      ${(0,l.K)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(a){let b=a.data;if(b&&this.inputElementRef?.value)if(","===b){let a=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=a,this.value=`${this.value}${a}`}else r.Ky.test(b)||(this.inputElementRef.value.value=this.value.replace(RegExp(b.replace(r.PG,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};x.styles=[s.W5,s.fD,v],w([(0,e.MZ)({type:Boolean})],x.prototype,"disabled",void 0),w([(0,e.MZ)({type:String})],x.prototype,"value",void 0),w([(0,e.MZ)({type:String})],x.prototype,"placeholder",void 0),x=w([(0,t.E)("wui-input-amount")],x),c(48850),c(29452);let y=(0,k.AH)`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:a})=>a["5"]};
    border: 1px solid ${({tokens:a})=>a.theme.foregroundPrimary};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-1"]};
    will-change: background-color;
    transition: all ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.lg};
  }

  :host(:hover) {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var z=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let A=class extends d.WF{render(){return(0,d.qy)` <wui-flex
      flexDirection="column"
      gap="01"
      .padding=${["5","3","4","3"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="01" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?(0,d.qy)`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:(0,d.qy)`<wui-button
      size="md"
      variant="neutral-secondary"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){h.I.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let a=this.token.price*this.sendTokenAmount;return(0,d.qy)`<wui-text class="totalValue" variant="sm-regular" color="secondary"
        >${a?`$${q.S.formatNumberToLocalString(a,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?(0,d.qy)` <wui-text variant="sm-regular" color="error">
          ${k.Zv.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:(0,d.qy)` <wui-text variant="sm-regular" color="secondary">
        ${k.Zv.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?(0,d.qy)`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:(0,d.qy)`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(a){f.R.setTokenAmount(a.detail)}onMaxClick(){if(this.token){let a=q.S.bigNumber(this.token.quantity.numeric);f.R.setTokenAmount(Number(a.toFixed(20)))}}onBuyClick(){h.I.push("OnRampProviders")}};A.styles=y,z([(0,e.MZ)({type:Object})],A.prototype,"token",void 0),z([(0,e.MZ)({type:Number})],A.prototype,"sendTokenAmount",void 0),A=z([(0,k.EM)("w3m-input-token")],A);let B=(0,k.AH)`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:a})=>a["10"]} !important;
    border: 4px solid ${({tokens:a})=>a.theme.backgroundPrimary};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: ${({borderRadius:a})=>a["4"]} !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var C=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let D=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.token=f.R.state.token,this.sendTokenAmount=f.R.state.sendTokenAmount,this.receiverAddress=f.R.state.receiverAddress,this.receiverProfileName=f.R.state.receiverProfileName,this.loading=f.R.state.loading,this.message="Preview Send",this.token&&(this.fetchBalances(),this.fetchNetworkPrice()),this.unsubscribe.push(f.R.subscribe(a=>{this.token=a.token,this.sendTokenAmount=a.sendTokenAmount,this.receiverAddress=a.receiverAddress,this.receiverProfileName=a.receiverProfileName,this.loading=a.loading}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return this.getMessage(),(0,d.qy)` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex class="inputContainer" gap="2" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
        ></w3m-input-token>
        <wui-icon-box size="md" variant="secondary" icon="arrowBottom"></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["4","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="accent-primary"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchBalances(){await f.R.fetchTokenBalance(),f.R.fetchNetworkBalance()}async fetchNetworkPrice(){await g.GN.getNetworkTokenPrice()}onButtonClick(){h.I.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!i.w.isAddress(this.receiverAddress,j.W.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price&&(this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")),this.token||(this.message="Select Token")}};D.styles=B,C([(0,e.wk)()],D.prototype,"token",void 0),C([(0,e.wk)()],D.prototype,"sendTokenAmount",void 0),C([(0,e.wk)()],D.prototype,"receiverAddress",void 0),C([(0,e.wk)()],D.prototype,"receiverProfileName",void 0),C([(0,e.wk)()],D.prototype,"loading",void 0),C([(0,e.wk)()],D.prototype,"message",void 0),D=C([(0,k.EM)("w3m-wallet-send-view")],D),c(79550),c(73363),c(61016);let E=(0,k.AH)`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:a})=>a["3"]};
  }
`;var F=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let G=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalances=f.R.state.tokenBalances,this.search="",this.onDebouncedSearch=i.w.debounce(a=>{this.search=a}),this.fetchBalancesAndNetworkPrice(),this.unsubscribe.push(f.R.subscribe(a=>{this.tokenBalances=a.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return(0,d.qy)`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}async fetchBalancesAndNetworkPrice(){this.tokenBalances&&this.tokenBalances?.length!==0||(await this.fetchBalances(),await this.fetchNetworkPrice())}async fetchBalances(){await f.R.fetchTokenBalance(),f.R.fetchNetworkBalance()}async fetchNetworkPrice(){await g.GN.getNetworkTokenPrice()}templateSearchInput(){return(0,d.qy)`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalances?.filter(a=>a.chainId===j.W.state.activeCaipNetwork?.caipNetworkId),this.search?this.filteredTokens=this.tokenBalances?.filter(a=>a.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,(0,d.qy)`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(a=>(0,d.qy)`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,a)}
                    ?clickable=${!0}
                    tokenName=${a.name}
                    tokenImageUrl=${a.iconUrl}
                    tokenAmount=${a.quantity.numeric}
                    tokenValue=${a.value}
                    tokenCurrency=${a.symbol}
                  ></wui-list-token>`):(0,d.qy)`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                  <wui-text variant="lg-regular" align="center" color="secondary">
                    Your tokens will appear here
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){h.I.push("OnRampProviders")}onInputChange(a){this.onDebouncedSearch(a.detail)}handleTokenClick(a){f.R.setToken(a),f.R.setTokenAmount(void 0),h.I.goBack()}};G.styles=E,F([(0,e.wk)()],G.prototype,"tokenBalances",void 0),F([(0,e.wk)()],G.prototype,"tokens",void 0),F([(0,e.wk)()],G.prototype,"filteredTokens",void 0),F([(0,e.wk)()],G.prototype,"search",void 0),G=F([(0,k.EM)("w3m-wallet-send-select-token-view")],G);var H=c(33504),I=c(26641),J=c(23799);c(19700),c(67332),c(29272),c(64222),c(79670);let K=(0,u.AH)`
  :host {
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${({spacing:a})=>a[1]};
    border-radius: ${({borderRadius:a})=>a[32]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    padding: ${({spacing:a})=>a[1]};
    padding-left: ${({spacing:a})=>a[2]};
  }

  wui-avatar,
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:a})=>a[16]};
  }

  wui-icon {
    border-radius: ${({borderRadius:a})=>a[16]};
  }
`;var L=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let M=class extends d.WF{constructor(){super(...arguments),this.text=""}render(){return(0,d.qy)`<wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.address?(0,d.qy)`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?(0,d.qy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,d.qy)`<wui-icon size="lg" color="inverse" name="networkPlaceholder"></wui-icon>`}};M.styles=[s.W5,s.fD,K],L([(0,e.MZ)({type:String})],M.prototype,"text",void 0),L([(0,e.MZ)({type:String})],M.prototype,"address",void 0),L([(0,e.MZ)({type:String})],M.prototype,"imageSrc",void 0),M=L([(0,t.E)("wui-preview-item")],M);var N=c(88693),O=c(22734),P=c(40190);let Q=(0,u.AH)`
  :host {
    display: flex;
    padding: ${({spacing:a})=>a[4]} ${({spacing:a})=>a[3]};
    width: 100%;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[4]};
  }

  wui-image {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:a})=>a[16]};
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }
`;var R=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let S=class extends d.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return(0,d.qy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="primary"> ${this.textTitle} </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?(0,d.qy)`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?(0,d.qy)` <wui-text variant="md-regular" color="secondary"> ${this.textValue} </wui-text>`:(0,d.qy)`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};S.styles=[s.W5,s.fD,Q],R([(0,e.MZ)()],S.prototype,"imageSrc",void 0),R([(0,e.MZ)()],S.prototype,"textTitle",void 0),R([(0,e.MZ)()],S.prototype,"textValue",void 0),S=R([(0,t.E)("wui-list-content")],S);let T=(0,k.AH)`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: ${({spacing:a})=>a["1"]};
    border-radius: ${({borderRadius:a})=>a["5"]};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    padding: ${({spacing:a})=>a["3"]} ${({spacing:a})=>a["2"]}
      ${({spacing:a})=>a["2"]} ${({spacing:a})=>a["2"]};
  }

  wui-list-content {
    width: -webkit-fill-available !important;
  }

  wui-text {
    padding: 0 ${({spacing:a})=>a["2"]};
  }

  wui-flex {
    margin-top: ${({spacing:a})=>a["2"]};
  }

  .network {
    cursor: pointer;
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-1"]};
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid ${({tokens:a})=>a.core.textAccentPrimary};
    background-color: ${({tokens:a})=>a.core.glass010};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent010};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent010};
    box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent010};
  }

  .network:hover {
    background-color: ${({tokens:a})=>a.core.glass010};
  }

  .network:active {
    background-color: ${({tokens:a})=>a.core.glass010};
  }
`;var U=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let V=class extends d.WF{render(){return(0,d.qy)` <wui-text variant="sm-regular" color="secondary">Details</wui-text>
      <wui-flex flexDirection="column" gap="1">
        <wui-list-content
          textTitle="Address"
          textValue=${k.Zv.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?(0,d.qy)` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,O.J)(P.$.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(a){a&&h.I.push("Networks",{network:a})}};V.styles=T,U([(0,e.MZ)()],V.prototype,"receiverAddress",void 0),U([(0,e.MZ)({type:Object})],V.prototype,"caipNetwork",void 0),V=U([(0,k.EM)("w3m-wallet-send-details")],V);let W=(0,k.AH)`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:a})=>a["20"]};
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:a})=>a["4"]} !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:a})=>a["4"]} !important;
  }
`;var X=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let Y=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.token=f.R.state.token,this.sendTokenAmount=f.R.state.sendTokenAmount,this.receiverAddress=f.R.state.receiverAddress,this.receiverProfileName=f.R.state.receiverProfileName,this.receiverProfileImageUrl=f.R.state.receiverProfileImageUrl,this.caipNetwork=j.W.state.activeCaipNetwork,this.loading=f.R.state.loading,this.unsubscribe.push(f.R.subscribe(a=>{this.token=a.token,this.sendTokenAmount=a.sendTokenAmount,this.receiverAddress=a.receiverAddress,this.receiverProfileName=a.receiverProfileName,this.receiverProfileImageUrl=a.receiverProfileImageUrl,this.loading=a.loading}),j.W.subscribeKey("activeCaipNetwork",a=>this.caipNetwork=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return(0,d.qy)` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex gap="2" flexDirection="column" .padding=${["0","2","0","2"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="01">
            <wui-text variant="sm-regular" color="secondary">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?k.Zv.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="default" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="sm-regular" color="secondary">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?k.Zv.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):k.Zv.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["6","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="1" .padding=${["3","0","0","0"]}>
          <wui-icon size="sm" color="default" name="warningCircle"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="3" .padding=${["4","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="accent-primary"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let a=this.token.price*this.sendTokenAmount;return(0,d.qy)`<wui-text variant="md-regular" color="primary"
        >$${a.toFixed(2)}</wui-text
      >`}return null}async onSendClick(){if(!this.sendTokenAmount||!this.receiverAddress)return void H.P.showError("Please enter a valid amount and receiver address");try{await f.R.sendToken(),H.P.showSuccess("Transaction started"),h.I.replace("Account")}catch(b){H.P.showError("Failed to send transaction. Please try again."),console.error("SendController:sendToken - failed to send transaction",b);let a=b instanceof Error?b.message:"Unknown error";I.E.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:a,isSmartAccount:(0,J.lj)(j.W.state.activeChain)===N.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.token?.symbol||"",amount:this.sendTokenAmount,network:j.W.state.activeCaipNetwork?.caipNetworkId||""}})}}onCancelClick(){h.I.goBack()}};Y.styles=W,X([(0,e.wk)()],Y.prototype,"token",void 0),X([(0,e.wk)()],Y.prototype,"sendTokenAmount",void 0),X([(0,e.wk)()],Y.prototype,"receiverAddress",void 0),X([(0,e.wk)()],Y.prototype,"receiverProfileName",void 0),X([(0,e.wk)()],Y.prototype,"receiverProfileImageUrl",void 0),X([(0,e.wk)()],Y.prototype,"caipNetwork",void 0),X([(0,e.wk)()],Y.prototype,"loading",void 0),Y=X([(0,k.EM)("w3m-wallet-send-preview-view")],Y)}};
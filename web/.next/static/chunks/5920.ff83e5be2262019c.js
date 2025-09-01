"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5920],{15920:(e,t,a)=>{a.r(t),a.d(t,{W3mPayLoadingView:()=>j,W3mPayView:()=>V,arbitrumUSDC:()=>eo,arbitrumUSDT:()=>ed,baseETH:()=>ea,baseSepoliaETH:()=>er,baseUSDC:()=>en,ethereumUSDC:()=>es,ethereumUSDT:()=>eu,getExchanges:()=>J,getIsPaymentInProgress:()=>ee,getPayError:()=>Q,getPayResult:()=>Z,openPay:()=>z,optimismUSDC:()=>ei,optimismUSDT:()=>em,pay:()=>X,polygonUSDC:()=>ec,polygonUSDT:()=>ep,solanaSOL:()=>eh,solanaUSDC:()=>el,solanaUSDT:()=>ey});var n=a(83138),r=a(98410),s=a(78964),i=a(58051),o=a(93481),c=a(81701),l=a(12319),u=a(65374),m=a(97418),d=a(36211);a(41028),a(40575),a(77237),a(71596),a(51568),a(80205),a(26670),a(75484),a(56975),a(39752),a(41163),a(1805);var p=a(1220),y=a(98866),h=a(45553),w=a(65103),g=a(70417),E=a(67869),I=a(17839);let N={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS"},A={[N.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[N.INVALID_RECIPIENT]:"Invalid recipient address",[N.INVALID_ASSET]:"Invalid asset specified",[N.INVALID_AMOUNT]:"Invalid payment amount",[N.UNKNOWN_ERROR]:"Unknown payment error occurred",[N.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[N.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[N.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[N.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[N.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[N.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[N.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status"};class f extends Error{get message(){return A[this.code]}constructor(e,t){super(A[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,f)}}var P=a(55480);class _ extends Error{}async function T(e,t){let a=function(){let e=P.H.getSnapshot().projectId;return`https://rpc.walletconnect.org/v1/json-rpc?projectId=${e}`}(),{sdkType:n,sdkVersion:r,projectId:s}=P.H.getSnapshot(),i={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:n,sv:r,projectId:s}},o=await fetch(a,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}),c=await o.json();if(c.error)throw new _(c.error.message);return c}async function S(e){return(await T("reown_getExchanges",e)).result}async function x(e){return(await T("reown_getExchangePayUrl",e)).result}async function C(e){return(await T("reown_getExchangeBuyStatus",e)).result}let b=["eip155","solana"],k={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function v(e,t){let{chainNamespace:a,chainId:n}=w.C.parseCaipNetworkId(e),r=k[a];if(!r)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${a}`);let s=r.native.assetNamespace,i=r.native.assetReference;"native"!==t&&(s=r.defaultTokenNamespace,i=t);let o=`${a}:${n}`;return`${o}/${s}:${i}`}var U=a(425);async function R(e){let{paymentAssetNetwork:t,activeCaipNetwork:a,approvedCaipNetworkIds:n,requestedCaipNetworks:r}=e,s=l.w.sortRequestedNetworks(n,r).find(e=>e.caipNetworkId===t);if(!s)throw new f(N.INVALID_PAYMENT_CONFIG);if(s.caipNetworkId===a.caipNetworkId)return;let i=o.W.getNetworkProp("supportsAllNetworks",s.chainNamespace);if(!(n?.includes(s.caipNetworkId)||i))throw new f(N.INVALID_PAYMENT_CONFIG);try{await o.W.switchActiveNetwork(s)}catch(e){throw new f(N.GENERIC_PAYMENT_ERROR,e)}}async function D(e,t,a){if(t!==h.o.CHAIN.EVM)throw new f(N.INVALID_CHAIN_NAMESPACE);if(!a.fromAddress)throw new f(N.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");let n="string"==typeof a.amount?parseFloat(a.amount):a.amount;if(isNaN(n))throw new f(N.INVALID_PAYMENT_CONFIG);let r=e.metadata?.decimals??18,s=m.x.parseUnits(n.toString(),r);if("bigint"!=typeof s)throw new f(N.GENERIC_PAYMENT_ERROR);return await m.x.sendTransaction({chainNamespace:t,to:a.recipient,address:a.fromAddress,value:s,data:"0x"})??void 0}async function O(e,t){if(!t.fromAddress)throw new f(N.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");let a=e.asset,n=t.recipient,r=Number(e.metadata.decimals),s=m.x.parseUnits(t.amount.toString(),r);if(void 0===s)throw new f(N.GENERIC_PAYMENT_ERROR);return await m.x.writeContract({fromAddress:t.fromAddress,tokenAddress:a,args:[n,s],method:"transfer",abi:U.v.getERC20Abi(a),chainNamespace:h.o.CHAIN.EVM})??void 0}async function L(e,t){if(e!==h.o.CHAIN.SOLANA)throw new f(N.INVALID_CHAIN_NAMESPACE);if(!t.fromAddress)throw new f(N.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");let a="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(a)||a<=0)throw new f(N.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!I.A.getProvider(e))throw new f(N.GENERIC_PAYMENT_ERROR,"No Solana provider available.");let n=await m.x.sendTransaction({chainNamespace:h.o.CHAIN.SOLANA,to:t.recipient,value:a,tokenMint:t.tokenMint});if(!n)throw new f(N.GENERIC_PAYMENT_ERROR,"Transaction failed.");return n}catch(e){if(e instanceof f)throw e;throw new f(N.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${e}`)}}let M="unknown",G=(0,p.BX)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),Y={state:G,subscribe:e=>(0,p.B1)(G,()=>e(G)),subscribeKey:(e,t)=>(0,y.u$)(G,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.subscribeEvents(),this.initializeAnalytics(),G.isConfigured=!0,g.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:G.exchanges,configuration:{network:G.paymentAsset.network,asset:G.paymentAsset.asset,recipient:G.recipient,amount:G.amount}}}),await c.W.open({view:"Pay"})},resetState(){G.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},G.recipient="0x0",G.amount=0,G.isConfigured=!1,G.error=null,G.isPaymentInProgress=!1,G.isLoading=!1,G.currentPayment=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new f(N.INVALID_PAYMENT_CONFIG);try{G.paymentAsset=e.paymentAsset,G.recipient=e.recipient,G.amount=e.amount,G.openInNewTab=e.openInNewTab??!0,G.redirectUrl=e.redirectUrl,G.payWithExchange=e.payWithExchange,G.error=null}catch(e){throw new f(N.INVALID_PAYMENT_CONFIG,e.message)}},getPaymentAsset:()=>G.paymentAsset,getExchanges:()=>G.exchanges,async fetchExchanges(){try{G.isLoading=!0;let e=await S({page:0,asset:v(G.paymentAsset.network,G.paymentAsset.asset),amount:G.amount.toString()});G.exchanges=e.exchanges.slice(0,2)}catch(e){throw u.P.showError(A.UNABLE_TO_GET_EXCHANGES),new f(N.UNABLE_TO_GET_EXCHANGES)}finally{G.isLoading=!1}},async getAvailableExchanges(e){try{let t=e?.asset&&e?.network?v(e.network,e.asset):void 0;return await S({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(e){throw new f(N.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(e,t,a=!1){try{let n=Number(t.amount),r=await x({exchangeId:e,asset:v(t.network,t.asset),amount:n.toString(),recipient:`${t.network}:${t.recipient}`});return g.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e},headless:a}}),a&&(this.initiatePayment(),g.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:G.paymentId||M,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e}}})),r}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new f(N.ASSET_NOT_SUPPORTED);throw Error(e.message)}},async openPayUrl(e,t,a=!1){try{let n=await this.getPayUrl(e.exchangeId,t,a);if(!n)throw new f(N.UNABLE_TO_GET_PAY_URL);let r=e.openInNewTab??!0;return l.w.openHref(n.url,r?"_blank":"_self"),n}catch(e){throw e instanceof f?G.error=e.message:G.error=A.GENERIC_PAYMENT_ERROR,new f(N.UNABLE_TO_GET_PAY_URL)}},subscribeEvents(){G.isConfigured||(m.x.subscribeKey("connections",e=>{e.size>0&&this.handlePayment()}),i.U.subscribeKey("caipAddress",e=>{let t=m.x.hasAnyConnection(h.o.CONNECTOR_ID.WALLET_CONNECT);e&&(t?setTimeout(()=>{this.handlePayment()},100):this.handlePayment())}))},async handlePayment(){G.currentPayment={type:"wallet",status:"IN_PROGRESS"};let e=i.U.state.caipAddress;if(!e)return;let{chainId:t,address:a}=w.C.parseCaipAddress(e),n=o.W.state.activeChain;if(!a||!t||!n||!I.A.getProvider(n))return;let r=o.W.state.activeCaipNetwork;if(r&&!G.isPaymentInProgress)try{this.initiatePayment();let e=o.W.getAllRequestedCaipNetworks(),t=o.W.getAllApprovedCaipNetworkIds();switch(await R({paymentAssetNetwork:G.paymentAsset.network,activeCaipNetwork:r,approvedCaipNetworkIds:t,requestedCaipNetworks:e}),await c.W.open({view:"PayLoading"}),n){case h.o.CHAIN.EVM:"native"===G.paymentAsset.asset&&(G.currentPayment.result=await D(G.paymentAsset,n,{recipient:G.recipient,amount:G.amount,fromAddress:a})),G.paymentAsset.asset.startsWith("0x")&&(G.currentPayment.result=await O(G.paymentAsset,{recipient:G.recipient,amount:G.amount,fromAddress:a})),G.currentPayment.status="SUCCESS";break;case h.o.CHAIN.SOLANA:G.currentPayment.result=await L(n,{recipient:G.recipient,amount:G.amount,fromAddress:a,tokenMint:"native"===G.paymentAsset.asset?void 0:G.paymentAsset.asset}),G.currentPayment.status="SUCCESS";break;default:throw new f(N.INVALID_CHAIN_NAMESPACE)}}catch(e){e instanceof f?G.error=e.message:G.error=A.GENERIC_PAYMENT_ERROR,G.currentPayment.status="FAILED",u.P.showError(G.error)}finally{G.isPaymentInProgress=!1}},getExchangeById:e=>G.exchanges.find(t=>t.id===e),validatePayConfig(e){let{paymentAsset:t,recipient:a,amount:n}=e;if(!t)throw new f(N.INVALID_PAYMENT_CONFIG);if(!a)throw new f(N.INVALID_RECIPIENT);if(!t.asset)throw new f(N.INVALID_ASSET);if(null==n||n<=0)throw new f(N.INVALID_AMOUNT)},handlePayWithWallet(){let e=i.U.state.caipAddress;if(!e)return void E.I.push("Connect");let{chainId:t,address:a}=w.C.parseCaipAddress(e),n=o.W.state.activeChain;if(!a||!t||!n)return void E.I.push("Connect");this.handlePayment()},async handlePayWithExchange(e){try{G.currentPayment={type:"exchange",exchangeId:e};let{network:t,asset:a}=G.paymentAsset,n={network:t,asset:a,amount:G.amount,recipient:G.recipient},r=await this.getPayUrl(e,n);if(!r)throw new f(N.UNABLE_TO_INITIATE_PAYMENT);return G.currentPayment.sessionId=r.sessionId,G.currentPayment.status="IN_PROGRESS",G.currentPayment.exchangeId=e,this.initiatePayment(),{url:r.url,openInNewTab:G.openInNewTab}}catch(e){return e instanceof f?G.error=e.message:G.error=A.GENERIC_PAYMENT_ERROR,G.isPaymentInProgress=!1,u.P.showError(G.error),null}},async getBuyStatus(e,t){try{let a=await C({sessionId:t,exchangeId:e});return("SUCCESS"===a.status||"FAILED"===a.status)&&g.E.sendEvent({type:"track",event:"SUCCESS"===a.status?"PAY_SUCCESS":"PAY_ERROR",properties:{source:"pay",paymentId:G.paymentId||M,configuration:{network:G.paymentAsset.network,asset:G.paymentAsset.asset,recipient:G.recipient,amount:G.amount},currentPayment:{type:"exchange",exchangeId:G.currentPayment?.exchangeId,sessionId:G.currentPayment?.sessionId,result:a.txHash}}}),a}catch(e){throw new f(N.UNABLE_TO_GET_BUY_STATUS)}},async updateBuyStatus(e,t){try{let a=await this.getBuyStatus(e,t);G.currentPayment&&(G.currentPayment.status=a.status,G.currentPayment.result=a.txHash),("SUCCESS"===a.status||"FAILED"===a.status)&&(G.isPaymentInProgress=!1)}catch(e){throw new f(N.UNABLE_TO_GET_BUY_STATUS)}},initiatePayment(){G.isPaymentInProgress=!0,G.paymentId=crypto.randomUUID()},initializeAnalytics(){G.analyticsSet||(G.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{if(G.currentPayment?.status&&"UNKNOWN"!==G.currentPayment.status){let e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[G.currentPayment.status];g.E.sendEvent({type:"track",event:e,properties:{source:"pay",paymentId:G.paymentId||M,configuration:{network:G.paymentAsset.network,asset:G.paymentAsset.asset,recipient:G.recipient,amount:G.amount},currentPayment:{type:G.currentPayment.type,exchangeId:G.currentPayment.exchangeId,sessionId:G.currentPayment.sessionId,result:G.currentPayment.result}}})}}))}},W=(0,n.AH)`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }
`;var $=function(e,t,a,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(i=(s<3?r(i):s>3?r(t,a,i):r(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i};let V=class extends n.WF{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=Y.state.exchanges,this.isLoading=Y.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=i.U.state.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(Y.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(Y.subscribeKey("isLoading",e=>this.isLoading=e)),this.unsubscribe.push(i.U.subscribe(e=>this.connectedWalletInfo=e.connectedWalletInfo)),Y.fetchExchanges()}get isWalletConnected(){return"connected"===i.U.state.status}render(){return(0,n.qy)`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="3">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){let e=Y.getPaymentAsset();this.networkName=e.network,this.tokenSymbol=e.metadata.symbol,this.amount=Y.state.amount.toString()}renderPayWithWallet(){return!function(e){let{chainNamespace:t}=w.C.parseCaipNetworkId(e);return b.includes(t)}(this.networkName)?(0,n.qy)``:(0,n.qy)`<wui-flex flexDirection="column" gap="3">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`}renderPaymentHeader(){let e=this.networkName;if(this.networkName){let t=o.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.networkName);t&&(e=t.name)}return(0,n.qy)`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="2">
          <wui-text variant="h1-regular" color="primary">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="1">
            <wui-text variant="md-medium" color="primary">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${e?(0,n.qy)`
                  <wui-text variant="sm-medium" color="secondary">
                    on ${e}
                  </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){let e=this.connectedWalletInfo?.name||"connected wallet";return(0,n.qy)`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        ?fullSize=${!0}
        ?rounded=${!0}
        data-testid="wallet-payment-option"
        imageSrc=${(0,s.J)(this.connectedWalletInfo?.icon)}
      >
        <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
      </wui-list-item>

      <wui-list-item
        icon="power"
        ?rounded=${!0}
        iconColor="error"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return(0,n.qy)`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="wallet"
      ?rounded=${!0}
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="inherit">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?(0,n.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:0===this.exchanges.length?(0,n.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map(e=>(0,n.qy)`
        <wui-list-item
          @click=${()=>this.onExchangePayment(e.id)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
          ?loading=${this.loadingExchangeId===e.id}
          imageSrc=${(0,s.J)(e.imageUrl)}
        >
          <wui-flex alignItems="center" gap="3">
            <wui-text flexGrow="1" variant="md-medium" color="inherit"
              >Pay with ${e.name} <wui-spinner size="sm" color="secondary"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){Y.handlePayWithWallet()}async onExchangePayment(e){try{this.loadingExchangeId=e;let t=await Y.handlePayWithExchange(e);t&&(await c.W.open({view:"PayLoading"}),l.w.openHref(t.url,t.openInNewTab?"_blank":"_self"))}catch(e){console.error("Failed to pay with exchange",e),u.P.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await m.x.disconnect()}catch{console.error("Failed to disconnect"),u.P.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}};V.styles=W,$([(0,r.wk)()],V.prototype,"amount",void 0),$([(0,r.wk)()],V.prototype,"tokenSymbol",void 0),$([(0,r.wk)()],V.prototype,"networkName",void 0),$([(0,r.wk)()],V.prototype,"exchanges",void 0),$([(0,r.wk)()],V.prototype,"isLoading",void 0),$([(0,r.wk)()],V.prototype,"loadingExchangeId",void 0),$([(0,r.wk)()],V.prototype,"connectedWalletInfo",void 0),V=$([(0,d.EM)("w3m-pay-view")],V);var B=a(45069),F=a(10899),H=a(14744);a(64731);let q=(0,n.AH)`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }
`;var K=function(e,t,a,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(i=(s<3?r(i):s>3?r(t,a,i):r(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i};let j=class extends n.WF{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=Y.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return(0,n.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["7","5","5","5"]}
        gap="9"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;default:Y.state.currentPayment?.type==="exchange"?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet")}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();default:return this.loaderTemplate()}}setupExchangeSubscription(){Y.state.currentPayment?.type==="exchange"&&(this.exchangeSubscription=setInterval(async()=>{let e=Y.state.currentPayment?.exchangeId,t=Y.state.currentPayment?.sessionId;e&&t&&(await Y.updateBuyStatus(e,t),Y.state.currentPayment?.status==="SUCCESS"&&clearInterval(this.exchangeSubscription))},4e3))}setupSubscription(){Y.subscribeKey("isPaymentInProgress",e=>{e||"in-progress"!==this.paymentState||(Y.state.error||!Y.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{"disconnected"!==m.x.state.status&&c.W.close()},3e3))}),Y.subscribeKey("error",e=>{e&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){let e=B.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4,a=this.getPaymentIcon();return(0,n.qy)`
      <wui-flex justifyContent="center" alignItems="center" style="position: relative;">
        ${a?(0,n.qy)`<wui-wallet-image size="lg" imageSrc=${a}></wui-wallet-image>`:null}
        <wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>
      </wui-flex>
    `}getPaymentIcon(){let e=Y.state.currentPayment;if(e){if("exchange"===e.type){let t=e.exchangeId;if(t){let e=Y.getExchangeById(t);return e?.imageUrl}}if("wallet"===e.type){let e=i.U.state.connectedWalletInfo?.icon;if(e)return e;let t=o.W.state.activeChain;if(!t)return;let a=F.a.getConnectorId(t);if(!a)return;let n=F.a.getConnectorById(a);if(!n)return;return H.$.getConnectorImage(n)}}}successTemplate(){return(0,n.qy)`<wui-icon size="xl" color="success" name="checkmark"></wui-icon>`}errorTemplate(){return(0,n.qy)`<wui-icon size="xl" color="error" name="close"></wui-icon>`}};async function z(e){return Y.handleOpenPay(e)}async function X(e,t=3e5){if(t<=0)throw new f(N.INVALID_PAYMENT_CONFIG,"Timeout must be greater than 0");try{await z(e)}catch(e){if(e instanceof f)throw e;throw new f(N.UNABLE_TO_INITIATE_PAYMENT,e.message)}return new Promise((e,a)=>{var n;let r=!1,s=setTimeout(()=>{r||(r=!0,c(),a(new f(N.GENERIC_PAYMENT_ERROR,"Payment timeout")))},t);function i(){if(r)return;let t=Y.state.currentPayment,a=Y.state.error,n=Y.state.isPaymentInProgress;if(t?.status==="SUCCESS"){r=!0,c(),clearTimeout(s),e({success:!0,result:t.result});return}if(t?.status==="FAILED"){r=!0,c(),clearTimeout(s),e({success:!1,error:a||"Payment failed"});return}!a||n||t||(r=!0,c(),clearTimeout(s),e({success:!1,error:a}))}let o=et("currentPayment",i),c=(n=[o,et("error",i),et("isPaymentInProgress",i)],()=>{n.forEach(e=>{try{e()}catch{}})});i()})}function J(){return Y.getExchanges()}function Z(){return Y.state.currentPayment?.result}function Q(){return Y.state.error}function ee(){return Y.state.isPaymentInProgress}function et(e,t){return Y.subscribeKey(e,t)}j.styles=q,K([(0,r.wk)()],j.prototype,"loadingMessage",void 0),K([(0,r.wk)()],j.prototype,"subMessage",void 0),K([(0,r.wk)()],j.prototype,"paymentState",void 0),j=K([(0,d.EM)("w3m-pay-loading-view")],j);let ea={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},en={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},er={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},es={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ei={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eo={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ec={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},el={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eu={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},em={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ed={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ep={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ey={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},eh={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}},80205:(e,t,a)=>{a(45166)}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7448],{7448:(e,t,a)=>{a.r(t),a.d(t,{W3mDepositFromExchangeSelectAssetView:()=>f,W3mDepositFromExchangeView:()=>g});var s=a(83138),n=a(98410),r=a(93481),i=a(92101),o=a(67869),c=a(65374),u=a(58051),m=a(97418),l=a(36211);a(41028),a(40575),a(51568),a(80205),a(26670),a(41699),a(41163);let d=(0,l.AH)`
  .amount-input-container {
    border-radius: ${({borderRadius:e})=>e["5"]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom: 1px solid ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: 30px;
  }
`;var p=function(e,t,a,s){var n,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,s);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(i=(r<3?n(i):r>3?n(t,a,i):n(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};let h=[10,50,100],g=class extends s.WF{constructor(){super(),this.unsubscribe=[],this.network=r.W.state.activeCaipNetwork,this.exchanges=i.g.state.exchanges,this.isLoading=i.g.state.isLoading,this.amount=i.g.state.amount,this.tokenAmount=i.g.state.tokenAmount,this.priceLoading=i.g.state.priceLoading,this.isPaymentInProgress=i.g.state.isPaymentInProgress,this.currentPayment=i.g.state.currentPayment,this.paymentId=i.g.state.paymentId,this.paymentAsset=i.g.state.paymentAsset,this.unsubscribe.push(r.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.setDefaultPaymentAsset()}),i.g.subscribe(e=>{this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment,this.paymentAsset=e.paymentAsset,e.isPaymentInProgress&&e.currentPayment?.exchangeId&&e.currentPayment?.sessionId&&e.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),i.g.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),await i.g.fetchExchanges()}render(){return(0,s.qy)`
      <wui-flex flexDirection="column" gap="2" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>(0,s.qy)`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(e=>(0,s.qy)`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="secondary">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`):(0,s.qy)`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return(0,s.qy)`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){return(0,s.qy)`
      <wui-flex flexDirection="column" gap="3" .padding=${["0","3","3","3"]} class="amount-input-container">
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>

          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${this.paymentAsset?.metadata.symbol||""}
            imageSrc=${this.paymentAsset?.metadata.iconUrl||""}
            @click=${()=>o.I.push("PayWithExchangeSelectAsset")}
            >
          </wui-token-button>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" justifyContent="center">
          <wui-flex alignItems="center" gap="1">
            <wui-text variant="h2-regular" color="secondary">${this.amount}</wui-text>
            <wui-text variant="md-regular" color="secondary">USD</wui-text>
          </wui-flex>
          ${this.tokenAmountTemplate()}
          </wui-flex>
          <wui-flex justifyContent="space-between" gap="2">
            ${h.map(e=>(0,s.qy)`<wui-button @click=${()=>this.onPresetAmountClick(e)} variant=${this.amount===e?"neutral-primary":"neutral-secondary"} size="sm" fullWidth>$${e}</wui-button>`)}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?(0,s.qy)`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:(0,s.qy)`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${this.paymentAsset?.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(e){if(!this.amount)return void c.P.showError("Please enter an amount");await i.g.handlePayWithExchange(e.id)}handlePaymentInProgress(){let e=r.W.state.activeChain;this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(i.g.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(t=>{"SUCCESS"===t.status?(c.P.showSuccess("Deposit completed"),e&&(u.U.fetchTokenBalance(),m.x.updateBalance(e))):"FAILED"===t.status&&c.P.showError("Deposit failed")}),c.P.showLoading("Deposit in progress..."),o.I.replace("Account"))}onPresetAmountClick(e){i.g.setAmount(e)}async getPaymentAssets(){this.network&&await i.g.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){let e=await i.g.getAssetsForNetwork(this.network.caipNetworkId);e[0]&&i.g.setPaymentAsset(e[0])}}};g.styles=d,p([(0,n.wk)()],g.prototype,"network",void 0),p([(0,n.wk)()],g.prototype,"exchanges",void 0),p([(0,n.wk)()],g.prototype,"isLoading",void 0),p([(0,n.wk)()],g.prototype,"amount",void 0),p([(0,n.wk)()],g.prototype,"tokenAmount",void 0),p([(0,n.wk)()],g.prototype,"priceLoading",void 0),p([(0,n.wk)()],g.prototype,"isPaymentInProgress",void 0),p([(0,n.wk)()],g.prototype,"currentPayment",void 0),p([(0,n.wk)()],g.prototype,"paymentId",void 0),p([(0,n.wk)()],g.prototype,"paymentAsset",void 0),g=p([(0,l.EM)("w3m-deposit-from-exchange-view")],g);var y=a(12319);a(77237),a(90721),a(40284),a(48352),a(64501),a(39752);let w=(0,l.AH)`
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
    border-radius: ${({borderRadius:e})=>e["3"]};
  }
`;var x=function(e,t,a,s){var n,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,s);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(i=(r<3?n(i):r>3?n(t,a,i):n(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};let f=class extends s.WF{constructor(){super(),this.unsubscribe=[],this.assets=i.g.state.assets,this.search="",this.onDebouncedSearch=y.w.debounce(e=>{this.search=e}),this.unsubscribe.push(i.g.subscribe(e=>{this.assets=e.assets}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,s.qy)`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return(0,s.qy)`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let e=this.assets.filter(e=>e.metadata.name.toLowerCase().includes(this.search.toLowerCase())),t=e.length>0;return(0,s.qy)`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${t?e.map(e=>(0,s.qy)`<wui-list-item
                    .imageSrc=${e.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,e)}
                  >
                    <wui-text variant="md-medium" color="primary">${e.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${e.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):(0,s.qy)`<wui-flex
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
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){o.I.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){i.g.setPaymentAsset(e),o.I.goBack()}};f.styles=w,x([(0,n.wk)()],f.prototype,"assets",void 0),x([(0,n.wk)()],f.prototype,"search",void 0),f=x([(0,l.EM)("w3m-deposit-from-exchange-select-asset-view")],f)},80205:(e,t,a)=>{a(45166)},92101:(e,t,a)=>{a.d(t,{g:()=>S});var s=a(1220),n=a(98866),r=a(71305),i=a(28977),o=a(12319),c=a(65103),u=a(55480);let m={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class l extends Error{}async function d(e,t){let a=function(){let{sdkType:e,sdkVersion:t,projectId:a}=u.H.getSnapshot(),s=new URL("https://rpc.walletconnect.org/v1/json-rpc");return s.searchParams.set("projectId",a),s.searchParams.set("st",e),s.searchParams.set("sv",t),s.searchParams.set("source","fund-wallet"),s.toString()}(),{projectId:s}=u.H.getSnapshot(),n={jsonrpc:"2.0",id:1,method:e,params:{...t||{},projectId:s}},r=await fetch(a,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}),i=await r.json();if(i.error)throw new l(i.error.message);return i}async function p(e){return(await d("reown_getExchanges",e)).result}async function h(e){return(await d("reown_getExchangePayUrl",e)).result}async function g(e){return(await d("reown_getExchangeBuyStatus",e)).result}function y(e,t){let{chainNamespace:a,chainId:s}=c.C.parseCaipNetworkId(e),n=m[a];if(!n)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${a}`);let r=n.native.assetNamespace,i=n.native.assetReference;"native"!==t&&(r=n.defaultTokenNamespace,i=t);let o=`${a}:${s}`;return`${o}/${r}:${i}`}let w={ethereumETH:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseETH:{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseUSDC:{network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},baseSepoliaETH:{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ethereumUSDC:{network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},arbitrumUSDC:{network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},polygonUSDC:{network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},solanaUSDC:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ethereumUSDT:{network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},optimismUSDT:{network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},arbitrumUSDT:{network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},polygonUSDT:{network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaUSDT:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaSOL:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}};var x=a(58051),f=a(44826),b=a(93481),k=a(70417),P=a(65374);let C={paymentAsset:null,amount:10,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},E=(0,s.BX)(C),S={state:E,subscribe:e=>(0,s.B1)(E,()=>e(E)),subscribeKey:(e,t)=>(0,n.u$)(E,e,t),resetState(){Object.assign(E,{...C})},async getAssetsForNetwork(e){let t=Object.values(w).filter(t=>t.network===e),a=await S.getAssetsImageAndPrice(t),s=t.map(e=>{let t="native"===e.asset?(0,r.K1)():`${e.network}:${e.asset}`,s=a.find(e=>e.fungibles?.[0]?.address?.toLowerCase()===t.toLowerCase());return{...e,price:s?.fungibles?.[0]?.price||1,metadata:{...e.metadata,iconUrl:s?.fungibles?.[0]?.iconUrl}}});return E.assets=s,s},async getAssetsImageAndPrice(e){let t=e.map(e=>"native"===e.asset?(0,r.K1)():`${e.network}:${e.asset}`);return await Promise.all(t.map(e=>f.T.fetchTokenPrice({addresses:[e]})))},getTokenAmount(){if(!E?.paymentAsset?.price)throw Error("Cannot get token price");return Number(new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:8}).format(E.amount/E.paymentAsset.price))},setAmount(e){E.amount=e,E.paymentAsset?.price&&(E.tokenAmount=S.getTokenAmount())},setPaymentAsset(e){E.paymentAsset=e},isPayWithExchangeEnabled:()=>u.H.state.remoteFeatures?.payWithExchange||u.H.state.remoteFeatures?.payments||u.H.state.features?.pay,isPayWithExchangeSupported:()=>S.isPayWithExchangeEnabled()&&b.W.state.activeCaipNetwork&&i.oU.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(b.W.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{let e=S.isPayWithExchangeSupported();if(!E.paymentAsset||!e){E.exchanges=[],E.isLoading=!1;return}E.isLoading=!0;let t=await p({page:0,asset:y(E.paymentAsset.network,E.paymentAsset.asset),amount:E.amount.toString()});E.exchanges=t.exchanges.slice(0,2)}catch(e){throw P.P.showError("Unable to get exchanges"),Error("Unable to get exchanges")}finally{E.isLoading=!1}},async getPayUrl(e,t){try{let a=Number(t.amount),s=await h({exchangeId:e,asset:y(t.network,t.asset),amount:a.toString(),recipient:`${t.network}:${t.recipient}`});return k.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:e},source:"fund-from-exchange",headless:!1}}),s}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw Error("Asset not supported");throw Error(e.message)}},async handlePayWithExchange(e){try{if(!x.U.state.address)throw Error("No account connected");if(!E.paymentAsset)throw Error("No payment asset selected");let t=o.w.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!t)throw Error("Could not create popup window");E.isPaymentInProgress=!0,E.paymentId=crypto.randomUUID(),E.currentPayment={type:"exchange",exchangeId:e};let{network:a,asset:s}=E.paymentAsset,n={network:a,asset:s,amount:E.tokenAmount,recipient:x.U.state.address},r=await S.getPayUrl(e,n);if(!r){try{t.close()}catch(e){console.error("Unable to close popup window",e)}throw Error("Unable to initiate payment")}E.currentPayment.sessionId=r.sessionId,E.currentPayment.status="IN_PROGRESS",E.currentPayment.exchangeId=e,t.location.href=r.url}catch(e){E.error="Unable to initiate payment",P.P.showError(E.error)}},async waitUntilComplete({exchangeId:e,sessionId:t,paymentId:a,retries:s=20}){let n=await S.getBuyStatus(e,t,a);if("SUCCESS"===n.status||"FAILED"===n.status)return n;if(0===s)throw Error("Unable to get deposit status");return await new Promise(e=>{setTimeout(e,5e3)}),S.waitUntilComplete({exchangeId:e,sessionId:t,paymentId:a,retries:s-1})},async getBuyStatus(e,t,a){try{if(!E.currentPayment)throw Error("No current payment");let s=await g({sessionId:t,exchangeId:e});return E.currentPayment.status=s.status,("SUCCESS"===s.status||"FAILED"===s.status)&&(E.currentPayment.result=s.txHash,E.isPaymentInProgress=!1,k.E.sendEvent({type:"track",event:"SUCCESS"===s.status?"PAY_SUCCESS":"PAY_ERROR",properties:{source:"fund-from-exchange",paymentId:a,configuration:{network:E.paymentAsset?.network||"",asset:E.paymentAsset?.asset||"",recipient:x.U.state.address||"",amount:E.amount},currentPayment:{type:"exchange",exchangeId:E.currentPayment?.exchangeId,sessionId:E.currentPayment?.sessionId,result:s.txHash}}})),s}catch(e){return{status:"UNKNOWN",txHash:""}}},reset(){E.currentPayment=void 0,E.isPaymentInProgress=!1,E.paymentId="",E.paymentAsset=null,E.amount=0,E.tokenAmount=0,E.priceLoading=!1,E.error=null,E.exchanges=[],E.isLoading=!1}}}}]);
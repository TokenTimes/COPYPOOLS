"use strict";exports.id=3446,exports.ids=[3446],exports.modules={89078:(a,b,c)=>{c.d(b,{g:()=>z});var d=c(26972),e=c(90062),f=c(23799),g=c(851),h=c(13295),i=c(63363),j=c(20828);let k={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class l extends Error{}async function m(a,b){let c=function(){let{sdkType:a,sdkVersion:b,projectId:c}=j.H.getSnapshot(),d=new URL("https://rpc.walletconnect.org/v1/json-rpc");return d.searchParams.set("projectId",c),d.searchParams.set("st",a),d.searchParams.set("sv",b),d.searchParams.set("source","fund-wallet"),d.toString()}(),{projectId:d}=j.H.getSnapshot(),e={jsonrpc:"2.0",id:1,method:a,params:{...b||{},projectId:d}},f=await fetch(c,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),g=await f.json();if(g.error)throw new l(g.error.message);return g}async function n(a){return(await m("reown_getExchanges",a)).result}async function o(a){return(await m("reown_getExchangePayUrl",a)).result}async function p(a){return(await m("reown_getExchangeBuyStatus",a)).result}function q(a,b){let{chainNamespace:c,chainId:d}=i.C.parseCaipNetworkId(a),e=k[c];if(!e)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${c}`);let f=e.native.assetNamespace,g=e.native.assetReference;"native"!==b&&(f=e.defaultTokenNamespace,g=b);let h=`${c}:${d}`;return`${h}/${f}:${g}`}let r={ethereumETH:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseETH:{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseUSDC:{network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},baseSepoliaETH:{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ethereumUSDC:{network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},arbitrumUSDC:{network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},polygonUSDC:{network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},solanaUSDC:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ethereumUSDT:{network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},optimismUSDT:{network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},arbitrumUSDT:{network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},polygonUSDT:{network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaUSDT:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaSOL:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}};var s=c(84177),t=c(88912),u=c(57339),v=c(26641),w=c(33504);let x={paymentAsset:null,amount:10,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},y=(0,d.BX)(x),z={state:y,subscribe:a=>(0,d.B1)(y,()=>a(y)),subscribeKey:(a,b)=>(0,e.u$)(y,a,b),resetState(){Object.assign(y,{...x})},async getAssetsForNetwork(a){let b=Object.values(r).filter(b=>b.network===a),c=await z.getAssetsImageAndPrice(b),d=b.map(a=>{let b="native"===a.asset?(0,f.K1)():`${a.network}:${a.asset}`,d=c.find(a=>a.fungibles?.[0]?.address?.toLowerCase()===b.toLowerCase());return{...a,price:d?.fungibles?.[0]?.price||1,metadata:{...a.metadata,iconUrl:d?.fungibles?.[0]?.iconUrl}}});return y.assets=d,d},async getAssetsImageAndPrice(a){let b=a.map(a=>"native"===a.asset?(0,f.K1)():`${a.network}:${a.asset}`);return await Promise.all(b.map(a=>t.T.fetchTokenPrice({addresses:[a]})))},getTokenAmount(){if(!y?.paymentAsset?.price)throw Error("Cannot get token price");return Number(new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:8}).format(y.amount/y.paymentAsset.price))},setAmount(a){y.amount=a,y.paymentAsset?.price&&(y.tokenAmount=z.getTokenAmount())},setPaymentAsset(a){y.paymentAsset=a},isPayWithExchangeEnabled:()=>j.H.state.remoteFeatures?.payWithExchange||j.H.state.remoteFeatures?.payments||j.H.state.features?.pay,isPayWithExchangeSupported:()=>z.isPayWithExchangeEnabled()&&u.W.state.activeCaipNetwork&&g.oU.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(u.W.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{let a=z.isPayWithExchangeSupported();if(!y.paymentAsset||!a){y.exchanges=[],y.isLoading=!1;return}y.isLoading=!0;let b=await n({page:0,asset:q(y.paymentAsset.network,y.paymentAsset.asset),amount:y.amount.toString()});y.exchanges=b.exchanges.slice(0,2)}catch(a){throw w.P.showError("Unable to get exchanges"),Error("Unable to get exchanges")}finally{y.isLoading=!1}},async getPayUrl(a,b){try{let c=Number(b.amount),d=await o({exchangeId:a,asset:q(b.network,b.asset),amount:c.toString(),recipient:`${b.network}:${b.recipient}`});return v.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:a},configuration:{network:b.network,asset:b.asset,recipient:b.recipient,amount:c},currentPayment:{type:"exchange",exchangeId:a},source:"fund-from-exchange",headless:!1}}),d}catch(a){if(a instanceof Error&&a.message.includes("is not supported"))throw Error("Asset not supported");throw Error(a.message)}},async handlePayWithExchange(a){try{if(!s.U.state.address)throw Error("No account connected");if(!y.paymentAsset)throw Error("No payment asset selected");let b=h.w.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!b)throw Error("Could not create popup window");y.isPaymentInProgress=!0,y.paymentId=crypto.randomUUID(),y.currentPayment={type:"exchange",exchangeId:a};let{network:c,asset:d}=y.paymentAsset,e={network:c,asset:d,amount:y.tokenAmount,recipient:s.U.state.address},f=await z.getPayUrl(a,e);if(!f){try{b.close()}catch(a){console.error("Unable to close popup window",a)}throw Error("Unable to initiate payment")}y.currentPayment.sessionId=f.sessionId,y.currentPayment.status="IN_PROGRESS",y.currentPayment.exchangeId=a,b.location.href=f.url}catch(a){y.error="Unable to initiate payment",w.P.showError(y.error)}},async waitUntilComplete({exchangeId:a,sessionId:b,paymentId:c,retries:d=20}){let e=await z.getBuyStatus(a,b,c);if("SUCCESS"===e.status||"FAILED"===e.status)return e;if(0===d)throw Error("Unable to get deposit status");return await new Promise(a=>{setTimeout(a,5e3)}),z.waitUntilComplete({exchangeId:a,sessionId:b,paymentId:c,retries:d-1})},async getBuyStatus(a,b,c){try{if(!y.currentPayment)throw Error("No current payment");let d=await p({sessionId:b,exchangeId:a});return y.currentPayment.status=d.status,("SUCCESS"===d.status||"FAILED"===d.status)&&(y.currentPayment.result=d.txHash,y.isPaymentInProgress=!1,v.E.sendEvent({type:"track",event:"SUCCESS"===d.status?"PAY_SUCCESS":"PAY_ERROR",properties:{source:"fund-from-exchange",paymentId:c,configuration:{network:y.paymentAsset?.network||"",asset:y.paymentAsset?.asset||"",recipient:s.U.state.address||"",amount:y.amount},currentPayment:{type:"exchange",exchangeId:y.currentPayment?.exchangeId,sessionId:y.currentPayment?.sessionId,result:d.txHash}}})),d}catch(a){return{status:"UNKNOWN",txHash:""}}},reset(){y.currentPayment=void 0,y.isPaymentInProgress=!1,y.paymentId="",y.paymentAsset=null,y.amount=0,y.tokenAmount=0,y.priceLoading=!1,y.error=null,y.exchanges=[],y.isLoading=!1}}},93446:(a,b,c)=>{c.r(b),c.d(b,{W3mDepositFromExchangeSelectAssetView:()=>t,W3mDepositFromExchangeView:()=>p});var d=c(29856),e=c(44500),f=c(57339),g=c(89078),h=c(87977),i=c(33504),j=c(84177),k=c(69801),l=c(74967);c(21238),c(58581),c(76968),c(96901),c(66162),c(22855),c(77041);let m=(0,l.AH)`
  .amount-input-container {
    border-radius: ${({borderRadius:a})=>a["5"]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom: 1px solid ${({tokens:a})=>a.core.glass010};
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  .container {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: 30px;
  }
`;var n=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let o=[10,50,100],p=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.network=f.W.state.activeCaipNetwork,this.exchanges=g.g.state.exchanges,this.isLoading=g.g.state.isLoading,this.amount=g.g.state.amount,this.tokenAmount=g.g.state.tokenAmount,this.priceLoading=g.g.state.priceLoading,this.isPaymentInProgress=g.g.state.isPaymentInProgress,this.currentPayment=g.g.state.currentPayment,this.paymentId=g.g.state.paymentId,this.paymentAsset=g.g.state.paymentAsset,this.unsubscribe.push(f.W.subscribeKey("activeCaipNetwork",a=>{this.network=a,this.setDefaultPaymentAsset()}),g.g.subscribe(a=>{this.exchanges=a.exchanges,this.isLoading=a.isLoading,this.amount=a.amount,this.tokenAmount=a.tokenAmount,this.priceLoading=a.priceLoading,this.paymentId=a.paymentId,this.isPaymentInProgress=a.isPaymentInProgress,this.currentPayment=a.currentPayment,this.paymentAsset=a.paymentAsset,a.isPaymentInProgress&&a.currentPayment?.exchangeId&&a.currentPayment?.sessionId&&a.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),g.g.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),await g.g.fetchExchanges()}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" gap="2" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>(0,d.qy)`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(a=>(0,d.qy)`<wui-list-item
              @click=${()=>this.onExchangeClick(a)}
              chevron
              variant="image"
              imageSrc=${a.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="secondary">
                Deposit from ${a.name}
              </wui-text>
            </wui-list-item>`):(0,d.qy)`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return(0,d.qy)`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){return(0,d.qy)`
      <wui-flex flexDirection="column" gap="3" .padding=${["0","3","3","3"]} class="amount-input-container">
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>

          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${this.paymentAsset?.metadata.symbol||""}
            imageSrc=${this.paymentAsset?.metadata.iconUrl||""}
            @click=${()=>h.I.push("PayWithExchangeSelectAsset")}
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
            ${o.map(a=>(0,d.qy)`<wui-button @click=${()=>this.onPresetAmountClick(a)} variant=${this.amount===a?"neutral-primary":"neutral-secondary"} size="sm" fullWidth>$${a}</wui-button>`)}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?(0,d.qy)`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:(0,d.qy)`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${this.paymentAsset?.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(a){if(!this.amount)return void i.P.showError("Please enter an amount");await g.g.handlePayWithExchange(a.id)}handlePaymentInProgress(){let a=f.W.state.activeChain;this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(g.g.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(b=>{"SUCCESS"===b.status?(i.P.showSuccess("Deposit completed"),a&&(j.U.fetchTokenBalance(),k.x.updateBalance(a))):"FAILED"===b.status&&i.P.showError("Deposit failed")}),i.P.showLoading("Deposit in progress..."),h.I.replace("Account"))}onPresetAmountClick(a){g.g.setAmount(a)}async getPaymentAssets(){this.network&&await g.g.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){let a=await g.g.getAssetsForNetwork(this.network.caipNetworkId);a[0]&&g.g.setPaymentAsset(a[0])}}};p.styles=m,n([(0,e.wk)()],p.prototype,"network",void 0),n([(0,e.wk)()],p.prototype,"exchanges",void 0),n([(0,e.wk)()],p.prototype,"isLoading",void 0),n([(0,e.wk)()],p.prototype,"amount",void 0),n([(0,e.wk)()],p.prototype,"tokenAmount",void 0),n([(0,e.wk)()],p.prototype,"priceLoading",void 0),n([(0,e.wk)()],p.prototype,"isPaymentInProgress",void 0),n([(0,e.wk)()],p.prototype,"currentPayment",void 0),n([(0,e.wk)()],p.prototype,"paymentId",void 0),n([(0,e.wk)()],p.prototype,"paymentAsset",void 0),p=n([(0,l.EM)("w3m-deposit-from-exchange-view")],p);var q=c(13295);c(24307),c(35419),c(79550),c(48850),c(73363),c(61016);let r=(0,l.AH)`
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
`;var s=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let t=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.assets=g.g.state.assets,this.search="",this.onDebouncedSearch=q.w.debounce(a=>{this.search=a}),this.unsubscribe.push(g.g.subscribe(a=>{this.assets=a.assets}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return(0,d.qy)`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return(0,d.qy)`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let a=this.assets.filter(a=>a.metadata.name.toLowerCase().includes(this.search.toLowerCase())),b=a.length>0;return(0,d.qy)`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${b?a.map(a=>(0,d.qy)`<wui-list-item
                    .imageSrc=${a.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,a)}
                  >
                    <wui-text variant="md-medium" color="primary">${a.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${a.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):(0,d.qy)`<wui-flex
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
    `}onBuyClick(){h.I.push("OnRampProviders")}onInputChange(a){this.onDebouncedSearch(a.detail)}handleTokenClick(a){g.g.setPaymentAsset(a),h.I.goBack()}};t.styles=r,s([(0,e.wk)()],t.prototype,"assets",void 0),s([(0,e.wk)()],t.prototype,"search",void 0),t=s([(0,l.EM)("w3m-deposit-from-exchange-select-asset-view")],t)},96901:(a,b,c)=>{c(67332)}};
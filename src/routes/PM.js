import React, { Component } from "react";
import "./PM.css";
import Liv from "../components/Liv";

class PM extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="title">
            <h1>Personal Mobility</h1>
          </div>
          <div className="stat">
            <h2>
              <div>
                <h3>stat1</h3>
                <p>1234</p>
              </div>
              <div>
                <h3>stat2</h3>
                <p>1234</p>
              </div>
              <div>
                <h3>stat3</h3>
                <p>1234</p>
              </div>
            </h2>
          </div>
        </header>
        <section>
          <div className="topic">
            <div className="contents">
              <h1>임시 타이틀</h1>
              <p>
                이 편지는 영국에서 최초로 시작되어 일년에 한 바퀴 돌면서 받는
                사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일
                안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이
                필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹
                미신이라 하실지 모르지만 사실입니다. 영국에서 HGXWCH이라는
                사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서
                보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을 받았습니다.
                어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야
                한다는 사실을 잊었습니다. 그는 곧 사직되었습니다. 나중에야 이
                사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다.
                미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국
                9일 후 그는 암살 당했습니다. 기억해 주세요. 이 편지를 보내면
                7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을
                것입니다. 그리고 이 편지를 버리거나 낙서를 해서는 절대로
                안됩니다. 7통입니다. 이 편지를 받은 사람은 행운이 깃들 것입니다.
                힘들겠지만 좋은게 좋다고 생각하세요. 7년의 행운을 빌면서...
              </p>
            </div>
            <div className="chart">
              <iframe
                src="http://localhost:5601/app/kibana#/visualize/edit/37cc8650-b882-11e8-a6d9-e546fe2bba5f?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(field:total_quantity),schema:metric,type:sum),(enabled:!t,id:'2',params:(drop_partials:!f,extended_bounds:(),field:order_date,interval:auto,min_doc_count:1,scaleMetricValues:!f,useNormalizedEsInterval:!t),schema:segment,type:date_histogram),(enabled:!t,id:'3',params:(field:category.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:group,type:terms)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),grid:(categoryLines:!f,style:(color:%23eee)),labels:(),legendPosition:top,seriesParams:!((data:(id:'1',label:'Sum%20of%20total_quantity'),drawLinesBetweenPoints:!t,interpolate:linear,mode:stacked,show:true,showCircles:!t,type:area,valueAxis:ValueAxis-1)),thresholdLine:(color:%23E7664C,show:!f,style:full,value:10,width:1),times:!(),type:area,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Sum%20of%20total_quantity'),type:value))),title:'%5BeCommerce%5D%20Sales%20by%20Category',type:area))"
                height="600"
                width="800"
              ></iframe>
              <Liv />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PM;

function limit(val, max) {
    if (val.length === 1 && val[0] > max[0]) {
      val = '0' + val;
    }
  
    if (val.length === 2) {
      if (Number(val) === 0) {
        val = '01';
  
      //this can happen when user paste number
    } else if (val > max) {
        val = max;
      }
    }
  
    return val;
  }
  
  function cardExpiry(val) {
    let month = limit(val.substring(0, 2), '12');
    let date = limit(val.substring(2, 4), '31');
  
    return month + (date.length ? '/' + date : '');
  }
  
  const App = React.createClass({
    getInitialState : function(){
      return {};
    },
    render : function(){
      return (
        <div>
          <div className="example">
            <h3>
              Prefix and thousand separator : Format currency as text
            </h3>
            <NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </div>
  
          <div className="example">
            <h3>
              Format with pattern : Format credit card as text
            </h3>
            <NumberFormat value={4111111111111111} displayType={'text'} format="#### #### #### ####" />
          </div>
          
          <div className="example">
            <h3>
              Prefix and thousand separator : Format currency in input
            </h3>
            <NumberFormat thousandSeparator={true} prefix={'$'} />
          </div>
          <div className="example">
            <h3>
              Custom thousand separator : Format currency in input
            </h3>
            <NumberFormat thousandSeparator={'.'} decimalSeparator={','} prefix={'$'} />
          </div>
          <div className="example">
            <h3>
              Format with pattern : Format credit card in an input
            </h3>
            <NumberFormat format="#### #### #### ####" />
          </div>
          
          <div className="example">
            <h3>
              Format with mask : Format credit card in an input
            </h3>
            <NumberFormat format="#### #### #### ####" mask="_"/>
          </div>
          
          <div className="example">
            <h3>
              Custom format method  : Format credit card expiry time
            </h3>
            <NumberFormat format={cardExpiry}/>
          </div>
          <div className="example">
            <h3>
              Format phone number
            </h3>
            <NumberFormat format="+1 (###) ###-####" mask="_"/>
          </div>
        </div>
      )
    }
  });
  
  ReactDOM.render(<App />, document.getElementById('app'));
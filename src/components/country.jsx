import React, { Component } from 'react';
import Medal from './medal';

class Country extends Component {
    getMedalsTotal(country, medals) {
        let sum = 0;
        medals.forEach(medal => { sum += country[medal.name]});
        return sum;
    }
    render() {
        const { country, medals, onIncrement, onReduction } = this.props;
    //i also need some help on displaying medals for all colountries in the app component 
        return (
            <React.Fragment>
                <div style={{ textAlign:'center' }}>{ country.name } {this.getMedalsTotal(country, medals)}</div>
                {/* <Medal medals={medals} onIncrement={onIncrement} onReduction={onReduction} /> */}
                { medals.map(medal =>
                   <Medal
                        key={medal.id}
                        country={country}
                        medal={medal}
                        onIncrement={onIncrement}
                        onReduction={onReduction}
                   />

                )}
                <hr />
            </React.Fragment>
        );
    }
}

export default Country;
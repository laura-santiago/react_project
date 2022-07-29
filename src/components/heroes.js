import React, { Component } from 'react'

export default class Heroes extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       heroes: ['Batman','Superman','Spiderman'],
       newHero:''
    }
  } 

  addHero(){
    this.setState({heroes: [...this.state.heroes, this.state.newHero]})
  }

  //called any time sth is written in the input
  handleChange(event){
    this.setState({newHero: event.target.value});
    console.log(event.target.name);
  }

  render() {
    const listHeroes = this.state.heroes.map(
      (hero, i) => <li key={i} className="list-group-item">{hero}</li>)
      
    return (
      <div className="container">
        <div className="form-group">
          <label for="">Nombre del Heroe</label>
          <input type="text" className="form-control" name="inputHero" id="" aria-describedby="helpId" placeholder="" value={this.state.newHero} onChange={(event)=>{this.handleChange(event)}}/>
          <button type="button" className="btn btn-primary" onClick={() => this.addHero()}>Añade héroe</button>
        </div>

        <ul className="list-group">
          {listHeroes} 
        </ul>        
      </div>
    )
  }
}

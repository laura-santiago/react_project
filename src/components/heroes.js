import React, { Component } from 'react'

export default class Heroes extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       heroes: [{name:'Batman', description:'black'},
                {name:'Superman', description:'blue'},
                {name:'Spiderman', description:'red'}],
       newHero:{name:'', description:''}
    }
  } 

  addHero(){
    this.setState({heroes: [...this.state.heroes, this.state.newHero], newHero:''})
  }

  //called any time sth is written in the input
  handleChange(event){
    let myHero = this.state.newHero;
    if (event.target.name === "nameInput"){
        myHero.name = event.target.value;
    } else if (event.target.name === "descriptionInput") {
            myHero.description = event.target.value;
    }
    this.setState({newHero: myHero});
  }

  render() {
    const listHeroes = this.state.heroes.map(
      (hero, i) => <li key={i} className="list-group-item"><strong>{hero.name}</strong><br/> {hero.description} <a name="" id="" class="btn btn-danger float-right" href="#" role="button">eliminar</a> </li>)
      
    return (
      <div className="container">
        <div className="form-group">
          <label for="">Nombre del Héroe</label>
          <input type="text" className="form-control" name="nameInput" id="" aria-describedby="helpId" placeholder="" value={this.state.newHero.name} onChange={(event)=>{this.handleChange(event)}}/>
          <label for="">Descripción</label>
          <input type="text" className="form-control" name="descriptionInput" id="" aria-describedby="helpId" placeholder="" value={this.state.newHero.description} onChange={(event)=>{this.handleChange(event)}}/>
          <button type="button" className="btn btn-primary" onClick={() => this.addHero()}>Añade héroe</button>
        </div>

        <ul className="list-group">
          {listHeroes} 
        </ul>        
      </div>
    )
  }
}

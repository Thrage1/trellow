import React from 'react';


class RenameBoard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: props.board ? props.board.title : '',
    };

  }
  handleChange(e){
    e.stopPropagation();
    this.setState({title: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    this.props.updateBoard({title: this.state.title, id: this.props.id});
    this.props.showDropdown("update-dropdown");
  }


  render(){
    return(
      <div className="create_board_form" onClick={(e)=> e.stopPropagation()}>
        <p className='p'>Rename Board</p>
        <form className='creation-form' onSubmit={this.handleSubmit.bind(this)}>
          <h3>Title</h3>
          <input className='creation-input' value={this.state.title} onChange={this.handleChange.bind(this)} type="text" />
          <input className='creation-submit' type="submit" value="Update"/>
        </form>
      </div>
    );
  }
}




export default RenameBoard;
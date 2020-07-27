import React from 'react';
import { ButtonToolbar, Dropdown, DropdownButton, Button } from 'react-bootstrap';

class Buttons extends React.Component {

    handleSelect = (evt) => {
        this.props.gridSize(evt);
    }


    render() {
        return (
            <div className='center'>
                <ButtonToolbar>
                    <Button className='btn btn-default mr-3' onClick={this.props.playButton}>
                        Start
                    </Button>
                    <Button className='btn btn-default mr-3' onClick={this.props.pauseButton}>
                        Stop
                    </Button>
                    <Button className='btn btn-default mr-3' onClick={this.props.clearButton}>
                        Clear
                    </Button>
                    <Button className='btn btn-default mr-3' onClick={this.props.slowButton}>
                        Slow
                    </Button>
                    <Button className='btn btn-default mr-3' onClick={this.props.fastButton}>
                        Fast
                    </Button>
                    <Button className='btn btn-default mr-3' onClick={this.props.randomButton}>
                        Random
                    </Button>
                    <DropdownButton
                        title='Grid Size'
                        id='size-menu'
                        onSelect={this.handleSelect}
                        >
                        <Dropdown.Item eventKey='1'>20x10</Dropdown.Item>
                        <Dropdown.Item eventKey='2'>50x30</Dropdown.Item>
                        <Dropdown.Item eventKey='3'>70x50</Dropdown.Item>
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Buttons
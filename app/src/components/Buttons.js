import React from 'react';
import { ButtonToolbar, Dropdown, DropdownButton, Button } from 'react-bootstrap';

class Buttons extends React.Component {

    handleSize = (evt) => {
        this.props.gridSize(evt);
    }

    handleSpeed = (evt) => {
        this.props.speedMenu(evt);
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
                    <DropdownButton
                        title='Speed'
                        id='speed-menu'
                        onSelect={this.handleSpeed}
                        >
                        <Dropdown.Item eventKey='1'>Slow</Dropdown.Item>
                        <Dropdown.Item eventKey='2'>Regular</Dropdown.Item>
                        <Dropdown.Item eventKey='3'>Fast</Dropdown.Item>
                    </DropdownButton>
                    <Button className='btn btn-default mr-3 ml-3' onClick={this.props.randomButton}>
                        Random
                    </Button>
                    <DropdownButton
                        title='Grid Size'
                        id='size-menu'
                        onSelect={this.handleSize}
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
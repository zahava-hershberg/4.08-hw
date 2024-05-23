import React from 'react';
import NumberRow from './NumberRow';
import { v4 as uuidv4 } from 'uuid';
import LockedNumbers from './LockedNumbers';
class NumberTable extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []

    }

    onAddClick = () => {
        const randomNum = Math.floor(Math.random() * 500) + 1;
        const newNum = {
            number: randomNum,
            id: uuidv4()
        }
        const copy = [...this.state.numbers, newNum];
        this.setState({ numbers: copy });
    }
    onSelected = (number) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(number)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(n => n !== number) })
        }
        else {
            this.setState({ selectedNumbers: [...selectedNumbers, number] })
        }
        console.log(selectedNumbers)
    }
    onLock = (number) => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(number)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(n => n !== number) })
        }
        else {
            this.setState({ lockedNumbers: [...lockedNumbers, number] })
        }

    }



    render() {
        const { numbers, selectedNumbers, lockedNumbers } = this.state;
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <button className='btn btn-success w-100' onClick={this.onAddClick}>Add</button>
                    </div>

                    <div style={{ maxHeight: 500, overflowY: 'scroll' }}>
                        <table className='table table-hover table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>Add/Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {numbers.map(({ id, number }) => <NumberRow key={id}
                                    numbers={number}
                                    isSelected={selectedNumbers.includes(number)}
                                    onSelected={() => this.onSelected(number)}
                                    isLocked={lockedNumbers.includes(number)}
                                />)}
                            </tbody>
                        </table>
                    </div>

                </div>

                {selectedNumbers.length &&
                    <div className='row p-5 rounded' style={{ backgroundColor: 'rgb(233, 236, 239)' }}>
                        <div className='col-md-6 col-md-offset-3'>
                            <h3>Selected Numbers</h3>
                            <ul className='list-group'>
                                {selectedNumbers.map(number => (
                                    <li className='list-group-item'>
                                        <h5>{number}</h5>
                                        <LockedNumbers
                                            isLocked={lockedNumbers.includes(number)}
                                            onLock={() => this.onLock(number)} />

                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>}

            </div>
        )
    }


}


export default NumberTable;




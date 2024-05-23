import React from 'react';

class NumberRow extends React.Component {
    render() {
        const { numbers, isSelected, onSelected, isLocked } = this.props;
        return (
            <tr>
                <td>{numbers}</td>
                <td>
                    <button className={`btn btn-${isSelected ? 'danger' : 'primary'} `} onClick={onSelected} disabled={isLocked}>
                        {isSelected ? 'Remove from selected' : 'Add to selected'}
                    </button>
                </td>
            </tr>

        );
    }
}

export default NumberRow;

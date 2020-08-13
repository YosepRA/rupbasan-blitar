import React, { Component } from 'react';
import { camelToSentence } from '../../helpers';
import format from 'date-format';

export class BarangDataRow extends Component {
  render() {
    const { fieldName, value } = this.props.data;
    let isTanggal = fieldName === 'tanggalRegister';

    return (
      <tr className="info__data-row">
        <td className="info__field-name">{camelToSentence(fieldName)}</td>
        <td className="info__value">
          {isTanggal ? format('dd/MM/yyyy', new Date(value)) : value}
        </td>
      </tr>
    );
  }
}

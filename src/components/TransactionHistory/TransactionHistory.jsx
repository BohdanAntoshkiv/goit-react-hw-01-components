import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TableHead>
        <TableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRow>
      </TableHead>

      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape()),
};

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useTable, usePagination } from 'react-table';
import PokemonPreview from '../Pokemons/PokemonPreview/PokemonPreview';
import styles from './Table.module.css';

function Table(props) {
  const {
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    columns,
    data,
    pageIndex,
    maxPage,
  } = props;
  const { getTableProps, getTableBodyProps, prepareRow, page } = useTable(
    {
      columns,
      data,
    },
    usePagination,
  );

  return (
    <>
      <div className="pagination">
        <button type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button type="button" onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {maxPage}
          </strong>{' '}
        </span>
      </div>
      <table className={styles.Table} {...getTableProps()}>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                <td>
                  <PokemonPreview pokemon={row.original} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

Table.propTypes = {
  canNextPage: PropTypes.bool,
  canPreviousPage: PropTypes.bool,
  columns: PropTypes.array,
  data: PropTypes.array,
  maxPage: PropTypes.number,
  nextPage: PropTypes.func,
  pageIndex: PropTypes.number,
  previousPage: PropTypes.func,
};

Table.defaultProps = {
  canNextPage: false,
  canPreviousPage: false,
  columns: [],
  data: [],
  maxPage: 0,
  nextPage: () => {},
  pageIndex: 0,
  previousPage: () => {},
};

export default Table;

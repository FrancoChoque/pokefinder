/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useTable, usePagination } from 'react-table';
import PokemonPreview from '../Pokemons/PokemonPreview/PokemonPreview';
import styles from './Table.module.css';
import CustomButton from '../UI/Button/Button';
import PokeSpinner from '../UI/Spinner/Spinner';

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
    isLoading,
  } = props;
  const { getTableProps, getTableBodyProps, prepareRow, page } = useTable(
    {
      columns,
      data,
    },
    usePagination,
  );

  const { t } = useTranslation();

  return (
    <>
      <table className={styles.Table} {...getTableProps()}>
        <tbody {...getTableBodyProps()}>
          {isLoading ? (
            <tr>
              <td>
                <PokeSpinner />{' '}
              </td>
            </tr>
          ) : (
            page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  <td>
                    <PokemonPreview pokemon={row.original} />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {isLoading ? null : (
        <div className={styles.Pagination}>
          <div>
            <CustomButton type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
              {t('TABLE.PREVIOUS')}
            </CustomButton>{' '}
            <CustomButton type="button" onClick={() => nextPage()} disabled={!canNextPage}>
              {t('TABLE.NEXT')}
            </CustomButton>{' '}
          </div>
          <p>
            <strong>{t('TABLE.PAGE', { current: pageIndex + 1, total: maxPage })}</strong>
          </p>
        </div>
      )}
    </>
  );
}

Table.propTypes = {
  canNextPage: PropTypes.bool,
  canPreviousPage: PropTypes.bool,
  columns: PropTypes.array,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
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
  isLoading: false,
  maxPage: 0,
  nextPage: () => {},
  pageIndex: 0,
  previousPage: () => {},
};

const mapStateToProps = ({ uiReducer }) => ({
  isLoading: uiReducer.isLoading,
});

export default connect(mapStateToProps)(Table);

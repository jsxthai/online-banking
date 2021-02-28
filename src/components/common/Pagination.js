import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import PropTypes from "prop-types";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
PaginationOutlined.propTypes = {
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
};
PaginationOutlined.defaultProps = {
  onPageChange: null,
};

export default function PaginationOutlined(props) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const { totalPages, onPageChange } = props;

  const handlePageChange = (e, pageNumber) => {
    setPage(pageNumber);
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  };
  // console.log("page  t", totalPages);
  return (
    <div className={classes.root}>
      <Pagination
        count={totalPages}
        variant="outlined"
        page={page}
        color="primary"
        onChange={handlePageChange}
      />
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => {
  return (
    <div className="ContestList">
       {contests.map(contest =>
         <ContestPreview
         onClick={onContestClick}
         key={contest.id}
         {...contest} />
       )}
    </div>
  );
}

ContestList.propTypes = {
  contests: PropTypes.array,
  onContestClick: PropTypes.func.isRequired
};


export default ContestList;
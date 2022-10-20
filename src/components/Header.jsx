import React from 'react';

const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <h1>Team Member Allocation</h1>
                <h3>{selectedTeam} has {teamMemberCount} Members</h3>
            </div>
        </header>
    );
};

export default Header;

import PropTypes from "prop-types";

export default function PageHeader({ title }) {
    return (
        <header className="flex justify-between h-20 w-full items-center bg-white px-8 border-b border-stroke">
            <h1 className="font-semibold text-lg text-gray-950">{title}</h1>
            <div className="flex items-center gap-2 mr-3 ">
                <img className="w-9 select-none aspect-square rounded-full bg-gray-300" src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" /> {/* Change this to the profile picture */}
                <div>
                    <h4 className="font-medium text-gray-800">Username</h4>{/* Change this to the username */}
                    <p className="text-sm text-gray-500">Perawat</p>{/* Change this to the role */}
                </div>
            </div>
        </header>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

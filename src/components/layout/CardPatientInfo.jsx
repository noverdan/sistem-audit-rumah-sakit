import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

export default function CardPatientInfo({ total, increase, type }) {
    return (
        <>
            {
                type === 'dirawat' && (
                    <div className="w-56 h-44 bg-white border flex flex-col gap-4 border-stroke p-5">
                        <div className="text-primary-3 aspect-square bg-opacity-20 flex items-center justify-center bg-primary-1 w-10">
                            <Icon icon="mingcute:bed-line" width={20} />
                        </div>
                        <p className="text-sm text-gray-600">Total Pasien Dirawat</p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-xl">{total ? total : 0}</p>
                            <div className={`flex items-center gap-2 ${increase > 0 ? 'text-success' : 'text-red-600'}`}>
                                <Icon icon={`teenyicons:${increase > 0 ? 'up' : 'down'}-solid`} width={14} />
                                <p>{increase > 0 ? `+${increase}` : increase}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                type === 'sembuh' && (
                    <div className="w-56 h-44 bg-white border flex flex-col gap-4 border-stroke p-5">
                        <div className="text-warning aspect-square bg-opacity-20 flex items-center justify-center bg-warning w-10">
                            <Icon icon="mingcute:bed-line" width={20} />
                        </div>
                        <p className="text-sm text-gray-600">Pasien Setelah Dirawat</p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-xl">{total ? total : 0}</p>
                            <div className={`flex items-center gap-2 ${increase > 0 ? 'text-success' : 'text-red-600'}`}>
                                <Icon icon={`teenyicons:${increase > 0 ? 'up' : 'down'}-solid`} width={14} />
                                <p>{increase > 0 ? `+${increase}` : increase}</p>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

CardPatientInfo.propTypes = {
    total: PropTypes.number.isRequired,
    increase: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['dirawat', 'sembuh']).isRequired
};
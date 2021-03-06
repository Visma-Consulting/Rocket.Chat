import { Box } from '@rocket.chat/fuselage';
import React from 'react';

import GenericModal from '../../../../../components/GenericModal';
import { useTranslation } from '../../../../../contexts/TranslationContext';
import ChannelDeletionTable from './ChannelDeletionTable';

export const StepTwo = ({
	rooms,
	// params,
	// onChangeParams,
	onToggleAllRooms,
	onChangeRoomSelection,
	onConfirm,
	onCancel,
	selectedRooms,
}) => {
	const t = useTranslation();

	return (
		<GenericModal
			variant='warning'
			title={t('Teams_about_the_channels')}
			onConfirm={onConfirm}
			onCancel={onCancel}
			onClose={onCancel}
			confirmText={t('Continue')}
		>
			<Box>{t('Teams_delete_team_choose_channels')}</Box>
			<Box mbs='x20'>{t('Teams_delete_team_public_notice')}</Box>
			<ChannelDeletionTable
				onToggleAllRooms={onToggleAllRooms}
				rooms={rooms}
				params={{}}
				onChangeParams={() => {}}
				onChangeRoomSelection={onChangeRoomSelection}
				selectedRooms={selectedRooms}
			/>
		</GenericModal>
	);
};

export default StepTwo;

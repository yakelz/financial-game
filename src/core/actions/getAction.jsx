import useGameStore from '@core/store/useGameStore';
import { actionsConfig } from './actionsConfig';

function getAction(componentName) {
	const { currentActionIndex } = useGameStore();
	const module = actionsConfig[currentActionIndex] || {};
	return module[componentName] || { component: () => null };
}

export default getAction;

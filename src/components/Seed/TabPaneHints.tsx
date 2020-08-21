import React, {
	useContext,
} from "react";
import { SeedContext } from "../../context/seed";
import { SliderValue } from "antd/lib/slider";
import { Hints } from "../../settings/Hints";
import { Marks, SettingSlider } from "./SettingSlider";
import { useValueMapper } from "../../hooks/useValueMapper";

interface Props {
	active: boolean;
}

interface ReportProps {
	hints: any;
	check: any;
	mapValue: any;
}

const revealedLocations = [
	{
		"displayName":"The World That Never Was",
		"name": "twtnw"
	},
	{
		"displayName":"Land of Dragons",
		"name": "landOfDragons"
	},
	{
		"displayName":"Beast's Castle",
		"name": "beastsCastle"
	},
	{
		"displayName":"Halloween Town",
		"name": "halloweenTown"
	},
	{
		"displayName":"Agrabah",
		"name": "agrabah"
	},
	{
		"displayName":"Olympus Colisseum",
		"name": "olympus"
	},
	{
		"displayName":"Pride Lands",
		"name": "prideLands"
	},
	{
		"displayName":"Twilight Town",
		"name": "twilightTown"
	},
	{
		"displayName":"Hollow Bastion",
		"name": "hollowBastion"
	},
	{
		"displayName":"Port Royal",
		"name": "portRoyal"
	},
	{
		"displayName":"Disney Castle",
		"name": "disneyCastle"
	},
	{
		"displayName":"Atlantica",
		"name": "atlantica"
	},
	{
		"displayName":"Simulated Twilight Town",
		"name": "simulatedTwilightTown"
	},
]

function findChecks(revealedLocation : any, seed : any, configuration : any) {
	if (revealedLocation.name in configuration.worlds && configuration.worlds[revealedLocation.name] != 1) {
		const numChecks = seed.filter((item : any) => item.location.location === revealedLocation.displayName).filter((item : any) => item.reward.important).length;
		return `There are ${numChecks} important checks in ${revealedLocation.displayName}`;
	}
	return null
}

function findAllChecks(seed : any, configuration : any) {
	let allChecks = [];
	for (let i = 0; i < revealedLocations.length; i++) {
		const revealedLocation = revealedLocations[i];
		const checkText = findChecks(revealedLocation, seed, configuration);
		if (checkText != null) {
			const check = {
				"checkText": checkText,
				"reportNumber": i+1
			};
			allChecks.push(check);
		}
	}
	return allChecks;
}

export const AnsemReportHint: React.FC<ReportProps> = ({ check, mapValue }) => {
	return (
		<div style={{ display: "flex", margin: "8px 0" }}>
			<SettingSlider
				title={`Secret Ansem Report #${check.reportNumber}`}
				marks={Marks.found}
				{...mapValue(`report${check.reportNumber}`)}
			/><br></br>
		</div>
	);
};

export const TabPaneHints: React.FC<Props> = ({ active }) => {
	const { seed, configuration, hints } = useContext(SeedContext);
	const mapValue = useValueMapper<Hints, SliderValue>(hints);
	if (seed != null) {
		const allChecks = findAllChecks(seed, configuration);
		const checkTextElements = allChecks.map((check : any) => <AnsemReportHint hints={hints} check={check} mapValue={mapValue}/>);
		const revealedHints = allChecks.map((check: any) => <p>{hints[0][`report${check.reportNumber}`] == 1 && check.checkText}</p>);
		return <div className="tab-pane"><div>{checkTextElements}</div><div>{revealedHints}</div></div>;
	}
	return <div className="tab-pane">Generate a seed to get hints!</div>;
}
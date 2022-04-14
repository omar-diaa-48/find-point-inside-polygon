type Polygon = {
	name: string;
	values: { x: number, y: number }[]
}

const polygons: Polygon[] = [
	{
		name: "ID_0001",
		values: [
			{ x: 0, y: 0 },
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 1, y: 0 },
		]
	},
	{
		name: "ID_0002",
		values: [
			{ x: 2, y: 2 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ x: 3, y: 2 },
		]
	},
	{
		name: "ID_0003",
		values: [
			{ x: 4, y: 4 },
			{ x: 4, y: 5 },
			{ x: 5, y: 5 },
			{ x: 5, y: 4 },
		]
	}
]

function findPolygon(point: { x: number, y: number }): string {
	// extract point coordinates
	const { x, y } = point;

	const insideInXDirection = [];

	for (let i = 0; i < polygons.length; i++) {
		// get all of the x values in the current polygon
		const xValues = polygons[i].values.map(p => p.x);

		// get all of the min and max values in the x direction
		const minXValue = Math.min(...xValues)
		const maxXValue = Math.max(...xValues)

		// push the polygon index where the point lies inside in the x direction
		if (x >= minXValue && x <= maxXValue) {
			insideInXDirection.push(i)
		}
	}

	// loop only in the polygons that contained the point in the x direction
	for (let i = 0; i < insideInXDirection.length; i++) {
		// get all of the y values in the current polygon
		const yValues = polygons[insideInXDirection[i]].values.map(p => p.y);

		// get all of the min and max values in the y direction
		const minYValue = Math.min(...yValues)
		const maxYValue = Math.max(...yValues)

		// return the one the first one to match y direction 
		if (y >= minYValue && y <= maxYValue) {
			return polygons[insideInXDirection[i]].name
		}

	}

	return '';
}

console.log(findPolygon({ x: 4.5, y: 4.5 }));
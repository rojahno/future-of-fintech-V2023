import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Label,
} from "recharts";

interface LineChartComparisonProps {
  data: any[];
}

export default function LineChartComparison(props: LineChartComparisonProps) {
  const getLineChart = () => {
    const keysArr = Object.keys(props.data[0]).slice(0, -1);
    console.log(props.data);

    const lineArr = [];
    keysArr.forEach((item, index) => {
      lineArr.push(
        <Line
          key={index}
          type="monotone"
          dataKey={item}
          stroke="#063342"
          strokeWidth={1.5}
          width={2}
          dot={false}
          activeDot={{ r: 5 }}
        />
      );
    });
    return lineArr;
  };

  return (
    <ResponsiveContainer width="99%" aspect={3}>
      <LineChart
        width={1000}
        height={500}
        data={props.data}
        margin={{
          top: 5,
          right: 35,
          left: -20,
          bottom: 23,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          interval={0}
          fontSize={10}
          angle={45}
          dx={15}
          dy={20}
          minTickGap={-200}
          axisLine={false}
        />
        <YAxis fontSize={10}>
          <Label angle={-90} dx={-3}>
            Pris (øre/Kwh)
          </Label>
        </YAxis>
        <Tooltip />
        {getLineChart()}
      </LineChart>
    </ResponsiveContainer>
  );
}

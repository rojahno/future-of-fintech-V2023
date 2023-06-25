import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface ChartDataFromFileProps {
  data: any[];
  ticks: string[];
}

export default function ChartDataFromFile(props: ChartDataFromFileProps) {
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={1000}
        data={props.data}
        margin={{
          top: 5,
          right: 35,
          left: -40,
          bottom: 23,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          ticks={props.ticks}
          interval={0}
          fontSize={10}
          angle={45}
          dx={15}
          dy={20}
          minTickGap={-200}
          axisLine={false}
        />
        <YAxis fontSize={10} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="forbruk"
          stroke="#063342"
          strokeWidth={1.5}
          width={2}
          dot={false}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

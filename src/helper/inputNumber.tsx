import { NumericFormat } from "react-number-format";

type NumericProps = {
  value?: string | number;
};

export const Numeric = (props: NumericProps) => {
  return (
    <NumericFormat
      className={`ant-input css-dev-only-do-not-override-qub3ic`}
      thousandSeparator={true}
      thousandsGroupStyle="thousand"
      decimalScale={2}
      fixedDecimalScale
      value={props.value}
      autoComplete="off"
      style={{
        textAlign: "right",
      }}
    />
  );
};

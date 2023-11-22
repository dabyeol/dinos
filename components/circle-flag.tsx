interface CircleFlagProps {
  countryCode?: string;
  size: number;
}

export default function CircleFlag({ countryCode, size }: CircleFlagProps) {
  return (
    <object
      data={`https://hatscripts.github.io/circle-flags/flags/${
        countryCode || 'xx'
      }.svg`}
      type="image/svg+xml"
      width={size}
      height={size}
    />
  );
}

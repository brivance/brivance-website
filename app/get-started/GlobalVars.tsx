export type FormData = {
  need: "new" | "redesign" | "updates" | "not_sure" | "";
  pages: "1-3" | "4-7" | "8-15" | "15plus" | "not_sure" | "";
  business: "service" | "store" | "appointment" | "portfolio" | "not_sure" | "other" | "";
  businessOther: string;

  features: {
    payments: boolean;
    booking: boolean;
    membership: boolean;
    blog: boolean;
    custom: boolean;
    none: boolean;
    unsure: boolean;
  };

  contentReady: "yes" | "some" | "no" | "";

  name: string;
  email: string;
  notes: string;

  // simple spam trap (hidden)
  website: string;
};

export const initialData: FormData = {
  need: "",
  pages: "",
  business: "",
  businessOther: "",
  features: {
    payments: false,
    booking: false,
    membership: false,
    blog: false,
    custom: false,
    none: false,
    unsure: false,
  },
  contentReady: "",
  name: "",
  email: "",
  notes: "",
  website: "",
};

export function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

export function Checkbox({
  checked,
  onChange,
  label,
  disabled,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <label
      className={cx(
        "flex items-center gap-3 rounded-xl px-5 py-3 cursor-pointer transition text-black active:scale-98",
        checked ? "bg-green/60" : "hover:bg-green/60 bg-[#cdc5b185]"
      )}
    >
      <span
        className={cx(
          "flex h-5 w-5 items-center justify-center rounded transition border",
          checked
            ? "bg-green border-green"
            : "border-black/30"
        )}
      >
        {checked && (
          <svg
            className="h-3 w-3 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>

      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />

      <span className="text-xl">{label}</span>
    </label>

  );
}

export function RadioGroup<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: Array<{ value: T; label: string }>;
}) {
  return (
    <div className="space-y-2">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={cx(
            "flex items-center gap-3 rounded-xl px-5 py-3 cursor-pointer transition text-black active:scale-98",
            value === opt.value ? "bg-green/60" : "hover:bg-green/60 bg-[#cdc5b185]"
          )}
        >
          <input
            type="radio"
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="sr-only"
          />
          <span className="text-xl">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}

export function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div className="text-neutral-500">{label}</div>
      <div className="text-neutral-900 text-right max-w-[65%]">{value}</div>
    </div>
  );
}
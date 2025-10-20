import { MaterialButton } from "@/components/MaterialButton";

export default function Buttons() {
  const sizes: Array<"xsmall" | "small" | "medium" | "large" | "xlarge"> = [
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
  ];

  return (
    <div className="min-h-screen bg-surface-highest p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-on-surface mb-8">
          Material Design Buttons
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-on-surface mb-6">
            Square Buttons
          </h2>
          <div className="space-y-8">
            {sizes.map((size) => (
              <div key={size}>
                <h3 className="text-lg text-on-surface-variant mb-4 capitalize">
                  {size}
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <MaterialButton type="square" size={size} />
                  <MaterialButton type="square" size={size} disabled />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-on-surface mb-6">
            Round Buttons
          </h2>
          <div className="space-y-8">
            {sizes.map((size) => (
              <div key={size}>
                <h3 className="text-lg text-on-surface-variant mb-4 capitalize">
                  {size}
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <MaterialButton type="round" size={size} />
                  <MaterialButton type="round" size={size} disabled />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-on-surface mb-6">
            Without Icon
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <MaterialButton size="medium" showIcon={false} label="No Icon" />
            <MaterialButton
              type="round"
              size="medium"
              showIcon={false}
              label="No Icon"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-6">
            Custom Labels
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <MaterialButton
              size="medium"
              label="Click Me"
              onClick={() => alert("Button clicked!")}
            />
            <MaterialButton
              type="round"
              size="large"
              label="Submit"
              onClick={() => alert("Submit clicked!")}
            />
            <MaterialButton
              type="square"
              size="small"
              label="Cancel"
              onClick={() => alert("Cancel clicked!")}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

import type { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import {
  buttonStyles,
  type ButtonSize,
  type ButtonVariant,
} from "../../lib/button";

type StyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant,
  size,
  className,
  ...props
}: StyleProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button {...props} className={buttonStyles(variant, size, className)} />
  );
}

export function LinkButton({
  variant,
  size,
  className,
  ...props
}: StyleProps & ComponentPropsWithoutRef<typeof Link>) {
  return <Link {...props} className={buttonStyles(variant, size, className)} />;
}

export function AnchorButton({
  variant,
  size,
  className,
  ...props
}: StyleProps & ComponentPropsWithoutRef<"a">) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      {...props}
      className={buttonStyles(variant, size, className)}
    />
  );
}

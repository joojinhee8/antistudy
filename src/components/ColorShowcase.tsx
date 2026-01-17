import React from 'react';
import './ColorShowcase.scss';

interface ColorChipProps {
    colorVar: string;
    label: string;
}

const ColorChip: React.FC<ColorChipProps> = ({ colorVar, label }) => (
    <div className="color-chip">
        <div className="color-chip__swatch" style={{ backgroundColor: `var(${colorVar})` }} />
        <div className="color-chip__info">
            <span className="color-chip__label">{label}</span>
            <code className="color-chip__var">{colorVar}</code>
        </div>
    </div>
);

interface ColorSectionProps {
    title: string;
    children: React.ReactNode;
}

const ColorSection: React.FC<ColorSectionProps> = ({ title, children }) => (
    <section className="color-section">
        <h3 className="text-h3 color-section__title">{title}</h3>
        <div className="color-section__grid">{children}</div>
    </section>
);

const ColorShowcase: React.FC = () => {
    return (
        <div className="color-showcase">
            <header className="color-showcase__header">
                <h2 className="text-h2">Color System</h2>
                <p className="text-body text-secondary">디자인 시스템의 모든 색상 토큰입니다.</p>
            </header>

            {/* Backgrounds */}
            <ColorSection title="Backgrounds">
                <h4 className="text-h4 color-section__subtitle">Base</h4>
                <div className="color-row">
                    <ColorChip colorVar="--bg-base-default" label="Default" />
                    <ColorChip colorVar="--bg-base-hover" label="Hover" />
                    <ColorChip colorVar="--bg-base-secondary" label="Secondary" />
                    <ColorChip colorVar="--bg-base-secondary-hover" label="Secondary Hover" />
                    <ColorChip colorVar="--bg-base-tertiary" label="Tertiary" />
                    <ColorChip colorVar="--bg-base-tertiary-hover" label="Tertiary Hover" />
                </div>
                <ColorChip colorVar="--bg-disabled" label="Disabled" />

                <h4 className="text-h4 color-section__subtitle">Brand</h4>
                <div className="color-row">
                    <ColorChip colorVar="--bg-brand-default" label="Default" />
                    <ColorChip colorVar="--bg-brand-hover" label="Hover" />
                    <ColorChip colorVar="--bg-brand-secondary" label="Secondary" />
                    <ColorChip colorVar="--bg-brand-tertiary" label="Tertiary" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Neutral</h4>
                <div className="color-row">
                    <ColorChip colorVar="--bg-neutral-default" label="Default" />
                    <ColorChip colorVar="--bg-neutral-hover" label="Hover" />
                    <ColorChip colorVar="--bg-neutral-secondary" label="Secondary" />
                    <ColorChip colorVar="--bg-neutral-tertiary" label="Tertiary" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Success</h4>
                <div className="color-row">
                    <ColorChip colorVar="--bg-success-default" label="Default" />
                    <ColorChip colorVar="--bg-success-hover" label="Hover" />
                    <ColorChip colorVar="--bg-success-secondary" label="Secondary" />
                    <ColorChip colorVar="--bg-success-tertiary" label="Tertiary" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Warning</h4>
                <div className="color-row">
                    <ColorChip colorVar="--bg-warning-default" label="Default" />
                    <ColorChip colorVar="--bg-warning-hover" label="Hover" />
                    <ColorChip colorVar="--bg-warning-secondary" label="Secondary" />
                    <ColorChip colorVar="--bg-warning-tertiary" label="Tertiary" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Danger</h4>
                <div className="color-row">
                    <ColorChip colorVar="--bg-danger-default" label="Default" />
                    <ColorChip colorVar="--bg-danger-hover" label="Hover" />
                    <ColorChip colorVar="--bg-danger-secondary" label="Secondary" />
                    <ColorChip colorVar="--bg-danger-tertiary" label="Tertiary" />
                </div>
            </ColorSection>

            {/* Text */}
            <ColorSection title="Text Colors">
                <h4 className="text-h4 color-section__subtitle">Base</h4>
                <div className="color-row">
                    <ColorChip colorVar="--text-base-default" label="Default" />
                    <ColorChip colorVar="--text-base-secondary" label="Secondary" />
                    <ColorChip colorVar="--text-base-tertiary" label="Tertiary" />
                </div>
                <div className="color-row">
                    <ColorChip colorVar="--text-disabled-default" label="Disabled" />
                    <ColorChip colorVar="--text-disabled-secondary" label="Disabled Secondary" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Brand</h4>
                <div className="color-row">
                    <ColorChip colorVar="--text-brand-default" label="Default" />
                    <ColorChip colorVar="--text-brand-secondary" label="Secondary" />
                    <ColorChip colorVar="--text-brand-tertiary" label="Tertiary" />
                    <ColorChip colorVar="--text-brand-on" label="On" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Neutral</h4>
                <div className="color-row">
                    <ColorChip colorVar="--text-neutral-default" label="Default" />
                    <ColorChip colorVar="--text-neutral-secondary" label="Secondary" />
                    <ColorChip colorVar="--text-neutral-tertiary" label="Tertiary" />
                    <ColorChip colorVar="--text-neutral-on" label="On" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Success</h4>
                <div className="color-row">
                    <ColorChip colorVar="--text-success-default" label="Default" />
                    <ColorChip colorVar="--text-success-secondary" label="Secondary" />
                    <ColorChip colorVar="--text-success-on" label="On" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Warning</h4>
                <div className="color-row">
                    <ColorChip colorVar="--text-warning-default" label="Default" />
                    <ColorChip colorVar="--text-warning-secondary" label="Secondary" />
                    <ColorChip colorVar="--text-warning-on" label="On" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Danger</h4>
                <div className="color-row">
                    <ColorChip colorVar="--text-danger-default" label="Default" />
                    <ColorChip colorVar="--text-danger-secondary" label="Secondary" />
                    <ColorChip colorVar="--text-danger-on" label="On" />
                </div>
            </ColorSection>

            {/* Borders */}
            <ColorSection title="Border Colors">
                <h4 className="text-h4 color-section__subtitle">Base</h4>
                <div className="color-row">
                    <ColorChip colorVar="--border-base-default" label="Default" />
                    <ColorChip colorVar="--border-base-secondary" label="Secondary" />
                    <ColorChip colorVar="--border-base-tertiary" label="Tertiary" />
                </div>
                <ColorChip colorVar="--border-disabled" label="Disabled" />

                <h4 className="text-h4 color-section__subtitle">Brand</h4>
                <div className="color-row">
                    <ColorChip colorVar="--border-brand-default" label="Default" />
                    <ColorChip colorVar="--border-brand-secondary" label="Secondary" />
                    <ColorChip colorVar="--border-brand-tertiary" label="Tertiary" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Neutral</h4>
                <div className="color-row">
                    <ColorChip colorVar="--border-neutral-default" label="Default" />
                    <ColorChip colorVar="--border-neutral-secondary" label="Secondary" />
                    <ColorChip colorVar="--border-neutral-tertiary" label="Tertiary" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Success</h4>
                <div className="color-row">
                    <ColorChip colorVar="--border-success-default" label="Default" />
                    <ColorChip colorVar="--border-success-secondary" label="Secondary" />
                    <ColorChip colorVar="--border-success-tertiary" label="Tertiary" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Warning</h4>
                <div className="color-row">
                    <ColorChip colorVar="--border-warning-default" label="Default" />
                    <ColorChip colorVar="--border-warning-secondary" label="Secondary" />
                    <ColorChip colorVar="--border-warning-tertiary" label="Tertiary" />
                </div>

                <h4 className="text-h4 color-section__subtitle">Danger</h4>
                <div className="color-row">
                    <ColorChip colorVar="--border-danger-default" label="Default" />
                    <ColorChip colorVar="--border-danger-secondary" label="Secondary" />
                    <ColorChip colorVar="--border-danger-tertiary" label="Tertiary" />
                </div>
            </ColorSection>

            {/* Utilities */}
            <ColorSection title="Utilities">
                <div className="color-row">
                    <ColorChip colorVar="--utility-scrim" label="Scrim" />
                    <ColorChip colorVar="--utility-blanket" label="Blanket" />
                    <ColorChip colorVar="--utility-overlay" label="Overlay" />
                </div>
            </ColorSection>
        </div>
    );
};

export default ColorShowcase;

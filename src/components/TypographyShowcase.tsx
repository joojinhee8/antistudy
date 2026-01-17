import React from 'react';

const TypographyShowcase: React.FC = () => {
    return (
        <div className="typography-showcase" style={{ padding: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
            <header style={{ marginBottom: '4rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '2rem' }}>
                <h1 className="text-h1">Typography System</h1>
                <p className="text-body-lg text-secondary">A demonstration of the project's typography scale and styles.</p>
            </header>

            <section style={{ marginBottom: '4rem' }}>
                <h2 className="text-h2" style={{ marginBottom: '2rem' }}>Headings</h2>
                <div style={{ display: 'grid', gap: '2rem' }}>
                    <div>
                        <span className="text-body-sm text-tertiary" style={{ display: 'block', marginBottom: '0.5rem' }}>Hero Display</span>
                        <h1 className="text-hero">Title Hero</h1>
                    </div>
                    <div>
                        <span className="text-body-sm text-tertiary" style={{ display: 'block', marginBottom: '0.5rem' }}>Heading 1</span>
                        <h1 className="text-h1">Title Page</h1>
                    </div>
                    <div>
                        <span className="text-body-sm text-tertiary" style={{ display: 'block', marginBottom: '0.5rem' }}>Heading 2</span>
                        <h2 className="text-h2">Section Title</h2>
                    </div>
                    <div>
                        <span className="text-body-sm text-tertiary" style={{ display: 'block', marginBottom: '0.5rem' }}>Heading 3</span>
                        <h3 className="text-h3">Subsection Title</h3>
                    </div>
                    <div>
                        <span className="text-body-sm text-tertiary" style={{ display: 'block', marginBottom: '0.5rem' }}>Heading 4</span>
                        <h4 className="text-h4">Component Title</h4>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h2 className="text-h2" style={{ marginBottom: '2rem' }}>Body Text</h2>
                <div style={{ display: 'grid', gap: '2rem' }}>
                    <div>
                        <span className="text-body-sm text-tertiary" style={{ display: 'block', marginBottom: '0.5rem' }}>Body Large</span>
                        <p className="text-body-lg">
                            The quick brown fox jumps over the lazy dog. This text is used for lead paragraphs or emphasis.
                            It offers slightly larger scale for better readability in introductions.
                        </p>
                    </div>
                    <div>
                        <span className="text-body-sm text-tertiary" style={{ display: 'block', marginBottom: '0.5rem' }}>Body Base</span>
                        <p className="text-body">
                            The quick brown fox jumps over the lazy dog. This is the default body text size (16px).
                            It is optimized for long-form reading and general content. The line height is set to ensure
                            comfortable reading rhythm.
                        </p>
                    </div>
                    <div>
                        <span className="text-body-sm text-tertiary" style={{ display: 'block', marginBottom: '0.5rem' }}>Body Small</span>
                        <p className="text-body-sm">
                            The quick brown fox jumps over the lazy dog. Small text (14px) is useful for secondary information,
                            ui labels, and supporting details.
                        </p>
                    </div>
                    <div>
                        <span className="text-body-sm text-tertiary" style={{ display: 'block', marginBottom: '0.5rem' }}>Body XS</span>
                        <p className="text-body-xs">
                            The quick brown fox jumps over the lazy dog. Extra small text (12px) for captions, legal text, or dense data.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-h2" style={{ marginBottom: '2rem' }}>Context Utilization</h2>
                <div style={{ padding: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                    <h3 className="text-h3" style={{ marginBottom: '1rem' }}>Card Component</h3>
                    <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                        This is an example of how typography works within a component context. The hierarchy must be clear.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <button className="text-body-sm font-medium" style={{ padding: '0.5rem 1rem', background: '#111827', color: '#fff', border: 'none', borderRadius: '4px' }}>
                            Primary Action
                        </button>
                        <span className="text-body-sm text-secondary">Supporting text</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TypographyShowcase;

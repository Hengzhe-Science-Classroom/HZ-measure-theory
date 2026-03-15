window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch02',
    number: 2,
    title: 'Measures',
    subtitle: 'Assigning Size to Sets with Countable Additivity',
    sections: [
        // ============================================================
        // SECTION 1: Definition and Basic Properties
        // ============================================================
        {
            id: 'definition-basic-properties',
            title: 'Definition and Basic Properties',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>From sigma-algebras to measures.</strong> In Chapter 1 we built the architecture of measurable sets: sigma-algebras that tell us <em>which</em> sets we may discuss. Now we take the decisive next step and assign a <em>size</em> to each of those sets. The resulting notion, a <strong>measure</strong>, must respect the structure of countable unions that sigma-algebras provide. This single requirement, countable additivity, turns out to be remarkably powerful: it forces monotonicity, subadditivity, and continuity properties that make the entire theory of integration possible.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define measures, state the axioms precisely, and derive the fundamental consequences: monotonicity, countable subadditivity, the inclusion-exclusion inequality, and the continuity properties that follow from countable additivity.</p>
                    <p><em>Reference alignment: Folland 1.2; Royden-Fitzpatrick 17.1; Stein-Shakarchi III.1.</em></p>
                </div>

                <h2>The Axioms of a Measure</h2>

                <p>Let \\((X, \\mathcal{M})\\) be a measurable space (a set \\(X\\) equipped with a sigma-algebra \\(\\mathcal{M}\\)). We want a function that assigns a "size" to each set in \\(\\mathcal{M}\\). The key requirements are: the empty set has size zero, and if we decompose a set into countably many disjoint pieces, the size of the whole equals the sum of the sizes of the pieces.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.1 (Measure)</div>
                    <div class="env-body">
                        <p>A <strong>measure</strong> on a measurable space \\((X, \\mathcal{M})\\) is a function \\(\\mu: \\mathcal{M} \\to [0, \\infty]\\) satisfying:</p>
                        <ol>
                            <li><strong>Null empty set:</strong> \\(\\mu(\\emptyset) = 0\\).</li>
                            <li><strong>Countable additivity (\\(\\sigma\\)-additivity):</strong> If \\(\\{E_n\\}_{n=1}^{\\infty}\\) is a sequence of pairwise disjoint sets in \\(\\mathcal{M}\\), then
                            \\[\\mu\\!\\left(\\bigsqcup_{n=1}^{\\infty} E_n\\right) = \\sum_{n=1}^{\\infty} \\mu(E_n).\\]</li>
                        </ol>
                        <p>The triple \\((X, \\mathcal{M}, \\mu)\\) is called a <strong>measure space</strong>.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Conventions)</div>
                    <div class="env-body">
                        <p>We adopt the convention that \\(0 \\cdot \\infty = 0\\) in the extended real numbers \\([0,\\infty]\\). This ensures that if \\(\\mu(E) = 0\\) and \\(E\\) is decomposed into infinitely many copies of itself (vacuously, copies of the empty set), the sums remain consistent. The codomain is \\([0,\\infty]\\), not \\([0,\\infty)\\): measures are allowed to take the value \\(+\\infty\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.2 (Finite and Probability Measures)</div>
                    <div class="env-body">
                        <p>A measure \\(\\mu\\) is called:</p>
                        <ul>
                            <li><strong>Finite</strong> if \\(\\mu(X) &lt; \\infty\\).</li>
                            <li>A <strong>probability measure</strong> if \\(\\mu(X) = 1\\).</li>
                        </ul>
                    </div>
                </div>

                <h2>Immediate Consequences</h2>

                <p>The two axioms alone yield a rich collection of properties. We derive them one by one.</p>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 2.3 (Finite Additivity)</div>
                    <div class="env-body">
                        <p>If \\(E_1, \\ldots, E_n \\in \\mathcal{M}\\) are pairwise disjoint, then \\(\\mu(E_1 \\sqcup \\cdots \\sqcup E_n) = \\mu(E_1) + \\cdots + \\mu(E_n)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Set \\(E_k = \\emptyset\\) for \\(k &gt; n\\). Then \\(\\{E_k\\}_{k=1}^{\\infty}\\) is a pairwise disjoint sequence in \\(\\mathcal{M}\\) (since \\(\\emptyset \\in \\mathcal{M}\\)), and</p>
                        \\[\\mu\\!\\left(\\bigsqcup_{k=1}^{n} E_k\\right) = \\mu\\!\\left(\\bigsqcup_{k=1}^{\\infty} E_k\\right) = \\sum_{k=1}^{\\infty} \\mu(E_k) = \\sum_{k=1}^{n} \\mu(E_k) + \\sum_{k=n+1}^{\\infty} \\mu(\\emptyset) = \\sum_{k=1}^{n} \\mu(E_k).\\]
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.4 (Monotonicity)</div>
                    <div class="env-body">
                        <p>If \\(E, F \\in \\mathcal{M}\\) with \\(E \\subseteq F\\), then \\(\\mu(E) \\leq \\mu(F)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Write \\(F = E \\sqcup (F \\setminus E)\\). Since \\(F \\setminus E \\in \\mathcal{M}\\), finite additivity gives</p>
                        \\[\\mu(F) = \\mu(E) + \\mu(F \\setminus E) \\geq \\mu(E),\\]
                        <p>because \\(\\mu(F \\setminus E) \\geq 0\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.5 (Excision / Subtractivity)</div>
                    <div class="env-body">
                        <p>If \\(E \\subseteq F\\) are in \\(\\mathcal{M}\\) and \\(\\mu(E) &lt; \\infty\\), then \\(\\mu(F \\setminus E) = \\mu(F) - \\mu(E)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>From \\(F = E \\sqcup (F \\setminus E)\\) we get \\(\\mu(F) = \\mu(E) + \\mu(F \\setminus E)\\). Since \\(\\mu(E) &lt; \\infty\\), we may subtract it from both sides.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Finiteness Hypothesis)</div>
                    <div class="env-body">
                        <p>The condition \\(\\mu(E) &lt; \\infty\\) in the excision theorem is essential. If \\(\\mu(E) = \\infty\\), then \\(\\mu(F) - \\mu(E)\\) is the indeterminate form \\(\\infty - \\infty\\). For example, on \\((\\mathbb{R}, \\mathcal{B}, m)\\) with Lebesgue measure, \\(m(\\mathbb{R}) - m(\\mathbb{R} \\setminus [0,1]) = \\infty - \\infty\\), which is meaningless.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.6 (Countable Subadditivity)</div>
                    <div class="env-body">
                        <p>For any sequence \\(\\{E_n\\}_{n=1}^{\\infty}\\) in \\(\\mathcal{M}\\) (not necessarily disjoint),</p>
                        \\[\\mu\\!\\left(\\bigcup_{n=1}^{\\infty} E_n\\right) \\leq \\sum_{n=1}^{\\infty} \\mu(E_n).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Define \\(F_1 = E_1\\) and \\(F_n = E_n \\setminus \\bigcup_{k=1}^{n-1} E_k\\) for \\(n \\geq 2\\). Then the \\(F_n\\) are pairwise disjoint, \\(F_n \\subseteq E_n\\), and \\(\\bigcup_{n} F_n = \\bigcup_{n} E_n\\). By countable additivity and monotonicity:</p>
                        \\[\\mu\\!\\left(\\bigcup_{n=1}^{\\infty} E_n\\right) = \\mu\\!\\left(\\bigsqcup_{n=1}^{\\infty} F_n\\right) = \\sum_{n=1}^{\\infty} \\mu(F_n) \\leq \\sum_{n=1}^{\\infty} \\mu(E_n).\\]
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.7 (Subadditivity Can Be Strict)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu\\) be the Lebesgue measure on \\(\\mathbb{R}\\) and set \\(E_1 = [0, 2]\\), \\(E_2 = [1, 3]\\). Then \\(\\mu(E_1 \\cup E_2) = \\mu([0, 3]) = 3\\), while \\(\\mu(E_1) + \\mu(E_2) = 2 + 2 = 4\\). The inequality is strict because \\(E_1\\) and \\(E_2\\) overlap on \\([1,2]\\).</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 2.8 (Inclusion-Exclusion for Two Sets)</div>
                    <div class="env-body">
                        <p>If \\(E, F \\in \\mathcal{M}\\) and \\(\\mu(E \\cap F) &lt; \\infty\\), then</p>
                        \\[\\mu(E \\cup F) = \\mu(E) + \\mu(F) - \\mu(E \\cap F).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Write \\(E \\cup F = E \\sqcup (F \\setminus E)\\) and note \\(F = (E \\cap F) \\sqcup (F \\setminus E)\\). By finite additivity, \\(\\mu(F \\setminus E) = \\mu(F) - \\mu(E \\cap F)\\) (using finiteness of \\(\\mu(E \\cap F)\\)). Therefore \\(\\mu(E \\cup F) = \\mu(E) + \\mu(F) - \\mu(E \\cap F)\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>
            `,
            exercises: [
                {
                    question: 'Let \\(\\mu\\) be a measure on \\((X, \\mathcal{M})\\). Prove that if \\(E_1, \\ldots, E_n \\in \\mathcal{M}\\) (not necessarily disjoint), then \\(\\mu(E_1 \\cup \\cdots \\cup E_n) \\leq \\mu(E_1) + \\cdots + \\mu(E_n)\\).',
                    hint: 'Use the disjointification trick: set \\(F_k = E_k \\setminus \\bigcup_{j < k} E_j\\).',
                    solution: 'Define \\(F_1 = E_1\\), \\(F_k = E_k \\setminus (E_1 \\cup \\cdots \\cup E_{k-1})\\) for \\(k \\geq 2\\). The \\(F_k\\) are pairwise disjoint with \\(\\bigcup F_k = \\bigcup E_k\\), and \\(F_k \\subseteq E_k\\). By finite additivity and monotonicity: \\(\\mu(\\bigcup E_k) = \\sum \\mu(F_k) \\leq \\sum \\mu(E_k)\\).'
                },
                {
                    question: 'Let \\(\\mu\\) be a measure and \\(E, F \\in \\mathcal{M}\\). Prove that \\(\\mu(E \\cup F) + \\mu(E \\cap F) = \\mu(E) + \\mu(F)\\), provided all terms are finite.',
                    hint: 'Decompose \\(E \\cup F\\) and \\(E\\) and \\(F\\) into three disjoint pieces: \\(E \\setminus F\\), \\(E \\cap F\\), \\(F \\setminus E\\).',
                    solution: 'Write \\(E \\cup F = (E \\setminus F) \\sqcup (E \\cap F) \\sqcup (F \\setminus E)\\), \\(E = (E \\setminus F) \\sqcup (E \\cap F)\\), \\(F = (E \\cap F) \\sqcup (F \\setminus E)\\). Letting \\(a = \\mu(E \\setminus F)\\), \\(b = \\mu(E \\cap F)\\), \\(c = \\mu(F \\setminus E)\\), we get \\(\\mu(E \\cup F) + \\mu(E \\cap F) = (a + b + c) + b = (a + b) + (b + c) = \\mu(E) + \\mu(F)\\).'
                },
                {
                    question: 'Show that countable additivity implies finite additivity, and give an example showing the converse is false. (Hint: consider the set function on \\(\\mathcal{P}(\\mathbb{N})\\) defined by \\(\\mu(E) = 0\\) if \\(E\\) is finite and \\(\\mu(E) = \\infty\\) if \\(E\\) is infinite.)',
                    hint: 'Countable additivity implies finite additivity by padding with empty sets. For the converse, check whether the given \\(\\mu\\) is finitely additive but not countably additive.',
                    solution: 'Countable additivity implies finite additivity by setting \\(E_k = \\emptyset\\) for \\(k > n\\). For the counterexample: let \\(\\mu(E) = 0\\) if \\(E\\) is finite and \\(\\mu(E) = \\infty\\) if \\(E\\) is infinite. This is finitely additive (the union of finitely many finite sets is finite; if any is infinite, both sides are \\(\\infty\\)). But \\(\\mathbb{N} = \\bigsqcup_{n=1}^{\\infty} \\{n\\}\\), giving \\(\\mu(\\mathbb{N}) = \\infty\\) while \\(\\sum \\mu(\\{n\\}) = 0\\). So countable additivity fails.'
                },
                {
                    question: '(Boole inequality) Let \\(\\mu\\) be a probability measure and \\(E_1, E_2, \\ldots \\in \\mathcal{M}\\). Prove that \\(\\mu\\!\\left(\\bigcup_{n=1}^{\\infty} E_n\\right) \\leq \\sum_{n=1}^{\\infty} \\mu(E_n)\\), and deduce that if \\(\\sum \\mu(E_n) &lt; 1\\), then the complement \\(\\left(\\bigcup E_n\\right)^c\\) has positive measure.',
                    hint: 'The first part is countable subadditivity. For the second part, use \\(\\mu(X) = 1\\).',
                    solution: 'Countable subadditivity gives \\(\\mu(\\bigcup E_n) \\leq \\sum \\mu(E_n) < 1\\). Since \\(\\mu(X) = 1\\), we have \\(\\mu((\\bigcup E_n)^c) = 1 - \\mu(\\bigcup E_n) \\geq 1 - \\sum \\mu(E_n) > 0\\).'
                }
            ],
            visualizations: []
        },

        // ============================================================
        // SECTION 2: Examples of Measures
        // ============================================================
        {
            id: 'examples-of-measures',
            title: 'Examples of Measures',
            content: `
                <div class="bridge section-bridge">
                    <p>Having established the axioms and their consequences, we now build intuition by examining the most important concrete measures. These examples illustrate the range and flexibility of the measure concept: from the purely discrete counting measure to the Lebesgue measure that underlies all of calculus, from atomic point masses to the mysterious Hausdorff measures that assign fractional-dimensional sizes to fractals.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Present the key examples of measures (counting measure, Dirac mass, Lebesgue measure, discrete probability measures, Hausdorff measures) and highlight how they differ in character.</p>
                </div>

                <h2>Counting Measure</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.9 (Counting Measure)</div>
                    <div class="env-body">
                        <p>On any measurable space \\((X, \\mathcal{M})\\), the <strong>counting measure</strong> \\(\\#\\) (also written \\(\\mu_c\\)) is defined by</p>
                        \\[\\#(E) = \\begin{cases} |E| & \\text{if } E \\text{ is finite,} \\\\ \\infty & \\text{if } E \\text{ is infinite.} \\end{cases}\\]
                        <p>Here \\(|E|\\) denotes the cardinality of \\(E\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.10</div>
                    <div class="env-body">
                        <p>On \\((\\mathbb{N}, \\mathcal{P}(\\mathbb{N}), \\#)\\): \\(\\#(\\{2, 5, 7\\}) = 3\\), \\(\\#(\\text{even numbers}) = \\infty\\), \\(\\#(\\emptyset) = 0\\). Integration with respect to counting measure recovers summation: \\(\\int f \\, d\\# = \\sum_{n} f(n)\\).</p>
                    </div>
                </div>

                <h2>Dirac (Point) Mass</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.11 (Dirac Measure)</div>
                    <div class="env-body">
                        <p>For a fixed point \\(x_0 \\in X\\), the <strong>Dirac measure</strong> (or point mass) at \\(x_0\\) is</p>
                        \\[\\delta_{x_0}(E) = \\begin{cases} 1 & \\text{if } x_0 \\in E, \\\\ 0 & \\text{if } x_0 \\notin E. \\end{cases}\\]
                        <p>This is a probability measure concentrated at a single point.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.12</div>
                    <div class="env-body">
                        <p>On \\(\\mathbb{R}\\) with the Borel sigma-algebra, \\(\\delta_0([{-1}, 1]) = 1\\) and \\(\\delta_0((0, 1]) = 0\\). Integration against the Dirac measure evaluates the function: \\(\\int f \\, d\\delta_{x_0} = f(x_0)\\).</p>
                    </div>
                </div>

                <h2>Lebesgue Measure (Preview)</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.13 (Lebesgue Measure, Stated Without Construction)</div>
                    <div class="env-body">
                        <p>There exists a unique measure \\(m\\) on \\((\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))\\) such that \\(m([a, b]) = b - a\\) for every bounded interval \\([a, b]\\). This is the <strong>Lebesgue measure</strong>. It extends to a complete measure on the Lebesgue sigma-algebra \\(\\mathcal{L}\\) (see Ch. 3 and 4 for the construction via Caratheodory's theorem).</p>
                        <p>Key properties: translation-invariant (\\(m(E + x) = m(E)\\)), dilation-compatible (\\(m(cE) = |c| \\cdot m(E)\\)), and sigma-finite.</p>
                    </div>
                </div>

                <h2>Discrete Probability Measures</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.14 (Weighted Counting / Discrete Probability Measure)</div>
                    <div class="env-body">
                        <p>Let \\(\\{x_n\\}_{n=1}^{\\infty} \\subseteq X\\) and let \\(\\{p_n\\}_{n=1}^{\\infty}\\) be non-negative reals with \\(\\sum p_n = 1\\). The <strong>discrete probability measure</strong> is</p>
                        \\[\\mu(E) = \\sum_{n=1}^{\\infty} p_n \\, \\delta_{x_n}(E) = \\sum_{n: x_n \\in E} p_n.\\]
                        <p>Every probability measure on a countable space takes this form.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.15 (Coin Flips and Poisson)</div>
                    <div class="env-body">
                        <p>(a) The fair-coin measure on \\(\\{H, T\\}\\): \\(p_H = p_T = 1/2\\).</p>
                        <p>(b) The Poisson measure on \\(\\mathbb{N}_0 = \\{0, 1, 2, \\ldots\\}\\) with parameter \\(\\lambda &gt; 0\\): \\(p_k = e^{-\\lambda} \\lambda^k / k!\\).</p>
                    </div>
                </div>

                <h2>Hausdorff Measures (Preview)</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.16 (Hausdorff Measures, Informal)</div>
                    <div class="env-body">
                        <p>For \\(s \\geq 0\\), the \\(s\\)-dimensional Hausdorff measure \\(\\mathcal{H}^s\\) on \\(\\mathbb{R}^n\\) generalizes the notion of "size" to fractional dimensions. Informally, \\(\\mathcal{H}^s\\) covers a set \\(E\\) by countably many sets of diameter at most \\(\\delta\\), sums the \\(s\\)-th powers of their diameters, and takes the limit as \\(\\delta \\to 0\\). When \\(s = n\\) is a non-negative integer, \\(\\mathcal{H}^n\\) agrees (up to a normalizing constant) with the \\(n\\)-dimensional Lebesgue measure. See Chapter 17 for the formal construction.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="counting-vs-lebesgue"></div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Discrete vs. Continuous)</div>
                    <div class="env-body">
                        <p>The counting measure and the Lebesgue measure sit at opposite ends of a spectrum. Counting measure gives every singleton the same weight \\(1\\); Lebesgue measure gives every singleton weight \\(0\\) and instead accumulates "mass" over intervals. The Dirac measure interpolates in a sense: it concentrates all mass at one point but totals exactly \\(1\\). Discrete probability measures build general distributions from Dirac masses. These examples illustrate that the measure axioms accommodate both discrete and continuous notions of "size."</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'counting-vs-lebesgue',
                    title: 'Counting Measure vs. Lebesgue Measure',
                    description: 'Compare how counting and Lebesgue measures assign size to the same subsets of the real line.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 560;
                        canvas.height = 380;
                        canvas.style.width = '100%';
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', text: '#c9d1d9', muted: '#6e7681',
                            blue: '#58a6ff', teal: '#3fb9a0', orange: '#f0883e',
                            green: '#3fb950', purple: '#bc8cff', red: '#f85149',
                            grid: '#1a1a40', axis: '#4a4a7a', white: '#f0f6fc'
                        };

                        var setChoice = 0;
                        var setNames = ['{1, 2, 3}', '[0, 3]', '{1, 2, ..., 10}', '[0,1] \u222A [2,3]'];
                        var countVals = [3, '\u221E', 10, '\u221E'];
                        var lebVals  = [0, 3, 0, 2];

                        function createBtn(label, idx) {
                            var b = document.createElement('button');
                            b.textContent = label;
                            b.style.cssText = 'padding:4px 10px;margin:2px 4px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.78rem;cursor:pointer;';
                            b.addEventListener('click', function() { setChoice = idx; draw(); });
                            controls.appendChild(b);
                        }
                        createBtn('{1,2,3}', 0);
                        createBtn('[0, 3]', 1);
                        createBtn('{1,...,10}', 2);
                        createBtn('[0,1]\u222A[2,3]', 3);

                        function draw() {
                            var W = canvas.width, H = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            // Title
                            ctx.fillStyle = colors.white;
                            ctx.font = 'bold 15px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Counting Measure vs. Lebesgue Measure', W / 2, 25);

                            // Number line
                            var lineY = 100, left = 60, right = W - 60;
                            var xMin = -0.5, xMax = 10.5;
                            function toSx(x) { return left + (x - xMin) / (xMax - xMin) * (right - left); }

                            ctx.strokeStyle = colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(left, lineY);
                            ctx.lineTo(right, lineY);
                            ctx.stroke();

                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var i = 0; i <= 10; i++) {
                                var sx = toSx(i);
                                ctx.beginPath();
                                ctx.moveTo(sx, lineY - 5);
                                ctx.lineTo(sx, lineY + 5);
                                ctx.stroke();
                                ctx.fillText(String(i), sx, lineY + 18);
                            }

                            // Highlight selected set
                            if (setChoice === 0) {
                                [1, 2, 3].forEach(function(p) {
                                    ctx.fillStyle = colors.blue + '99';
                                    ctx.beginPath(); ctx.arc(toSx(p), lineY, 7, 0, 2 * Math.PI); ctx.fill();
                                    ctx.fillStyle = colors.blue;
                                    ctx.beginPath(); ctx.arc(toSx(p), lineY, 4, 0, 2 * Math.PI); ctx.fill();
                                });
                            } else if (setChoice === 1) {
                                ctx.fillStyle = colors.teal + '44';
                                ctx.fillRect(toSx(0), lineY - 10, toSx(3) - toSx(0), 20);
                                ctx.strokeStyle = colors.teal;
                                ctx.lineWidth = 2;
                                ctx.strokeRect(toSx(0), lineY - 10, toSx(3) - toSx(0), 20);
                            } else if (setChoice === 2) {
                                for (var k = 1; k <= 10; k++) {
                                    ctx.fillStyle = colors.orange + '99';
                                    ctx.beginPath(); ctx.arc(toSx(k), lineY, 7, 0, 2 * Math.PI); ctx.fill();
                                    ctx.fillStyle = colors.orange;
                                    ctx.beginPath(); ctx.arc(toSx(k), lineY, 4, 0, 2 * Math.PI); ctx.fill();
                                }
                            } else {
                                ctx.fillStyle = colors.green + '44';
                                ctx.fillRect(toSx(0), lineY - 10, toSx(1) - toSx(0), 20);
                                ctx.fillRect(toSx(2), lineY - 10, toSx(3) - toSx(2), 20);
                                ctx.strokeStyle = colors.green;
                                ctx.lineWidth = 2;
                                ctx.strokeRect(toSx(0), lineY - 10, toSx(1) - toSx(0), 20);
                                ctx.strokeRect(toSx(2), lineY - 10, toSx(3) - toSx(2), 20);
                            }

                            ctx.fillStyle = colors.white;
                            ctx.font = '14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Set E = ' + setNames[setChoice], W / 2, lineY + 50);

                            // Comparison bars
                            var barTop = 180, barH = 40, barMaxW = 200, barLeft = W / 2 - barMaxW - 40;

                            // Counting
                            ctx.fillStyle = colors.white;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('Counting #(E):', barLeft - 10, barTop + barH / 2 + 5);

                            var cVal = countVals[setChoice];
                            if (cVal === '\u221E') {
                                ctx.fillStyle = colors.blue + '66';
                                ctx.fillRect(barLeft, barTop, barMaxW * 2 + 80, barH);
                                ctx.fillStyle = colors.white;
                                ctx.font = 'bold 16px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('\u221E', barLeft + barMaxW + 40, barTop + barH / 2 + 6);
                            } else {
                                var cW = (cVal / 10) * barMaxW * 2;
                                ctx.fillStyle = colors.blue + '88';
                                ctx.fillRect(barLeft, barTop, cW, barH);
                                ctx.strokeStyle = colors.blue; ctx.lineWidth = 1;
                                ctx.strokeRect(barLeft, barTop, cW, barH);
                                ctx.fillStyle = colors.white;
                                ctx.font = 'bold 16px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(String(cVal), barLeft + cW / 2, barTop + barH / 2 + 6);
                            }

                            // Lebesgue
                            var barTop2 = barTop + barH + 30;
                            ctx.fillStyle = colors.white;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('Lebesgue m(E):', barLeft - 10, barTop2 + barH / 2 + 5);

                            var lVal = lebVals[setChoice];
                            if (lVal === 0) {
                                ctx.strokeStyle = colors.teal; ctx.lineWidth = 2;
                                ctx.strokeRect(barLeft, barTop2, 2, barH);
                                ctx.fillStyle = colors.white;
                                ctx.font = 'bold 16px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('0', barLeft + 8, barTop2 + barH / 2 + 6);
                            } else {
                                var lW = (lVal / 10) * barMaxW * 2;
                                ctx.fillStyle = colors.teal + '88';
                                ctx.fillRect(barLeft, barTop2, lW, barH);
                                ctx.strokeStyle = colors.teal; ctx.lineWidth = 1;
                                ctx.strokeRect(barLeft, barTop2, lW, barH);
                                ctx.fillStyle = colors.white;
                                ctx.font = 'bold 16px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(String(lVal), barLeft + lW / 2, barTop2 + barH / 2 + 6);
                            }

                            // Observation
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            if (setChoice === 0 || setChoice === 2) {
                                ctx.fillText('Finite sets: counting measure is finite, Lebesgue measure is 0 (singletons have zero length).', W / 2, barTop2 + barH + 30);
                            } else {
                                ctx.fillText('Intervals: counting measure is infinite (uncountably many points), Lebesgue measure equals length.', W / 2, barTop2 + barH + 30);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify that the counting measure is indeed a measure. That is, check that \\(\\#(\\emptyset) = 0\\) and that \\(\\#\\) is countably additive on \\(\\mathcal{P}(X)\\).',
                    hint: 'For countable additivity, consider two cases: all \\(E_n\\) are finite, or at least one is infinite.',
                    solution: 'Clearly \\(\\#(\\emptyset) = 0\\). For countable additivity: let \\(\\{E_n\\}\\) be pairwise disjoint. If any \\(E_k\\) is infinite, then \\(\\bigcup E_n\\) is infinite, so both sides are \\(\\infty\\). If all \\(E_n\\) are finite: if infinitely many are nonempty, the union is infinite and the sum is infinite (sum of infinitely many positive integers diverges). If only finitely many are nonempty, the union has \\(\\sum |E_n|\\) elements (they are disjoint), so \\(\\#(\\bigcup E_n) = \\sum \\#(E_n)\\).'
                },
                {
                    question: 'Let \\(\\mu = 3\\delta_0 + 2\\delta_1\\) on \\((\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))\\). Compute \\(\\mu([0, 1])\\), \\(\\mu((0, 1))\\), \\(\\mu(\\{0\\})\\), and \\(\\mu(\\mathbb{R})\\).',
                    hint: 'A linear combination of Dirac measures assigns mass to a set if and only if the relevant points are in the set.',
                    solution: '\\(\\mu([0,1]) = 3\\delta_0([0,1]) + 2\\delta_1([0,1]) = 3 + 2 = 5\\). \\(\\mu((0,1)) = 3 \\cdot 0 + 2 \\cdot 0 = 0\\). \\(\\mu(\\{0\\}) = 3\\). \\(\\mu(\\mathbb{R}) = 3 + 2 = 5\\).'
                },
                {
                    question: 'Prove that the Lebesgue measure of any singleton \\(\\{x\\}\\) is zero. Deduce that any countable subset of \\(\\mathbb{R}\\) has Lebesgue measure zero.',
                    hint: 'For the singleton, write \\(\\{x\\} = \\bigcap_{n=1}^{\\infty} [x - 1/n, x + 1/n]\\) and use continuity from above (or monotonicity). For the countable set, use countable subadditivity.',
                    solution: 'We have \\(\\{x\\} \\subseteq [x - 1/n, x + 1/n]\\) for all \\(n\\), so \\(m(\\{x\\}) \\leq m([x-1/n, x+1/n]) = 2/n \\to 0\\). Hence \\(m(\\{x\\}) = 0\\). If \\(S = \\{x_1, x_2, \\ldots\\}\\) is countable, then \\(m(S) \\leq \\sum m(\\{x_n\\}) = 0\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Continuity Properties
        // ============================================================
        {
            id: 'continuity-properties',
            title: 'Continuity Properties',
            content: `
                <div class="bridge section-bridge">
                    <p>The basic properties of Section 1 (monotonicity, subadditivity) arise from considering finite or arbitrary collections. When we exploit the <em>sequential</em> structure of sigma-algebras (closure under countable operations), we discover that measures exhibit a continuity that mirrors the continuity of functions on the real line. Measures "commute with limits" of increasing and decreasing sequences of sets. These continuity properties are indispensable throughout integration theory and probability.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove continuity from below and continuity from above for measures, and explain precisely where the finiteness hypothesis is needed in the latter.</p>
                </div>

                <h2>Continuity from Below</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.17 (Continuity from Below)</div>
                    <div class="env-body">
                        <p>Let \\(\\{E_n\\}_{n=1}^{\\infty}\\) be an <strong>increasing</strong> sequence in \\(\\mathcal{M}\\): \\(E_1 \\subseteq E_2 \\subseteq E_3 \\subseteq \\cdots\\). Set \\(E = \\bigcup_{n=1}^{\\infty} E_n\\). Then</p>
                        \\[\\mu(E) = \\lim_{n \\to \\infty} \\mu(E_n).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Step 1 (Disjointification).</strong> Define \\(F_1 = E_1\\) and \\(F_n = E_n \\setminus E_{n-1}\\) for \\(n \\geq 2\\). Then the \\(F_n\\) are pairwise disjoint (since \\(F_n \\subseteq E_n \\setminus E_{n-1}\\) and the \\(E_n\\) are nested), and</p>
                        \\[\\bigcup_{n=1}^{\\infty} F_n = \\bigcup_{n=1}^{\\infty} E_n = E.\\]

                        <p><strong>Step 2 (Telescoping).</strong> Note that \\(E_n = F_1 \\sqcup F_2 \\sqcup \\cdots \\sqcup F_n\\). By finite additivity,</p>
                        \\[\\mu(E_n) = \\sum_{k=1}^{n} \\mu(F_k).\\]

                        <p><strong>Step 3 (Apply countable additivity).</strong></p>
                        \\[\\mu(E) = \\mu\\!\\left(\\bigsqcup_{n=1}^{\\infty} F_n\\right) = \\sum_{n=1}^{\\infty} \\mu(F_n) = \\lim_{N \\to \\infty} \\sum_{n=1}^{N} \\mu(F_n) = \\lim_{N \\to \\infty} \\mu(E_N).\\]
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>No finiteness assumption is needed for continuity from below. The limit \\(\\lim \\mu(E_n)\\) always exists (possibly as \\(+\\infty\\)) because the sequence \\(\\mu(E_n)\\) is non-decreasing (by monotonicity).</p>
                    </div>
                </div>

                <h2>Continuity from Above</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.18 (Continuity from Above)</div>
                    <div class="env-body">
                        <p>Let \\(\\{E_n\\}_{n=1}^{\\infty}\\) be a <strong>decreasing</strong> sequence in \\(\\mathcal{M}\\): \\(E_1 \\supseteq E_2 \\supseteq E_3 \\supseteq \\cdots\\). Set \\(E = \\bigcap_{n=1}^{\\infty} E_n\\). <strong>If \\(\\mu(E_1) &lt; \\infty\\)</strong>, then</p>
                        \\[\\mu(E) = \\lim_{n \\to \\infty} \\mu(E_n).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Step 1 (Reduce to continuity from below).</strong> Define \\(G_n = E_1 \\setminus E_n\\). Since \\(E_n\\) is decreasing, \\(G_n\\) is increasing: \\(G_1 \\subseteq G_2 \\subseteq \\cdots\\). Moreover,</p>
                        \\[\\bigcup_{n=1}^{\\infty} G_n = E_1 \\setminus \\bigcap_{n=1}^{\\infty} E_n = E_1 \\setminus E.\\]

                        <p><strong>Step 2 (Apply continuity from below to \\(\\{G_n\\}\\)).</strong></p>
                        \\[\\mu(E_1 \\setminus E) = \\lim_{n \\to \\infty} \\mu(G_n) = \\lim_{n \\to \\infty} \\mu(E_1 \\setminus E_n).\\]

                        <p><strong>Step 3 (Use excision).</strong> Since \\(E \\subseteq E_n \\subseteq E_1\\) and \\(\\mu(E_1) &lt; \\infty\\), the excision theorem gives \\(\\mu(E_1 \\setminus E_n) = \\mu(E_1) - \\mu(E_n)\\) and \\(\\mu(E_1 \\setminus E) = \\mu(E_1) - \\mu(E)\\). Substituting:</p>
                        \\[\\mu(E_1) - \\mu(E) = \\lim_{n \\to \\infty} [\\mu(E_1) - \\mu(E_n)] = \\mu(E_1) - \\lim_{n \\to \\infty} \\mu(E_n).\\]
                        <p>Since \\(\\mu(E_1) &lt; \\infty\\), we may cancel it from both sides to obtain \\(\\mu(E) = \\lim_{n \\to \\infty} \\mu(E_n)\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Finiteness is Essential for Continuity from Above)</div>
                    <div class="env-body">
                        <p>Without the assumption \\(\\mu(E_1) &lt; \\infty\\), the conclusion can fail. Consider \\(E_n = [n, \\infty)\\) in \\((\\mathbb{R}, \\mathcal{B}, m)\\). Then \\(E_1 \\supseteq E_2 \\supseteq \\cdots\\) and \\(\\bigcap E_n = \\emptyset\\). We have \\(m(E_n) = \\infty\\) for all \\(n\\), so \\(\\lim m(E_n) = \\infty \\neq 0 = m(\\emptyset)\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="measure-continuity-demo"></div>

                <div class="env-block example">
                    <div class="env-title">Example 2.19 (Continuity from Below Applied)</div>
                    <div class="env-body">
                        <p>Let \\(E_n = [0, 1 - 1/n]\\). Then \\(E_n \\uparrow E = [0, 1)\\) and \\(m(E) = \\lim m(E_n) = \\lim (1 - 1/n) = 1\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.20 (Continuity from Above Applied)</div>
                    <div class="env-body">
                        <p>Let \\(E_n = [0, 1 + 1/n]\\). Then \\(E_n \\downarrow E = [0, 1]\\), and since \\(m(E_1) = 2 &lt; \\infty\\), we conclude \\(m(E) = \\lim m(E_n) = \\lim (1 + 1/n) = 1\\).</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 2.21 (Characterization of Countable Additivity)</div>
                    <div class="env-body">
                        <p>A finitely additive set function \\(\\mu: \\mathcal{M} \\to [0, \\infty]\\) with \\(\\mu(\\emptyset) = 0\\) is a measure (i.e., countably additive) if and only if it is continuous from below: \\(E_n \\uparrow E \\Rightarrow \\mu(E_n) \\to \\mu(E)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(\\(\\Rightarrow\\)) Already proved above.</p>
                        <p>(\\(\\Leftarrow\\)) Let \\(\\{F_n\\}\\) be pairwise disjoint in \\(\\mathcal{M}\\). Set \\(E_n = \\bigsqcup_{k=1}^{n} F_k\\). Then \\(E_n \\uparrow E = \\bigsqcup_{k=1}^{\\infty} F_k\\). Continuity from below and finite additivity give:</p>
                        \\[\\mu(E) = \\lim_{n \\to \\infty} \\mu(E_n) = \\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\mu(F_k) = \\sum_{k=1}^{\\infty} \\mu(F_k).\\]
                        <div class="qed">&#8718;</div>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'measure-continuity-demo',
                    title: 'Measure Continuity Demo',
                    description: 'Animate an increasing or decreasing sequence of sets and watch the measure converge to the limit.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 560;
                        canvas.height = 380;
                        canvas.style.width = '100%';
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', text: '#c9d1d9', muted: '#6e7681',
                            blue: '#58a6ff', teal: '#3fb9a0', orange: '#f0883e',
                            green: '#3fb950', purple: '#bc8cff', red: '#f85149',
                            axis: '#4a4a7a', white: '#f0f6fc'
                        };

                        var mode = 'below';
                        var nVal = 1;
                        var animId = null;

                        var btnBelow = document.createElement('button');
                        btnBelow.textContent = 'From Below (E_n \u2191)';
                        btnBelow.style.cssText = 'padding:4px 10px;margin:2px 4px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.78rem;cursor:pointer;';
                        btnBelow.addEventListener('click', function() { mode = 'below'; nVal = 1; });
                        controls.appendChild(btnBelow);

                        var btnAbove = document.createElement('button');
                        btnAbove.textContent = 'From Above (E_n \u2193)';
                        btnAbove.style.cssText = 'padding:4px 10px;margin:2px 4px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.78rem;cursor:pointer;';
                        btnAbove.addEventListener('click', function() { mode = 'above'; nVal = 1; });
                        controls.appendChild(btnAbove);

                        function draw() {
                            var W = canvas.width, H = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var lineY = 80, left = 60, right = W - 60;
                            var xMin = -0.2, xMax = 2.2;
                            function toSx(x) { return left + (x - xMin) / (xMax - xMin) * (right - left); }

                            ctx.fillStyle = colors.white;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            if (mode === 'below') {
                                ctx.fillText('Continuity from Below:  E_n = [0, 1 - 1/n] \u2191 [0, 1)', W / 2, 25);
                            } else {
                                ctx.fillText('Continuity from Above:  E_n = [0, 1 + 1/n] \u2193 [0, 1]', W / 2, 25);
                            }

                            ctx.strokeStyle = colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(left, lineY);
                            ctx.lineTo(right, lineY);
                            ctx.stroke();

                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            [0, 0.5, 1, 1.5, 2].forEach(function(t) {
                                var sx = toSx(t);
                                ctx.beginPath(); ctx.moveTo(sx, lineY - 4); ctx.lineTo(sx, lineY + 4); ctx.stroke();
                                ctx.fillText(t.toFixed(1), sx, lineY + 17);
                            });

                            var n = Math.min(Math.floor(nVal), 50);
                            var a, b, limitA, limitB, measureN, limitMeasure;

                            if (mode === 'below') {
                                a = 0; b = (n >= 50) ? 1 : 1 - 1 / Math.max(n, 1);
                                limitA = 0; limitB = 1;
                                measureN = b - a;
                                limitMeasure = 1;
                            } else {
                                a = 0; b = (n >= 50) ? 1 : 1 + 1 / Math.max(n, 1);
                                limitA = 0; limitB = 1;
                                measureN = b - a;
                                limitMeasure = 1;
                            }

                            // Limit set (faint)
                            ctx.fillStyle = colors.muted + '33';
                            ctx.fillRect(toSx(limitA), lineY - 16, toSx(limitB) - toSx(limitA), 32);

                            // Current set
                            var col = mode === 'below' ? colors.teal : colors.orange;
                            ctx.fillStyle = col + '66';
                            ctx.fillRect(toSx(a), lineY - 12, toSx(b) - toSx(a), 24);
                            ctx.strokeStyle = col;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(toSx(a), lineY - 12, toSx(b) - toSx(a), 24);

                            ctx.fillStyle = colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            var nDisp = (n >= 50) ? '\u221E' : String(n);
                            ctx.fillText('n = ' + nDisp, W / 2, lineY + 45);
                            ctx.fillText('\u03BC(E_n) = ' + measureN.toFixed(4), W / 2, lineY + 65);
                            ctx.fillStyle = colors.muted;
                            ctx.fillText('limit \u03BC(E) = ' + limitMeasure.toFixed(1), W / 2, lineY + 85);

                            // Convergence graph
                            var graphTop = 190, graphBot = H - 30, graphLeft = 80, graphRight = W - 40;
                            ctx.strokeStyle = colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(graphLeft, graphBot); ctx.lineTo(graphRight, graphBot); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(graphLeft, graphBot); ctx.lineTo(graphLeft, graphTop); ctx.stroke();

                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('n', (graphLeft + graphRight) / 2, graphBot + 18);
                            ctx.save();
                            ctx.translate(graphLeft - 30, (graphTop + graphBot) / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('\u03BC(E_n)', 0, 0);
                            ctx.restore();

                            var maxN = 20;
                            var yMin = mode === 'below' ? 0 : 0.8;
                            var yMax = mode === 'below' ? 1.2 : 2.2;
                            function toGx(nn) { return graphLeft + (nn / maxN) * (graphRight - graphLeft); }
                            function toGy(v) { return graphBot - ((v - yMin) / (yMax - yMin)) * (graphBot - graphTop); }

                            // Limit line
                            ctx.strokeStyle = colors.muted;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath(); ctx.moveTo(graphLeft, toGy(limitMeasure)); ctx.lineTo(graphRight, toGy(limitMeasure)); ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = colors.muted;
                            ctx.textAlign = 'left';
                            ctx.fillText('\u03BC(E) = ' + limitMeasure, graphRight + 4, toGy(limitMeasure) + 4);

                            ctx.textAlign = 'right';
                            [0, 0.5, 1, 1.5, 2].forEach(function(v) {
                                if (v >= yMin && v <= yMax) {
                                    ctx.fillText(v.toFixed(1), graphLeft - 6, toGy(v) + 4);
                                }
                            });

                            var plotN = Math.min(Math.floor(nVal), maxN);
                            ctx.strokeStyle = col;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 1; i <= plotN; i++) {
                                var val = mode === 'below' ? (1 - 1 / i) : (1 + 1 / i);
                                var gx = toGx(i), gy = toGy(val);
                                if (i === 1) ctx.moveTo(gx, gy); else ctx.lineTo(gx, gy);
                            }
                            ctx.stroke();

                            for (var i = 1; i <= plotN; i++) {
                                var val = mode === 'below' ? (1 - 1 / i) : (1 + 1 / i);
                                var gx = toGx(i), gy = toGy(val);
                                ctx.fillStyle = col;
                                ctx.beginPath(); ctx.arc(gx, gy, 3, 0, 2 * Math.PI); ctx.fill();
                            }

                            if (nVal < 50) {
                                nVal += 0.06;
                            }
                            animId = requestAnimationFrame(draw);
                        }

                        draw();

                        return {
                            stopAnimation: function() {
                                if (animId) { cancelAnimationFrame(animId); animId = null; }
                            }
                        };
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(E_n = (0, 1/n)\\) for \\(n \\geq 1\\). Compute \\(\\bigcap_{n=1}^{\\infty} E_n\\) and verify that continuity from above applies (or explain why it does not).',
                    hint: 'Is \\(m(E_1) < \\infty\\)? What is the intersection?',
                    solution: 'We have \\(m(E_1) = m((0,1)) = 1 < \\infty\\), so continuity from above applies. The intersection \\(\\bigcap E_n = \\emptyset\\) (if \\(x > 0\\), then \\(x \\notin (0, 1/n)\\) for \\(n > 1/x\\)). Therefore \\(m(\\bigcap E_n) = \\lim m((0,1/n)) = \\lim 1/n = 0\\). Consistent with \\(m(\\emptyset) = 0\\).'
                },
                {
                    question: 'Let \\(E_n = [n, \\infty)\\) with Lebesgue measure. Show that \\(\\lim m(E_n) \\neq m(\\bigcap E_n)\\), and explain which hypothesis of continuity from above fails.',
                    hint: 'Compute \\(m(E_n)\\) and \\(m(\\bigcap E_n)\\) directly.',
                    solution: 'Each \\(m(E_n) = \\infty\\), so \\(\\lim m(E_n) = \\infty\\). But \\(\\bigcap E_n = \\emptyset\\) (no real number is \\(\\geq n\\) for all \\(n\\)), so \\(m(\\bigcap E_n) = 0\\). The failure is that \\(m(E_1) = \\infty\\); the finiteness hypothesis of Theorem 2.18 is violated.'
                },
                {
                    question: 'Prove Corollary 2.21: a finitely additive function \\(\\mu: \\mathcal{M} \\to [0,\\infty]\\) with \\(\\mu(\\emptyset) = 0\\) is countably additive if and only if it is continuous from below.',
                    hint: 'The forward direction is Theorem 2.17. For the reverse, apply continuity from below to partial unions of a disjoint sequence.',
                    solution: '(\\(\\Rightarrow\\)) Theorem 2.17. (\\(\\Leftarrow\\)) Let \\(\\{F_n\\}\\) be pairwise disjoint. Set \\(E_N = \\bigsqcup_{k=1}^{N} F_k\\). Then \\(E_N \\uparrow \\bigsqcup_{k=1}^{\\infty} F_k\\). By continuity from below: \\(\\mu(\\bigsqcup F_k) = \\lim \\mu(E_N) = \\lim \\sum_{k=1}^{N} \\mu(F_k) = \\sum_{k=1}^{\\infty} \\mu(F_k)\\).'
                },
                {
                    question: '(Continuity from above for probability) Let \\((\\Omega, \\mathcal{F}, P)\\) be a probability space and let \\(A_n \\downarrow A\\). Explain why no extra finiteness assumption is needed.',
                    hint: 'What is \\(P(A_1)\\)?',
                    solution: 'Since \\(P\\) is a probability measure, \\(P(A_1) \\leq P(\\Omega) = 1 < \\infty\\). The finiteness hypothesis \\(\\mu(E_1) < \\infty\\) of Theorem 2.18 is automatically satisfied. So \\(P(A) = \\lim P(A_n)\\) with no extra assumption.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Complete Measures and Null Sets
        // ============================================================
        {
            id: 'complete-measures-null-sets',
            title: 'Complete Measures and Null Sets',
            content: `
                <div class="bridge section-bridge">
                    <p>In practice, we often want to ignore "negligible" sets, those of measure zero. But a subtlety arises: if \\(N\\) has measure zero, must every subset of \\(N\\) also be measurable? In general, the answer is no. The notion of a <em>complete</em> measure resolves this issue by requiring that all subsets of null sets belong to the sigma-algebra. Completeness is technically important: the Lebesgue measure is complete, but the Borel measure on \\(\\mathbb{R}\\) is not.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define null sets, completeness, and the completion of a measure space. Explain why completeness matters and how to achieve it.</p>
                </div>

                <h2>Null Sets and "Almost Everywhere"</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.22 (Null Set)</div>
                    <div class="env-body">
                        <p>A set \\(N \\in \\mathcal{M}\\) is called a <strong>null set</strong> (or <strong>measure-zero set</strong>) if \\(\\mu(N) = 0\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.23 (Almost Everywhere)</div>
                    <div class="env-body">
                        <p>A property \\(P(x)\\) holds <strong>almost everywhere</strong> (abbreviated <strong>a.e.</strong>) or <strong>\\(\\mu\\)-almost everywhere</strong> if the set \\(\\{x \\in X : P(x) \\text{ is false}\\}\\) is contained in a null set. In probability theory, "a.e." is replaced by "almost surely" (a.s.).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.24</div>
                    <div class="env-body">
                        <p>(a) The rationals \\(\\mathbb{Q}\\) have Lebesgue measure zero, so any property that holds for all irrationals holds a.e. with respect to Lebesgue measure.</p>
                        <p>(b) The Cantor set \\(C\\) has Lebesgue measure zero, despite being uncountable. See Chapter 4 for details.</p>
                        <p>(c) Two functions \\(f, g\\) are <em>equal a.e.</em> if \\(\\mu(\\{x : f(x) \\neq g(x)\\}) = 0\\). In integration theory, functions that are equal a.e. have the same integral.</p>
                    </div>
                </div>

                <h2>Complete Measures</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.25 (Complete Measure Space)</div>
                    <div class="env-body">
                        <p>A measure space \\((X, \\mathcal{M}, \\mu)\\) is <strong>complete</strong> if every subset of every null set is measurable. That is: if \\(N \\in \\mathcal{M}\\) with \\(\\mu(N) = 0\\) and \\(S \\subseteq N\\), then \\(S \\in \\mathcal{M}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.26 (Lebesgue vs. Borel)</div>
                    <div class="env-body">
                        <p>The Lebesgue measure space \\((\\mathbb{R}, \\mathcal{L}, m)\\) is complete. The Borel measure space \\((\\mathbb{R}, \\mathcal{B}(\\mathbb{R}), m)\\) is <em>not</em> complete. Here is why: the Cantor set \\(C\\) is a Borel set with \\(m(C) = 0\\). The Cantor set has cardinality \\(|C| = \\mathfrak{c} = |\\mathbb{R}|\\), so it has \\(2^{\\mathfrak{c}}\\) subsets. But \\(|\\mathcal{B}(\\mathbb{R})| = \\mathfrak{c}\\), so most subsets of \\(C\\) are not Borel sets. These subsets of a null set are not in the Borel sigma-algebra, demonstrating incompleteness.</p>
                    </div>
                </div>

                <h2>The Completion of a Measure Space</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.27 (Completion)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{M}, \\mu)\\) be a measure space. Define</p>
                        \\[\\overline{\\mathcal{M}} = \\{E \\cup S : E \\in \\mathcal{M},\\; S \\subseteq N \\text{ for some } N \\in \\mathcal{M} \\text{ with } \\mu(N) = 0\\},\\]
                        <p>and set \\(\\bar{\\mu}(E \\cup S) = \\mu(E)\\). Then:</p>
                        <ol>
                            <li>\\(\\overline{\\mathcal{M}}\\) is a sigma-algebra containing \\(\\mathcal{M}\\).</li>
                            <li>\\(\\bar{\\mu}\\) is well-defined and extends \\(\\mu\\).</li>
                            <li>\\((X, \\overline{\\mathcal{M}}, \\bar{\\mu})\\) is a complete measure space.</li>
                            <li>It is the smallest complete measure space extending \\((X, \\mathcal{M}, \\mu)\\).</li>
                        </ol>
                        <p>We call \\((X, \\overline{\\mathcal{M}}, \\bar{\\mu})\\) the <strong>completion</strong> of \\((X, \\mathcal{M}, \\mu)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p><strong>Well-definedness.</strong> Suppose \\(E_1 \\cup S_1 = E_2 \\cup S_2\\) with \\(S_i \\subseteq N_i\\), \\(\\mu(N_i) = 0\\). Then \\(E_1 \\subseteq E_2 \\cup N_2\\), so \\(\\mu(E_1) \\leq \\mu(E_2) + \\mu(N_2) = \\mu(E_2)\\). By symmetry, \\(\\mu(E_1) = \\mu(E_2)\\).</p>
                        <p><strong>Sigma-algebra.</strong> Closure under complements: \\((E \\cup S)^c = E^c \\cap S^c\\). One shows this belongs to \\(\\overline{\\mathcal{M}}\\) by writing it as \\((E^c \\setminus N) \\cup T\\) where \\(T \\subseteq N\\). Closure under countable unions is verified similarly.</p>
                        <p><strong>Completeness.</strong> If \\(\\bar{\\mu}(E \\cup S) = 0\\), then \\(\\mu(E) = 0\\), so \\(E \\cup S \\subseteq E \\cup N\\) and \\(\\mu(E \\cup N) = 0\\). Any subset \\(T \\subseteq E \\cup S\\) satisfies \\(T \\subseteq E \\cup N\\) (a null set), so \\(T = \\emptyset \\cup T \\in \\overline{\\mathcal{M}}\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="measure-completion-diagram"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why Completeness Matters)</div>
                    <div class="env-body">
                        <p>Completeness is not merely aesthetic. Several standard constructions produce sets that may be subsets of null sets without being obviously measurable. For example: if \\(f = g\\) a.e. and \\(g\\) is measurable, we want \\(f\\) to be measurable too. In a complete measure space, the set \\(\\{f \\neq g\\}\\) has measure zero and \\(\\{f \\in B\\} = \\{g \\in B\\} \\cup (\\text{subset of null set})\\), which is measurable by completeness.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'measure-completion-diagram',
                    title: 'Measure Completion Diagram',
                    description: 'See how the completion enlarges the sigma-algebra by adding subsets of null sets.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 560;
                        canvas.height = 400;
                        canvas.style.width = '100%';
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', text: '#c9d1d9', muted: '#6e7681',
                            blue: '#58a6ff', teal: '#3fb9a0', orange: '#f0883e',
                            green: '#3fb950', purple: '#bc8cff', red: '#f85149',
                            axis: '#4a4a7a', white: '#f0f6fc'
                        };

                        var showCompletion = false;

                        var btnToggle = document.createElement('button');
                        btnToggle.textContent = 'Show Completion';
                        btnToggle.style.cssText = 'padding:4px 10px;margin:2px 4px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.78rem;cursor:pointer;';
                        btnToggle.addEventListener('click', function() {
                            showCompletion = !showCompletion;
                            btnToggle.textContent = showCompletion ? 'Hide Completion' : 'Show Completion';
                            draw();
                        });
                        controls.appendChild(btnToggle);

                        function draw() {
                            var W = canvas.width, H = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            ctx.fillStyle = colors.white;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Measure Space Completion', W / 2, 25);

                            // Universe X
                            var ux = 40, uy = 50, uw = W - 80, uh = H - 90;
                            ctx.strokeStyle = colors.axis;
                            ctx.lineWidth = 1;
                            ctx.strokeRect(ux, uy, uw, uh);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('X', ux + 5, uy + 15);

                            // Measurable set E
                            var ecx = W * 0.35, ecy = H * 0.4, erx = 100, ery = 70;
                            ctx.fillStyle = colors.blue + '22';
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(ecx, ecy, erx, ery, 0, 0, 2 * Math.PI);
                            ctx.fill(); ctx.stroke();
                            ctx.fillStyle = colors.blue;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('E (measurable)', ecx, ecy - ery - 8);
                            ctx.fillText('\u03BC(E) = 0.5', ecx, ecy);

                            // Null set N inside E
                            var ncx = ecx + 30, ncy = ecy + 20, nrx = 40, nry = 25;
                            ctx.fillStyle = colors.red + '33';
                            ctx.strokeStyle = colors.red;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(ncx, ncy, nrx, nry, 0, 0, 2 * Math.PI);
                            ctx.fill(); ctx.stroke();
                            ctx.fillStyle = colors.red;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('N', ncx, ncy - 5);
                            ctx.fillText('\u03BC(N) = 0', ncx, ncy + 12);

                            // Subset S of N
                            var scx = ncx + 5, scy = ncy + 3, srx = 18, sry = 12;
                            if (showCompletion) {
                                ctx.fillStyle = colors.green + '55';
                                ctx.strokeStyle = colors.green;
                                ctx.lineWidth = 2;
                            } else {
                                ctx.fillStyle = colors.orange + '33';
                                ctx.strokeStyle = colors.orange;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([4, 3]);
                            }
                            ctx.beginPath();
                            ctx.ellipse(scx, scy, srx, sry, 0.3, 0, 2 * Math.PI);
                            ctx.fill(); ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = showCompletion ? colors.green : colors.orange;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('S', scx, scy + 3);

                            // Another measurable set F
                            var fcx = W * 0.7, fcy = H * 0.45, frx = 80, fry = 60;
                            ctx.fillStyle = colors.purple + '22';
                            ctx.strokeStyle = colors.purple;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(fcx, fcy, frx, fry, 0, 0, 2 * Math.PI);
                            ctx.fill(); ctx.stroke();
                            ctx.fillStyle = colors.purple;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.fillText('F (measurable)', fcx, fcy - fry - 8);
                            ctx.fillText('\u03BC(F) = 0.3', fcx, fcy);

                            // Status
                            var boxy = H - 35;
                            ctx.fillStyle = colors.text;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            if (!showCompletion) {
                                ctx.fillText('S \u2286 N is a subset of a null set. In the original \u03C3-algebra, S may NOT be measurable (dashed).', W / 2, boxy);
                            } else {
                                ctx.fillStyle = colors.green;
                                ctx.fillText('After completion: S \u2208 \u0304M  and  \u03BC\u0304(S) = 0. Every subset of every null set is now measurable.', W / 2, boxy);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Give an example of a measure space that is complete and one that is not complete.',
                    hint: 'Think about Lebesgue vs. Borel measure on \\(\\mathbb{R}\\).',
                    solution: 'Complete: \\((\\mathbb{R}, \\mathcal{L}, m)\\) (Lebesgue measure on the Lebesgue sigma-algebra). Not complete: \\((\\mathbb{R}, \\mathcal{B}(\\mathbb{R}), m)\\) (Lebesgue measure restricted to the Borel sigma-algebra). The Cantor set \\(C\\) is Borel with \\(m(C) = 0\\), but it has \\(2^{\\mathfrak{c}}\\) subsets while \\(|\\mathcal{B}| = \\mathfrak{c}\\), so most subsets of \\(C\\) are not Borel.'
                },
                {
                    question: 'Prove that in a complete measure space, if \\(f = g\\) a.e. and \\(g\\) is measurable, then \\(f\\) is measurable.',
                    hint: 'Write \\(\\{f \\in B\\}\\) in terms of \\(\\{g \\in B\\}\\) and the exceptional set \\(\\{f \\neq g\\}\\).',
                    solution: 'Let \\(N = \\{f \\neq g\\}\\). Then \\(\\mu(N) = 0\\). For any Borel set \\(B\\), \\(\\{f \\in B\\} = (\\{g \\in B\\} \\setminus N) \\cup (\\{f \\in B\\} \\cap N)\\). The first part is in \\(\\mathcal{M}\\) (measurable set minus any set). The second part is a subset of \\(N\\), hence in \\(\\mathcal{M}\\) by completeness. So \\(\\{f \\in B\\} \\in \\mathcal{M}\\).'
                },
                {
                    question: 'Let \\((X, \\mathcal{M}, \\mu)\\) be a measure space. Prove that the collection of null sets is closed under countable unions.',
                    hint: 'Use countable subadditivity.',
                    solution: 'By countable subadditivity, \\(\\mu(\\bigcup N_k) \\leq \\sum \\mu(N_k) = \\sum 0 = 0\\). Since measures are non-negative, \\(\\mu(\\bigcup N_k) = 0\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Sigma-Finiteness and Its Importance
        // ============================================================
        {
            id: 'sigma-finiteness',
            title: 'Sigma-Finiteness and Its Importance',
            content: `
                <div class="bridge section-bridge">
                    <p>Many of the deepest theorems in measure theory (the Radon-Nikodym theorem, Fubini's theorem, uniqueness of extensions) require a condition weaker than finiteness but stronger than arbitrary: <strong>sigma-finiteness</strong>. This condition, that the space can be decomposed into countably many pieces of finite measure, is the "right" regularity assumption for most of the theory. In this section we define sigma-finiteness, examine which measures satisfy it, and preview why it matters so profoundly.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define sigma-finiteness, provide examples and non-examples, and explain its role as a hypothesis in the major theorems of measure theory.</p>
                </div>

                <h2>Definition and Examples</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.28 (Sigma-Finite Measure)</div>
                    <div class="env-body">
                        <p>A measure space \\((X, \\mathcal{M}, \\mu)\\) (or the measure \\(\\mu\\)) is called <strong>\\(\\sigma\\)-finite</strong> if there exists a countable collection \\(\\{X_n\\}_{n=1}^{\\infty} \\subseteq \\mathcal{M}\\) such that</p>
                        \\[X = \\bigcup_{n=1}^{\\infty} X_n \\quad \\text{and} \\quad \\mu(X_n) &lt; \\infty \\text{ for all } n.\\]
                        <p>Equivalently, \\(\\mu\\) is \\(\\sigma\\)-finite if \\(X\\) can be written as a countable union of sets of finite measure.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (WLOG Disjoint)</div>
                    <div class="env-body">
                        <p>We can always take the \\(X_n\\) to be pairwise disjoint: replace \\(X_n\\) by \\(X_n \\setminus \\bigcup_{k &lt; n} X_k\\). The disjoint version is sometimes more convenient.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.29 (Sigma-Finite Measures)</div>
                    <div class="env-body">
                        <p>(a) <strong>Lebesgue measure</strong> on \\(\\mathbb{R}\\) is \\(\\sigma\\)-finite: \\(\\mathbb{R} = \\bigcup_{n=1}^{\\infty} [-n, n]\\), and \\(m([-n, n]) = 2n &lt; \\infty\\).</p>
                        <p>(b) Any <strong>finite measure</strong> (e.g., a probability measure) is trivially \\(\\sigma\\)-finite: take \\(X_1 = X\\).</p>
                        <p>(c) <strong>Counting measure on \\(\\mathbb{N}\\)</strong> is \\(\\sigma\\)-finite: \\(\\mathbb{N} = \\bigcup_{n=1}^{\\infty} \\{n\\}\\), and \\(\\#(\\{n\\}) = 1\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.30 (Non-Sigma-Finite Measures)</div>
                    <div class="env-body">
                        <p>(a) <strong>Counting measure on \\(\\mathbb{R}\\)</strong> is <em>not</em> \\(\\sigma\\)-finite. If \\(\\mathbb{R} = \\bigcup X_n\\) with \\(\\#(X_n) &lt; \\infty\\), then each \\(X_n\\) is a finite set, so \\(\\bigcup X_n\\) is countable. But \\(\\mathbb{R}\\) is uncountable. Contradiction.</p>
                        <p>(b) The measure \\(\\mu\\) on \\((\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))\\) defined by \\(\\mu(E) = \\infty\\) for all \\(E \\neq \\emptyset\\) and \\(\\mu(\\emptyset) = 0\\) is a measure (verify the axioms) but is not \\(\\sigma\\)-finite.</p>
                    </div>
                </div>

                <h2>Why Sigma-Finiteness Matters</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Role of Sigma-Finiteness)</div>
                    <div class="env-body">
                        <p>Sigma-finiteness is the condition that allows us to "reduce" infinite measure spaces to manageable finite pieces. Many proofs in measure theory work by first establishing a result for finite measures (where subtraction and normalization are possible) and then extending to the \\(\\sigma\\)-finite case by decomposing the space into countably many finite-measure pieces. Without \\(\\sigma\\)-finiteness, the decomposition fails and the theorems can genuinely become false.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.31 (Theorems Requiring Sigma-Finiteness)</div>
                    <div class="env-body">
                        <p>The following major results of measure theory require sigma-finiteness as a hypothesis (precise statements in later chapters):</p>
                        <ol>
                            <li><strong>Uniqueness of extensions</strong> (Ch. 3): A premeasure on an algebra has a <em>unique</em> extension to a measure on the generated sigma-algebra, provided the premeasure is \\(\\sigma\\)-finite.</li>
                            <li><strong>Radon-Nikodym theorem</strong> (Ch. 11): If \\(\\nu \\ll \\mu\\) and \\(\\mu\\) is \\(\\sigma\\)-finite, then the Radon-Nikodym derivative \\(d\\nu/d\\mu\\) exists.</li>
                            <li><strong>Fubini-Tonelli theorems</strong> (Ch. 12): The product measure construction and the interchange of iterated integrals require \\(\\sigma\\)-finiteness.</li>
                            <li><strong>Lebesgue decomposition</strong> (Ch. 11): The decomposition \\(\\nu = \\nu_{ac} + \\nu_s\\) requires \\(\\sigma\\)-finiteness.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.32 (Uniqueness Fails Without Sigma-Finiteness)</div>
                    <div class="env-body">
                        <p>Consider \\(X = \\{a, b\\}\\) with \\(\\mathcal{A} = \\{\\emptyset, X\\}\\) (the trivial algebra) and \\(\\mu_0(\\emptyset) = 0\\), \\(\\mu_0(X) = \\infty\\). The generated sigma-algebra is \\(\\mathcal{P}(X) = \\{\\emptyset, \\{a\\}, \\{b\\}, X\\}\\). Both \\(\\mu_1(\\{a\\}) = \\infty, \\mu_1(\\{b\\}) = 0\\) and \\(\\mu_2(\\{a\\}) = \\mu_2(\\{b\\}) = \\infty\\) extend \\(\\mu_0\\). The premeasure is not \\(\\sigma\\)-finite, and uniqueness fails.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sigma-finite-covering"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Sigma-Finiteness in Probability)</div>
                    <div class="env-body">
                        <p>Every probability measure is automatically \\(\\sigma\\)-finite (since \\(P(\\Omega) = 1 &lt; \\infty\\)). This is one reason why probabilists rarely need to worry about \\(\\sigma\\)-finiteness explicitly: it comes for free. The concept becomes essential when moving to general measure theory, harmonic analysis, or studying measures on locally compact groups.</p>
                    </div>
                </div>

                <div class="bridge closing-bridge">
                    <p><strong>Looking ahead.</strong> With the definition and basic properties of measures in hand, we are ready for the constructive question: <em>how do we build measures?</em> Chapter 3 introduces outer measures and Caratheodory's extension theorem, the universal machine for constructing measures from simple data on generating sets. The \\(\\sigma\\)-finiteness condition from this chapter will guarantee the uniqueness of that construction.</p>
                </div>
            `,
            visualizations: [
                {
                    id: 'sigma-finite-covering',
                    title: 'Sigma-Finite Covering Builder',
                    description: 'Try to cover a space with countably many finite-measure sets. Succeed for sigma-finite examples, fail for non-sigma-finite ones.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 560;
                        canvas.height = 400;
                        canvas.style.width = '100%';
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', text: '#c9d1d9', muted: '#6e7681',
                            blue: '#58a6ff', teal: '#3fb9a0', orange: '#f0883e',
                            green: '#3fb950', purple: '#bc8cff', red: '#f85149',
                            axis: '#4a4a7a', white: '#f0f6fc'
                        };

                        var example = 'lebesgue';
                        var coverStep = 0;
                        var animId = null;

                        var btn1 = document.createElement('button');
                        btn1.textContent = 'Lebesgue on R (\u03C3-finite)';
                        btn1.style.cssText = 'padding:4px 10px;margin:2px 4px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.78rem;cursor:pointer;';
                        btn1.addEventListener('click', function() { example = 'lebesgue'; coverStep = 0; });
                        controls.appendChild(btn1);

                        var btn2 = document.createElement('button');
                        btn2.textContent = 'Counting on R (not \u03C3-finite)';
                        btn2.style.cssText = 'padding:4px 10px;margin:2px 4px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.78rem;cursor:pointer;';
                        btn2.addEventListener('click', function() { example = 'counting-R'; coverStep = 0; });
                        controls.appendChild(btn2);

                        function draw() {
                            var W = canvas.width, H = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var n = Math.min(Math.floor(coverStep), 12);

                            ctx.fillStyle = colors.white;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';

                            if (example === 'lebesgue') {
                                ctx.fillText('Lebesgue measure on R: covering by [-n, n]', W / 2, 25);

                                var lineY = 110, left = 40, right = W - 40;
                                var xMin = -14, xMax = 14;
                                function toSx(x) { return left + (x - xMin) / (xMax - xMin) * (right - left); }

                                ctx.strokeStyle = colors.axis;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(left, lineY);
                                ctx.lineTo(right, lineY);
                                ctx.stroke();

                                ctx.fillStyle = colors.muted;
                                ctx.font = '10px -apple-system, sans-serif';
                                for (var t = -12; t <= 12; t += 2) {
                                    var sx = toSx(t);
                                    ctx.beginPath(); ctx.moveTo(sx, lineY - 3); ctx.lineTo(sx, lineY + 3); ctx.stroke();
                                    ctx.fillText(String(t), sx, lineY + 14);
                                }

                                var coverColors = [colors.blue, colors.teal, colors.orange, colors.green, colors.purple, colors.red,
                                    colors.blue, colors.teal, colors.orange, colors.green, colors.purple, colors.red];

                                for (var i = 1; i <= n; i++) {
                                    var col = coverColors[(i - 1) % coverColors.length];
                                    var yOff = 20 + (i - 1) * 5;
                                    ctx.fillStyle = col + '22';
                                    ctx.fillRect(toSx(-i), lineY - yOff - 4, toSx(i) - toSx(-i), 4);
                                    ctx.strokeStyle = col;
                                    ctx.lineWidth = 1;
                                    ctx.strokeRect(toSx(-i), lineY - yOff - 4, toSx(i) - toSx(-i), 4);
                                }

                                ctx.fillStyle = colors.text;
                                ctx.font = '13px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Step n = ' + n + ':  X_n = [-' + n + ', ' + n + '],  m(X_n) = ' + (2 * n), W / 2, lineY + 40);

                                if (n >= 12) {
                                    ctx.fillStyle = colors.green;
                                    ctx.font = 'bold 14px -apple-system, sans-serif';
                                    ctx.fillText('\u2713 Success! R = \u222A [-n, n], each has finite Lebesgue measure.', W / 2, lineY + 65);
                                    ctx.fillText('Lebesgue measure is \u03C3-finite.', W / 2, lineY + 85);
                                }

                                // Coverage bar
                                var barY = H - 80, barH = 30;
                                ctx.fillStyle = colors.muted;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Covered portion of [-12, 12]:', W / 2, barY - 8);

                                var barLeft2 = W * 0.15, barRight2 = W * 0.85;
                                ctx.strokeStyle = colors.axis;
                                ctx.strokeRect(barLeft2, barY, barRight2 - barLeft2, barH);

                                var frac = Math.min(n / 12, 1);
                                ctx.fillStyle = colors.teal + '66';
                                ctx.fillRect(barLeft2, barY, (barRight2 - barLeft2) * frac, barH);
                                ctx.fillStyle = colors.white;
                                ctx.font = 'bold 13px -apple-system, sans-serif';
                                ctx.fillText(Math.round(frac * 100) + '%', (barLeft2 + barRight2) / 2, barY + barH / 2 + 5);

                            } else {
                                ctx.fillText('Counting measure on R: can we cover R with finite-count sets?', W / 2, 25);

                                var centerY = H / 2 - 20;

                                ctx.fillStyle = colors.text;
                                ctx.font = '13px -apple-system, sans-serif';
                                ctx.textAlign = 'center';

                                if (n < 6) {
                                    ctx.fillText('Attempt: X_n = {finite set with ' + (n + 1) + ' points}', W / 2, centerY - 30);

                                    for (var i = 0; i <= n; i++) {
                                        for (var j = 0; j < i + 1; j++) {
                                            var dotX = W / 2 + (j - i / 2) * 20;
                                            var dotY = centerY + i * 25;
                                            ctx.fillStyle = colors.orange;
                                            ctx.beginPath();
                                            ctx.arc(dotX, dotY, 3, 0, 2 * Math.PI);
                                            ctx.fill();
                                        }
                                        ctx.fillStyle = colors.muted;
                                        ctx.font = '10px -apple-system, sans-serif';
                                        ctx.textAlign = 'left';
                                        ctx.fillText('#(X_' + (i + 1) + ') = ' + (i + 1) + ' < \u221E', W / 2 + (i + 1) / 2 * 20 + 15, centerY + i * 25 + 4);
                                    }
                                }

                                ctx.fillStyle = colors.red;
                                ctx.font = 'bold 13px -apple-system, sans-serif';
                                ctx.textAlign = 'center';

                                if (n >= 6) {
                                    ctx.fillText('\u2717 Failure! Any countable union of finite sets is countable.', W / 2, centerY + 40);
                                    ctx.fillText('But R is uncountable, so \u222A X_n \u2260 R.', W / 2, centerY + 65);
                                    ctx.fillStyle = colors.white;
                                    ctx.fillText('Counting measure on R is NOT \u03C3-finite.', W / 2, centerY + 100);

                                    ctx.fillStyle = colors.muted;
                                    ctx.font = '12px -apple-system, sans-serif';
                                    ctx.fillText('Key: |\u222A X_n| \u2264 \u2135\u2080 < c = |R|', W / 2, centerY + 130);
                                }
                            }

                            if (coverStep < 50) {
                                coverStep += 0.04;
                            }
                            animId = requestAnimationFrame(draw);
                        }

                        draw();

                        return {
                            stopAnimation: function() {
                                if (animId) { cancelAnimationFrame(animId); animId = null; }
                            }
                        };
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that any \\(\\sigma\\)-finite measure space can be written as a <em>disjoint</em> countable union of sets with finite measure.',
                    hint: 'Given \\(X = \\bigcup X_n\\), define \\(Y_n = X_n \\setminus \\bigcup_{k < n} X_k\\).',
                    solution: 'Define \\(Y_1 = X_1\\) and \\(Y_n = X_n \\setminus (X_1 \\cup \\cdots \\cup X_{n-1})\\). Then \\(Y_n \\subseteq X_n\\) so \\(\\mu(Y_n) \\leq \\mu(X_n) < \\infty\\). The \\(Y_n\\) are pairwise disjoint, and \\(\\bigcup Y_n = \\bigcup X_n = X\\).'
                },
                {
                    question: 'Is the counting measure on \\(\\mathbb{Z}\\) sigma-finite? What about counting measure on \\([0, 1]\\)?',
                    hint: 'Can you write \\(\\mathbb{Z}\\) as a countable union of finite sets? What about \\([0,1]\\)?',
                    solution: 'On \\(\\mathbb{Z}\\): yes, \\(\\mathbb{Z} = \\bigcup_{n \\in \\mathbb{Z}} \\{n\\}\\) is a countable union with \\(\\#(\\{n\\}) = 1 < \\infty\\). On \\([0,1]\\): no. If \\([0,1] = \\bigcup X_n\\) with each \\(X_n\\) finite, then \\(\\bigcup X_n\\) is countable, but \\([0,1]\\) is uncountable. Contradiction.'
                },
                {
                    question: 'Let \\(\\mu\\) be a \\(\\sigma\\)-finite measure. Prove that for any \\(E \\in \\mathcal{M}\\) with \\(\\mu(E) = \\infty\\), there exists a measurable subset \\(F \\subseteq E\\) with \\(0 &lt; \\mu(F) &lt; \\infty\\).',
                    hint: 'Write \\(X = \\bigsqcup X_n\\) with \\(\\mu(X_n) < \\infty\\). Consider \\(E \\cap X_n\\).',
                    solution: 'Write \\(X = \\bigsqcup X_n\\) with \\(\\mu(X_n) < \\infty\\). Then \\(E = \\bigsqcup (E \\cap X_n)\\) and \\(\\mu(E) = \\sum \\mu(E \\cap X_n) = \\infty\\). So at least one \\(\\mu(E \\cap X_k) > 0\\). Set \\(F = E \\cap X_k\\). Then \\(0 < \\mu(F) \\leq \\mu(X_k) < \\infty\\).'
                }
            ]
        }
    ]
});

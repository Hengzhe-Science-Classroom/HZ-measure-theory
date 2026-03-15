window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch03',
    number: 3,
    title: 'Outer Measures and the Carathéodory Extension',
    subtitle: 'Building Measures from Scratch via Carathéodory\'s Theorem',
    sections: [
        // ===================== SECTION 1 =====================
        {
            id: 'premeasures-on-algebras',
            title: 'Premeasures on Algebras',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>The big picture.</strong> In Chapters 1 and 2 we learned <em>what</em> a measure is and <em>where</em> it lives (on a \\(\\sigma\\)-algebra). But a fundamental question remains: <em>how do we actually build one?</em> We cannot simply define a measure on every subset of \\(\\mathbb{R}\\) (Vitali's construction forbids it), and defining it directly on the full Borel \\(\\sigma\\)-algebra is impractical since \\(\\mathcal{B}(\\mathbb{R})\\) is enormous.</p>
                    <p>Carathéodory's strategy is beautifully indirect: start small, then extend. This chapter walks through the entire construction, step by step, using Lebesgue measure as our running example.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define premeasures on algebras and verify that the "length of intervals" function is a premeasure on the algebra of finite unions of half-open intervals.</p>
                    <p><strong>Running example:</strong> We are building Lebesgue measure on \\(\\mathbb{R}\\). Step 1: define a premeasure on a simple collection of sets.</p>
                    <p><strong>References:</strong> Folland 1.3; RF 3.1-3.2; SS III.1.</p>
                </div>

                <h2>Step 1: Start with a Simple Collection</h2>

                <p>The idea is to start with a collection of "elementary" sets where we know what the measure should be, and then systematically extend. For Lebesgue measure, the elementary sets are intervals, where the measure is simply the length.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.1 (Algebra of Sets)</div>
                    <div class="env-body">
                        <p>An <strong>algebra</strong> (or <em>field</em>) on a set \\(X\\) is a collection \\(\\mathcal{A} \\subseteq \\mathcal{P}(X)\\) such that:</p>
                        <ol>
                            <li>\\(X \\in \\mathcal{A}\\)</li>
                            <li>If \\(A \\in \\mathcal{A}\\), then \\(A^c \\in \\mathcal{A}\\)</li>
                            <li>If \\(A, B \\in \\mathcal{A}\\), then \\(A \\cup B \\in \\mathcal{A}\\)</li>
                        </ol>
                        <p>An algebra is closed under <em>finite</em> unions and intersections, but not necessarily under <em>countable</em> operations. That is the crucial difference from a \\(\\sigma\\)-algebra.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.2 (The Interval Algebra on \\(\\mathbb{R}\\))</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{A}_0\\) be the collection of all finite disjoint unions of half-open intervals \\((a, b]\\) (including \\((-\\infty, b]\\), \\((a, \\infty)\\), and \\(\\mathbb{R}\\) itself). Then \\(\\mathcal{A}_0\\) is an algebra on \\(\\mathbb{R}\\).</p>
                        <p><strong>Why half-open?</strong> Because the complement of \\((a, b]\\) is \\((-\\infty, a] \\cup (b, \\infty)\\), which is again a disjoint union of half-open intervals (allowing infinite endpoints). Closed or open intervals do not have this closure property.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.3 (Premeasure)</div>
                    <div class="env-body">
                        <p>A <strong>premeasure</strong> on an algebra \\(\\mathcal{A}\\) is a function \\(\\mu_0 : \\mathcal{A} \\to [0, \\infty]\\) such that:</p>
                        <ol>
                            <li>\\(\\mu_0(\\emptyset) = 0\\)</li>
                            <li><strong>Countable additivity on \\(\\mathcal{A}\\)</strong>: If \\(A_1, A_2, \\ldots \\in \\mathcal{A}\\) are pairwise disjoint and \\(\\bigsqcup_{n=1}^{\\infty} A_n \\in \\mathcal{A}\\), then
                            \\[\\mu_0\\!\\left(\\bigsqcup_{n=1}^{\\infty} A_n\\right) = \\sum_{n=1}^{\\infty} \\mu_0(A_n).\\]</li>
                        </ol>
                        <p>Note the subtlety: we only require countable additivity when the countable union <em>happens to land back in</em> \\(\\mathcal{A}\\). For an algebra this is a nontrivial condition, since \\(\\mathcal{A}\\) need not be closed under countable unions.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Premeasure vs. Measure)</div>
                    <div class="env-body">
                        <p>A premeasure is a "proto-measure." It satisfies the same additivity condition as a measure, but lives on a smaller domain (an algebra rather than a \\(\\sigma\\)-algebra). Think of it as a blueprint: it contains all the essential information, but the full structure has not yet been built.</p>
                    </div>
                </div>

                <h2>The Length Premeasure (Running Example)</h2>

                <p>For our Lebesgue measure construction, we define \\(\\mu_0\\) on the interval algebra \\(\\mathcal{A}_0\\) by:</p>
                \\[\\mu_0\\!\\left(\\bigsqcup_{k=1}^{N} (a_k, b_k]\\right) = \\sum_{k=1}^{N} (b_k - a_k).\\]

                <div class="env-block proposition">
                    <div class="env-title">Proposition 3.4 (Length is a Premeasure)</div>
                    <div class="env-body">
                        <p>The function \\(\\mu_0 : \\mathcal{A}_0 \\to [0, \\infty]\\) defined above is a premeasure on \\(\\mathcal{A}_0\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>Finite additivity is immediate from the definition. The harder part is <em>countable additivity</em>: if \\((a, b] = \\bigsqcup_{n=1}^{\\infty}(a_n, b_n]\\), we must show \\(b - a = \\sum_{n=1}^{\\infty}(b_n - a_n)\\).</p>
                        <p><strong>Step 1</strong> (\\(\\geq\\)): For any finite \\(N\\), the sets \\((a_1, b_1], \\ldots, (a_N, b_N]\\) are disjoint subsets of \\((a, b]\\), so \\(b - a \\geq \\sum_{k=1}^{N}(b_k - a_k)\\). Letting \\(N \\to \\infty\\) gives \\(b - a \\geq \\sum_{n=1}^{\\infty}(b_n - a_n)\\).</p>
                        <p><strong>Step 2</strong> (\\(\\leq\\)): Fix \\(\\varepsilon &gt; 0\\). Shrink the left endpoint: the closed interval \\([a + \\varepsilon, b]\\) is compact. Expand each \\((a_n, b_n]\\) to the open interval \\((a_n, b_n + \\varepsilon/2^n)\\). These open intervals cover the compact set \\([a + \\varepsilon, b]\\), so by Heine-Borel, finitely many suffice. Summing their lengths gives \\(b - a - \\varepsilon \\leq \\sum_{n=1}^{\\infty}(b_n - a_n) + \\varepsilon\\). Since \\(\\varepsilon\\) is arbitrary, \\(b - a \\leq \\sum_{n=1}^{\\infty}(b_n - a_n)\\).</p>
                        <div class="qed"></div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Role of Compactness)</div>
                    <div class="env-body">
                        <p>The proof that length is countably additive (not just finitely additive) uses <em>compactness</em> of closed bounded intervals. This is not a coincidence: the Heine-Borel theorem is the topological backbone that makes Lebesgue measure work on \\(\\mathbb{R}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.5 (Lebesgue-Stieltjes Premeasure)</div>
                    <div class="env-body">
                        <p>More generally, let \\(F : \\mathbb{R} \\to \\mathbb{R}\\) be right-continuous and non-decreasing. Define \\(\\mu_F((a, b]) = F(b) - F(a)\\). Then \\(\\mu_F\\) extends to a premeasure on \\(\\mathcal{A}_0\\). When \\(F(x) = x\\), this recovers the length premeasure. Other choices give:</p>
                        <ul>
                            <li>\\(F(x) = \\lfloor x \\rfloor\\): counting measure on \\(\\mathbb{Z}\\)</li>
                            <li>\\(F(x) = \\mathbf{1}_{[0,\\infty)}(x)\\): the Dirac mass \\(\\delta_0\\)</li>
                            <li>\\(F\\) is a CDF: the corresponding probability measure</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="premeasure-demo"></div>
            `,
            visualizations: [
                {
                    id: 'premeasure-demo',
                    title: 'Premeasure on the Interval Algebra',
                    description: 'Define intervals and see the premeasure computed. Verify finite additivity by splitting intervals.',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        const W = Math.min(body.clientWidth, 760);
                        const H = 340;
                        canvas.width = W; canvas.height = H;
                        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        const colors = {
                            bg:'#0c0c20', grid:'#1a1a40', axis:'#4a4a7a', text:'#c9d1d9',
                            muted:'#8b949e', blue:'#58a6ff', teal:'#3fb9a0', orange:'#f0883e',
                            green:'#3fb950', purple:'#bc8cff', red:'#f85149'
                        };

                        let intervals = [
                            {a: 0.5, b: 2.0, color: colors.blue},
                            {a: 3.0, b: 4.5, color: colors.teal},
                            {a: 5.5, b: 7.0, color: colors.orange}
                        ];
                        let splitMode = false;

                        function numLineX(v) { return 60 + (v / 8) * (W - 100); }
                        function numLineToVal(px) { return Math.max(0, Math.min(8, (px - 60) / (W - 100) * 8)); }

                        function draw() {
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Premeasure on the Interval Algebra', W/2, 24);

                            // Number line
                            const y0 = 80;
                            ctx.strokeStyle = colors.axis; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(numLineX(0), y0); ctx.lineTo(numLineX(8), y0); ctx.stroke();

                            // Ticks
                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            for (let i = 0; i <= 8; i++) {
                                const x = numLineX(i);
                                ctx.beginPath(); ctx.moveTo(x, y0 - 6); ctx.lineTo(x, y0 + 6); ctx.stroke();
                                ctx.fillText(i, x, y0 + 20);
                            }

                            // Draw intervals
                            let totalLen = 0;
                            intervals.forEach((iv, idx) => {
                                const x1 = numLineX(iv.a), x2 = numLineX(iv.b);
                                const barY = y0 - 20 - idx * 24;
                                const len = iv.b - iv.a;
                                totalLen += len;

                                ctx.fillStyle = iv.color + '55';
                                ctx.fillRect(x1, barY - 8, x2 - x1, 16);
                                ctx.strokeStyle = iv.color; ctx.lineWidth = 2;
                                ctx.strokeRect(x1, barY - 8, x2 - x1, 16);

                                // Open circle at left, closed at right
                                ctx.beginPath(); ctx.arc(x1, barY, 4, 0, Math.PI * 2);
                                ctx.strokeStyle = iv.color; ctx.lineWidth = 2; ctx.stroke();
                                ctx.beginPath(); ctx.arc(x2, barY, 4, 0, Math.PI * 2);
                                ctx.fillStyle = iv.color; ctx.fill();

                                // Label
                                ctx.fillStyle = iv.color; ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('(' + iv.a.toFixed(1) + ', ' + iv.b.toFixed(1) + ']', (x1 + x2)/2, barY - 14);
                                ctx.fillText('length = ' + len.toFixed(2), (x1 + x2)/2, barY + 24);
                            });

                            // Total premeasure
                            const summaryY = 200;
                            ctx.fillStyle = colors.text; ctx.font = '14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            let summaryStr = 'Premeasure of the union: ';
                            intervals.forEach((iv, i) => {
                                summaryStr += (iv.b - iv.a).toFixed(2);
                                if (i < intervals.length - 1) summaryStr += ' + ';
                            });
                            summaryStr += ' = ' + totalLen.toFixed(2);
                            ctx.fillText(summaryStr, 30, summaryY);

                            ctx.fillStyle = colors.green; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText('Total: \u03BC\u2080(A) = ' + totalLen.toFixed(2), 30, summaryY + 28);

                            // Explanation
                            ctx.fillStyle = colors.muted; ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Disjoint half-open intervals (a, b] with premeasure = sum of lengths', W/2, H - 50);
                            ctx.fillText('Click "Split" to split the first interval and verify additivity', W/2, H - 30);
                        }

                        VizEngine.createButton(controls, 'Split First Interval', function() {
                            if (intervals.length > 0 && !splitMode) {
                                splitMode = true;
                                const iv = intervals[0];
                                const mid = (iv.a + iv.b) / 2;
                                intervals.splice(0, 1,
                                    {a: iv.a, b: mid, color: colors.purple},
                                    {a: mid, b: iv.b, color: colors.red}
                                );
                                draw();
                            }
                        });

                        VizEngine.createButton(controls, 'Reset', function() {
                            splitMode = false;
                            intervals = [
                                {a: 0.5, b: 2.0, color: colors.blue},
                                {a: 3.0, b: 4.5, color: colors.teal},
                                {a: 5.5, b: 7.0, color: colors.orange}
                            ];
                            draw();
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that an algebra \\(\\mathcal{A}\\) is closed under finite intersections and set differences.',
                    hint: 'Use De Morgan\'s laws and the fact that \\(A \\setminus B = A \\cap B^c\\).',
                    solution: 'For intersections: \\(A \\cap B = (A^c \\cup B^c)^c \\in \\mathcal{A}\\) since \\(\\mathcal{A}\\) is closed under complements and finite unions. For differences: \\(A \\setminus B = A \\cap B^c \\in \\mathcal{A}\\) by closure under complements and the intersection result.'
                },
                {
                    question: 'Let \\(\\mu_0\\) be a premeasure on an algebra \\(\\mathcal{A}\\). Prove that \\(\\mu_0\\) is finitely additive and monotone (i.e., \\(A \\subseteq B \\Rightarrow \\mu_0(A) \\leq \\mu_0(B)\\)).',
                    hint: 'For finite additivity, use countable additivity with \\(A_n = \\emptyset\\) for \\(n \\geq N+1\\). For monotonicity, write \\(B = A \\sqcup (B \\setminus A)\\).',
                    solution: 'Finite additivity: If \\(A = \\bigsqcup_{k=1}^{N} A_k\\), set \\(A_n = \\emptyset\\) for \\(n > N\\). Then \\(\\mu_0(A) = \\sum_{n=1}^{\\infty} \\mu_0(A_n) = \\sum_{k=1}^{N} \\mu_0(A_k)\\). Monotonicity: If \\(A \\subseteq B\\), then \\(B = A \\sqcup (B \\setminus A)\\), so \\(\\mu_0(B) = \\mu_0(A) + \\mu_0(B \\setminus A) \\geq \\mu_0(A)\\).'
                },
                {
                    question: 'Verify that the Dirac mass \\(\\delta_0\\) (corresponding to \\(F(x) = \\mathbf{1}_{[0,\\infty)}(x)\\)) gives \\(\\mu_F((a,b]) = 1\\) if \\(0 \\in (a,b]\\) and \\(\\mu_F((a,b]) = 0\\) otherwise.',
                    hint: 'Compute \\(F(b) - F(a)\\) for various positions of \\(a\\) and \\(b\\) relative to \\(0\\).',
                    solution: 'If \\(a &lt; 0 \\leq b\\), then \\(F(b) - F(a) = 1 - 0 = 1\\). If \\(0 \\leq a &lt; b\\), then \\(F(b) - F(a) = 1 - 1 = 0\\). If \\(a &lt; b &lt; 0\\), then \\(F(b) - F(a) = 0 - 0 = 0\\). So \\(\\mu_F((a,b]) = 1\\) iff \\(0 \\in (a,b]\\), which is the Dirac mass at \\(0\\).'
                }
            ]
        },

        // ===================== SECTION 2 =====================
        {
            id: 'outer-measures',
            title: 'Outer Measures',
            content: `
                <div class="bridge section-bridge">
                    <p>We have a premeasure \\(\\mu_0\\) on the algebra \\(\\mathcal{A}_0\\). But \\(\\mathcal{A}_0\\) is too small: it only contains finite unions of intervals, not the rich \\(\\sigma\\)-algebra of Borel (or Lebesgue) sets. The next step is to "spread" the premeasure to <em>all</em> subsets of \\(\\mathbb{R}\\) by taking infima over interval covers. The result will not be a measure on all subsets (that is impossible), but it will be an <em>outer measure</em>, which is a weaker but universal quantity.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define outer measures and construct the Lebesgue outer measure \\(\\mu^*\\) from the length premeasure via the covering method.</p>
                    <p><strong>Running example:</strong> Step 2 of building Lebesgue measure: extend the premeasure to all subsets via coverings.</p>
                </div>

                <h2>Step 2: Cover Everything, Measure from Outside</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.6 (Outer Measure)</div>
                    <div class="env-body">
                        <p>An <strong>outer measure</strong> on a set \\(X\\) is a function \\(\\mu^* : \\mathcal{P}(X) \\to [0, \\infty]\\) defined on <em>all</em> subsets of \\(X\\), satisfying:</p>
                        <ol>
                            <li>\\(\\mu^*(\\emptyset) = 0\\)</li>
                            <li><strong>Monotonicity</strong>: \\(A \\subseteq B \\Rightarrow \\mu^*(A) \\leq \\mu^*(B)\\)</li>
                            <li><strong>Countable subadditivity</strong>: \\(\\mu^*\\!\\left(\\bigcup_{n=1}^{\\infty} A_n\\right) \\leq \\sum_{n=1}^{\\infty} \\mu^*(A_n)\\)</li>
                        </ol>
                        <p>Note: an outer measure is defined on <em>all</em> subsets (unlike a measure, which is defined on a \\(\\sigma\\)-algebra), and it satisfies sub-additivity rather than additivity.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why "Outer"?)</div>
                    <div class="env-body">
                        <p>An outer measure approximates the size of a set <em>from the outside</em>, by covering it with sets whose measure is already known. Just as you might estimate the area of an irregular lake by covering it with rectangular tiles, the outer measure covers an arbitrary set with intervals and sums their lengths. The infimum over all such covers gives the tightest "outer" estimate.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.7 (Outer Measure from a Premeasure)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu_0\\) be a premeasure on an algebra \\(\\mathcal{A}\\) over \\(X\\). For any \\(E \\subseteq X\\), define:</p>
                        \\[\\mu^*(E) = \\inf\\!\\left\\{\\sum_{n=1}^{\\infty} \\mu_0(A_n) : E \\subseteq \\bigcup_{n=1}^{\\infty} A_n, \\; A_n \\in \\mathcal{A}\\right\\}\\]
                        <p>Then \\(\\mu^*\\) is an outer measure on \\(X\\), and \\(\\mu^*(A) = \\mu_0(A)\\) for all \\(A \\in \\mathcal{A}\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof outline</div>
                    <div class="env-body">
                        <p><strong>(i) \\(\\mu^*(\\emptyset) = 0\\)</strong>: Cover \\(\\emptyset\\) by \\(A_n = \\emptyset\\) for all \\(n\\). Then \\(\\sum \\mu_0(A_n) = 0\\).</p>
                        <p><strong>(ii) Monotonicity</strong>: If \\(A \\subseteq B\\), every cover of \\(B\\) is also a cover of \\(A\\), so \\(\\mu^*(A) \\leq \\mu^*(B)\\).</p>
                        <p><strong>(iii) Countable subadditivity</strong>: Let \\(E = \\bigcup_n E_n\\). For each \\(E_n\\), pick a cover \\(\\{A_{n,k}\\}_k\\) with \\(\\sum_k \\mu_0(A_{n,k}) &lt; \\mu^*(E_n) + \\varepsilon/2^n\\). Then \\(\\{A_{n,k}\\}_{n,k}\\) covers \\(E\\), and the double sum gives \\(\\mu^*(E) \\leq \\sum_n \\mu^*(E_n) + \\varepsilon\\). Since \\(\\varepsilon\\) is arbitrary, we are done.</p>
                        <p><strong>(iv) \\(\\mu^* = \\mu_0\\) on \\(\\mathcal{A}\\)</strong>: The \\(\\leq\\) direction is obvious (cover \\(A\\) by itself). The \\(\\geq\\) direction uses countable additivity plus monotonicity of \\(\\mu_0\\).</p>
                        <div class="qed"></div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.8 (Lebesgue Outer Measure)</div>
                    <div class="env-body">
                        <p>Applying Theorem 3.7 to the length premeasure on \\(\\mathcal{A}_0\\), we obtain the <strong>Lebesgue outer measure</strong>:</p>
                        \\[\\lambda^*(E) = \\inf\\!\\left\\{\\sum_{n=1}^{\\infty} (b_n - a_n) : E \\subseteq \\bigcup_{n=1}^{\\infty} (a_n, b_n]\\right\\}\\]
                        <p>for any \\(E \\subseteq \\mathbb{R}\\). Equivalently, one can use open intervals \\((a_n, b_n)\\) as covers (the infimum is the same).</p>
                        <p><strong>Key computations:</strong></p>
                        <ul>
                            <li>\\(\\lambda^*(\\{x\\}) = 0\\) for any \\(x \\in \\mathbb{R}\\) (cover by \\((x - \\varepsilon, x + \\varepsilon)\\))</li>
                            <li>\\(\\lambda^*(\\mathbb{Q} \\cap [0,1]) = 0\\) (enumerate \\(\\mathbb{Q} \\cap [0,1] = \\{q_1, q_2, \\ldots\\}\\) and cover \\(q_n\\) by an interval of length \\(\\varepsilon/2^n\\))</li>
                            <li>\\(\\lambda^*([0,1]) = 1\\) (it is an interval, so the premeasure applies)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Outer Measure Is Not a Measure)</div>
                    <div class="env-body">
                        <p>The outer measure \\(\\mu^*\\) is defined on <em>all</em> subsets, but it is only <em>subadditive</em>, not additive. For "bad" (non-measurable) sets, we can have \\(\\mu^*(A \\sqcup B) &lt; \\mu^*(A) + \\mu^*(B)\\). The point of the next section (Carathéodory's criterion) is to identify the "good" sets where equality holds.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="outer-measure-cover"></div>
            `,
            visualizations: [
                {
                    id: 'outer-measure-cover',
                    title: 'Outer Measure Cover Optimizer',
                    description: 'Drag interval covers over a target set and watch the total covering length update. Try to minimize!',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        const W = Math.min(body.clientWidth, 800);
                        const H = 420;
                        canvas.width = W; canvas.height = H;
                        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        const colors = {
                            bg:'#0c0c20', grid:'#1a1a40', axis:'#4a4a7a', text:'#c9d1d9',
                            muted:'#8b949e', blue:'#58a6ff', teal:'#3fb9a0', orange:'#f0883e',
                            green:'#3fb950', purple:'#bc8cff', red:'#f85149', yellow:'#d29922'
                        };

                        // Target set: union of a few sub-intervals (like a Cantor-ish set)
                        let targetType = 'cantor2';
                        function getTargetSegments() {
                            if (targetType === 'interval') return [{a:2, b:6}];
                            if (targetType === 'cantor2') return [{a:1, b:2}, {a:2.5, b:3}, {a:4, b:4.5}, {a:5, b:6.5}];
                            if (targetType === 'points') return [{a:1, b:1.01}, {a:2.5, b:2.51}, {a:4, b:4.01}, {a:5.5, b:5.51}, {a:7, b:7.01}];
                            return [{a:1, b:2}, {a:2.5, b:3}, {a:4, b:4.5}, {a:5, b:6.5}];
                        }

                        let covers = [
                            {a: 0.5, b: 3.5},
                            {a: 3.5, b: 7.0}
                        ];
                        let dragCover = null;
                        let dragEdge = null; // 'left', 'right', 'body'
                        let dragOffsetX = 0;

                        function numLineX(v) { return 50 + (v / 8) * (W - 90); }
                        function valFromX(px) { return Math.max(0, Math.min(8, (px - 50) / (W - 90) * 8)); }

                        function draw() {
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            // Title
                            ctx.fillStyle = colors.text; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Outer Measure Cover Optimizer', W/2, 22);
                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('Drag interval edges to minimize total cover length. The infimum is the outer measure.', W/2, 40);

                            // Number line
                            const lineY = 100;
                            ctx.strokeStyle = colors.axis; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(numLineX(0), lineY); ctx.lineTo(numLineX(8), lineY); ctx.stroke();
                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            for (let i = 0; i <= 8; i++) {
                                const x = numLineX(i);
                                ctx.beginPath(); ctx.moveTo(x, lineY - 5); ctx.lineTo(x, lineY + 5); ctx.stroke();
                                ctx.fillText(i, x, lineY + 18);
                            }

                            // Draw target set
                            const segments = getTargetSegments();
                            let targetLen = 0;
                            segments.forEach(function(seg) {
                                const x1 = numLineX(seg.a), x2 = numLineX(seg.b);
                                targetLen += seg.b - seg.a;
                                ctx.fillStyle = colors.green + '44';
                                ctx.fillRect(x1, lineY - 12, x2 - x1, 24);
                                ctx.strokeStyle = colors.green; ctx.lineWidth = 2;
                                ctx.strokeRect(x1, lineY - 12, x2 - x1, 24);
                            });
                            ctx.fillStyle = colors.green; ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Target set E (green)', 50, lineY - 24);
                            ctx.fillText('True outer measure = ' + targetLen.toFixed(3), 50, lineY - 40);

                            // Draw covers
                            let totalCoverLen = 0;
                            let coversTarget = true;
                            covers.forEach(function(cov, idx) {
                                const x1 = numLineX(cov.a), x2 = numLineX(cov.b);
                                const covLen = Math.max(0, cov.b - cov.a);
                                totalCoverLen += covLen;
                                const covY = 160 + idx * 50;

                                ctx.fillStyle = colors.blue + '33';
                                ctx.fillRect(x1, covY - 12, x2 - x1, 24);
                                ctx.strokeStyle = colors.blue; ctx.lineWidth = 2;
                                ctx.strokeRect(x1, covY - 12, x2 - x1, 24);

                                // Edge handles
                                ctx.fillStyle = colors.yellow;
                                ctx.beginPath(); ctx.arc(x1, covY, 6, 0, Math.PI * 2); ctx.fill();
                                ctx.beginPath(); ctx.arc(x2, covY, 6, 0, Math.PI * 2); ctx.fill();

                                ctx.fillStyle = colors.text; ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Cover ' + (idx+1) + ': (' + cov.a.toFixed(2) + ', ' + cov.b.toFixed(2) + ']  length = ' + covLen.toFixed(3), (x1+x2)/2, covY + 28);
                            });

                            // Check covering
                            segments.forEach(function(seg) {
                                for (let t = seg.a; t <= seg.b; t += 0.01) {
                                    let covered = false;
                                    covers.forEach(function(cov) {
                                        if (t >= cov.a && t <= cov.b) covered = true;
                                    });
                                    if (!covered) coversTarget = false;
                                }
                            });

                            // Summary
                            const sumY = 160 + covers.length * 50 + 20;
                            ctx.fillStyle = colors.text; ctx.font = '14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Total cover length: ' + totalCoverLen.toFixed(3), 50, sumY);

                            if (coversTarget) {
                                ctx.fillStyle = colors.green; ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.fillText('Covers the target!  This gives upper bound \u03BC*(E) \u2264 ' + totalCoverLen.toFixed(3), 50, sumY + 24);
                            } else {
                                ctx.fillStyle = colors.red; ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.fillText('Does NOT cover the target. Expand your intervals!', 50, sumY + 24);
                            }

                            const gap = totalCoverLen - targetLen;
                            if (coversTarget && gap < 0.2) {
                                ctx.fillStyle = colors.teal; ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('Excellent! Gap from optimum: ' + gap.toFixed(3), 50, sumY + 48);
                            } else if (coversTarget) {
                                ctx.fillStyle = colors.orange; ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('Can you tighten the cover? Gap: ' + gap.toFixed(3), 50, sumY + 48);
                            }

                            // Instructions
                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Drag the yellow handles to resize covers. Try to minimize total length while still covering E.', W/2, H - 16);
                        }

                        // Mouse interaction
                        canvas.addEventListener('mousedown', function(e) {
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.clientX - rect.left;
                            const my = e.clientY - rect.top;

                            covers.forEach(function(cov, idx) {
                                const covY = 160 + idx * 50;
                                const x1 = numLineX(cov.a), x2 = numLineX(cov.b);

                                if (Math.abs(mx - x1) < 12 && Math.abs(my - covY) < 16) {
                                    dragCover = idx; dragEdge = 'left'; e.preventDefault();
                                } else if (Math.abs(mx - x2) < 12 && Math.abs(my - covY) < 16) {
                                    dragCover = idx; dragEdge = 'right'; e.preventDefault();
                                } else if (mx > x1 && mx < x2 && Math.abs(my - covY) < 16) {
                                    dragCover = idx; dragEdge = 'body'; dragOffsetX = valFromX(mx) - cov.a; e.preventDefault();
                                }
                            });
                        });

                        canvas.addEventListener('mousemove', function(e) {
                            if (dragCover === null) return;
                            e.preventDefault();
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.clientX - rect.left;
                            const val = valFromX(mx);
                            const cov = covers[dragCover];

                            if (dragEdge === 'left') {
                                cov.a = Math.min(val, cov.b - 0.05);
                            } else if (dragEdge === 'right') {
                                cov.b = Math.max(val, cov.a + 0.05);
                            } else if (dragEdge === 'body') {
                                const newA = val - dragOffsetX;
                                const w = cov.b - cov.a;
                                cov.a = Math.max(0, Math.min(8 - w, newA));
                                cov.b = cov.a + w;
                            }
                            draw();
                        });

                        canvas.addEventListener('mouseup', function() { dragCover = null; dragEdge = null; });
                        canvas.addEventListener('mouseleave', function() { dragCover = null; dragEdge = null; });

                        // Touch support
                        canvas.addEventListener('touchstart', function(e) {
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.touches[0].clientX - rect.left;
                            const my = e.touches[0].clientY - rect.top;
                            covers.forEach(function(cov, idx) {
                                const covY = 160 + idx * 50;
                                const x1 = numLineX(cov.a), x2 = numLineX(cov.b);
                                if (Math.abs(mx - x1) < 18 && Math.abs(my - covY) < 24) { dragCover = idx; dragEdge = 'left'; e.preventDefault(); }
                                else if (Math.abs(mx - x2) < 18 && Math.abs(my - covY) < 24) { dragCover = idx; dragEdge = 'right'; e.preventDefault(); }
                                else if (mx > x1 && mx < x2 && Math.abs(my - covY) < 24) { dragCover = idx; dragEdge = 'body'; dragOffsetX = valFromX(mx) - cov.a; e.preventDefault(); }
                            });
                        }, {passive: false});
                        canvas.addEventListener('touchmove', function(e) {
                            if (dragCover === null) return; e.preventDefault();
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.touches[0].clientX - rect.left;
                            const val = valFromX(mx);
                            const cov = covers[dragCover];
                            if (dragEdge === 'left') { cov.a = Math.min(val, cov.b - 0.05); }
                            else if (dragEdge === 'right') { cov.b = Math.max(val, cov.a + 0.05); }
                            else if (dragEdge === 'body') { const newA = val - dragOffsetX; const w = cov.b - cov.a; cov.a = Math.max(0, Math.min(8-w, newA)); cov.b = cov.a + w; }
                            draw();
                        }, {passive: false});
                        canvas.addEventListener('touchend', function() { dragCover = null; dragEdge = null; });

                        VizEngine.createButton(controls, 'Target: Intervals', function() { targetType = 'cantor2'; covers = [{a:0.5,b:3.5},{a:3.5,b:7}]; draw(); });
                        VizEngine.createButton(controls, 'Target: Single [2,6]', function() { targetType = 'interval'; covers = [{a:1.5,b:6.5}]; draw(); });
                        VizEngine.createButton(controls, 'Target: Points', function() { targetType = 'points'; covers = [{a:0.5,b:2},{a:2,b:5},{a:5,b:7.5}]; draw(); });
                        VizEngine.createButton(controls, 'Add Cover', function() { covers.push({a:3,b:5}); draw(); });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that \\(\\lambda^*(\\mathbb{Q} \\cap [0,1]) = 0\\) directly from the definition of Lebesgue outer measure.',
                    hint: 'Enumerate the rationals \\(\\mathbb{Q} \\cap [0,1] = \\{q_1, q_2, \\ldots\\}\\) and cover \\(q_n\\) by an interval of length \\(\\varepsilon / 2^n\\).',
                    solution: 'Let \\(\\varepsilon > 0\\). Enumerate \\(\\mathbb{Q} \\cap [0,1] = \\{q_1, q_2, \\ldots\\}\\). Cover \\(q_n\\) by \\((q_n - \\varepsilon/2^{n+1}, q_n + \\varepsilon/2^{n+1})\\). The total length is \\(\\sum_{n=1}^{\\infty} \\varepsilon/2^n = \\varepsilon\\). Since \\(\\varepsilon > 0\\) is arbitrary, \\(\\lambda^*(\\mathbb{Q} \\cap [0,1]) = 0\\).'
                },
                {
                    question: 'Show that if \\(\\mu^*\\) is an outer measure and \\(A\\) is countable, then \\(\\mu^*(A) \\leq \\sum_{a \\in A} \\mu^*(\\{a\\})\\).',
                    hint: 'Write \\(A = \\bigcup_{n=1}^{\\infty}\\{a_n\\}\\) and use countable subadditivity.',
                    solution: 'Enumerate \\(A = \\{a_1, a_2, \\ldots\\}\\). By countable subadditivity, \\(\\mu^*(A) = \\mu^*\\!\\left(\\bigcup_n \\{a_n\\}\\right) \\leq \\sum_n \\mu^*(\\{a_n\\})\\).'
                },
                {
                    question: '(Harder) Show that the Cantor middle-thirds set \\(C\\) satisfies \\(\\lambda^*(C) = 0\\). Hint: at stage \\(n\\), \\(C\\) is contained in \\(2^n\\) intervals each of length \\(3^{-n}\\).',
                    hint: 'At step \\(n\\) of the construction, \\(C \\subseteq \\) a union of \\(2^n\\) closed intervals of length \\(3^{-n}\\). Compute the total length.',
                    solution: 'At step \\(n\\), \\(C \\subseteq \\bigcup_{k=1}^{2^n} I_k^{(n)}\\), where each \\(I_k^{(n)}\\) has length \\(3^{-n}\\). Thus \\(\\lambda^*(C) \\leq 2^n \\cdot 3^{-n} = (2/3)^n\\). Since \\((2/3)^n \\to 0\\), we get \\(\\lambda^*(C) = 0\\).'
                }
            ]
        },

        // ===================== SECTION 3 =====================
        {
            id: 'caratheodory-criterion',
            title: 'Carath\u00e9odory\'s Criterion and Measurability',
            content: `
                <div class="bridge section-bridge">
                    <p>We now have an outer measure \\(\\mu^*\\) defined on <em>all</em> subsets of \\(X\\). But \\(\\mu^*\\) is only subadditive, not additive, so it is not a measure. Carath\u00e9odory's brilliant insight is to <em>test</em> each set \\(E\\) for a "splitting" property: does \\(E\\) cleanly partition the outer measure of every other set? Those sets that pass the test form a \\(\\sigma\\)-algebra, and \\(\\mu^*\\) restricted to them is a genuine measure.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State Carath\u00e9odory's measurability criterion, prove that the collection of measurable sets forms a \\(\\sigma\\)-algebra, and illustrate the splitting condition with Lebesgue outer measure.</p>
                    <p><strong>Running example:</strong> Step 3 of building Lebesgue measure: identify the "good" sets where outer measure behaves additively.</p>
                </div>

                <h2>Step 3: The Splitting Condition</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.9 (Carath\u00e9odory Measurability)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu^*\\) be an outer measure on \\(X\\). A set \\(E \\subseteq X\\) is <strong>\\(\\mu^*\\)-measurable</strong> (or <strong>Carath\u00e9odory measurable</strong>) if for every "test set" \\(A \\subseteq X\\):</p>
                        \\[\\mu^*(A) = \\mu^*(A \\cap E) + \\mu^*(A \\cap E^c).\\]
                        <p>Denote the collection of all \\(\\mu^*\\)-measurable sets by \\(\\mathcal{M}^*\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Splitting Test)</div>
                    <div class="env-body">
                        <p>Think of \\(E\\) as a "knife" and \\(A\\) as a "pie." We already know \\(\\mu^*(A) \\leq \\mu^*(A \\cap E) + \\mu^*(A \\cap E^c)\\) by subadditivity. The measurability condition asks for the <em>reverse</em> inequality: \\(E\\) splits \\(A\\) cleanly, with no mass lost or created. If \\(E\\) can do this for <em>every</em> test set \\(A\\), then \\(E\\) is measurable.</p>
                        <p>Non-measurable sets (like the Vitali set) fail this test: for some test set \\(A\\), cutting \\(A\\) with \\(E\\) "creates" extra outer measure.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Only the \\(\\geq\\) Direction Matters)</div>
                    <div class="env-body">
                        <p>Since \\(\\mu^*(A) \\leq \\mu^*(A \\cap E) + \\mu^*(A \\cap E^c)\\) always holds by subadditivity, the Carath\u00e9odory condition is equivalent to requiring:</p>
                        \\[\\mu^*(A) \\geq \\mu^*(A \\cap E) + \\mu^*(A \\cap E^c) \\quad \\text{for all } A \\subseteq X.\\]
                        <p>Moreover, it suffices to check this for test sets \\(A\\) with \\(\\mu^*(A) &lt; \\infty\\) (the inequality is trivially true when \\(\\mu^*(A) = \\infty\\)).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.10 (Intervals Pass the Test)</div>
                    <div class="env-body">
                        <p>For Lebesgue outer measure \\(\\lambda^*\\), every interval \\((a, b]\\) is Carath\u00e9odory measurable. Intuitively, cutting any set \\(A\\) at the boundary points \\(a\\) and \\(b\\) does not "create mass." This can be verified rigorously using the covering argument from Proposition 3.4.</p>
                        <p>Similarly, \\(\\emptyset\\) and \\(\\mathbb{R}\\) are trivially measurable, and any set of outer measure zero is measurable.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.11 (\\(\\mathcal{M}^*\\) Is a \\(\\sigma\\)-Algebra)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu^*\\) be an outer measure on \\(X\\). The collection \\(\\mathcal{M}^*\\) of \\(\\mu^*\\)-measurable sets is a \\(\\sigma\\)-algebra on \\(X\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>We verify the three \\(\\sigma\\)-algebra axioms.</p>
                        <p><strong>(i) \\(X \\in \\mathcal{M}^*\\)</strong>: For any \\(A\\), \\(\\mu^*(A \\cap X) + \\mu^*(A \\cap X^c) = \\mu^*(A) + \\mu^*(\\emptyset) = \\mu^*(A)\\). \\(\\checkmark\\)</p>
                        <p><strong>(ii) Closure under complements</strong>: The condition is symmetric in \\(E\\) and \\(E^c\\). \\(\\checkmark\\)</p>
                        <p><strong>(iii) Closure under countable unions</strong>: This is the substantial step. Let \\(E_1, E_2, \\ldots \\in \\mathcal{M}^*\\). We may assume they are pairwise disjoint (replace \\(E_n\\) by \\(E_n \\setminus \\bigcup_{k &lt; n} E_k\\), which is in \\(\\mathcal{M}^*\\) by the finite case). Let \\(E = \\bigsqcup_n E_n\\).</p>
                        <p>For any test set \\(A\\), by induction using the splitting condition:</p>
                        \\[\\mu^*\\!\\left(A \\cap \\bigsqcup_{n=1}^{N} E_n\\right) = \\sum_{n=1}^{N} \\mu^*(A \\cap E_n).\\]
                        <p>Using the splitting condition for \\(F_N = \\bigsqcup_{n=1}^{N} E_n\\):</p>
                        \\[\\mu^*(A) = \\mu^*(A \\cap F_N) + \\mu^*(A \\cap F_N^c) \\geq \\sum_{n=1}^{N} \\mu^*(A \\cap E_n) + \\mu^*(A \\cap E^c),\\]
                        <p>since \\(E^c \\subseteq F_N^c\\). Letting \\(N \\to \\infty\\):</p>
                        \\[\\mu^*(A) \\geq \\sum_{n=1}^{\\infty} \\mu^*(A \\cap E_n) + \\mu^*(A \\cap E^c) \\geq \\mu^*(A \\cap E) + \\mu^*(A \\cap E^c),\\]
                        <p>where the last step uses countable subadditivity. The reverse inequality is automatic.</p>
                        <div class="qed"></div>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 3.12 (Null Sets Are Measurable)</div>
                    <div class="env-body">
                        <p>If \\(\\mu^*(N) = 0\\), then \\(N \\in \\mathcal{M}^*\\). In particular, every subset of a null set is measurable.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For any \\(A\\): \\(\\mu^*(A \\cap N) \\leq \\mu^*(N) = 0\\) and \\(\\mu^*(A \\cap N^c) \\leq \\mu^*(A)\\). So \\(\\mu^*(A \\cap N) + \\mu^*(A \\cap N^c) \\leq \\mu^*(A)\\).</p>
                        <div class="qed"></div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="caratheodory-split"></div>
            `,
            visualizations: [
                {
                    id: 'caratheodory-split',
                    title: 'Carath\u00e9odory Splitting Test',
                    description: 'Choose a candidate set E and a test set A. See whether E splits A cleanly.',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        const W = Math.min(body.clientWidth, 760);
                        const H = 380;
                        canvas.width = W; canvas.height = H;
                        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        const colors = {
                            bg:'#0c0c20', axis:'#4a4a7a', text:'#c9d1d9', muted:'#8b949e',
                            blue:'#58a6ff', teal:'#3fb9a0', orange:'#f0883e',
                            green:'#3fb950', purple:'#bc8cff', red:'#f85149', yellow:'#d29922'
                        };

                        let eLeft = 2.0, eRight = 5.0;
                        let aLeft = 1.0, aRight = 6.0;

                        function numX(v) { return 50 + (v / 8) * (W - 90); }

                        function draw() {
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            ctx.fillStyle = colors.text; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Carath\u00e9odory Splitting Test', W/2, 22);

                            // Number line
                            const y0 = 70;
                            ctx.strokeStyle = colors.axis; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(numX(0), y0); ctx.lineTo(numX(8), y0); ctx.stroke();
                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system,sans-serif';
                            for (let i = 0; i <= 8; i++) {
                                const x = numX(i);
                                ctx.beginPath(); ctx.moveTo(x, y0-4); ctx.lineTo(x, y0+4); ctx.stroke();
                                ctx.textAlign = 'center'; ctx.fillText(i, x, y0 + 16);
                            }

                            // Draw A (test set) - blue
                            const ax1 = numX(aLeft), ax2 = numX(aRight);
                            ctx.fillStyle = colors.blue + '33';
                            ctx.fillRect(ax1, y0 - 28, ax2 - ax1, 20);
                            ctx.strokeStyle = colors.blue; ctx.lineWidth = 2;
                            ctx.strokeRect(ax1, y0 - 28, ax2 - ax1, 20);
                            ctx.fillStyle = colors.blue; ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Test set A = [' + aLeft.toFixed(1) + ', ' + aRight.toFixed(1) + ']', (ax1+ax2)/2, y0 - 34);

                            // Draw E (candidate) - orange
                            const ex1 = numX(eLeft), ex2 = numX(eRight);
                            ctx.fillStyle = colors.orange + '33';
                            ctx.fillRect(ex1, y0 + 10, ex2 - ex1, 20);
                            ctx.strokeStyle = colors.orange; ctx.lineWidth = 2;
                            ctx.strokeRect(ex1, y0 + 10, ex2 - ex1, 20);
                            ctx.fillStyle = colors.orange; ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Candidate E = [' + eLeft.toFixed(1) + ', ' + eRight.toFixed(1) + ']', (ex1+ex2)/2, y0 + 44);

                            // Compute pieces
                            var intL = Math.max(aLeft, eLeft), intR = Math.min(aRight, eRight);
                            var aCapE = Math.max(0, intR - intL);
                            var aCapEc = Math.max(0, aRight - aLeft) - aCapE;
                            var muA = Math.max(0, aRight - aLeft);

                            // Draw A cap E (green)
                            var splitY = 130;
                            if (aCapE > 0) {
                                var gx1 = numX(intL), gx2 = numX(intR);
                                ctx.fillStyle = colors.green + '44';
                                ctx.fillRect(gx1, splitY, gx2 - gx1, 18);
                                ctx.strokeStyle = colors.green; ctx.lineWidth = 2;
                                ctx.strokeRect(gx1, splitY, gx2 - gx1, 18);
                                ctx.fillStyle = colors.green; ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('A \u2229 E', (gx1+gx2)/2, splitY - 6);
                            }

                            // Draw A cap Ec (purple)
                            splitY += 30;
                            if (aLeft < eLeft && aLeft < aRight) {
                                var px1 = numX(aLeft), px2 = numX(Math.min(eLeft, aRight));
                                if (px2 > px1) {
                                    ctx.fillStyle = colors.purple + '44';
                                    ctx.fillRect(px1, splitY, px2 - px1, 18);
                                    ctx.strokeStyle = colors.purple; ctx.lineWidth = 2;
                                    ctx.strokeRect(px1, splitY, px2 - px1, 18);
                                }
                            }
                            if (aRight > eRight && aRight > aLeft) {
                                var px1 = numX(Math.max(eRight, aLeft)), px2 = numX(aRight);
                                if (px2 > px1) {
                                    ctx.fillStyle = colors.purple + '44';
                                    ctx.fillRect(px1, splitY, px2 - px1, 18);
                                    ctx.strokeStyle = colors.purple; ctx.lineWidth = 2;
                                    ctx.strokeRect(px1, splitY, px2 - px1, 18);
                                }
                            }
                            ctx.fillStyle = colors.purple; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('A \u2229 E\u1d9c', 50, splitY - 4);

                            // Summary
                            var sumY = 210;
                            ctx.fillStyle = colors.text; ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('The splitting equation:', 30, sumY);

                            sumY += 26;
                            ctx.fillStyle = colors.blue; ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillText('\u03BC*(A) = ' + muA.toFixed(2), 50, sumY);

                            sumY += 22;
                            ctx.fillStyle = colors.green;
                            ctx.fillText('\u03BC*(A \u2229 E) = ' + aCapE.toFixed(2), 50, sumY);

                            sumY += 22;
                            ctx.fillStyle = colors.purple;
                            ctx.fillText('\u03BC*(A \u2229 E\u1d9c) = ' + aCapEc.toFixed(2), 50, sumY);

                            sumY += 22;
                            var sum = aCapE + aCapEc;
                            ctx.fillStyle = colors.text;
                            ctx.fillText('Sum = ' + aCapE.toFixed(2) + ' + ' + aCapEc.toFixed(2) + ' = ' + sum.toFixed(2), 50, sumY);

                            sumY += 28;
                            var pass = Math.abs(muA - sum) < 0.01;
                            ctx.fillStyle = pass ? colors.green : colors.red;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText(pass ? 'PASS: E is Carath\u00e9odory measurable for this test set' : 'FAIL', 50, sumY);

                            // Visual comparison bars
                            sumY += 30;
                            var barW = W - 120;
                            ctx.fillStyle = colors.blue + '55';
                            ctx.fillRect(60, sumY, barW * (muA / 8), 16);
                            ctx.fillStyle = colors.muted; ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'right'; ctx.fillText('\u03BC*(A)', 55, sumY + 11);

                            sumY += 22;
                            var w1 = barW * (aCapE / 8);
                            ctx.fillStyle = colors.green + '55'; ctx.fillRect(60, sumY, w1, 16);
                            ctx.fillStyle = colors.purple + '55'; ctx.fillRect(60 + w1, sumY, barW * (aCapEc / 8), 16);
                            ctx.fillStyle = colors.muted; ctx.textAlign = 'right'; ctx.fillText('Split', 55, sumY + 11);

                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('For intervals (measurable sets), the bars always match. Non-measurable sets would fail for some A.', W/2, H - 12);
                        }

                        VizEngine.createSlider(controls, 'E left', 0, 7, eLeft, 0.1, function(v) { eLeft = v; if (eLeft >= eRight) eRight = eLeft + 0.5; draw(); });
                        VizEngine.createSlider(controls, 'E right', 1, 8, eRight, 0.1, function(v) { eRight = v; if (eRight <= eLeft) eLeft = eRight - 0.5; draw(); });
                        VizEngine.createSlider(controls, 'A left', 0, 7, aLeft, 0.1, function(v) { aLeft = v; draw(); });
                        VizEngine.createSlider(controls, 'A right', 1, 8, aRight, 0.1, function(v) { aRight = v; draw(); });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify directly that \\(\\emptyset\\) and \\(X\\) are Carath\u00e9odory measurable for any outer measure \\(\\mu^*\\).',
                    hint: 'Compute \\(A \\cap \\emptyset\\) and \\(A \\cap \\emptyset^c\\).',
                    solution: 'For \\(E = \\emptyset\\): \\(\\mu^*(A \\cap \\emptyset) + \\mu^*(A \\cap X) = 0 + \\mu^*(A) = \\mu^*(A)\\). For \\(E = X\\): \\(\\mu^*(A \\cap X) + \\mu^*(A \\cap \\emptyset) = \\mu^*(A) + 0 = \\mu^*(A)\\).'
                },
                {
                    question: 'Prove Corollary 3.12: if \\(\\mu^*(N) = 0\\), then \\(N\\) is \\(\\mu^*\\)-measurable.',
                    hint: 'Use monotonicity: \\(\\mu^*(A \\cap N) \\leq \\mu^*(N) = 0\\).',
                    solution: 'For any test set \\(A\\): \\(\\mu^*(A \\cap N) \\leq \\mu^*(N) = 0\\) and \\(\\mu^*(A \\cap N^c) \\leq \\mu^*(A)\\). So \\(\\mu^*(A \\cap N) + \\mu^*(A \\cap N^c) \\leq 0 + \\mu^*(A) = \\mu^*(A)\\). The reverse holds by subadditivity.'
                },
                {
                    question: 'Show that if \\(E_1, E_2 \\in \\mathcal{M}^*\\), then \\(E_1 \\cap E_2 \\in \\mathcal{M}^*\\).',
                    hint: 'Use De Morgan or apply the splitting condition twice.',
                    solution: 'By De Morgan: \\(E_1 \\cap E_2 = (E_1^c \\cup E_2^c)^c\\). Since \\(\\mathcal{M}^*\\) is closed under complements and finite unions (a consequence of the \\(\\sigma\\)-algebra property), \\(E_1 \\cap E_2 \\in \\mathcal{M}^*\\).'
                }
            ]
        },

        // ===================== SECTION 4 =====================
        {
            id: 'caratheodory-extension-theorem',
            title: 'The Carath\u00e9odory Extension Theorem',
            content: `
                <div class="bridge section-bridge">
                    <p>We now assemble all the ingredients: a premeasure \\(\\mu_0\\) on an algebra \\(\\mathcal{A}\\), an outer measure \\(\\mu^*\\) on all subsets, and a \\(\\sigma\\)-algebra \\(\\mathcal{M}^*\\) of measurable sets. The Carath\u00e9odory Extension Theorem ties these together into one powerful statement: \\(\\mu^*|_{\\mathcal{M}^*}\\) is a complete measure extending \\(\\mu_0\\).</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove the Carath\u00e9odory Extension Theorem. Apply it to complete the construction of Lebesgue measure.</p>
                    <p><strong>Running example:</strong> Step 4 (the punchline): Lebesgue measure exists as a complete measure on the Lebesgue \\(\\sigma\\)-algebra.</p>
                </div>

                <h2>Step 4: The Main Theorem</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.13 (Carath\u00e9odory Extension Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu_0\\) be a premeasure on an algebra \\(\\mathcal{A}\\) over \\(X\\). Let \\(\\mu^*\\) be the outer measure induced by \\(\\mu_0\\) (Theorem 3.7), and let \\(\\mathcal{M}^*\\) be the \\(\\sigma\\)-algebra of \\(\\mu^*\\)-measurable sets (Theorem 3.11). Then:</p>
                        <ol>
                            <li>\\(\\mathcal{A} \\subseteq \\mathcal{M}^*\\), so \\(\\sigma(\\mathcal{A}) \\subseteq \\mathcal{M}^*\\)</li>
                            <li>\\(\\mu = \\mu^*|_{\\mathcal{M}^*}\\) is a <strong>complete measure</strong> on \\(\\mathcal{M}^*\\)</li>
                            <li>\\(\\mu\\) extends \\(\\mu_0\\): for all \\(A \\in \\mathcal{A}\\), \\(\\mu(A) = \\mu_0(A)\\)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof outline</div>
                    <div class="env-body">
                        <p><strong>(1) \\(\\mathcal{A} \\subseteq \\mathcal{M}^*\\)</strong>: Fix \\(E \\in \\mathcal{A}\\) and a test set \\(A\\) with \\(\\mu^*(A) &lt; \\infty\\). For \\(\\varepsilon &gt; 0\\), choose a cover \\(\\{B_n\\} \\subseteq \\mathcal{A}\\) of \\(A\\) with \\(\\sum \\mu_0(B_n) &lt; \\mu^*(A) + \\varepsilon\\). Since \\(\\mathcal{A}\\) is an algebra, \\(B_n \\cap E\\) and \\(B_n \\cap E^c\\) are in \\(\\mathcal{A}\\), and by finite additivity \\(\\mu_0(B_n) = \\mu_0(B_n \\cap E) + \\mu_0(B_n \\cap E^c)\\). Since \\(\\{B_n \\cap E\\}\\) covers \\(A \\cap E\\) and \\(\\{B_n \\cap E^c\\}\\) covers \\(A \\cap E^c\\):</p>
                        \\[\\mu^*(A \\cap E) + \\mu^*(A \\cap E^c) \\leq \\sum_n \\mu_0(B_n \\cap E) + \\sum_n \\mu_0(B_n \\cap E^c) = \\sum_n \\mu_0(B_n) &lt; \\mu^*(A) + \\varepsilon.\\]
                        <p>Since \\(\\varepsilon\\) is arbitrary, \\(E\\) is \\(\\mu^*\\)-measurable.</p>
                        <p><strong>(2) Countable additivity</strong>: For disjoint \\(E_1, E_2, \\ldots \\in \\mathcal{M}^*\\), the proof of Theorem 3.11 (with \\(A = \\bigsqcup_n E_n\\)) gives \\(\\mu^*(\\bigsqcup_n E_n) = \\sum_n \\mu^*(E_n)\\).</p>
                        <p><strong>(3) Completeness</strong>: By Corollary 3.12, subsets of null sets are in \\(\\mathcal{M}^*\\).</p>
                        <p><strong>(4) Extension</strong>: By Theorem 3.7, \\(\\mu^*(A) = \\mu_0(A)\\) for \\(A \\in \\mathcal{A}\\).</p>
                        <div class="qed"></div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.14 (Lebesgue Measure, Fully Constructed)</div>
                    <div class="env-body">
                        <p>Applying the Carath\u00e9odory Extension Theorem to the length premeasure on the interval algebra:</p>
                        <ul>
                            <li><strong>Input</strong>: \\(\\mu_0((a,b]) = b - a\\) on the algebra \\(\\mathcal{A}_0\\)</li>
                            <li><strong>Output</strong>: A complete measure \\(\\lambda\\) (Lebesgue measure) on the <strong>Lebesgue \\(\\sigma\\)-algebra</strong> \\(\\mathcal{L} = \\mathcal{M}^*\\)</li>
                        </ul>
                        <p>We have \\(\\mathcal{B}(\\mathbb{R}) \\subseteq \\mathcal{L} \\subsetneq \\mathcal{P}(\\mathbb{R})\\). The Borel \\(\\sigma\\)-algebra is strictly smaller than \\(\\mathcal{L}\\) (there exist Lebesgue-measurable non-Borel sets), and \\(\\mathcal{L}\\) is strictly smaller than the power set (Vitali sets are not in \\(\\mathcal{L}\\)).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Power of the Theorem)</div>
                    <div class="env-body">
                        <p>The Carath\u00e9odory Extension Theorem is one of the workhorses of measure theory. The same argument constructs Lebesgue measure, Lebesgue-Stieltjes measures, product measures (Ch 12), and Hausdorff measures (Ch 17). The recipe is always the same: define a premeasure on a simple algebra, verify countable additivity, then apply the theorem.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lebesgue-stieltjes-builder"></div>
            `,
            visualizations: [
                {
                    id: 'lebesgue-stieltjes-builder',
                    title: 'Lebesgue-Stieltjes Measure Builder',
                    description: 'Choose a distribution function F and query the induced measure on intervals.',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        const W = Math.min(body.clientWidth, 760);
                        const H = 380;
                        canvas.width = W; canvas.height = H;
                        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        const colors = {
                            bg:'#0c0c20', grid:'#1a1a40', axis:'#4a4a7a', text:'#c9d1d9',
                            muted:'#8b949e', blue:'#58a6ff', teal:'#3fb9a0', orange:'#f0883e',
                            green:'#3fb950', purple:'#bc8cff', red:'#f85149'
                        };

                        let funcType = 'identity';
                        let queryA = 1.0, queryB = 3.0;

                        function F(x) {
                            if (funcType === 'identity') return x;
                            if (funcType === 'step') return Math.floor(Math.max(0, x));
                            if (funcType === 'cdf') {
                                var t = 1 / (1 + 0.2316419 * Math.abs(x));
                                var d = 0.3989422802 * Math.exp(-x * x / 2);
                                var p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
                                return x >= 0 ? 1 - p : p;
                            }
                            if (funcType === 'cantor') {
                                if (x <= 0) return 0; if (x >= 1) return 1;
                                var result = 0, step = 0.5, lo = 0, hi = 1;
                                for (var i = 0; i < 20; i++) {
                                    var third = (hi - lo) / 3;
                                    if (x < lo + third) { hi = lo + third; }
                                    else if (x > hi - third) { lo = hi - third; result += step; }
                                    else { return result + step; }
                                    step /= 2;
                                }
                                return result + step;
                            }
                            return x;
                        }

                        function getXRange() {
                            if (funcType === 'cdf') return [-4, 4];
                            if (funcType === 'cantor') return [-0.2, 1.2];
                            return [0, 6];
                        }
                        function getYRange() {
                            if (funcType === 'cdf' || funcType === 'cantor') return [-0.05, 1.1];
                            return [0, 6];
                        }

                        function xToScreen(x) {
                            var r = getXRange();
                            return 60 + ((x - r[0]) / (r[1] - r[0])) * (W - 80);
                        }
                        function yToScreen(y) {
                            var r = getYRange();
                            return H - 50 - ((y - r[0]) / (r[1] - r[0])) * (H - 100);
                        }

                        function draw() {
                            ctx.fillStyle = colors.bg; ctx.fillRect(0, 0, W, H);

                            ctx.fillStyle = colors.text; ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Lebesgue-Stieltjes: \u03BC_F((a,b]) = F(b) \u2212 F(a)', W/2, 20);

                            var xR = getXRange(), yR = getYRange();

                            // Axes
                            ctx.strokeStyle = colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(xToScreen(xR[0]), yToScreen(yR[0])); ctx.lineTo(xToScreen(xR[1]), yToScreen(yR[0])); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(xToScreen(xR[0]), yToScreen(yR[0])); ctx.lineTo(xToScreen(xR[0]), yToScreen(yR[1])); ctx.stroke();

                            // Ticks
                            ctx.fillStyle = colors.muted; ctx.font = '10px -apple-system,sans-serif'; ctx.textAlign = 'center';
                            for (var x = Math.ceil(xR[0]); x <= xR[1]; x++) {
                                if (x === xR[0]) continue;
                                ctx.fillText(x, xToScreen(x), yToScreen(yR[0]) + 14);
                            }

                            // Draw F(x)
                            ctx.strokeStyle = colors.blue; ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (var i = 0; i <= 500; i++) {
                                var x = xR[0] + (xR[1] - xR[0]) * i / 500;
                                var y = Math.max(yR[0], Math.min(yR[1], F(x)));
                                i === 0 ? ctx.moveTo(xToScreen(x), yToScreen(y)) : ctx.lineTo(xToScreen(x), yToScreen(y));
                            }
                            ctx.stroke();

                            // Query
                            var fa = F(queryA), fb = F(queryB);
                            var measure = fb - fa;

                            // Shade query interval on x-axis
                            ctx.fillStyle = colors.green + '33';
                            var qx1 = xToScreen(queryA), qx2 = xToScreen(queryB);
                            ctx.fillRect(Math.min(qx1,qx2), yToScreen(yR[0]) - 6, Math.abs(qx2-qx1), 12);
                            ctx.strokeStyle = colors.green; ctx.lineWidth = 2;
                            ctx.strokeRect(Math.min(qx1,qx2), yToScreen(yR[0]) - 6, Math.abs(qx2-qx1), 12);

                            // Dashed lines
                            ctx.setLineDash([4, 3]); ctx.strokeStyle = colors.orange; ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(xToScreen(queryA), yToScreen(yR[0])); ctx.lineTo(xToScreen(queryA), yToScreen(fa)); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(xToScreen(queryA), yToScreen(fa)); ctx.lineTo(xToScreen(xR[0]), yToScreen(fa)); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(xToScreen(queryB), yToScreen(yR[0])); ctx.lineTo(xToScreen(queryB), yToScreen(fb)); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(xToScreen(queryB), yToScreen(fb)); ctx.lineTo(xToScreen(xR[0]), yToScreen(fb)); ctx.stroke();
                            ctx.setLineDash([]);

                            // Jump shading on y-axis
                            ctx.fillStyle = colors.orange + '33';
                            var yt = yToScreen(fb), yb = yToScreen(fa);
                            ctx.fillRect(xToScreen(xR[0]) - 8, Math.min(yt, yb), 8, Math.abs(yb - yt));

                            // Points on curve
                            ctx.fillStyle = colors.orange;
                            ctx.beginPath(); ctx.arc(xToScreen(queryA), yToScreen(fa), 4, 0, Math.PI*2); ctx.fill();
                            ctx.beginPath(); ctx.arc(xToScreen(queryB), yToScreen(fb), 4, 0, Math.PI*2); ctx.fill();

                            // Result
                            ctx.fillStyle = colors.green; ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('\u03BC_F((' + queryA.toFixed(1) + ', ' + queryB.toFixed(1) + ']) = ' + fb.toFixed(3) + ' \u2212 ' + fa.toFixed(3) + ' = ' + measure.toFixed(3), W/2, H - 10);

                            ctx.fillStyle = colors.blue; ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('F(x)', W - 20, 50);
                        }

                        VizEngine.createSlider(controls, 'a', -3, 5, queryA, 0.1, function(v) { queryA = v; draw(); });
                        VizEngine.createSlider(controls, 'b', -2, 6, queryB, 0.1, function(v) { queryB = v; draw(); });
                        VizEngine.createButton(controls, 'F(x) = x', function() { funcType='identity'; queryA=1; queryB=3; draw(); });
                        VizEngine.createButton(controls, 'F = floor(x)', function() { funcType='step'; queryA=0.5; queryB=3.5; draw(); });
                        VizEngine.createButton(controls, 'Normal CDF', function() { funcType='cdf'; queryA=-1; queryB=1; draw(); });
                        VizEngine.createButton(controls, 'Cantor fn', function() { funcType='cantor'; queryA=0; queryB=1; draw(); });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'State the three conclusions of the Carath\u00e9odory Extension Theorem. Why is completeness significant?',
                    hint: 'Think about subsets of null sets.',
                    solution: 'The theorem guarantees: (1) \\(\\mathcal{A} \\subseteq \\mathcal{M}^*\\), so \\(\\sigma(\\mathcal{A}) \\subseteq \\mathcal{M}^*\\); (2) \\(\\mu^*|_{\\mathcal{M}^*}\\) is a complete measure; (3) it extends \\(\\mu_0\\). Completeness means every subset of a null set is measurable, which ensures "almost everywhere" reasoning is well-behaved.'
                },
                {
                    question: 'Use the Carath\u00e9odory construction to build the Dirac measure \\(\\delta_0\\) on \\(\\mathbb{R}\\). What is the distribution function \\(F\\)?',
                    hint: 'What right-continuous non-decreasing \\(F\\) gives \\(F(b) - F(a) = 1\\) iff \\(0 \\in (a,b]\\)?',
                    solution: 'Use \\(F(x) = \\mathbf{1}_{[0,\\infty)}(x)\\). Then \\(\\mu_F((a,b]) = F(b) - F(a) = 1\\) if \\(a &lt; 0 \\leq b\\), and 0 otherwise. Carath\u00e9odory extends this to the Dirac measure \\(\\delta_0\\).'
                },
                {
                    question: 'The Cantor function \\(F_C\\) is continuous, non-decreasing, \\(F_C(0)=0\\), \\(F_C(1)=1\\), with \\(F_C\'=0\\) a.e. What is \\(\\mu_{F_C}([0,1])\\)? Is \\(\\mu_{F_C}\\) absolutely continuous with respect to Lebesgue measure?',
                    hint: 'Compute \\(F_C(1) - F_C(0)\\). Where does the mass concentrate?',
                    solution: '\\(\\mu_{F_C}([0,1]) = 1\\). But \\(\\mu_{F_C}\\) is singular with respect to Lebesgue measure: all mass concentrates on the Cantor set \\(C\\), which has \\(\\lambda(C) = 0\\). So \\(\\mu_{F_C}\\) is not absolutely continuous.'
                }
            ]
        },

        // ===================== SECTION 5 =====================
        {
            id: 'uniqueness-hahn-dynkin',
            title: 'Uniqueness: Hahn and Dynkin',
            content: `
                <div class="bridge section-bridge">
                    <p>The Carath\u00e9odory Extension Theorem guarantees <em>existence</em> of a measure extending a premeasure. But is the extension <em>unique</em>? In general, different measures can agree on an algebra but disagree on the generated \\(\\sigma\\)-algebra. Uniqueness holds under a natural condition: \\(\\sigma\\)-finiteness. The key tool is Dynkin's \\(\\pi\\)-\\(\\lambda\\) theorem.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove uniqueness of extensions from \\(\\pi\\)-systems under \\(\\sigma\\)-finiteness. Show failure of uniqueness without \\(\\sigma\\)-finiteness.</p>
                    <p><strong>Running example:</strong> Lebesgue measure is the <em>unique</em> translation-invariant measure on \\(\\mathcal{B}(\\mathbb{R})\\) normalizing \\((0,1]\\).</p>
                </div>

                <h2>The Uniqueness Question</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.15 (\\(\\pi\\)-System)</div>
                    <div class="env-body">
                        <p>A collection \\(\\mathcal{P} \\subseteq \\mathcal{P}(X)\\) is a <strong>\\(\\pi\\)-system</strong> if it is closed under finite intersections: \\(A, B \\in \\mathcal{P} \\Rightarrow A \\cap B \\in \\mathcal{P}\\).</p>
                        <p>Every algebra is a \\(\\pi\\)-system, but not conversely. The collection of half-open intervals \\(\\{(a,b] : a &lt; b\\}\\) is a \\(\\pi\\)-system (but not an algebra).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.16 (Uniqueness of Extension from a \\(\\pi\\)-System)</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{P}\\) be a \\(\\pi\\)-system that generates the \\(\\sigma\\)-algebra \\(\\sigma(\\mathcal{P})\\). If \\(\\mu\\) and \\(\\nu\\) are two measures on \\(\\sigma(\\mathcal{P})\\) that agree on \\(\\mathcal{P}\\), and there exist sets \\(E_1, E_2, \\ldots \\in \\mathcal{P}\\) with \\(X = \\bigcup_n E_n\\) and \\(\\mu(E_n) = \\nu(E_n) &lt; \\infty\\) for all \\(n\\), then \\(\\mu = \\nu\\) on \\(\\sigma(\\mathcal{P})\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch (via Dynkin's \\(\\pi\\)-\\(\\lambda\\) Theorem)</div>
                    <div class="env-body">
                        <p>Recall Dynkin's theorem (Ch 1): if a \\(\\pi\\)-system \\(\\mathcal{P}\\) is contained in a \\(\\lambda\\)-system \\(\\mathcal{L}\\), then \\(\\sigma(\\mathcal{P}) \\subseteq \\mathcal{L}\\).</p>
                        <p><strong>Step 1</strong>: First assume \\(\\mu(X) = \\nu(X) &lt; \\infty\\). Define \\(\\mathcal{L} = \\{A \\in \\sigma(\\mathcal{P}) : \\mu(A) = \\nu(A)\\}\\). One checks \\(\\mathcal{L}\\) is a \\(\\lambda\\)-system containing \\(\\mathcal{P}\\). By Dynkin's theorem, \\(\\sigma(\\mathcal{P}) \\subseteq \\mathcal{L}\\), so \\(\\mu = \\nu\\) everywhere.</p>
                        <p><strong>Step 2</strong>: For the \\(\\sigma\\)-finite case, write \\(X = \\bigcup_n E_n\\) with \\(E_n \\in \\mathcal{P}\\), \\(\\mu(E_n) &lt; \\infty\\). Apply Step 1 to the restricted measures \\(\\mu|_{E_n}\\) and \\(\\nu|_{E_n}\\), then piece together by continuity from below.</p>
                        <div class="qed"></div>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 3.17 (Uniqueness of Lebesgue Measure)</div>
                    <div class="env-body">
                        <p>Lebesgue measure \\(\\lambda\\) is the unique measure on \\(\\mathcal{B}(\\mathbb{R})\\) satisfying \\(\\lambda((a,b]) = b - a\\) for all \\(a &lt; b\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The half-open intervals \\(\\{(a,b] : a &lt; b\\}\\) form a \\(\\pi\\)-system generating \\(\\mathcal{B}(\\mathbb{R})\\). The cover \\(\\mathbb{R} = \\bigcup_{n=1}^{\\infty} (-n, n]\\) with \\(\\lambda((-n,n]) = 2n &lt; \\infty\\) provides the \\(\\sigma\\)-finiteness. By Theorem 3.16, any two measures agreeing on half-open intervals must agree on all Borel sets.</p>
                        <div class="qed"></div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Uniqueness Fails Without \\(\\sigma\\)-Finiteness)</div>
                    <div class="env-body">
                        <p>On \\((\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))\\), define \\(\\mu_1(A) = \\#(A \\cap \\mathbb{Z})\\) (counting measure restricted to integers) and \\(\\mu_2(A) = \\#(A \\cap 2\\mathbb{Z})\\) (counting on even integers). Both assign 0 to every bounded half-open interval containing no relevant points, but they differ on, say, \\(\\{1\\}\\). A better example: on an uncountable set with the co-countable \\(\\sigma\\)-algebra, counting measure and "\\(2 \\times\\) counting measure" agree on singletons but are different.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="uniqueness-failure"></div>
            `,
            visualizations: [
                {
                    id: 'uniqueness-failure',
                    title: 'Extension Uniqueness: \\(\\sigma\\)-Finiteness Matters',
                    description: 'Explore how two measures can agree on an algebra but differ on the sigma-algebra when sigma-finiteness fails.',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        const W = Math.min(body.clientWidth, 760);
                        const H = 340;
                        canvas.width = W; canvas.height = H;
                        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        const colors = {
                            bg:'#0c0c20', text:'#c9d1d9', muted:'#8b949e',
                            blue:'#58a6ff', teal:'#3fb9a0', orange:'#f0883e',
                            green:'#3fb950', red:'#f85149', purple:'#bc8cff'
                        };

                        let example = 'sigma-finite'; // or 'not-sigma-finite'

                        function draw() {
                            ctx.fillStyle = colors.bg; ctx.fillRect(0, 0, W, H);

                            ctx.fillStyle = colors.text; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';

                            if (example === 'sigma-finite') {
                                ctx.fillText('Uniqueness HOLDS (\u03C3-finite case)', W/2, 24);

                                ctx.font = '13px -apple-system,sans-serif'; ctx.textAlign = 'left';
                                ctx.fillStyle = colors.text;
                                ctx.fillText('Space: \u211D with Borel \u03C3-algebra', 30, 60);
                                ctx.fillText('\u03C0-system: half-open intervals (a, b]', 30, 85);
                                ctx.fillText('\u03C3-finite cover: \u211D = \u222A (-n, n], each has finite length', 30, 110);

                                ctx.fillStyle = colors.green; ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.fillText('If \u03BC and \u03BD agree on all (a,b], then \u03BC = \u03BD on all Borel sets.', 30, 145);

                                // Illustration: number line with cover
                                var y0 = 190;
                                ctx.strokeStyle = colors.muted; ctx.lineWidth = 1;
                                ctx.beginPath(); ctx.moveTo(50, y0); ctx.lineTo(W-50, y0); ctx.stroke();

                                var segColors = [colors.blue, colors.teal, colors.orange, colors.purple, colors.green];
                                for (var n = 1; n <= 5; n++) {
                                    var x1 = W/2 - n * 50, x2 = W/2 + n * 50;
                                    var c = segColors[(n-1) % segColors.length];
                                    ctx.strokeStyle = c; ctx.lineWidth = 2;
                                    ctx.beginPath(); ctx.moveTo(Math.max(50, x1), y0 + n*8); ctx.lineTo(Math.min(W-50, x2), y0 + n*8); ctx.stroke();
                                    ctx.fillStyle = c; ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText('(-' + n + ', ' + n + ']', W/2, y0 + n*8 + 12);
                                }

                                ctx.fillStyle = colors.muted; ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Each piece has finite measure \u2192 \u03C3-finite \u2192 uniqueness guaranteed', W/2, H - 20);

                            } else {
                                ctx.fillText('Uniqueness FAILS (not \u03C3-finite)', W/2, 24);

                                ctx.font = '13px -apple-system,sans-serif'; ctx.textAlign = 'left';
                                ctx.fillStyle = colors.text;
                                ctx.fillText('Space: X = uncountable set, \u03C3-algebra = co-countable sets', 30, 60);
                                ctx.fillText('\u03BC\u2081 = counting measure, \u03BC\u2082 = 2 \u00D7 counting measure', 30, 85);

                                ctx.fillStyle = colors.orange;
                                ctx.fillText('On finite sets F: \u03BC\u2081(F) = #F, \u03BC\u2082(F) = 2\u00B7#F  \u2014 they DIFFER', 30, 120);

                                ctx.fillStyle = colors.text;
                                ctx.fillText('But on the \u03C0-system of co-countable sets:', 30, 150);
                                ctx.fillStyle = colors.red;
                                ctx.fillText('Both give \u221E to every co-countable set \u2192 agree on \u03C0-system!', 30, 175);

                                ctx.fillStyle = colors.red; ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.fillText('\u03BC\u2081 \u2260 \u03BC\u2082 on \u03C3(\u03C0-system), yet they agree on \u03C0-system.', 30, 210);

                                ctx.fillStyle = colors.text; ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('Problem: no \u03C3-finite cover from the \u03C0-system.', 30, 240);

                                // Visual
                                var cx = W/2, cy = 290;
                                ctx.strokeStyle = colors.muted; ctx.lineWidth = 1;
                                ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI*2); ctx.stroke();
                                ctx.fillStyle = colors.muted; ctx.font = '20px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('\u221E = \u221E', cx, cy + 7);

                                ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText('\u221E = \u221E tells you nothing about the underlying measure', W/2, H - 16);
                            }
                        }

                        VizEngine.createButton(controls, '\u03C3-Finite (Unique)', function() { example = 'sigma-finite'; draw(); });
                        VizEngine.createButton(controls, 'Not \u03C3-Finite (Not Unique)', function() { example = 'not-sigma-finite'; draw(); });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify that the collection \\(\\{(a,b] : -\\infty \\leq a &lt; b \\leq \\infty\\}\\) is a \\(\\pi\\)-system.',
                    hint: 'Compute the intersection of two half-open intervals.',
                    solution: '\\((a_1, b_1] \\cap (a_2, b_2] = (\\max(a_1,a_2), \\min(b_1,b_2)]\\), which is either empty or another half-open interval. In either case, the intersection is in the collection (the empty set can be written as \\((c,c]\\)). So the collection is closed under finite intersections.'
                },
                {
                    question: 'Why does the proof of Theorem 3.16 require \\(\\mu(X) &lt; \\infty\\) in Step 1? Where exactly does finiteness enter?',
                    hint: 'Check which \\(\\lambda\\)-system axiom fails without finiteness.',
                    solution: 'To show \\(\\mathcal{L}\\) is a \\(\\lambda\\)-system, we need: if \\(A \\subseteq B\\) are in \\(\\mathcal{L}\\), then \\(B \\setminus A \\in \\mathcal{L}\\), i.e., \\(\\mu(B \\setminus A) = \\nu(B \\setminus A)\\). We compute \\(\\mu(B \\setminus A) = \\mu(B) - \\mu(A) = \\nu(B) - \\nu(A) = \\nu(B \\setminus A)\\). The subtraction is valid only if \\(\\mu(A) &lt; \\infty\\). When \\(\\mu(X) &lt; \\infty\\), monotonicity gives \\(\\mu(A) \\leq \\mu(X) &lt; \\infty\\) for all \\(A\\).'
                },
                {
                    question: 'Give a concrete example of two distinct measures on \\((\\mathbb{N}, \\mathcal{P}(\\mathbb{N}))\\) that agree on all singletons.',
                    hint: 'This is impossible if singletons generate the full \\(\\sigma\\)-algebra and the space is \\(\\sigma\\)-finite...',
                    solution: 'This is actually impossible! Singletons form a \\(\\pi\\)-system generating \\(\\mathcal{P}(\\mathbb{N})\\), and \\(\\mathbb{N} = \\bigcup_n \\{n\\}\\) provides a \\(\\sigma\\)-finite cover with finite pieces. By Theorem 3.16, any two measures agreeing on singletons must agree everywhere on \\(\\mathcal{P}(\\mathbb{N})\\). This illustrates the power of uniqueness under \\(\\sigma\\)-finiteness.'
                }
            ]
        },

        // ===================== SECTION 6 =====================
        {
            id: 'extension-in-practice',
            title: 'The Extension Theorem in Practice',
            content: `
                <div class="bridge section-bridge">
                    <p>We now step back and view the entire construction as a repeatable <em>recipe</em>. Having built Lebesgue measure step by step, we formalize the general procedure and show how the same template produces Lebesgue-Stieltjes measures, product measures, and more.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Summarize the measure-construction pipeline as a reusable recipe. Apply it to several important examples. Provide a "Recipe" summary box.</p>
                    <p><strong>Running example:</strong> The full pipeline, from intervals to Lebesgue measure, is now complete. We show the same pipeline in other settings.</p>
                </div>

                <h2>The Measure Construction Pipeline</h2>

                <div class="env-block remark">
                    <div class="env-title">Recipe: Building a Measure via Carath\u00e9odory</div>
                    <div class="env-body">
                        <p>To construct a measure on a set \\(X\\), follow these steps:</p>
                        <ol>
                            <li><strong>Choose a generating collection.</strong> Pick an algebra (or at minimum a \\(\\pi\\)-system) \\(\\mathcal{A}\\) of "elementary" sets on which the measure is natural to define.</li>
                            <li><strong>Define a premeasure \\(\\mu_0\\) on \\(\\mathcal{A}\\).</strong> Assign sizes to sets in \\(\\mathcal{A}\\) consistent with finite additivity. Then verify <em>countable additivity</em> on \\(\\mathcal{A}\\). (This is typically the hardest step, often using compactness or dominated convergence.)</li>
                            <li><strong>Construct the outer measure.</strong> For any \\(E \\subseteq X\\), set \\(\\mu^*(E) = \\inf\\{\\sum \\mu_0(A_n) : E \\subseteq \\bigcup A_n, A_n \\in \\mathcal{A}\\}\\).</li>
                            <li><strong>Apply Carath\u00e9odory.</strong> The measurable sets \\(\\mathcal{M}^*\\) form a \\(\\sigma\\)-algebra containing \\(\\mathcal{A}\\), and \\(\\mu^*|_{\\mathcal{M}^*}\\) is a complete measure extending \\(\\mu_0\\).</li>
                            <li><strong>Check uniqueness.</strong> If \\(\\mu_0\\) is \\(\\sigma\\)-finite on \\(\\mathcal{A}\\), the extension to \\(\\sigma(\\mathcal{A})\\) is unique.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.18 (Lebesgue Measure: The Complete Pipeline)</div>
                    <div class="env-body">
                        <table style="width:100%; border-collapse: collapse; margin: 10px 0;">
                            <tr style="border-bottom: 1px solid #333;">
                                <td style="padding: 6px; color: #8b949e; width: 30%;">Step 1: Algebra</td>
                                <td style="padding: 6px;">\\(\\mathcal{A}_0\\) = finite disjoint unions of half-open intervals \\((a,b]\\)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #333;">
                                <td style="padding: 6px; color: #8b949e;">Step 2: Premeasure</td>
                                <td style="padding: 6px;">\\(\\mu_0((a,b]) = b - a\\), extended by additivity; countable additivity via Heine-Borel</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #333;">
                                <td style="padding: 6px; color: #8b949e;">Step 3: Outer measure</td>
                                <td style="padding: 6px;">\\(\\lambda^*(E) = \\inf\\{\\sum(b_n - a_n) : E \\subseteq \\bigcup(a_n, b_n]\\}\\)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #333;">
                                <td style="padding: 6px; color: #8b949e;">Step 4: Carath\u00e9odory</td>
                                <td style="padding: 6px;">\\(\\lambda = \\lambda^*|_{\\mathcal{L}}\\) on the Lebesgue \\(\\sigma\\)-algebra \\(\\mathcal{L} \\supseteq \\mathcal{B}(\\mathbb{R})\\)</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px; color: #8b949e;">Step 5: Uniqueness</td>
                                <td style="padding: 6px;">\\(\\sigma\\)-finite (\\(\\mathbb{R} = \\bigcup(-n,n]\\)), so unique on \\(\\mathcal{B}(\\mathbb{R})\\)</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.19 (Lebesgue-Stieltjes Measures)</div>
                    <div class="env-body">
                        <p>Let \\(F : \\mathbb{R} \\to \\mathbb{R}\\) be right-continuous and non-decreasing. Define \\(\\mu_F((a,b]) = F(b) - F(a)\\). The same pipeline yields a complete measure \\(\\mu_F\\) on a \\(\\sigma\\)-algebra containing \\(\\mathcal{B}(\\mathbb{R})\\). Special cases:</p>
                        <ul>
                            <li>\\(F(x) = x\\): Lebesgue measure</li>
                            <li>\\(F\\) a CDF: the probability measure of a random variable</li>
                            <li>\\(F\\) a step function: a discrete (atomic) measure</li>
                            <li>\\(F\\) the Cantor function: a singular continuous measure</li>
                        </ul>
                        <p><strong>Conversely</strong>, every Borel measure on \\(\\mathbb{R}\\) that is finite on bounded intervals arises this way (see Ch 13 for the connection to differentiation).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.20 (Product Measures: Preview)</div>
                    <div class="env-body">
                        <p>Given measure spaces \\((X, \\mathcal{A}, \\mu)\\) and \\((Y, \\mathcal{B}, \\nu)\\), the product measure \\(\\mu \\times \\nu\\) on \\(X \\times Y\\) is constructed via Carath\u00e9odory:</p>
                        <ul>
                            <li><strong>Algebra</strong>: Finite disjoint unions of "measurable rectangles" \\(A \\times B\\) (\\(A \\in \\mathcal{A}, B \\in \\mathcal{B}\\))</li>
                            <li><strong>Premeasure</strong>: \\(\\mu_0(A \\times B) = \\mu(A) \\cdot \\nu(B)\\)</li>
                            <li><strong>Extension</strong>: Apply Carath\u00e9odory to get \\(\\mu \\times \\nu\\) on \\(\\sigma(\\mathcal{A} \\otimes \\mathcal{B})\\)</li>
                        </ul>
                        <p>This is developed fully in Chapter 12 (Product Measures and Fubini-Tonelli).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (When Carath\u00e9odory Is Not Needed)</div>
                    <div class="env-body">
                        <p>Not every measure is built via Carath\u00e9odory. The Riesz Representation Theorem (Ch 16) constructs measures from positive linear functionals. The Kolmogorov Extension Theorem (Ch 12) builds measures on infinite product spaces. However, both of these ultimately rely on the Carath\u00e9odory construction (or a close relative) in their proofs.</p>
                    </div>
                </div>

                <h2>Summary: The Landscape of Set Collections and Size Functions</h2>

                <div class="env-block remark">
                    <div class="env-title">The Hierarchy</div>
                    <div class="env-body">
                        <table style="width:100%; border-collapse: collapse; margin: 10px 0;">
                            <tr style="border-bottom: 1px solid #444;">
                                <th style="padding: 8px; text-align: left; color: #58a6ff;">Collection</th>
                                <th style="padding: 8px; text-align: left; color: #58a6ff;">Closure</th>
                                <th style="padding: 8px; text-align: left; color: #58a6ff;">Size Function</th>
                            </tr>
                            <tr style="border-bottom: 1px solid #222;">
                                <td style="padding: 6px;">\\(\\pi\\)-system</td>
                                <td style="padding: 6px;">Finite \\(\\cap\\)</td>
                                <td style="padding: 6px;">(determines measure via uniqueness)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #222;">
                                <td style="padding: 6px;">Algebra</td>
                                <td style="padding: 6px;">Finite \\(\\cup, \\cap, {}^c\\)</td>
                                <td style="padding: 6px;">Premeasure (finitely additive + ctbl. additive when applicable)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #222;">
                                <td style="padding: 6px;">\\(\\sigma\\)-algebra</td>
                                <td style="padding: 6px;">Countable \\(\\cup, \\cap, {}^c\\)</td>
                                <td style="padding: 6px;">Measure (countably additive)</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px;">Power set \\(\\mathcal{P}(X)\\)</td>
                                <td style="padding: 6px;">Everything</td>
                                <td style="padding: 6px;">Outer measure (countably subadditive)</td>
                            </tr>
                        </table>
                        <p>The Carath\u00e9odory Extension Theorem is the bridge from the second row to the third: it promotes a premeasure on an algebra to a genuine measure on a \\(\\sigma\\)-algebra.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="pipeline-diagram"></div>
            `,
            visualizations: [
                {
                    id: 'pipeline-diagram',
                    title: 'The Measure Construction Pipeline',
                    description: 'An animated diagram of the 5-step recipe from premeasure to complete measure.',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        const W = Math.min(body.clientWidth, 800);
                        const H = 420;
                        canvas.width = W; canvas.height = H;
                        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        const colors = {
                            bg:'#0c0c20', text:'#c9d1d9', muted:'#8b949e',
                            blue:'#58a6ff', teal:'#3fb9a0', orange:'#f0883e',
                            green:'#3fb950', purple:'#bc8cff', red:'#f85149', yellow:'#d29922'
                        };

                        let activeStep = 0; // 0-4
                        var stepColors = [colors.blue, colors.teal, colors.orange, colors.green, colors.purple];
                        var stepNames = [
                            'Step 1: Choose Algebra',
                            'Step 2: Define Premeasure',
                            'Step 3: Build Outer Measure',
                            'Step 4: Carath\u00e9odory Extension',
                            'Step 5: Uniqueness Check'
                        ];
                        var stepDetails = [
                            'Pick an algebra A of "simple" sets\nwhere the measure is easy to define.\n\nLebesgue: A\u2080 = finite unions\nof half-open intervals (a,b].',
                            'Define \u03BC\u2080 on A satisfying:\n\u2022 \u03BC\u2080(\u2205) = 0\n\u2022 Countable additivity (when union \u2208 A)\n\nLebesgue: \u03BC\u2080((a,b]) = b \u2212 a',
                            'Extend to ALL subsets via covers:\n\u03BC*(E) = inf { \u03A3 \u03BC\u2080(A\u2099) : E \u2286 \u222A A\u2099 }\n\nDefined on P(X), but only\ncountably SUBadditive.',
                            'Identify measurable sets via\nCarath\u00e9odory splitting condition.\n\u03BC*|_{M*} is a complete measure\nextending \u03BC\u2080.',
                            'If \u03BC\u2080 is \u03C3-finite,\nthe extension to \u03C3(A) is unique.\n\nLebesgue: \u211D = \u222A(-n,n]\nso uniqueness holds.'
                        ];

                        function draw() {
                            ctx.fillStyle = colors.bg; ctx.fillRect(0, 0, W, H);

                            ctx.fillStyle = colors.text; ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('The Measure Construction Pipeline', W/2, 24);

                            // Draw the 5 boxes with arrows
                            var boxW = 120, boxH = 50;
                            var startX = 30, gapX = (W - 2*startX - 5*boxW) / 4;
                            if (gapX < 10) { boxW = 100; gapX = (W - 2*startX - 5*boxW) / 4; }
                            var boxY = 65;

                            for (var i = 0; i < 5; i++) {
                                var bx = startX + i * (boxW + gapX);
                                var isActive = (i === activeStep);

                                // Box
                                ctx.fillStyle = isActive ? stepColors[i] + '44' : '#14142e';
                                ctx.fillRect(bx, boxY, boxW, boxH);
                                ctx.strokeStyle = isActive ? stepColors[i] : colors.muted;
                                ctx.lineWidth = isActive ? 2.5 : 1;
                                ctx.strokeRect(bx, boxY, boxW, boxH);

                                // Label
                                ctx.fillStyle = isActive ? stepColors[i] : colors.muted;
                                ctx.font = (isActive ? 'bold ' : '') + '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Step ' + (i+1), bx + boxW/2, boxY + 20);

                                var shortNames = ['Algebra', 'Premeasure', 'Outer \u03BC*', 'Carath\u00e9odory', 'Uniqueness'];
                                ctx.fillText(shortNames[i], bx + boxW/2, boxY + 38);

                                // Arrow to next
                                if (i < 4) {
                                    var ax1 = bx + boxW + 2, ax2 = bx + boxW + gapX - 2;
                                    ctx.strokeStyle = colors.muted; ctx.lineWidth = 1.5;
                                    ctx.beginPath(); ctx.moveTo(ax1, boxY + boxH/2); ctx.lineTo(ax2, boxY + boxH/2); ctx.stroke();
                                    ctx.beginPath(); ctx.moveTo(ax2, boxY + boxH/2);
                                    ctx.lineTo(ax2 - 6, boxY + boxH/2 - 4); ctx.moveTo(ax2, boxY + boxH/2);
                                    ctx.lineTo(ax2 - 6, boxY + boxH/2 + 4); ctx.stroke();
                                }
                            }

                            // Detail panel
                            var detY = boxY + boxH + 30;
                            ctx.fillStyle = stepColors[activeStep] + '22';
                            ctx.fillRect(30, detY, W - 60, H - detY - 20);
                            ctx.strokeStyle = stepColors[activeStep]; ctx.lineWidth = 1.5;
                            ctx.strokeRect(30, detY, W - 60, H - detY - 20);

                            ctx.fillStyle = stepColors[activeStep]; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText(stepNames[activeStep], 50, detY + 26);

                            ctx.fillStyle = colors.text; ctx.font = '13px -apple-system,sans-serif';
                            var lines = stepDetails[activeStep].split('\n');
                            lines.forEach(function(line, li) {
                                ctx.fillText(line, 50, detY + 52 + li * 20);
                            });

                            // Navigation hint
                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Click the steps above or use the buttons below to navigate the pipeline.', W/2, H - 6);
                        }

                        // Click on boxes
                        canvas.addEventListener('click', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left, my = e.clientY - rect.top;
                            var boxW2 = 120, startX2 = 30;
                            var gapX2 = (W - 2*startX2 - 5*boxW2) / 4;
                            if (gapX2 < 10) { boxW2 = 100; gapX2 = (W - 2*startX2 - 5*boxW2) / 4; }
                            for (var i = 0; i < 5; i++) {
                                var bx = startX2 + i * (boxW2 + gapX2);
                                if (mx >= bx && mx <= bx + boxW2 && my >= 65 && my <= 115) {
                                    activeStep = i; draw(); return;
                                }
                            }
                        });

                        VizEngine.createButton(controls, '\u25C0 Previous', function() { activeStep = Math.max(0, activeStep - 1); draw(); });
                        VizEngine.createButton(controls, 'Next \u25B6', function() { activeStep = Math.min(4, activeStep + 1); draw(); });
                        VizEngine.createButton(controls, 'Auto Tour', function() {
                            activeStep = 0; draw();
                            var tour = setInterval(function() {
                                activeStep++;
                                if (activeStep > 4) { clearInterval(tour); activeStep = 4; }
                                draw();
                            }, 2000);
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Apply the Carath\u00e9odory recipe to construct counting measure on \\(\\mathbb{N}\\). Identify the algebra, premeasure, and verify the result.',
                    hint: 'Use the algebra of all finite and cofinite subsets. The premeasure assigns to each finite set its cardinality.',
                    solution: 'Algebra: \\(\\mathcal{A}\\) = all subsets of \\(\\mathbb{N}\\) that are finite or cofinite. Premeasure: \\(\\mu_0(A) = \\#A\\) if \\(A\\) is finite, \\(\\mu_0(A) = \\infty\\) if \\(A\\) is cofinite. Countable additivity: if \\(\\bigsqcup A_n \\in \\mathcal{A}\\), then either finitely many are nonempty (trivial) or the union is cofinite (both sides are \\(\\infty\\)). Apply Carath\u00e9odory: the outer measure is \\(\\mu^*(E) = \\#E\\) for all \\(E \\subseteq \\mathbb{N}\\). Every set is measurable (check the splitting condition). Result: counting measure on \\(\\mathcal{P}(\\mathbb{N})\\).'
                },
                {
                    question: 'Let \\(F(x) = 0\\) for \\(x &lt; 0\\) and \\(F(x) = 1 - e^{-x}\\) for \\(x \\geq 0\\). Describe the Lebesgue-Stieltjes measure \\(\\mu_F\\). Compute \\(\\mu_F((1, 3])\\) and \\(\\mu_F(\\{0\\})\\).',
                    hint: '\\(F\\) is the CDF of the exponential distribution with rate 1.',
                    solution: '\\(\\mu_F\\) is the exponential distribution with rate 1. \\(\\mu_F((1,3]) = F(3) - F(1) = (1-e^{-3}) - (1-e^{-1}) = e^{-1} - e^{-3} \\approx 0.318\\). For \\(\\mu_F(\\{0\\}) = \\lim_{\\varepsilon \\downarrow 0} \\mu_F((-\\varepsilon, 0]) = \\lim_{\\varepsilon \\downarrow 0} (F(0) - F(-\\varepsilon)) = 0 - 0 = 0\\). (No atom at 0, since \\(F\\) is continuous.)'
                },
                {
                    question: 'Construct a probability measure on \\(\\{1, 2, 3, 4, 5, 6\\}\\) modelling a fair die using the Carath\u00e9odory recipe. Is this overkill?',
                    hint: 'On a finite set, every subset is in every \\(\\sigma\\)-algebra.',
                    solution: 'Algebra: \\(\\mathcal{P}(\\{1,\\ldots,6\\})\\). Premeasure: \\(\\mu_0(A) = \\#A / 6\\). This is already a measure on the full \\(\\sigma\\)-algebra. Carath\u00e9odory is overkill here; it simply recovers the same measure. The theorem is powerful precisely when the initial algebra is <em>smaller</em> than the target \\(\\sigma\\)-algebra.'
                },
                {
                    question: '(Harder) Let \\(\\mu\\) be a measure on \\((X, \\mathcal{M})\\) and let \\(\\bar{\\mathcal{M}}\\) be the completion. Show that \\(\\bar{\\mathcal{M}} = \\{A \\cup N : A \\in \\mathcal{M}, N \\subseteq M \\text{ for some } M \\in \\mathcal{M} \\text{ with } \\mu(M) = 0\\}\\).',
                    hint: 'Show this collection is a \\(\\sigma\\)-algebra and that the extended measure \\(\\bar{\\mu}(A \\cup N) = \\mu(A)\\) is well-defined.',
                    solution: 'Let \\(\\bar{\\mathcal{M}}\\) be the given collection. (1) It is a \\(\\sigma\\)-algebra: it contains \\(X\\) (take \\(A = X, N = \\emptyset\\)). For complements: \\((A \\cup N)^c = A^c \\cap N^c = (A^c \\cap M^c) \\cup (A^c \\cap M \\setminus N)\\), and the second piece is a subset of \\(M\\), a null set. For countable unions: \\(\\bigcup(A_k \\cup N_k) = (\\bigcup A_k) \\cup (\\bigcup N_k)\\), with \\(\\bigcup N_k \\subseteq \\bigcup M_k\\), a null set. (2) Well-definedness: if \\(A_1 \\cup N_1 = A_2 \\cup N_2\\), then \\(A_1 \\triangle A_2 \\subseteq M_1 \\cup M_2\\), which has measure 0, so \\(\\mu(A_1) = \\mu(A_2)\\).'
                },
                {
                    question: 'Why can the Carath\u00e9odory construction not produce a translation-invariant measure defined on <em>all</em> subsets of \\(\\mathbb{R}\\)?',
                    hint: 'Recall Vitali\'s construction from Chapter 0.',
                    solution: 'If \\(\\mu\\) were a translation-invariant, countably additive measure on \\(\\mathcal{P}(\\mathbb{R})\\) with \\(\\mu((0,1]) = 1\\), then Vitali\'s argument (Ch 0) produces a contradiction. The Vitali set \\(V\\) satisfies \\([0,1] \\subseteq \\bigcup_{q \\in \\mathbb{Q} \\cap [0,1]} (V + q) \\subseteq [-1, 2]\\), so \\(1 \\leq \\sum \\mu(V) \\leq 3\\). But \\(\\sum \\mu(V)\\) is either 0 (if \\(\\mu(V)=0\\)) or \\(\\infty\\) (if \\(\\mu(V)>0\\)). Contradiction. This is exactly why we must restrict to a \\(\\sigma\\)-algebra smaller than \\(\\mathcal{P}(\\mathbb{R})\\).'
                },
                {
                    question: 'Sketch how you would construct \\(n\\)-dimensional Lebesgue measure on \\(\\mathbb{R}^n\\) using the Carath\u00e9odory recipe.',
                    hint: 'Replace intervals with rectangles (boxes). What is the premeasure?',
                    solution: 'Algebra: finite disjoint unions of half-open rectangles \\((a_1,b_1] \\times \\cdots \\times (a_n,b_n]\\). Premeasure: \\(\\mu_0(\\text{rectangle}) = \\prod_{i=1}^n (b_i - a_i)\\) (volume). Verify countable additivity (using compactness in \\(\\mathbb{R}^n\\)). Apply Carath\u00e9odory to get \\(n\\)-dimensional Lebesgue measure on a \\(\\sigma\\)-algebra containing the Borel sets. \\(\\sigma\\)-finiteness holds (\\(\\mathbb{R}^n = \\bigcup (-m,m]^n\\)), so the extension is unique.'
                }
            ]
        }
    ]
});

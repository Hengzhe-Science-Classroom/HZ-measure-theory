window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch09',
    number: 9,
    title: 'L^p Spaces',
    subtitle: 'Banach Spaces of Integrable Functions and Their Duality',
    sections: [
        // ============================================================
        // Section 1: Definition and Basic Properties
        // ============================================================
        {
            id: 'lp-definition-basic',
            title: 'Definition and Basic Properties',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>With Lebesgue integration and convergence theorems in hand, we are ready for the crown jewels of modern analysis.</strong> The \\(L^p\\) spaces organize measurable functions by the integrability of their \\(p\\)-th powers. They are the natural habitat for Fourier analysis, partial differential equations, probability theory, and functional analysis. This chapter develops their theory from first definitions through duality, following a path from Riesz (1910) and Fischer (1907) to Banach's abstract framework.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define \\(L^p\\) spaces for \\(1 \\leq p \\leq \\infty\\), establish that the \\(L^p\\) norm is indeed a norm (after identifying functions that agree a.e.), and explore how the geometry of these spaces depends on the exponent \\(p\\).</p>
                </div>

                <h2>From Integration to Normed Spaces</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Measuring Function Size)</div>
                    <div class="env-body">
                        <p>How should we measure the "size" of a function? The pointwise supremum \\(\\sup|f|\\) is too rigid: it does not tolerate modifications on a single point. The integral \\(\\int|f|\\,d\\mu\\) is too lenient: it treats a tall, narrow spike the same as a wide, low bump. The idea of \\(L^p\\) is to interpolate: raise \\(|f|\\) to the \\(p\\)-th power, integrate, then take the \\(p\\)-th root. The parameter \\(p\\) controls the penalty for large values. As \\(p\\) increases, the norm becomes more sensitive to pointwise peaks.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.1 (The \\(L^p\\) Space)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A}, \\mu)\\) be a measure space and \\(1 \\leq p < \\infty\\). The space \\(\\mathcal{L}^p(X, \\mu)\\) consists of all measurable functions \\(f: X \\to \\mathbb{R}\\) (or \\(\\mathbb{C}\\)) such that</p>
                        \\[\\int_X |f|^p\\,d\\mu < \\infty.\\]
                        <p>The <strong>\\(L^p\\) norm</strong> is defined by</p>
                        \\[\\|f\\|_p = \\left(\\int_X |f|^p\\,d\\mu\\right)^{1/p}.\\]
                        <p>The space \\(L^p(X, \\mu)\\) is the quotient \\(\\mathcal{L}^p / {\\sim}\\), where \\(f \\sim g\\) iff \\(f = g\\) a.e. We write \\(L^p\\) when the measure space is understood.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why the Quotient?)</div>
                    <div class="env-body">
                        <p>On \\(\\mathcal{L}^p\\), the functional \\(\\|\\cdot\\|_p\\) is only a <em>seminorm</em>: \\(\\|f\\|_p = 0\\) implies \\(f = 0\\) a.e., not \\(f = 0\\) everywhere. Passing to equivalence classes ensures \\(\\|[f]\\|_p = 0 \\implies [f] = [0]\\), making \\(\\|\\cdot\\|_p\\) a genuine norm. This is the same identification we have used throughout integration theory: functions that agree a.e. are indistinguishable.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.2 (The \\(L^\\infty\\) Space)</div>
                    <div class="env-body">
                        <p>The <strong>essential supremum</strong> of a measurable function \\(f\\) is</p>
                        \\[\\|f\\|_\\infty = \\inf\\{M \\geq 0 : |f(x)| \\leq M \\text{ for } \\mu\\text{-a.e. } x\\}.\\]
                        <p>\\(L^\\infty(X, \\mu)\\) consists of equivalence classes of measurable functions with \\(\\|f\\|_\\infty < \\infty\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (\\(L^\\infty\\) as a Limit)</div>
                    <div class="env-body">
                        <p>One can show that for \\(f \\in L^p \\cap L^\\infty\\) on a finite measure space, \\(\\|f\\|_p \\to \\|f\\|_\\infty\\) as \\(p \\to \\infty\\). The "\\(\\infty\\)" in \\(L^\\infty\\) is not just notation; it reflects a genuine limiting process. The \\(p\\)-th root of \\(\\int|f|^p\\) increasingly emphasizes the largest values of \\(|f|\\), and in the limit, only the essential supremum survives.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 9.3 (\\(\\|f\\|_p \\to \\|f\\|_\\infty\\) as \\(p \\to \\infty\\))</div>
                    <div class="env-body">
                        <p>Let \\(\\mu(X) < \\infty\\) and \\(f \\in L^\\infty(X)\\). Then \\(f \\in L^p(X)\\) for all \\(1 \\leq p < \\infty\\) and</p>
                        \\[\\lim_{p \\to \\infty} \\|f\\|_p = \\|f\\|_\\infty.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Upper bound.</strong> Since \\(|f| \\leq \\|f\\|_\\infty\\) a.e., we have \\(\\|f\\|_p \\leq \\|f\\|_\\infty \\cdot \\mu(X)^{1/p}\\). As \\(p \\to \\infty\\), \\(\\mu(X)^{1/p} \\to 1\\), so \\(\\limsup_p \\|f\\|_p \\leq \\|f\\|_\\infty\\).</p>
                        <p><strong>Lower bound.</strong> For any \\(\\alpha < \\|f\\|_\\infty\\), the set \\(E_\\alpha = \\{|f| \\geq \\alpha\\}\\) has \\(\\mu(E_\\alpha) > 0\\). Then \\(\\|f\\|_p \\geq \\alpha \\cdot \\mu(E_\\alpha)^{1/p} \\to \\alpha\\) as \\(p \\to \\infty\\). Taking \\(\\alpha \\to \\|f\\|_\\infty\\) gives \\(\\liminf_p \\|f\\|_p \\geq \\|f\\|_\\infty\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>The Unit Ball and Geometry of \\(L^p\\)</h2>

                <div class="env-block example">
                    <div class="env-title">Example 9.4 (Unit Balls in \\(\\mathbb{R}^2\\))</div>
                    <div class="env-body">
                        <p>In \\(\\mathbb{R}^2\\) with counting measure, \\(L^p\\) reduces to \\(\\ell^p_2\\), and the unit ball \\(\\{(x,y) : |x|^p + |y|^p \\leq 1\\}\\) changes shape dramatically:</p>
                        <ul>
                            <li>\\(p = 1\\): a diamond (square rotated 45 degrees).</li>
                            <li>\\(p = 2\\): the Euclidean unit disk.</li>
                            <li>\\(p \\to \\infty\\): approaches the square \\([-1,1]^2\\).</li>
                        </ul>
                        <p>For \\(1 < p < \\infty\\), the boundary is strictly convex. For \\(p = 1\\) and \\(p = \\infty\\), the boundary has flat edges. This geometric distinction has functional-analytic consequences: strict convexity of the unit ball implies uniqueness of best approximations.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lp-unit-ball-explorer"></div>

                <div class="env-block example">
                    <div class="env-title">Example 9.5 (Concrete \\(L^p\\) Functions)</div>
                    <div class="env-body">
                        <p>On \\((0,1]\\) with Lebesgue measure, consider \\(f(x) = x^{-\\alpha}\\) for \\(\\alpha > 0\\). Then</p>
                        \\[\\int_0^1 x^{-\\alpha p}\\,dx = \\frac{1}{1 - \\alpha p} \\quad \\text{if } \\alpha p < 1.\\]
                        <p>So \\(f \\in L^p\\) if and only if \\(p < 1/\\alpha\\). For instance, \\(x^{-1/3} \\in L^2\\) but \\(x^{-1/3} \\notin L^4\\). This shows that \\(L^p\\) membership depends sensitively on both the singularity of the function and the exponent \\(p\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (\\(0 < p < 1\\): Not a Normed Space)</div>
                    <div class="env-body">
                        <p>For \\(0 < p < 1\\), the functional \\(\\|\\cdot\\|_p\\) fails the triangle inequality. The space \\(L^p\\) is still a complete metric space under \\(d(f,g) = \\int|f-g|^p\\,d\\mu\\), but it is <em>not</em> a normed space. Its dual is trivial: the only continuous linear functional on \\(L^p\\) (\\(0 < p < 1\\)) over a non-atomic measure space is the zero functional. We restrict to \\(p \\geq 1\\) throughout this chapter.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 6.1; Royden-Fitzpatrick 7.1; Stein-Shakarchi III.1; Rudin RCA 3.6-3.9.</p>
            `,
            visualizations: [
                {
                    id: 'lp-unit-ball-explorer',
                    title: 'L^p Unit Ball Explorer',
                    description: 'Visualize how the unit ball {(x,y): |x|^p + |y|^p <= 1} changes shape as p varies from 0.5 to 20. Observe strict convexity for 1 < p < infinity.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var pVal = 2;
                        var showGrid = true;
                        var showArea = true;

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        VizEngine.createSlider(controls, 'Exponent p', 0.5, 20, pVal, 0.1, function(v) {
                            pVal = v;
                            draw();
                        });

                        function computeArea(p) {
                            // Area of unit ball = 4 * integral from 0 to 1 of (1 - x^p)^(1/p) dx
                            // = 2^(2/p) * Gamma(1+1/p)^2 / Gamma(1+2/p)
                            // Numerical approximation
                            var n = 500;
                            var area = 0;
                            for (var i = 0; i < n; i++) {
                                var x = (i + 0.5) / n;
                                var val = Math.pow(1 - Math.pow(x, p), 1/p);
                                if (isFinite(val) && !isNaN(val)) {
                                    area += val / n;
                                }
                            }
                            return 4 * area;
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var cx = w / 2;
                            var cy = h / 2 + 10;
                            var scale = Math.min(w, h) * 0.33;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            var pLabel = pVal >= 19.5 ? '∞' : pVal.toFixed(1);
                            ctx.fillText('Unit Ball in ℓ^' + pLabel + '(ℝ²)', cx, 22);

                            // Subtitle
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            var area = computeArea(pVal);
                            ctx.fillText('{(x,y) : |x|^p + |y|^p ≤ 1}   Area ≈ ' + area.toFixed(3), cx, 40);

                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var g = -1.5; g <= 1.5; g += 0.5) {
                                ctx.beginPath();
                                ctx.moveTo(cx + g * scale, cy - 1.5 * scale);
                                ctx.lineTo(cx + g * scale, cy + 1.5 * scale);
                                ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(cx - 1.5 * scale, cy + g * scale);
                                ctx.lineTo(cx + 1.5 * scale, cy + g * scale);
                                ctx.stroke();
                            }

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(cx - 1.5 * scale, cy);
                            ctx.lineTo(cx + 1.5 * scale, cy);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(cx, cy - 1.5 * scale);
                            ctx.lineTo(cx, cy + 1.5 * scale);
                            ctx.stroke();

                            // Axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('1', cx + scale, cy + 16);
                            ctx.fillText('-1', cx - scale, cy + 16);
                            ctx.textAlign = 'right';
                            ctx.fillText('1', cx - 8, cy - scale + 4);
                            ctx.fillText('-1', cx - 8, cy + scale + 4);

                            // Draw reference circles (p=1 and p=2) faintly
                            // p=2 circle
                            ctx.strokeStyle = 'rgba(88, 166, 255, 0.15)';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.arc(cx, cy, scale, 0, 2 * Math.PI);
                            ctx.stroke();

                            // Draw the unit ball boundary
                            var nPoints = 600;
                            ctx.beginPath();
                            for (var i = 0; i <= nPoints; i++) {
                                var theta = (i / nPoints) * 2 * Math.PI;
                                var cosT = Math.cos(theta);
                                var sinT = Math.sin(theta);
                                var absCos = Math.abs(cosT);
                                var absSin = Math.abs(sinT);

                                // r such that |r*cos|^p + |r*sin|^p = 1
                                // r^p * (|cos|^p + |sin|^p) = 1
                                var sum = Math.pow(absCos, pVal) + Math.pow(absSin, pVal);
                                var r = Math.pow(1 / sum, 1 / pVal);

                                var px = cx + r * cosT * scale;
                                var py = cy - r * sinT * scale;

                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.closePath();

                            // Fill
                            var fillColor = pVal < 1 ? 'rgba(248, 81, 73, 0.15)' :
                                            pVal < 2 ? 'rgba(63, 185, 160, 0.15)' :
                                            'rgba(88, 166, 255, 0.15)';
                            ctx.fillStyle = fillColor;
                            ctx.fill();

                            // Stroke
                            var strokeColor = pVal < 1 ? colors.red :
                                              pVal < 2 ? colors.teal :
                                              colors.blue;
                            ctx.strokeStyle = strokeColor;
                            ctx.lineWidth = 2.5;
                            ctx.stroke();

                            // Annotations
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            var yInfo = h - 30;
                            if (pVal < 1) {
                                ctx.fillStyle = colors.red;
                                ctx.fillText('p < 1: Not convex! Triangle inequality fails.', 20, yInfo);
                            } else if (Math.abs(pVal - 1) < 0.05) {
                                ctx.fillStyle = colors.teal;
                                ctx.fillText('p = 1: Diamond. Convex but not strictly convex.', 20, yInfo);
                            } else if (pVal < 2) {
                                ctx.fillStyle = colors.teal;
                                ctx.fillText('1 < p < 2: Strictly convex, "squarish."', 20, yInfo);
                            } else if (Math.abs(pVal - 2) < 0.05) {
                                ctx.fillStyle = colors.blue;
                                ctx.fillText('p = 2: Euclidean disk. Inner product space (Hilbert space).', 20, yInfo);
                            } else if (pVal < 19.5) {
                                ctx.fillStyle = colors.blue;
                                ctx.fillText('p > 2: Strictly convex, approaching the square.', 20, yInfo);
                            } else {
                                ctx.fillStyle = colors.purple;
                                ctx.fillText('p → ∞: The square [-1,1]². Convex but not strictly convex.', 20, yInfo);
                            }

                            // p=2 label
                            ctx.fillStyle = 'rgba(88, 166, 255, 0.4)';
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('p=2 circle', cx + scale * 0.72, cy - scale * 0.72);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: '<strong>[Computation, 1 star]</strong> Compute \\(\\|f\\|_p\\) for \\(f(x) = 3\\) on \\([0,2]\\) with Lebesgue measure, for general \\(1 \\leq p < \\infty\\). Then compute \\(\\|f\\|_\\infty\\).',
                    hint: 'For a constant function \\(c\\) on a set of measure \\(m\\), \\(\\|c\\|_p = |c| \\cdot m^{1/p}\\).',
                    solution: '\\(\\|f\\|_p = \\left(\\int_0^2 3^p\\,dx\\right)^{1/p} = 3 \\cdot 2^{1/p}\\). As \\(p \\to \\infty\\), \\(2^{1/p} \\to 1\\), and \\(\\|f\\|_\\infty = 3\\), consistent with Proposition 9.3.'
                },
                {
                    question: '<strong>[Computation, 2 stars]</strong> For \\(f(x) = x^{-1/4}\\) on \\((0,1]\\), determine the exact range of \\(p\\) for which \\(f \\in L^p\\). Compute \\(\\|f\\|_p\\) in this range.',
                    hint: 'Integrate \\(x^{-p/4}\\) and determine when the integral converges.',
                    solution: '\\(\\int_0^1 x^{-p/4}\\,dx = \\frac{1}{1 - p/4}\\) converges iff \\(p/4 < 1\\), i.e., \\(p < 4\\). For \\(p < 4\\): \\(\\|f\\|_p = (1 - p/4)^{-1/p} = (4/(4-p))^{1/p}\\). At \\(p = 4\\), the integral diverges logarithmically, so \\(f \\notin L^4\\).'
                },
                {
                    question: '<strong>[Proof, 2 stars]</strong> Prove that \\(L^\\infty(X, \\mu)\\) is a normed space: verify the three norm axioms for the essential supremum.',
                    hint: 'For the triangle inequality, use \\(|f + g| \\leq |f| + |g|\\) pointwise and the definition of essential supremum.',
                    solution: '(i) \\(\\|f\\|_\\infty = 0\\) means \\(|f| \\leq 0\\) a.e., so \\(f = 0\\) a.e., i.e., \\([f] = 0\\) in \\(L^\\infty\\). (ii) \\(\\|\\alpha f\\|_\\infty = |\\alpha| \\cdot \\|f\\|_\\infty\\) since \\(|\\alpha f| \\leq M\\) a.e. iff \\(|f| \\leq M/|\\alpha|\\) a.e. (iii) If \\(|f| \\leq M_1\\) a.e. and \\(|g| \\leq M_2\\) a.e., then \\(|f+g| \\leq M_1 + M_2\\) a.e. (outside a null set that is the union of two null sets). Taking infima: \\(\\|f+g\\|_\\infty \\leq \\|f\\|_\\infty + \\|g\\|_\\infty\\).'
                }
            ]
        },

        // ============================================================
        // Section 2: Hölder's and Minkowski's Inequalities
        // ============================================================
        {
            id: 'holder-minkowski',
            title: "Hölder's and Minkowski's Inequalities",
            content: `
                <div class="bridge section-bridge">
                    <p>We have defined \\(\\|f\\|_p\\) and called it a norm, but we have not yet proved the triangle inequality for \\(1 < p < \\infty\\). The cases \\(p = 1\\) and \\(p = \\infty\\) are straightforward, but for intermediate \\(p\\), the proof requires two classical inequalities that are important tools in their own right. The first, due to Hölder (1889), generalizes the Cauchy-Schwarz inequality; the second, due to Minkowski (1896), is the triangle inequality in \\(L^p\\).</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove Young's inequality, derive Hölder's inequality, and use it to establish Minkowski's inequality, thereby confirming that \\(\\|\\cdot\\|_p\\) is a norm for all \\(1 \\leq p \\leq \\infty\\).</p>
                </div>

                <h2>Conjugate Exponents</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.6 (Conjugate Exponents)</div>
                    <div class="env-body">
                        <p>Exponents \\(p, q \\in [1, \\infty]\\) are called <strong>conjugate</strong> (or <strong>Hölder conjugate</strong>) if</p>
                        \\[\\frac{1}{p} + \\frac{1}{q} = 1,\\]
                        <p>with the convention \\(1/\\infty = 0\\). Thus \\(q = p/(p-1)\\) for \\(1 < p < \\infty\\), and the pairs \\((1, \\infty)\\) and \\((2, 2)\\) are conjugate. The number \\(q\\) is often written \\(p'\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Balancing Act)</div>
                    <div class="env-body">
                        <p>The conjugate relation \\(1/p + 1/q = 1\\) expresses a balance: if you have a function in \\(L^p\\) and another in \\(L^q\\), their product is in \\(L^1\\). Think of \\(p\\) and \\(q\\) as sharing the "integrability budget." As \\(p\\) increases (demanding less integrability from \\(f\\)), \\(q\\) decreases (demanding more from \\(g\\)), and vice versa.</p>
                    </div>
                </div>

                <h2>Young's Inequality</h2>

                <div class="env-block lemma">
                    <div class="env-title">Lemma 9.7 (Young's Inequality for Products)</div>
                    <div class="env-body">
                        <p>For \\(a, b \\geq 0\\) and conjugate exponents \\(1 < p, q < \\infty\\),</p>
                        \\[ab \\leq \\frac{a^p}{p} + \\frac{b^q}{q}.\\]
                        <p>Equality holds if and only if \\(a^p = b^q\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The function \\(\\varphi(t) = e^t\\) is convex. Since \\(1/p + 1/q = 1\\), Jensen's inequality (or the concavity of \\(\\log\\)) gives</p>
                        \\[ab = e^{\\ln a + \\ln b} = e^{\\frac{1}{p}(p \\ln a) + \\frac{1}{q}(q \\ln b)} \\leq \\frac{1}{p}e^{p \\ln a} + \\frac{1}{q}e^{q \\ln b} = \\frac{a^p}{p} + \\frac{b^q}{q}.\\]
                        <p>Equality in Jensen holds iff the arguments are equal, i.e., \\(p \\ln a = q \\ln b\\), i.e., \\(a^p = b^q\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Hölder's Inequality</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.8 (Hölder's Inequality)</div>
                    <div class="env-body">
                        <p>Let \\(1 \\leq p \\leq \\infty\\) and let \\(q\\) be its conjugate exponent. If \\(f \\in L^p\\) and \\(g \\in L^q\\), then \\(fg \\in L^1\\) and</p>
                        \\[\\|fg\\|_1 = \\int |fg|\\,d\\mu \\leq \\|f\\|_p \\cdot \\|g\\|_q.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Case \\(p = 1, q = \\infty\\):</strong> \\(\\int|fg|\\,d\\mu \\leq \\|g\\|_\\infty \\int|f|\\,d\\mu\\), immediate from \\(|g| \\leq \\|g\\|_\\infty\\) a.e.</p>
                        <p><strong>Case \\(1 < p < \\infty\\):</strong> We may assume \\(\\|f\\|_p > 0\\) and \\(\\|g\\|_q > 0\\) (otherwise the result is trivial). Set \\(\\tilde{f} = f/\\|f\\|_p\\) and \\(\\tilde{g} = g/\\|g\\|_q\\). By Young's inequality applied pointwise:</p>
                        \\[|\\tilde{f}||\\tilde{g}| \\leq \\frac{|\\tilde{f}|^p}{p} + \\frac{|\\tilde{g}|^q}{q}.\\]
                        <p>Integrating:</p>
                        \\[\\frac{1}{\\|f\\|_p \\|g\\|_q}\\int|fg|\\,d\\mu \\leq \\frac{1}{p}\\cdot\\frac{\\|f\\|_p^p}{\\|f\\|_p^p} + \\frac{1}{q}\\cdot\\frac{\\|g\\|_q^q}{\\|g\\|_q^q} = \\frac{1}{p} + \\frac{1}{q} = 1.\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 9.9 (Cauchy-Schwarz as a Special Case)</div>
                    <div class="env-body">
                        <p>When \\(p = q = 2\\), Hölder's inequality becomes the <strong>Cauchy-Schwarz inequality</strong>:</p>
                        \\[\\int|fg|\\,d\\mu \\leq \\left(\\int|f|^2\\,d\\mu\\right)^{1/2}\\left(\\int|g|^2\\,d\\mu\\right)^{1/2}.\\]
                        <p>This is the reason \\(L^2\\) is an inner product space: \\(\\langle f, g \\rangle = \\int f\\bar{g}\\,d\\mu\\) is well-defined and satisfies \\(|\\langle f, g \\rangle| \\leq \\|f\\|_2 \\|g\\|_2\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="holder-visualizer"></div>

                <h2>Minkowski's Inequality</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.10 (Minkowski's Inequality)</div>
                    <div class="env-body">
                        <p>For \\(1 \\leq p \\leq \\infty\\) and \\(f, g \\in L^p\\),</p>
                        \\[\\|f + g\\|_p \\leq \\|f\\|_p + \\|g\\|_p.\\]
                        <p>Consequently, \\(L^p\\) is a normed vector space.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The cases \\(p = 1\\) (triangle inequality for absolute values) and \\(p = \\infty\\) (as in Exercise 9.3 above) are straightforward. For \\(1 < p < \\infty\\):</p>
                        \\[|f + g|^p = |f + g| \\cdot |f + g|^{p-1} \\leq (|f| + |g|) \\cdot |f+g|^{p-1}.\\]
                        <p>Integrate and apply Hölder to each term with exponents \\(p\\) and \\(q = p/(p-1)\\). Note that \\((p-1)q = p\\), so \\(|f+g|^{p-1} \\in L^q\\). We get:</p>
                        \\[\\|f+g\\|_p^p \\leq \\|f\\|_p \\cdot \\||f+g|^{p-1}\\|_q + \\|g\\|_p \\cdot \\||f+g|^{p-1}\\|_q.\\]
                        <p>Since \\(\\||f+g|^{p-1}\\|_q = \\|f+g\\|_p^{p/q}\\), dividing both sides by \\(\\|f+g\\|_p^{p/q}\\) and using \\(p - p/q = 1\\) yields the result.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Equality Conditions)</div>
                    <div class="env-body">
                        <p>Equality holds in Hölder iff \\(|f|^p\\) and \\(|g|^q\\) are proportional a.e. Equality holds in Minkowski iff \\(f\\) and \\(g\\) are non-negative multiples of each other a.e. These characterizations are essential for understanding extremal problems in \\(L^p\\).</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 6.1-6.2; Royden-Fitzpatrick 7.2; Stein-Shakarchi III.1; Rudin RCA 3.5, 3.8.</p>
            `,
            visualizations: [
                {
                    id: 'holder-visualizer',
                    title: "Hölder's Inequality Visualizer",
                    description: "Explore how conjugate exponents p and q balance integrability. See Young's inequality geometrically and watch how the product fg stays in L^1.",
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var pVal = 2;

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        VizEngine.createSlider(controls, 'Exponent p', 1.1, 10, pVal, 0.1, function(v) {
                            pVal = v;
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var qVal = pVal / (pVal - 1);
                            var margin = { left: 50, right: 20, top: 55, bottom: 50 };

                            // Two panels: left = Young's inequality, right = Hölder demo
                            var panelW = (w - margin.left - margin.right - 30) / 2;
                            var panelH = h - margin.top - margin.bottom;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText("Hölder's Inequality: p = " + pVal.toFixed(1) + ", q = " + qVal.toFixed(2), w / 2, 22);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('1/p + 1/q = ' + (1/pVal + 1/qVal).toFixed(4) + ' = 1', w / 2, 40);

                            // LEFT PANEL: Young's inequality ab ≤ a^p/p + b^q/q
                            var lx = margin.left;
                            var ly = margin.top;

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText("Young's Inequality: ab ≤ a^p/p + b^q/q", lx + panelW / 2, ly - 5);

                            // Plot t^(p-1) and its inverse t^(q-1) to show geometric proof
                            var gx0 = lx + 10;
                            var gy0 = ly + panelH;
                            var gw = panelW - 20;
                            var gh = panelH;

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(gx0, gy0);
                            ctx.lineTo(gx0 + gw, gy0);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(gx0, gy0);
                            ctx.lineTo(gx0, gy0 - gh);
                            ctx.stroke();

                            // Curve y = t^(p-1) from t=0 to t=1.5
                            var tMax = 1.5;
                            var yPlotMax = Math.pow(tMax, pVal - 1);
                            if (yPlotMax > 5) yPlotMax = 5;
                            var tScale = gw / tMax;
                            var yScale = gh / (yPlotMax * 1.1);

                            // a and b: choose a = 0.8, b = a^(p-1)
                            var aVal = 0.8;
                            var bVal = Math.pow(aVal, pVal - 1);

                            // Fill area under curve (a^p / p region) in blue
                            ctx.fillStyle = 'rgba(88, 166, 255, 0.25)';
                            ctx.beginPath();
                            ctx.moveTo(gx0, gy0);
                            var nSteps = 200;
                            for (var i = 0; i <= nSteps; i++) {
                                var t = (aVal * i) / nSteps;
                                var yv = Math.pow(t, pVal - 1);
                                var px = gx0 + t * tScale;
                                var py = gy0 - yv * yScale;
                                ctx.lineTo(px, py);
                            }
                            ctx.lineTo(gx0 + aVal * tScale, gy0);
                            ctx.closePath();
                            ctx.fill();

                            // Fill area to left of curve (b^q / q region) in orange
                            ctx.fillStyle = 'rgba(240, 136, 62, 0.25)';
                            ctx.beginPath();
                            ctx.moveTo(gx0, gy0);
                            ctx.lineTo(gx0, gy0 - bVal * yScale);
                            for (var i = 0; i <= nSteps; i++) {
                                var yv = (bVal * i) / nSteps;
                                // Inverse: t = y^(1/(p-1)) = y^(q-1)
                                var t = Math.pow(yv, 1 / (pVal - 1));
                                var px = gx0 + t * tScale;
                                var py = gy0 - yv * yScale;
                                ctx.lineTo(px, py);
                            }
                            ctx.lineTo(gx0 + aVal * tScale, gy0);
                            ctx.closePath();
                            ctx.fill();

                            // Rectangle a*b
                            ctx.strokeStyle = colors.yellow;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 3]);
                            ctx.strokeRect(gx0, gy0 - bVal * yScale, aVal * tScale, bVal * yScale);
                            ctx.setLineDash([]);

                            // The curve
                            ctx.strokeStyle = colors.green;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= nSteps; i++) {
                                var t = (tMax * i) / nSteps;
                                var yv = Math.pow(t, pVal - 1);
                                if (yv > yPlotMax * 1.1) break;
                                var px = gx0 + t * tScale;
                                var py = gy0 - yv * yScale;
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Labels
                            ctx.fillStyle = colors.blue;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('a^p/p', gx0 + aVal * tScale * 0.5, gy0 - 10);
                            ctx.fillStyle = colors.orange;
                            ctx.fillText('b^q/q', gx0 + 18, gy0 - bVal * yScale * 0.5);
                            ctx.fillStyle = colors.yellow;
                            ctx.fillText('a·b', gx0 + aVal * tScale / 2, gy0 - bVal * yScale - 5);
                            ctx.fillStyle = colors.green;
                            ctx.fillText('y = t^(p-1)', gx0 + gw - 30, gy0 - gh + 20);
                            ctx.fillStyle = colors.muted;
                            ctx.textAlign = 'center';
                            ctx.fillText('a', gx0 + aVal * tScale, gy0 + 14);
                            ctx.textAlign = 'right';
                            ctx.fillText('b', gx0 - 5, gy0 - bVal * yScale + 4);

                            // RIGHT PANEL: Functions f, g, fg with norms
                            var rx = lx + panelW + 30;
                            var ry = margin.top;

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('||fg||₁ ≤ ||f||_p · ||g||_q', rx + panelW / 2, ry - 5);

                            var px0 = rx + 10;
                            var py0 = ry + panelH;
                            var pw2 = panelW - 20;
                            var ph2 = panelH;

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(px0, py0);
                            ctx.lineTo(px0 + pw2, py0);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(px0, py0);
                            ctx.lineTo(px0, py0 - ph2);
                            ctx.stroke();

                            // f(x) = (1-x)^(-1/(2p)) on (0,1), g(x) = x^(-1/(2q)) on (0,1)
                            // Compute norms numerically
                            var N = 300;
                            var normFp = 0, normGq = 0, normFG = 0;
                            var fVals = [], gVals = [], fgVals = [];
                            var maxY = 0;

                            for (var i = 0; i < N; i++) {
                                var x = (i + 0.5) / N;
                                var fv = Math.pow(1 - x + 0.01, -1 / (2 * pVal));
                                var gv = Math.pow(x + 0.01, -1 / (2 * qVal));
                                var fg = fv * gv;
                                fVals.push(fv);
                                gVals.push(gv);
                                fgVals.push(fg);
                                normFp += Math.pow(fv, pVal) / N;
                                normGq += Math.pow(gv, qVal) / N;
                                normFG += fg / N;
                                if (fv > maxY) maxY = fv;
                                if (gv > maxY) maxY = gv;
                                if (fg > maxY) maxY = fg;
                            }
                            normFp = Math.pow(normFp, 1 / pVal);
                            normGq = Math.pow(normGq, 1 / qVal);
                            maxY = Math.min(maxY, 10);
                            var yS = ph2 / (maxY * 1.15);

                            // Plot f
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < N; i++) {
                                var x = px0 + ((i + 0.5) / N) * pw2;
                                var y = py0 - Math.min(fVals[i], maxY) * yS;
                                if (i === 0) ctx.moveTo(x, y);
                                else ctx.lineTo(x, y);
                            }
                            ctx.stroke();

                            // Plot g
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < N; i++) {
                                var x = px0 + ((i + 0.5) / N) * pw2;
                                var y = py0 - Math.min(gVals[i], maxY) * yS;
                                if (i === 0) ctx.moveTo(x, y);
                                else ctx.lineTo(x, y);
                            }
                            ctx.stroke();

                            // Plot fg (filled)
                            ctx.fillStyle = 'rgba(63, 185, 80, 0.2)';
                            ctx.beginPath();
                            ctx.moveTo(px0, py0);
                            for (var i = 0; i < N; i++) {
                                var x = px0 + ((i + 0.5) / N) * pw2;
                                var y = py0 - Math.min(fgVals[i], maxY) * yS;
                                ctx.lineTo(x, y);
                            }
                            ctx.lineTo(px0 + pw2, py0);
                            ctx.closePath();
                            ctx.fill();
                            ctx.strokeStyle = colors.green;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var i = 0; i < N; i++) {
                                var x = px0 + ((i + 0.5) / N) * pw2;
                                var y = py0 - Math.min(fgVals[i], maxY) * yS;
                                if (i === 0) ctx.moveTo(x, y);
                                else ctx.lineTo(x, y);
                            }
                            ctx.stroke();

                            // Legend and norm display
                            var legY = py0 + 14;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = colors.blue;
                            ctx.fillText('f ∈ L^p, ||f||_p = ' + normFp.toFixed(3), px0, legY);
                            ctx.fillStyle = colors.orange;
                            ctx.fillText('g ∈ L^q, ||g||_q = ' + normGq.toFixed(3), px0, legY + 14);
                            ctx.fillStyle = colors.green;
                            ctx.fillText('∫|fg| = ' + normFG.toFixed(3) + ' ≤ ' + (normFp * normGq).toFixed(3) + ' = ||f||_p·||g||_q', px0, legY + 28);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: '<strong>[Computation, 1 star]</strong> Find the conjugate exponent \\(q\\) for \\(p = 3/2\\). Verify that \\(1/p + 1/q = 1\\).',
                    hint: '\\(q = p/(p-1)\\).',
                    solution: '\\(q = (3/2)/((3/2) - 1) = (3/2)/(1/2) = 3\\). Check: \\(1/(3/2) + 1/3 = 2/3 + 1/3 = 1\\). \\checkmark\\)'
                },
                {
                    question: "<strong>[Proof, 3 stars]</strong> Use Hölder's inequality to prove: if \\(\\mu(X) < \\infty\\) and \\(1 \\leq p \\leq r \\leq \\infty\\), then \\(L^r(X) \\subseteq L^p(X)\\) with \\(\\|f\\|_p \\leq \\mu(X)^{1/p - 1/r} \\|f\\|_r\\).",
                    hint: 'Write \\(|f|^p = |f|^p \\cdot 1\\) and apply Hölder with exponents \\(r/p\\) and \\(r/(r-p)\\).',
                    solution: 'Apply Hölder with exponents \\(s = r/p\\) and \\(s\\prime = r/(r-p)\\) (which are conjugate since \\(p/r + (r-p)/r = 1\\)): \\(\\int|f|^p \\cdot 1\\,d\\mu \\leq \\left(\\int|f|^{ps}\\right)^{1/s}\\mu(X)^{1/s\\prime} = \\|f\\|_r^p \\cdot \\mu(X)^{(r-p)/r}\\). Taking \\(p\\)-th roots: \\(\\|f\\|_p \\leq \\|f\\|_r \\cdot \\mu(X)^{1/p - 1/r}\\).'
                },
                {
                    question: '<strong>[Proof, 4 stars]</strong> Prove that equality holds in the Hölder inequality if and only if there exist constants \\(\\alpha, \\beta \\geq 0\\) (not both zero) such that \\(\\alpha |f|^p = \\beta |g|^q\\) a.e.',
                    hint: 'Track the equality condition in the Young inequality through the proof of Hölder.',
                    solution: 'Equality in Hölder requires equality in Young a.e.: \\(|\\tilde{f}(x)|^p = |\\tilde{g}(x)|^q\\) a.e., where \\(\\tilde{f} = f/\\|f\\|_p\\), \\(\\tilde{g} = g/\\|g\\|_q\\). This means \\(|f(x)|^p/\\|f\\|_p^p = |g(x)|^q/\\|g\\|_q^q\\) a.e. Setting \\(\\alpha = 1/\\|f\\|_p^p\\) and \\(\\beta = 1/\\|g\\|_q^q\\) gives \\(\\alpha|f|^p = \\beta|g|^q\\) a.e. Conversely, if this proportionality holds, one can verify that every step in the proof achieves equality.'
                }
            ]
        },

        // ============================================================
        // Section 3: Completeness: The Riesz-Fischer Theorem
        // ============================================================
        {
            id: 'riesz-fischer',
            title: 'Completeness: The Riesz-Fischer Theorem',
            content: `
                <div class="bridge section-bridge">
                    <p>A normed space is useful; a <em>complete</em> normed space is indispensable. Completeness guarantees that Cauchy sequences converge within the space, allowing us to take limits, define series, and apply fixed-point theorems without leaving the space. The great theorem of Riesz (1907) and Fischer (1907), proved independently, establishes that every \\(L^p\\) space is complete, making each one a <strong>Banach space</strong>.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove that \\(L^p\\) is a Banach space for \\(1 \\leq p \\leq \\infty\\). The proof technique, extracting a rapidly convergent subsequence and building the limit via monotone convergence, is a paradigm for many completeness arguments in analysis.</p>
                </div>

                <h2>Banach Spaces: The Right Framework</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.11 (Banach Space)</div>
                    <div class="env-body">
                        <p>A <strong>Banach space</strong> is a normed vector space \\((V, \\|\\cdot\\|)\\) that is <em>complete</em>: every Cauchy sequence in \\(V\\) converges to an element of \\(V\\). That is, if \\(\\|f_n - f_m\\| \\to 0\\) as \\(n, m \\to \\infty\\), then there exists \\(f \\in V\\) with \\(\\|f_n - f\\| \\to 0\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (No Holes in the Space)</div>
                    <div class="env-body">
                        <p>Completeness means there are no "holes" in the space. Consider \\(\\mathbb{Q}\\) with the usual metric: the sequence \\(1, 1.4, 1.41, 1.414, \\ldots\\) is Cauchy in \\(\\mathbb{Q}\\) but converges to \\(\\sqrt{2} \\notin \\mathbb{Q}\\). The rationals have a hole where \\(\\sqrt{2}\\) should be. Similarly, the space of continuous functions on \\([0,1]\\) with the \\(L^1\\) norm has holes: \\(L^1\\) completions include discontinuous functions. The Riesz-Fischer theorem says \\(L^p\\) itself has no holes.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (A Useful Criterion)</div>
                    <div class="env-body">
                        <p>A normed space is a Banach space if and only if every <em>absolutely convergent</em> series converges: \\(\\sum \\|f_n\\| < \\infty \\implies \\sum f_n\\) converges in norm. This criterion is often easier to verify than the Cauchy condition directly, and it is the form we use in the proof below.</p>
                    </div>
                </div>

                <h2>The Riesz-Fischer Theorem</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.12 (Riesz-Fischer)</div>
                    <div class="env-body">
                        <p>For \\(1 \\leq p \\leq \\infty\\), the space \\(L^p(X, \\mu)\\) is a Banach space.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Case \\(1 \\leq p < \\infty\\))</div>
                    <div class="env-body">
                        <p>We use the absolute convergence criterion. Let \\((g_k)\\) be a sequence in \\(L^p\\) with \\(\\sum_{k=1}^\\infty \\|g_k\\|_p < \\infty\\). We must show \\(\\sum g_k\\) converges in \\(L^p\\).</p>

                        <p><strong>Step 1: Pointwise limit.</strong> Define \\(S_n = \\sum_{k=1}^n |g_k|\\). By Minkowski, \\(\\|S_n\\|_p \\leq \\sum_{k=1}^n \\|g_k\\|_p \\leq M := \\sum_{k=1}^\\infty \\|g_k\\|_p < \\infty\\). Since \\(S_n \\nearrow S := \\sum_{k=1}^\\infty |g_k|\\) pointwise, the Monotone Convergence Theorem gives \\(\\int S^p\\,d\\mu = \\lim \\int S_n^p\\,d\\mu \\leq M^p < \\infty\\). So \\(S \\in L^p\\), and in particular \\(S(x) < \\infty\\) a.e.</p>

                        <p><strong>Step 2: The series converges a.e.</strong> Since \\(\\sum|g_k(x)| = S(x) < \\infty\\) a.e., the series \\(f(x) = \\sum_{k=1}^\\infty g_k(x)\\) converges absolutely for a.e. \\(x\\). Set \\(f(x) = 0\\) where it does not converge.</p>

                        <p><strong>Step 3: \\(L^p\\) convergence.</strong> Let \\(F_n = \\sum_{k=1}^n g_k\\). Then \\(|F_n - f|^p \\leq (2S)^p \\in L^1\\), and \\(F_n \\to f\\) a.e. By the Dominated Convergence Theorem, \\(\\|F_n - f\\|_p^p = \\int|F_n - f|^p\\,d\\mu \\to 0\\).</p>

                        <p>Now let \\((f_n)\\) be Cauchy in \\(L^p\\). Extract a subsequence \\((f_{n_k})\\) with \\(\\|f_{n_{k+1}} - f_{n_k}\\|_p < 2^{-k}\\). Set \\(g_1 = f_{n_1}\\) and \\(g_k = f_{n_k} - f_{n_{k-1}}\\) for \\(k \\geq 2\\). Then \\(\\sum\\|g_k\\|_p < \\|f_{n_1}\\|_p + 1 < \\infty\\), so by the above, \\(\\sum g_k = \\lim f_{n_k}\\) converges in \\(L^p\\) to some \\(f\\). Since \\((f_n)\\) is Cauchy and a subsequence converges, the full sequence converges to \\(f\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Case \\(p = \\infty\\))</div>
                    <div class="env-body">
                        <p>Let \\((f_n)\\) be Cauchy in \\(L^\\infty\\). For each \\(n, m\\), let \\(N_{n,m} = \\{|f_n - f_m| > \\|f_n - f_m\\|_\\infty\\}\\); this is a null set. Let \\(N = \\bigcup_{n,m} N_{n,m}\\), still null (countable union). On \\(X \\setminus N\\), \\((f_n(x))\\) is Cauchy in \\(\\mathbb{R}\\) (or \\(\\mathbb{C}\\)) for every \\(x\\), hence converges to some \\(f(x)\\). Define \\(f = 0\\) on \\(N\\). For any \\(\\varepsilon > 0\\), pick \\(N_0\\) such that \\(\\|f_n - f_m\\|_\\infty < \\varepsilon\\) for \\(n, m \\geq N_0\\). On \\(X \\setminus N\\): \\(|f_n(x) - f(x)| = \\lim_m |f_n(x) - f_m(x)| \\leq \\varepsilon\\). So \\(\\|f_n - f\\|_\\infty \\leq \\varepsilon\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="viz-placeholder" data-viz="riesz-fischer-convergence"></div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 9.13 (Convergent Subsequence)</div>
                    <div class="env-body">
                        <p>If \\(f_n \\to f\\) in \\(L^p\\), then there exists a subsequence \\(f_{n_k} \\to f\\) a.e. and a function \\(g \\in L^p\\) with \\(|f_{n_k}| \\leq g\\) a.e. for all \\(k\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Dominating Function)</div>
                    <div class="env-body">
                        <p>The dominating function \\(g = S = \\sum|g_k|\\) constructed in the proof plays a crucial role: it provides the \\(L^p\\) domination needed to apply DCT. This is a recurring pattern: to pass from a.e. convergence to \\(L^p\\) convergence, one needs a dominating function in \\(L^p\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Historical Context)</div>
                    <div class="env-body">
                        <p>Ernst Fischer and Frigyes Riesz proved completeness of \\(L^2\\) in 1907, independently and almost simultaneously. Fischer worked with Fourier series: he showed that every square-summable sequence of Fourier coefficients corresponds to an \\(L^2\\) function. Riesz approached it from the function space side. Their theorem showed that \\(L^2\\) is the "right" space for Fourier analysis, resolving a question that had lingered since Parseval. The extension to general \\(L^p\\) was completed by Riesz (1910) and later streamlined by Banach (1920s), who placed it in the framework of abstract normed spaces that now bears his name.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 6.1; Royden-Fitzpatrick 7.3; Stein-Shakarchi III.2; Rudin RCA 3.11.</p>
            `,
            visualizations: [
                {
                    id: 'riesz-fischer-convergence',
                    title: 'Riesz-Fischer Convergence',
                    description: 'Watch a Cauchy sequence in L^p converge. See the rapidly convergent subsequence, the dominating function S, and how the partial sums stabilize both pointwise and in norm.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var nTerms = 3;
                        var pVal = 2;

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        VizEngine.createSlider(controls, 'Number of terms', 1, 15, nTerms, 1, function(v) {
                            nTerms = Math.round(v);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Exponent p', 1, 6, pVal, 0.5, function(v) {
                            pVal = v;
                            draw();
                        });

                        // Build a Cauchy sequence: f_n(x) = sum_{k=1}^n g_k(x) where g_k are
                        // rapidly decaying bumps: g_k(x) = (1/2^k) * sin(k*pi*x)
                        function gk(k, x) {
                            return Math.sin(k * Math.PI * x) / Math.pow(2, k);
                        }

                        function partialSum(n, x) {
                            var s = 0;
                            for (var k = 1; k <= n; k++) {
                                s += gk(k, x);
                            }
                            return s;
                        }

                        function dominator(n, x) {
                            var s = 0;
                            for (var k = 1; k <= n; k++) {
                                s += Math.abs(gk(k, x));
                            }
                            return s;
                        }

                        function lpNorm(fn, p) {
                            var N = 300;
                            var sum = 0;
                            for (var i = 0; i < N; i++) {
                                var x = (i + 0.5) / N;
                                sum += Math.pow(Math.abs(fn(x)), p) / N;
                            }
                            return Math.pow(sum, 1 / p);
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { left: 55, right: 20, top: 55, bottom: 90 };
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Riesz-Fischer: Cauchy Sequence Converging in L^' + pVal.toFixed(1), w / 2, 22);

                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('f_n = Σ_{k=1}^n sin(kπx)/2^k,   g_k = sin(kπx)/2^k,   Σ||g_k||_p < ∞', w / 2, 40);

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, margin.top);
                            ctx.lineTo(margin.left, margin.top + plotH);
                            ctx.lineTo(margin.left + plotW, margin.top + plotH);
                            ctx.stroke();

                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var i = 0; i <= 10; i++) {
                                var xp = margin.left + (i / 10) * plotW;
                                ctx.beginPath();
                                ctx.moveTo(xp, margin.top);
                                ctx.lineTo(xp, margin.top + plotH);
                                ctx.stroke();
                            }

                            // Compute y range
                            var yMax = 0;
                            var N = 300;
                            for (var i = 0; i < N; i++) {
                                var x = (i + 0.5) / N;
                                var d = dominator(15, x);
                                if (d > yMax) yMax = d;
                            }
                            yMax = Math.max(yMax, 0.8) * 1.15;
                            var yMin = -yMax;

                            function sx(x) { return margin.left + x * plotW; }
                            function sy(y) { return margin.top + plotH / 2 - (y / yMax) * (plotH / 2); }

                            // Zero line
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, sy(0));
                            ctx.lineTo(margin.left + plotW, sy(0));
                            ctx.stroke();

                            // Y axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'right';
                            var yTick = Math.round(yMax * 10) / 10;
                            ctx.fillText(yTick.toFixed(1), margin.left - 5, sy(yTick) + 3);
                            ctx.fillText((-yTick).toFixed(1), margin.left - 5, sy(-yTick) + 3);
                            ctx.fillText('0', margin.left - 5, sy(0) + 3);

                            // Plot dominating function S_n (shaded region)
                            ctx.fillStyle = 'rgba(210, 153, 34, 0.1)';
                            ctx.beginPath();
                            ctx.moveTo(sx(0), sy(0));
                            for (var i = 0; i < N; i++) {
                                var x = (i + 0.5) / N;
                                ctx.lineTo(sx(x), sy(dominator(nTerms, x)));
                            }
                            for (var i = N - 1; i >= 0; i--) {
                                var x = (i + 0.5) / N;
                                ctx.lineTo(sx(x), sy(-dominator(nTerms, x)));
                            }
                            ctx.closePath();
                            ctx.fill();

                            // Dominator boundary
                            ctx.strokeStyle = colors.yellow;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath();
                            for (var i = 0; i < N; i++) {
                                var x = (i + 0.5) / N;
                                var y = dominator(nTerms, x);
                                if (i === 0) ctx.moveTo(sx(x), sy(y));
                                else ctx.lineTo(sx(x), sy(y));
                            }
                            ctx.stroke();
                            ctx.beginPath();
                            for (var i = 0; i < N; i++) {
                                var x = (i + 0.5) / N;
                                var y = -dominator(nTerms, x);
                                if (i === 0) ctx.moveTo(sx(x), sy(y));
                                else ctx.lineTo(sx(x), sy(y));
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Plot limit function (n=15 approximation)
                            ctx.strokeStyle = 'rgba(88, 166, 255, 0.3)';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var i = 0; i < N; i++) {
                                var x = (i + 0.5) / N;
                                var y = partialSum(15, x);
                                if (i === 0) ctx.moveTo(sx(x), sy(y));
                                else ctx.lineTo(sx(x), sy(y));
                            }
                            ctx.stroke();

                            // Plot current partial sum f_n
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (var i = 0; i < N; i++) {
                                var x = (i + 0.5) / N;
                                var y = partialSum(nTerms, x);
                                if (i === 0) ctx.moveTo(sx(x), sy(y));
                                else ctx.lineTo(sx(x), sy(y));
                            }
                            ctx.stroke();

                            // Latest added term g_n
                            if (nTerms >= 1) {
                                ctx.strokeStyle = colors.red;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                for (var i = 0; i < N; i++) {
                                    var x = (i + 0.5) / N;
                                    var y = gk(nTerms, x);
                                    if (i === 0) ctx.moveTo(sx(x), sy(y));
                                    else ctx.lineTo(sx(x), sy(y));
                                }
                                ctx.stroke();
                            }

                            // Norm info at bottom
                            var fnNorm = lpNorm(function(x) { return partialSum(nTerms, x); }, pVal);
                            var errNorm = lpNorm(function(x) { return partialSum(15, x) - partialSum(nTerms, x); }, pVal);
                            var gkNorm = lpNorm(function(x) { return gk(nTerms, x); }, pVal);
                            var totalGkNorms = 0;
                            for (var k = 1; k <= nTerms; k++) {
                                totalGkNorms += lpNorm(function(x) { return gk(k, x); }, pVal);
                            }

                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            var infoY = h - 70;
                            ctx.fillStyle = colors.blue;
                            ctx.fillText('f_' + nTerms + ' (partial sum)', margin.left, infoY);
                            ctx.fillStyle = colors.red;
                            ctx.fillText('g_' + nTerms + ' (latest term), ||g_' + nTerms + '||_p = ' + gkNorm.toFixed(5), margin.left, infoY + 15);
                            ctx.fillStyle = colors.yellow;
                            ctx.fillText('S_' + nTerms + ' = Σ|g_k| (dominator)', margin.left, infoY + 30);
                            ctx.fillStyle = colors.muted;
                            ctx.fillText('||f_n - f||_p ≈ ' + errNorm.toFixed(5) + '    Σ||g_k||_p = ' + totalGkNorms.toFixed(4), margin.left, infoY + 45);

                            // Norm decay bar chart (right side)
                            var barX = w - 120;
                            var barW2 = 90;
                            var barTop = margin.top + 10;
                            var barH = plotH * 0.6;
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('||g_k||_p', barX + barW2 / 2, barTop - 5);

                            var maxBar = lpNorm(function(x) { return gk(1, x); }, pVal);
                            for (var k = 1; k <= Math.min(nTerms, 12); k++) {
                                var nrm = lpNorm(function(x) { return gk(k, x); }, pVal);
                                var bh = (nrm / maxBar) * barH * 0.8;
                                var by = barTop + barH - bh;
                                var bx = barX + ((k - 1) / 12) * barW2;
                                var bw = barW2 / 13;
                                ctx.fillStyle = k === nTerms ? colors.red : 'rgba(88, 166, 255, 0.5)';
                                ctx.fillRect(bx, by, bw, bh);
                                ctx.fillStyle = colors.muted;
                                ctx.font = '8px -apple-system, sans-serif';
                                ctx.fillText(k.toString(), bx + bw / 2, barTop + barH + 10);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: '<strong>[Proof, 2 stars]</strong> Prove the "absolute convergence criterion" for Banach spaces: a normed space \\(V\\) is complete if and only if every absolutely convergent series converges (i.e., \\(\\sum\\|v_n\\| < \\infty \\implies \\sum v_n\\) converges).',
                    hint: 'Forward: given a Cauchy sequence, extract a fast subsequence and telescope. Backward: given absolutely convergent series, show partial sums are Cauchy.',
                    solution: '(⇒) Given Cauchy \\((f_n)\\), pick \\(n_k\\) with \\(\\|f_{n_{k+1}} - f_{n_k}\\| < 2^{-k}\\). Set \\(g_k = f_{n_k} - f_{n_{k-1}}\\). Then \\(\\sum\\|g_k\\| < \\infty\\), so by hypothesis \\(\\sum g_k\\) converges, say to \\(f\\). But \\(\\sum_{k=1}^K g_k = f_{n_K} - f_{n_0}\\), so \\(f_{n_K} \\to f + f_{n_0}\\). A Cauchy sequence with a convergent subsequence converges. (⇐) If \\(\\sum\\|v_n\\| < \\infty\\), then \\(S_N = \\sum_{n=1}^N v_n\\) satisfies \\(\\|S_N - S_M\\| \\leq \\sum_{n=M+1}^N \\|v_n\\| \\to 0\\). So \\((S_N)\\) is Cauchy, hence converges by completeness.'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Show that \\(L^p\\) convergence implies convergence in measure: if \\(\\|f_n - f\\|_p \\to 0\\), then for every \\(\\varepsilon > 0\\), \\(\\mu(\\{|f_n - f| > \\varepsilon\\}) \\to 0\\).',
                    hint: "Use Chebyshev's inequality: \\(\\mu(\\{|h| > \\varepsilon\\}) \\leq \\varepsilon^{-p} \\int|h|^p\\,d\\mu\\).",
                    solution: "By Chebyshev (Markov): \\(\\mu(\\{|f_n - f| > \\varepsilon\\}) \\leq \\frac{1}{\\varepsilon^p}\\int|f_n - f|^p\\,d\\mu = \\frac{\\|f_n - f\\|_p^p}{\\varepsilon^p} \\to 0\\). This is the \\(L^p\\) version of Chebyshev's inequality."
                },
                {
                    question: '<strong>[Proof, 4 stars]</strong> Show that \\(L^p\\) convergence does <em>not</em> imply pointwise a.e. convergence. Construct an explicit counterexample on \\([0,1]\\).',
                    hint: 'Use the typewriter sequence from Chapter 8.',
                    solution: 'The typewriter sequence \\(f_n = \\mathbf{1}_{I_n}\\) where \\(I_n\\) are intervals that sweep \\([0,1]\\) with decreasing widths. Specifically: in pass \\(k\\), divide \\([0,1]\\) into \\(k\\) subintervals and use each in turn. Then \\(\\|f_n\\|_p^p = |I_n| \\to 0\\), so \\(f_n \\to 0\\) in \\(L^p\\). But for every \\(x \\in [0,1]\\), \\(f_n(x) = 1\\) for infinitely many \\(n\\) and \\(f_n(x) = 0\\) for infinitely many \\(n\\), so \\(f_n(x)\\) does not converge for any \\(x\\). The Riesz-Fischer proof guarantees a subsequence converges a.e., consistent with the Borel-Cantelli extraction from Ch. 8.'
                },
                {
                    question: '<strong>[Exploration, 2 stars]</strong> Using the Riesz-Fischer visualization, observe how the error \\(\\|f_n - f\\|_p\\) and the norm \\(\\|g_n\\|_p\\) of the \\(n\\)-th term decay as \\(n\\) increases. How does the rate depend on \\(p\\)?',
                    hint: 'Increase \\(p\\) and watch whether the error decays faster or slower.',
                    solution: 'For the sequence \\(g_k(x) = \\sin(k\\pi x)/2^k\\), we have \\(\\|g_k\\|_p \\sim c_p/2^k\\) where \\(c_p\\) depends on \\(p\\). The geometric decay \\(1/2^k\\) dominates regardless of \\(p\\), so the convergence rate is exponential in all cases. However, the constant \\(c_p\\) increases with \\(p\\) (higher \\(p\\) norms are more sensitive to peaks), which is visible in the bar chart. The key insight is that \\(\\sum\\|g_k\\|_p < \\infty\\) is automatic whenever the norms decay geometrically, independent of \\(p\\).'
                }
            ]
        },

        // ============================================================
        // Section 4: Dense Subsets and Separability
        // ============================================================
        {
            id: 'dense-subsets-separability',
            title: 'Dense Subsets and Separability',
            content: `
                <div class="bridge section-bridge">
                    <p>Having established that \\(L^p\\) is a Banach space, we now ask: how "large" is it? Can every \\(L^p\\) function be approximated by a simple, explicit function? The answer is yes (for \\(1 \\leq p < \\infty\\)): simple functions, continuous functions, and even smooth compactly supported functions are all dense in \\(L^p\\). This makes \\(L^p\\) simultaneously vast (containing all manner of irregular functions) and tame (every element is a limit of nice ones).</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove density of simple functions and continuous functions in \\(L^p\\) for \\(1 \\leq p < \\infty\\). Establish separability of \\(L^p(\\mathbb{R}^n)\\) and show that \\(L^\\infty\\) is not separable.</p>
                </div>

                <h2>Density of Simple Functions</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.14 (Simple Functions Are Dense in \\(L^p\\))</div>
                    <div class="env-body">
                        <p>For \\(1 \\leq p < \\infty\\), the simple functions in \\(L^p(X, \\mu)\\) are dense in \\(L^p\\). That is, for every \\(f \\in L^p\\) and \\(\\varepsilon > 0\\), there exists a simple function \\(\\varphi\\) with \\(\\|f - \\varphi\\|_p < \\varepsilon\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>From Chapter 5, there exist simple functions \\(\\varphi_n\\) with \\(|\\varphi_n| \\leq |f|\\) and \\(\\varphi_n \\to f\\) pointwise. Then \\(|f - \\varphi_n|^p \\leq (2|f|)^p \\in L^1\\), so by the Dominated Convergence Theorem, \\(\\|f - \\varphi_n\\|_p^p \\to 0\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Density of Continuous Functions</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.15 (\\(C_c\\) Is Dense in \\(L^p(\\mathbb{R}^n)\\))</div>
                    <div class="env-body">
                        <p>For \\(1 \\leq p < \\infty\\), the space \\(C_c(\\mathbb{R}^n)\\) of continuous functions with compact support is dense in \\(L^p(\\mathbb{R}^n)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p><strong>Step 1:</strong> By Theorem 9.14, simple functions are dense in \\(L^p\\). By linearity, it suffices to approximate \\(\\mathbf{1}_E\\) for measurable \\(E\\) with \\(\\mu(E) < \\infty\\).</p>
                        <p><strong>Step 2 (Regularity of Lebesgue measure):</strong> For any measurable \\(E\\) with \\(\\mu(E) < \\infty\\) and \\(\\varepsilon > 0\\), there exists an open set \\(U \\supset E\\) with \\(\\mu(U \\setminus E) < \\varepsilon\\).</p>
                        <p><strong>Step 3 (Urysohn):</strong> Between the characteristic function of a compact set and an open set, insert a continuous function with compact support. The \\(L^p\\) error is controlled by the measure of the "gap" \\(U \\setminus K\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 9.16 (\\(C_c^\\infty\\) Is Dense)</div>
                    <div class="env-body">
                        <p>The space \\(C_c^\\infty(\\mathbb{R}^n)\\) of smooth compactly supported functions is also dense in \\(L^p(\\mathbb{R}^n)\\) for \\(1 \\leq p < \\infty\\). This follows from Theorem 9.15 together with convolution with a mollifier: if \\(\\varphi_\\varepsilon\\) is a standard mollifier, then \\(f * \\varphi_\\varepsilon \\in C_c^\\infty\\) and \\(\\|f * \\varphi_\\varepsilon - f\\|_p \\to 0\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="density-approximation"></div>

                <h2>Separability</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.17 (Separable Space)</div>
                    <div class="env-body">
                        <p>A metric space is <strong>separable</strong> if it contains a countable dense subset.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.18 (Separability of \\(L^p\\))</div>
                    <div class="env-body">
                        <p>For \\(1 \\leq p < \\infty\\), \\(L^p(\\mathbb{R}^n)\\) is separable. A countable dense subset is given by simple functions of the form \\(\\sum_{k=1}^N r_k \\mathbf{1}_{Q_k}\\), where the \\(r_k\\) are rational and the \\(Q_k\\) are rectangles with rational endpoints.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.19 (\\(L^\\infty\\) Is Not Separable)</div>
                    <div class="env-body">
                        <p>The space \\(L^\\infty([0,1])\\) is not separable.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For each \\(t \\in (0,1)\\), consider \\(f_t = \\mathbf{1}_{[0,t]}\\). If \\(s \\neq t\\), then \\(\\|f_s - f_t\\|_\\infty = 1\\). The uncountable family \\(\\{f_t\\}_{t \\in (0,1)}\\) has pairwise distance 1. The open balls \\(B(f_t, 1/3)\\) are pairwise disjoint. Any dense subset must contain a point in each such ball, so it must be uncountable.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Density Fails in \\(L^\\infty\\))</div>
                    <div class="env-body">
                        <p>Continuous functions are <em>not</em> dense in \\(L^\\infty\\). The closure of \\(C([0,1])\\) in \\(L^\\infty\\) is the space of functions that agree a.e. with a continuous function, which misses discontinuous bounded functions like \\(\\mathbf{1}_{\\mathbb{Q}}\\). This is another manifestation of the essential difference between \\(L^\\infty\\) and the \\(L^p\\) spaces with \\(p < \\infty\\).</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 6.2; Royden-Fitzpatrick 8.2-8.3; Stein-Shakarchi III.2; Rudin RCA 3.14.</p>
            `,
            visualizations: [
                {
                    id: 'density-approximation',
                    title: 'Density Approximation Demo',
                    description: 'Approximate an L^p function by simple functions and continuous functions. See the L^p error decrease as the approximation is refined.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var nSteps = 4;
                        var approxType = 0; // 0 = simple, 1 = continuous (mollified)
                        var pVal = 2;

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        VizEngine.createSlider(controls, 'Resolution (partition size)', 2, 40, nSteps, 1, function(v) {
                            nSteps = Math.round(v);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Exponent p', 1, 6, pVal, 0.5, function(v) {
                            pVal = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Toggle: Simple / Continuous', function() {
                            approxType = 1 - approxType;
                            draw();
                        });

                        // Target function: a non-trivial L^p function with a jump
                        function target(x) {
                            if (x < 0.3) return Math.sin(3 * Math.PI * x) + 0.5;
                            if (x < 0.31) return 1.2; // jump
                            if (x < 0.7) return 0.8 * Math.cos(2 * Math.PI * (x - 0.3)) + 0.3;
                            return Math.exp(-(x - 0.85) * (x - 0.85) * 50) * 1.5;
                        }

                        function simpleApprox(x, n) {
                            var k = Math.floor(x * n);
                            if (k >= n) k = n - 1;
                            // Average value on subinterval
                            var a = k / n, b = (k + 1) / n;
                            var sum = 0;
                            var M = 20;
                            for (var j = 0; j < M; j++) {
                                sum += target(a + (b - a) * (j + 0.5) / M);
                            }
                            return sum / M;
                        }

                        function continuousApprox(x, n) {
                            // Mollified version: convolve target with Gaussian of width 1/n
                            var sigma = 1.5 / n;
                            var sum = 0, wt = 0;
                            var M = 40;
                            for (var j = -M; j <= M; j++) {
                                var t = x + j * sigma * 3 / M;
                                if (t < 0 || t > 1) continue;
                                var w = Math.exp(-0.5 * Math.pow(j * 3 / M, 2));
                                sum += target(t) * w;
                                wt += w;
                            }
                            return wt > 0 ? sum / wt : target(x);
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { left: 55, right: 20, top: 55, bottom: 70 };
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            var typeLabel = approxType === 0 ? 'Simple Function' : 'Continuous (Mollified)';

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Density: Approximation by ' + typeLabel + 's', w / 2, 22);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('Resolution = ' + nSteps + ', p = ' + pVal.toFixed(1), w / 2, 40);

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, margin.top);
                            ctx.lineTo(margin.left, margin.top + plotH);
                            ctx.lineTo(margin.left + plotW, margin.top + plotH);
                            ctx.stroke();

                            // Y range
                            var yMin = -0.5, yMax = 2.0;

                            function sx(x) { return margin.left + x * plotW; }
                            function sy(y) { return margin.top + plotH - ((y - yMin) / (yMax - yMin)) * plotH; }

                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var i = 0; i <= 10; i++) {
                                var xp = sx(i / 10);
                                ctx.beginPath(); ctx.moveTo(xp, margin.top); ctx.lineTo(xp, margin.top + plotH); ctx.stroke();
                            }

                            // Zero line
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 0.5;
                            ctx.beginPath(); ctx.moveTo(margin.left, sy(0)); ctx.lineTo(margin.left + plotW, sy(0)); ctx.stroke();

                            var N = 400;

                            // Compute error
                            var errP = 0;
                            for (var i = 0; i < N; i++) {
                                var x = (i + 0.5) / N;
                                var fv = target(x);
                                var av = approxType === 0 ? simpleApprox(x, nSteps) : continuousApprox(x, nSteps);
                                errP += Math.pow(Math.abs(fv - av), pVal) / N;
                            }
                            errP = Math.pow(errP, 1 / pVal);

                            // Shade error region
                            ctx.fillStyle = 'rgba(248, 81, 73, 0.15)';
                            ctx.beginPath();
                            for (var i = 0; i < N; i++) {
                                var x = (i + 0.5) / N;
                                var fv = target(x);
                                var av = approxType === 0 ? simpleApprox(x, nSteps) : continuousApprox(x, nSteps);
                                if (i === 0) {
                                    ctx.moveTo(sx(x), sy(fv));
                                } else {
                                    ctx.lineTo(sx(x), sy(fv));
                                }
                            }
                            for (var i = N - 1; i >= 0; i--) {
                                var x = (i + 0.5) / N;
                                var av = approxType === 0 ? simpleApprox(x, nSteps) : continuousApprox(x, nSteps);
                                ctx.lineTo(sx(x), sy(av));
                            }
                            ctx.closePath();
                            ctx.fill();

                            // Plot approximation
                            if (approxType === 0) {
                                // Step function
                                ctx.strokeStyle = colors.teal;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var k = 0; k < nSteps; k++) {
                                    var a = k / nSteps, b = (k + 1) / nSteps;
                                    var val = simpleApprox((a + b) / 2, nSteps);
                                    if (k === 0) ctx.moveTo(sx(a), sy(val));
                                    else ctx.lineTo(sx(a), sy(val));
                                    ctx.lineTo(sx(b), sy(val));
                                }
                                ctx.stroke();
                            } else {
                                ctx.strokeStyle = colors.teal;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i < N; i++) {
                                    var x = (i + 0.5) / N;
                                    var av = continuousApprox(x, nSteps);
                                    if (i === 0) ctx.moveTo(sx(x), sy(av));
                                    else ctx.lineTo(sx(x), sy(av));
                                }
                                ctx.stroke();
                            }

                            // Plot target
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < N; i++) {
                                var x = (i + 0.5) / N;
                                var fv = target(x);
                                if (i === 0) ctx.moveTo(sx(x), sy(fv));
                                else ctx.lineTo(sx(x), sy(fv));
                            }
                            ctx.stroke();

                            // Legend
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = colors.blue;
                            ctx.fillText('Target f', margin.left + 10, h - 50);
                            ctx.fillStyle = colors.teal;
                            ctx.fillText(typeLabel + ' approximation', margin.left + 10, h - 36);
                            ctx.fillStyle = colors.red;
                            ctx.fillText('Error region', margin.left + 10, h - 22);
                            ctx.fillStyle = colors.text;
                            ctx.textAlign = 'right';
                            ctx.fillText('||f - approx||_' + pVal.toFixed(1) + ' = ' + errP.toFixed(5), margin.left + plotW, h - 22);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: '<strong>[Proof, 2 stars]</strong> Show that step functions (finite linear combinations of characteristic functions of intervals) are dense in \\(L^p([a,b])\\) for \\(1 \\leq p < \\infty\\).',
                    hint: 'First approximate by simple functions, then approximate each set \\(E\\) by a finite union of intervals using regularity of Lebesgue measure.',
                    solution: 'By Theorem 9.14, simple functions are dense. A simple function is \\(\\sum c_k \\mathbf{1}_{E_k}\\). For each \\(E_k\\) measurable with finite measure and \\(\\varepsilon > 0\\), regularity of Lebesgue measure gives a finite union of intervals \\(F_k\\) with \\(\\mu(E_k \\triangle F_k) < \\varepsilon\\). Then \\(\\|\\mathbf{1}_{E_k} - \\mathbf{1}_{F_k}\\|_p = \\mu(E_k \\triangle F_k)^{1/p} < \\varepsilon^{1/p}\\). Summing over finitely many terms gives the result.'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Prove that \\(L^\\infty([0,1])\\) is not separable by constructing an uncountable family of functions with pairwise \\(L^\\infty\\)-distance 1.',
                    hint: 'Consider \\(\\{\\mathbf{1}_{[0,t]} : t \\in (0,1)\\}\\).',
                    solution: 'For \\(s < t\\), \\(\\mathbf{1}_{[0,t]} - \\mathbf{1}_{[0,s]} = \\mathbf{1}_{(s,t]}\\), which equals 1 on \\((s,t]\\) (a set of positive measure). So \\(\\|\\mathbf{1}_{[0,t]} - \\mathbf{1}_{[0,s]}\\|_\\infty = 1\\). The balls \\(B(\\mathbf{1}_{[0,t]}, 1/3)\\) are pairwise disjoint. Any dense set must intersect each ball, hence must be uncountable. So \\(L^\\infty\\) is not separable.'
                }
            ]
        },

        // ============================================================
        // Section 5: Duality of L^p Spaces
        // ============================================================
        {
            id: 'lp-duality',
            title: 'Duality of L^p Spaces',
            content: `
                <div class="bridge section-bridge">
                    <p>The dual space of a Banach space is the space of all continuous linear functionals on it. For \\(L^p\\), the dual turns out to be \\(L^q\\) (with \\(q\\) conjugate to \\(p\\)), provided \\(1 \\leq p < \\infty\\). This remarkable duality is at the heart of functional analysis: it connects Hölder's inequality (which gives one direction) with a deep representation theorem (which gives the other).</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove the Riesz representation theorem for \\(L^p\\) duality: \\((L^p)^* \\cong L^q\\) for \\(1 \\leq p < \\infty\\). Discuss the case \\(p = \\infty\\) and its subtleties. Highlight the special role of \\(L^2\\) as a Hilbert space.</p>
                </div>

                <h2>Continuous Linear Functionals</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.20 (Dual Space)</div>
                    <div class="env-body">
                        <p>The <strong>dual space</strong> \\((L^p)^* = (L^p(X,\\mu))^*\\) is the space of all bounded (continuous) linear functionals \\(\\Lambda: L^p \\to \\mathbb{R}\\) (or \\(\\mathbb{C}\\)), equipped with the operator norm</p>
                        \\[\\|\\Lambda\\| = \\sup_{\\|f\\|_p \\leq 1} |\\Lambda(f)|.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Pairing Functions)</div>
                    <div class="env-body">
                        <p>Hölder's inequality tells us that each \\(g \\in L^q\\) defines a bounded linear functional on \\(L^p\\) via \\(\\Lambda_g(f) = \\int fg\\,d\\mu\\), and \\(\\|\\Lambda_g\\| = \\|g\\|_q\\). The duality theorem says these are <em>all</em> the bounded linear functionals: there are no "exotic" ones hiding. Every continuous way to assign a number to an \\(L^p\\) function comes from integrating against some \\(L^q\\) function.</p>
                    </div>
                </div>

                <h2>The Riesz Representation Theorem for \\(L^p\\)</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.21 (Riesz Representation, \\(L^p\\) Duality)</div>
                    <div class="env-body">
                        <p>Let \\(1 \\leq p < \\infty\\) and let \\(q\\) be its conjugate exponent. For every bounded linear functional \\(\\Lambda \\in (L^p)^*\\), there exists a unique \\(g \\in L^q\\) such that</p>
                        \\[\\Lambda(f) = \\int_X fg\\,d\\mu \\quad \\text{for all } f \\in L^p,\\]
                        <p>and \\(\\|\\Lambda\\| = \\|g\\|_q\\). The map \\(g \\mapsto \\Lambda_g\\) is an isometric isomorphism \\(L^q \\xrightarrow{\\sim} (L^p)^*\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch (for \\(\\sigma\\)-finite \\(\\mu\\))</div>
                    <div class="env-body">
                        <p><strong>Step 1 (Define a measure):</strong> Given \\(\\Lambda \\in (L^p)^*\\), define \\(\\nu(E) = \\Lambda(\\mathbf{1}_E)\\) for measurable \\(E\\) with \\(\\mu(E) < \\infty\\). One verifies that \\(\\nu\\) is a signed measure absolutely continuous with respect to \\(\\mu\\) (since \\(\\mu(E) = 0 \\implies \\mathbf{1}_E = 0\\) in \\(L^p \\implies \\nu(E) = 0\\)).</p>
                        <p><strong>Step 2 (Radon-Nikodym):</strong> By the Radon-Nikodym theorem, \\(\\nu = g\\,d\\mu\\) for some measurable \\(g\\). Then \\(\\Lambda(\\mathbf{1}_E) = \\int_E g\\,d\\mu\\), and by linearity and density, \\(\\Lambda(f) = \\int fg\\,d\\mu\\) for all \\(f \\in L^p\\).</p>
                        <p><strong>Step 3 (\\(g \\in L^q\\)):</strong> To show \\(g \\in L^q\\), one constructs test functions \\(f_n \\in L^p\\) that "detect" \\(\\|g\\|_q\\). For \\(q < \\infty\\), use \\(f_n = |g|^{q/p} \\operatorname{sgn}(g) \\cdot \\mathbf{1}_{\\{|g| \\leq n\\}}\\). Then \\(\\Lambda(f_n) = \\int |g|^{q/p + 1} \\mathbf{1}_{\\{|g| \\leq n\\}}\\,d\\mu = \\int |g|^q \\mathbf{1}_{\\{|g| \\leq n\\}}\\,d\\mu\\) (since \\(q/p + 1 = q\\)). Boundedness \\(|\\Lambda(f_n)| \\leq \\|\\Lambda\\| \\cdot \\|f_n\\|_p\\) and the relation \\(\\|f_n\\|_p^p = \\int|g|^q \\mathbf{1}_{\\{|g| \\leq n\\}}\\,d\\mu\\) combine to give \\(\\|g\\|_q \\leq \\|\\Lambda\\|\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Special Cases and Exceptions</h2>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 9.22 (\\(L^2\\) Is a Hilbert Space)</div>
                    <div class="env-body">
                        <p>Since \\(L^2\\) is self-dual (\\(p = q = 2\\)), the Riesz representation theorem identifies \\((L^2)^*\\) with \\(L^2\\) itself. Combined with the inner product \\(\\langle f, g \\rangle = \\int f\\bar{g}\\,d\\mu\\), this makes \\(L^2\\) a <strong>Hilbert space</strong>, the unique (up to isomorphism) separable infinite-dimensional Hilbert space. This self-duality is what makes \\(L^2\\) the natural setting for Fourier analysis, quantum mechanics, and least-squares approximation.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The \\(L^\\infty\\) Anomaly)</div>
                    <div class="env-body">
                        <p>The dual of \\(L^1\\) is \\(L^\\infty\\), which is part of the theorem above (\\(p = 1, q = \\infty\\)). But the dual of \\(L^\\infty\\) is <em>not</em> \\(L^1\\); it is the much larger space of finitely additive signed measures, denoted \\(\\text{ba}(X, \\mathcal{A}, \\mu)\\). This asymmetry is connected to the non-separability of \\(L^\\infty\\) and the non-reflexivity of \\(L^1\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.23 (Reflexive Space)</div>
                    <div class="env-body">
                        <p>A Banach space \\(V\\) is <strong>reflexive</strong> if the canonical embedding \\(J: V \\to V^{**}\\) (defined by \\(J(v)(\\Lambda) = \\Lambda(v)\\)) is surjective. By the duality theorem, \\(L^p\\) is reflexive for \\(1 < p < \\infty\\). Neither \\(L^1\\) nor \\(L^\\infty\\) is reflexive.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Weak and Weak-* Convergence)</div>
                    <div class="env-body">
                        <p>Duality enables two additional modes of convergence. In \\(L^p\\) (\\(1 < p < \\infty\\)):</p>
                        <ul>
                            <li><strong>Weak convergence:</strong> \\(f_n \\rightharpoonup f\\) if \\(\\int f_n g\\,d\\mu \\to \\int fg\\,d\\mu\\) for all \\(g \\in L^q\\).</li>
                            <li><strong>Weak-* convergence</strong> (in \\(L^\\infty = (L^1)^*\\)): \\(g_n \\xrightarrow{w^*} g\\) if \\(\\int fg_n\\,d\\mu \\to \\int fg\\,d\\mu\\) for all \\(f \\in L^1\\).</li>
                        </ul>
                        <p>The Banach-Alaoglu theorem guarantees that the closed unit ball of \\((L^p)^*\\) is weak-* compact, a result of immense importance in PDE theory and the calculus of variations.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 6.2; Royden-Fitzpatrick 8.1; Stein-Shakarchi III.4; Rudin RCA 6.15-6.16.</p>
            `,
            exercises: [
                {
                    question: '<strong>[Proof, 2 stars]</strong> Show that the map \\(g \\mapsto \\Lambda_g\\) (where \\(\\Lambda_g(f) = \\int fg\\,d\\mu\\)) is a well-defined bounded linear map from \\(L^q\\) to \\((L^p)^*\\) with \\(\\|\\Lambda_g\\| \\leq \\|g\\|_q\\).',
                    hint: "Apply Hölder's inequality directly.",
                    solution: "Linearity: \\(\\Lambda_{\\alpha g_1 + \\beta g_2}(f) = \\int f(\\alpha g_1 + \\beta g_2) = \\alpha \\Lambda_{g_1}(f) + \\beta \\Lambda_{g_2}(f)\\). Boundedness: by Hölder, \\(|\\Lambda_g(f)| = |\\int fg| \\leq \\|f\\|_p \\|g\\|_q\\), so \\(\\|\\Lambda_g\\| = \\sup_{\\|f\\|_p \\leq 1}|\\Lambda_g(f)| \\leq \\|g\\|_q\\). Well-definedness: if \\(g_1 = g_2\\) a.e., then \\(\\int f(g_1 - g_2) = 0\\) for all \\(f\\)."
                },
                {
                    question: '<strong>[Proof, 4 stars]</strong> Prove that \\(\\|\\Lambda_g\\| = \\|g\\|_q\\) (i.e., the norm is attained). Construct the extremal function \\(f^*\\) explicitly.',
                    hint: 'Try \\(f^*(x) = |g(x)|^{q/p} \\operatorname{sgn}(g(x)) / \\|g\\|_q^{q/p}\\) and verify \\(\\|f^*\\|_p = 1\\) and \\(\\Lambda_g(f^*) = \\|g\\|_q\\).',
                    solution: 'For \\(1 < p, q < \\infty\\): set \\(f^* = |g|^{q-1}\\operatorname{sgn}(g)/\\|g\\|_q^{q/p}\\). Then \\(|f^*|^p = |g|^{(q-1)p}/\\|g\\|_q^q = |g|^q/\\|g\\|_q^q\\) (using \\((q-1)p = q\\)). So \\(\\|f^*\\|_p^p = \\|g\\|_q^q/\\|g\\|_q^q = 1\\). Also \\(\\int f^* g = \\int |g|^{q-1}|g|/\\|g\\|_q^{q/p} = \\|g\\|_q^q/\\|g\\|_q^{q/p} = \\|g\\|_q^{q - q/p} = \\|g\\|_q^{q \\cdot (p-1)/p} = \\|g\\|_q^{q/q} = \\|g\\|_q\\). For \\(p = 1\\): take \\(f^* = \\operatorname{sgn}(g)\\). Then \\(\\|f^*\\|_\\infty = 1\\) and \\(\\Lambda_g(f^*) = \\int|g| = \\|g\\|_1\\). Wait, the dual is \\(L^\\infty\\), so \\(f^* = \\operatorname{sgn}(g)\\in L^\\infty\\), \\(\\|f^*\\|_\\infty = 1\\), \\(\\Lambda_g(f^*) = \\|g\\|_1\\). Actually for \\(p=1,q=\\infty\\): \\(\\|\\Lambda_g\\| \\leq \\|g\\|_\\infty\\). To show equality, for \\(\\varepsilon > 0\\), let \\(E = \\{|g| > \\|g\\|_\\infty - \\varepsilon\\}\\), \\(\\mu(E)>0\\). Set \\(f = \\operatorname{sgn}(g)\\mathbf{1}_E/\\mu(E)\\). Then \\(\\|f\\|_1 = 1\\), \\(\\Lambda_g(f) = \\int_E|g|/\\mu(E) > \\|g\\|_\\infty - \\varepsilon\\).'
                },
                {
                    question: '<strong>[Computation, 5 stars]</strong> Let \\(f_n(x) = \\sqrt{n}\\,\\mathbf{1}_{[0,1/n]}(x)\\) in \\(L^2([0,1])\\). Show that \\(\\|f_n\\|_2 = 1\\) for all \\(n\\), \\(f_n \\rightharpoonup 0\\) weakly, but \\(f_n \\not\\to 0\\) in \\(L^2\\) norm. What does this say about the unit ball in infinite-dimensional spaces?',
                    hint: 'Show \\(\\int f_n g \\to 0\\) for all \\(g \\in L^2\\) using DCT or direct computation.',
                    solution: '\\(\\|f_n\\|_2^2 = n \\cdot (1/n) = 1\\). For \\(g \\in L^2\\): \\(|\\int f_n g| = |\\sqrt{n}\\int_0^{1/n} g| \\leq \\sqrt{n} \\cdot (1/n)^{1/2} \\cdot \\|g \\mathbf{1}_{[0,1/n]}\\|_2 = \\|g\\mathbf{1}_{[0,1/n]}\\|_2 \\to 0\\) by DCT. So \\(f_n \\rightharpoonup 0\\). But \\(\\|f_n\\|_2 = 1 \\not\\to 0\\). This shows the closed unit ball of \\(L^2\\) is not (sequentially) compact in the norm topology. However, by Banach-Alaoglu, it is compact in the weak topology. In infinite dimensions, the unit ball is "spacious enough" to contain sequences with no norm-convergent subsequence, unlike finite dimensions where the Bolzano-Weierstrass theorem guarantees compactness.'
                }
            ]
        },

        // ============================================================
        // Section 6: Interpolation and Inclusion
        // ============================================================
        {
            id: 'interpolation-inclusion',
            title: 'Interpolation and Inclusion',
            content: `
                <div class="bridge section-bridge">
                    <p>Having mapped the individual \\(L^p\\) spaces, we now study the relationships between them. When does \\(L^p \\subset L^q\\)? Given that a function lies in two \\(L^p\\) spaces, can we place it in intermediate spaces? These inclusion and interpolation results are indispensable tools in PDE theory, harmonic analysis, and probability.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Establish inclusion relations between \\(L^p\\) spaces on finite and infinite measure spaces. Prove the Riesz-Thorin interpolation theorem (statement and applications). Connect \\(L^p\\) theory to the broader landscape of functional analysis.</p>
                </div>

                <h2>Inclusion Relations</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.24 (Inclusion on Finite Measure Spaces)</div>
                    <div class="env-body">
                        <p>If \\(\\mu(X) < \\infty\\) and \\(1 \\leq p \\leq r \\leq \\infty\\), then \\(L^r(X) \\subseteq L^p(X)\\) and</p>
                        \\[\\|f\\|_p \\leq \\mu(X)^{1/p - 1/r} \\|f\\|_r.\\]
                        <p>In particular, on a probability space \\((\\Omega, \\mathcal{F}, P)\\), \\(L^\\infty \\subset \\cdots \\subset L^2 \\subset L^1\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Higher Integrability Is Stronger)</div>
                    <div class="env-body">
                        <p>On a finite measure space, being in \\(L^r\\) for large \\(r\\) is a <em>stronger</em> condition. The function must not only be integrable but must have its high values tightly controlled. The constant \\(\\mu(X)^{1/p - 1/r}\\) compensates for the "free" integrability gained from the finite measure.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.25 (No General Inclusion on \\(\\mathbb{R}\\))</div>
                    <div class="env-body">
                        <p>On \\((\\mathbb{R}, \\mathcal{B}, \\lambda)\\), neither \\(L^p \\subseteq L^q\\) nor \\(L^q \\subseteq L^p\\) holds for \\(p \\neq q\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For \\(p < q\\): the function \\(f(x) = |x|^{-1/q} \\mathbf{1}_{|x| \\leq 1}\\) is in \\(L^p \\setminus L^q\\) (singularity at 0). The function \\(g(x) = |x|^{-1/p} \\mathbf{1}_{|x| \\geq 1}\\) is in \\(L^q \\setminus L^p\\) (slow decay at infinity).</p>
                        <p>On \\(\\mathbb{R}\\), an \\(L^p\\) function can fail to be in \\(L^q\\) either by being too singular (which matters for small \\(p\\)) or by decaying too slowly (which matters for large \\(p\\)). Neither issue arises on finite measure spaces (where decay is irrelevant) or for compactly supported functions (where singularity is the only concern).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="viz-placeholder" data-viz="lp-inclusion-map"></div>

                <h2>Interpolation</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.26 (Log-Convexity of the \\(L^p\\) Norm)</div>
                    <div class="env-body">
                        <p>If \\(f \\in L^{p_0} \\cap L^{p_1}\\) with \\(1 \\leq p_0 < p_1 \\leq \\infty\\), then \\(f \\in L^p\\) for all \\(p_0 \\leq p \\leq p_1\\), and</p>
                        \\[\\|f\\|_p \\leq \\|f\\|_{p_0}^{1-\\theta} \\|f\\|_{p_1}^\\theta,\\]
                        <p>where \\(\\theta \\in [0,1]\\) is defined by \\(\\frac{1}{p} = \\frac{1-\\theta}{p_0} + \\frac{\\theta}{p_1}\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Write \\(|f|^p = |f|^{p(1-\\theta)} \\cdot |f|^{p\\theta}\\) and apply Hölder with exponents \\(\\frac{p_0}{p(1-\\theta)}\\) and \\(\\frac{p_1}{p\\theta}\\). These are conjugate because \\(\\frac{p(1-\\theta)}{p_0} + \\frac{p\\theta}{p_1} = 1\\) (by the definition of \\(\\theta\\)). Thus</p>
                        \\[\\int|f|^p \\leq \\left(\\int|f|^{p_0}\\right)^{p(1-\\theta)/p_0} \\left(\\int|f|^{p_1}\\right)^{p\\theta/p_1} = \\|f\\|_{p_0}^{p(1-\\theta)} \\|f\\|_{p_1}^{p\\theta}.\\]
                        <p>Taking \\(p\\)-th roots gives the result.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Convexity of the \\(L^p\\) Scale)</div>
                    <div class="env-body">
                        <p>The map \\(p \\mapsto \\log\\|f\\|_p\\) is convex (as a function of \\(1/p\\)). This means the \\(L^p\\) spaces form a "convex interpolation scale": if a function is integrable at two endpoints, it is automatically integrable at all points in between, with a norm bound that is a geometric average. This is the foundation for the more sophisticated Riesz-Thorin interpolation theorem.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.27 (Riesz-Thorin Interpolation, Statement)</div>
                    <div class="env-body">
                        <p>Let \\(1 \\leq p_0, p_1, q_0, q_1 \\leq \\infty\\) and let \\(T\\) be a linear operator that is bounded from \\(L^{p_0} \\to L^{q_0}\\) with norm \\(M_0\\) and from \\(L^{p_1} \\to L^{q_1}\\) with norm \\(M_1\\). Then for \\(0 < \\theta < 1\\), \\(T\\) is bounded from \\(L^p \\to L^q\\) with</p>
                        \\[\\|T\\|_{L^p \\to L^q} \\leq M_0^{1-\\theta} M_1^\\theta,\\]
                        <p>where \\(\\frac{1}{p} = \\frac{1-\\theta}{p_0} + \\frac{\\theta}{p_1}\\) and \\(\\frac{1}{q} = \\frac{1-\\theta}{q_0} + \\frac{\\theta}{q_1}\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Applications of Interpolation)</div>
                    <div class="env-body">
                        <p>The Riesz-Thorin theorem has profound applications:</p>
                        <ul>
                            <li><strong>Hausdorff-Young inequality:</strong> The Fourier transform maps \\(L^p \\to L^q\\) (\\(1/p + 1/q = 1\\), \\(1 \\leq p \\leq 2\\)) by interpolating between \\(L^1 \\to L^\\infty\\) (trivial bound) and \\(L^2 \\to L^2\\) (Plancherel).</li>
                            <li><strong>Young's convolution inequality:</strong> \\(\\|f * g\\|_r \\leq \\|f\\|_p \\|g\\|_q\\) where \\(1/p + 1/q = 1 + 1/r\\), proved by interpolation.</li>
                            <li><strong>PDE regularity:</strong> Boundedness of solution operators between Sobolev spaces often reduces to endpoint estimates plus interpolation.</li>
                        </ul>
                    </div>
                </div>

                <h2>Summary: The \\(L^p\\) Landscape</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Complete Picture)</div>
                    <div class="env-body">
                        <p>Let us summarize the chapter's main results in a unified view:</p>
                        <ul>
                            <li><strong>Structure:</strong> \\(L^p\\) is a Banach space for \\(1 \\leq p \\leq \\infty\\); \\(L^2\\) is additionally a Hilbert space.</li>
                            <li><strong>Duality:</strong> \\((L^p)^* \\cong L^q\\) for \\(1 \\leq p < \\infty\\); \\((L^\\infty)^*\\) is strictly larger than \\(L^1\\).</li>
                            <li><strong>Reflexivity:</strong> \\(L^p\\) is reflexive for \\(1 < p < \\infty\\); \\(L^1\\) and \\(L^\\infty\\) are not.</li>
                            <li><strong>Separability:</strong> \\(L^p\\) is separable for \\(1 \\leq p < \\infty\\); \\(L^\\infty\\) is not.</li>
                            <li><strong>Inclusions:</strong> On finite measure spaces, \\(L^r \\subset L^p\\) for \\(r > p\\). On \\(\\mathbb{R}\\), no inclusion holds.</li>
                            <li><strong>Interpolation:</strong> \\(L^{p_0} \\cap L^{p_1} \\subset L^p \\subset L^{p_0} + L^{p_1}\\) for \\(p_0 \\leq p \\leq p_1\\).</li>
                        </ul>
                        <p>The exponent \\(p = 2\\) is special in every way: unique inner product structure, self-duality, reflexivity, separability. This is why \\(L^2\\) is the workhorse of applied mathematics. But the full scale of \\(L^p\\) spaces, with their varying geometries and dualities, provides the flexibility needed for the deepest results in analysis.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 6.3-6.4; Royden-Fitzpatrick 8.4; Stein-Shakarchi III.5; Rudin RCA 6.27; Bergh-Löfström Ch. 1.</p>
            `,
            visualizations: [
                {
                    id: 'lp-inclusion-map',
                    title: 'L^p Inclusion Map',
                    description: 'Explore how the L^p membership of x^(-alpha) depends on alpha and p. See the inclusion relations on finite vs infinite measure spaces.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var alpha = 0.3;
                        var domain = 0; // 0 = (0,1], 1 = [1,infty), 2 = (0,infty)

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        VizEngine.createSlider(controls, 'Exponent alpha (f = x^{-alpha})', 0.05, 1.5, alpha, 0.05, function(v) {
                            alpha = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Toggle domain: (0,1] / [1,∞) / (0,∞)', function() {
                            domain = (domain + 1) % 3;
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { left: 60, right: 30, top: 55, bottom: 70 };
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            var domLabels = ['(0, 1]  (finite measure)', '[1, ∞)  (infinite measure)', '(0, ∞)  (full line)'];

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('L^p Membership of f(x) = x^{-' + alpha.toFixed(2) + '} on ' + domLabels[domain], w / 2, 22);

                            // For each domain, compute the range of p for which f in L^p
                            // On (0,1]: integral of x^{-alpha*p} from 0 to 1 converges iff alpha*p < 1, i.e. p < 1/alpha
                            // On [1,inf): integral of x^{-alpha*p} from 1 to inf converges iff alpha*p > 1, i.e. p > 1/alpha
                            // On (0,inf): need both, so no p works unless alpha = 0

                            var pMax = 8;
                            var pCrit = 1 / alpha;

                            // Draw p-axis
                            function sx(p) { return margin.left + (p / pMax) * plotW; }
                            var barY = margin.top + plotH * 0.35;
                            var barH = 40;

                            // Axis
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, barY + barH + 30);
                            ctx.lineTo(margin.left + plotW, barY + barH + 30);
                            ctx.stroke();

                            // P-axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var p = 1; p <= pMax; p++) {
                                ctx.fillText(p.toString(), sx(p), barY + barH + 44);
                                ctx.beginPath();
                                ctx.moveTo(sx(p), barY + barH + 26);
                                ctx.lineTo(sx(p), barY + barH + 34);
                                ctx.stroke();
                            }
                            ctx.fillText('p', margin.left + plotW + 15, barY + barH + 34);

                            // Critical p line
                            if (pCrit <= pMax && pCrit >= 0.5) {
                                ctx.strokeStyle = colors.yellow;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([5, 4]);
                                ctx.beginPath();
                                ctx.moveTo(sx(pCrit), barY - 20);
                                ctx.lineTo(sx(pCrit), barY + barH + 20);
                                ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = colors.yellow;
                                ctx.font = '12px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('p* = 1/α = ' + pCrit.toFixed(2), sx(pCrit), barY - 25);
                            }

                            // Color the L^p membership region
                            if (domain === 0) {
                                // (0,1]: f in L^p iff p < 1/alpha
                                var pEnd = Math.min(pCrit, pMax);
                                if (pEnd > 0.5) {
                                    ctx.fillStyle = 'rgba(63, 185, 80, 0.3)';
                                    ctx.fillRect(sx(0.5), barY, sx(pEnd) - sx(0.5), barH);
                                    ctx.strokeStyle = colors.green;
                                    ctx.lineWidth = 2;
                                    ctx.strokeRect(sx(0.5), barY, sx(pEnd) - sx(0.5), barH);
                                    ctx.fillStyle = colors.green;
                                    ctx.font = 'bold 13px -apple-system, sans-serif';
                                    ctx.fillText('f ∈ L^p', sx(Math.min(pEnd, pMax) / 2 + 0.25), barY + barH / 2 + 4);
                                }
                                if (pCrit < pMax) {
                                    ctx.fillStyle = 'rgba(248, 81, 73, 0.15)';
                                    ctx.fillRect(sx(pCrit), barY, sx(pMax) - sx(pCrit), barH);
                                    ctx.fillStyle = colors.red;
                                    ctx.font = '12px -apple-system, sans-serif';
                                    ctx.fillText('f ∉ L^p', sx((pCrit + pMax) / 2), barY + barH / 2 + 4);
                                }
                                ctx.fillStyle = colors.muted;
                                ctx.font = '12px -apple-system, sans-serif';
                                ctx.fillText('Finite measure: higher p is harder (singularity at 0 matters more)', w / 2, barY + barH + 65);
                            } else if (domain === 1) {
                                // [1,inf): f in L^p iff p > 1/alpha
                                var pStart = Math.max(pCrit, 0.5);
                                if (pStart < pMax) {
                                    ctx.fillStyle = 'rgba(63, 185, 80, 0.3)';
                                    ctx.fillRect(sx(pStart), barY, sx(pMax) - sx(pStart), barH);
                                    ctx.strokeStyle = colors.green;
                                    ctx.lineWidth = 2;
                                    ctx.strokeRect(sx(pStart), barY, sx(pMax) - sx(pStart), barH);
                                    ctx.fillStyle = colors.green;
                                    ctx.font = 'bold 13px -apple-system, sans-serif';
                                    ctx.fillText('f ∈ L^p', sx((pStart + pMax) / 2), barY + barH / 2 + 4);
                                }
                                if (pCrit > 0.5) {
                                    var pE = Math.min(pCrit, pMax);
                                    ctx.fillStyle = 'rgba(248, 81, 73, 0.15)';
                                    ctx.fillRect(sx(0.5), barY, sx(pE) - sx(0.5), barH);
                                    ctx.fillStyle = colors.red;
                                    ctx.font = '12px -apple-system, sans-serif';
                                    ctx.fillText('f ∉ L^p', sx((0.5 + pE) / 2), barY + barH / 2 + 4);
                                }
                                ctx.fillStyle = colors.muted;
                                ctx.font = '12px -apple-system, sans-serif';
                                ctx.fillText('Infinite measure: higher p is easier (slow decay penalized less)', w / 2, barY + barH + 65);
                            } else {
                                // (0,inf): need both conditions: p < 1/alpha AND p > 1/alpha. Impossible!
                                ctx.fillStyle = 'rgba(248, 81, 73, 0.15)';
                                ctx.fillRect(sx(0.5), barY, plotW, barH);
                                ctx.fillStyle = colors.red;
                                ctx.font = 'bold 13px -apple-system, sans-serif';
                                ctx.fillText('f ∉ L^p for any p', w / 2, barY + barH / 2 + 4);
                                ctx.fillStyle = colors.muted;
                                ctx.font = '12px -apple-system, sans-serif';
                                ctx.fillText('Full line: singularity and slow decay cannot both be tamed', w / 2, barY + barH + 65);
                            }

                            // Bottom panel: function plot
                            var fPlotY = barY + barH + 80;
                            var fPlotH = h - fPlotY - 20;
                            if (fPlotH > 60) {
                                var fPlotW = plotW;
                                ctx.strokeStyle = colors.muted;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(margin.left, fPlotY);
                                ctx.lineTo(margin.left, fPlotY + fPlotH);
                                ctx.lineTo(margin.left + fPlotW, fPlotY + fPlotH);
                                ctx.stroke();

                                // Plot x^{-alpha} on the current domain
                                var xMin, xMax2;
                                if (domain === 0) { xMin = 0.01; xMax2 = 1; }
                                else if (domain === 1) { xMin = 1; xMax2 = 10; }
                                else { xMin = 0.01; xMax2 = 10; }

                                var yFMax = Math.min(Math.pow(xMin, -alpha), 15);
                                var N = 300;

                                ctx.strokeStyle = colors.blue;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i < N; i++) {
                                    var x = xMin + (xMax2 - xMin) * (i + 0.5) / N;
                                    var y = Math.pow(x, -alpha);
                                    var px = margin.left + ((x - xMin) / (xMax2 - xMin)) * fPlotW;
                                    var py = fPlotY + fPlotH - (Math.min(y, yFMax) / yFMax) * fPlotH * 0.9;
                                    if (i === 0) ctx.moveTo(px, py);
                                    else ctx.lineTo(px, py);
                                }
                                ctx.stroke();

                                ctx.fillStyle = colors.blue;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('f(x) = x^{-' + alpha.toFixed(2) + '}', margin.left + 10, fPlotY + 14);

                                // X labels
                                ctx.fillStyle = colors.muted;
                                ctx.textAlign = 'center';
                                ctx.fillText(xMin.toString(), margin.left, fPlotY + fPlotH + 14);
                                ctx.fillText(xMax2.toString(), margin.left + fPlotW, fPlotY + fPlotH + 14);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: '<strong>[Proof, 2 stars]</strong> Show that on a finite measure space, \\(\\|f\\|_p\\) is increasing in \\(p\\): if \\(1 \\leq p \\leq r \\leq \\infty\\) and \\(\\mu(X) = 1\\), then \\(\\|f\\|_p \\leq \\|f\\|_r\\).',
                    hint: 'This is the Jensen inequality applied to the convex function \\(t \\mapsto t^{r/p}\\).',
                    solution: 'Since \\(\\mu(X) = 1\\), Jensen gives \\(\\left(\\int|f|^p\\right)^{r/p} \\leq \\int|f|^{p \\cdot r/p} = \\int|f|^r\\). Taking \\(r\\)-th roots and then \\(1/p\\) and \\(1/r\\) powers appropriately: \\(\\|f\\|_p = (\\int|f|^p)^{1/p} \\leq (\\int|f|^r)^{1/r} = \\|f\\|_r\\). Alternatively, this is the special case of Theorem 9.24 with \\(\\mu(X) = 1\\).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Prove the log-convexity statement: the map \\(t \\mapsto \\log\\|f\\|_{1/t}\\) is convex on \\((0,1]\\) (where \\(t = 1/p\\)).',
                    hint: 'Apply the Hölder inequality with the appropriate exponents.',
                    solution: 'Let \\(0 < t_0 < t_1 \\leq 1\\) and \\(t = (1-\\lambda)t_0 + \\lambda t_1\\) for \\(\\lambda \\in [0,1]\\). Set \\(p = 1/t\\), \\(p_0 = 1/t_0\\), \\(p_1 = 1/t_1\\). We must show \\(\\|f\\|_p \\leq \\|f\\|_{p_0}^{1-\\lambda}\\|f\\|_{p_1}^\\lambda\\), which is exactly Theorem 9.26 with \\(\\theta = \\lambda\\). Taking logs: \\(\\log\\|f\\|_p \\leq (1-\\lambda)\\log\\|f\\|_{p_0} + \\lambda\\log\\|f\\|_{p_1}\\), i.e., \\(t \\mapsto \\log\\|f\\|_{1/t}\\) is convex.'
                },
                {
                    question: '<strong>[Computation, 3 stars]</strong> Use the Riesz-Thorin interpolation theorem to prove the Hausdorff-Young inequality: if \\(1 \\leq p \\leq 2\\) and \\(1/p + 1/q = 1\\), then \\(\\|\\hat{f}\\|_q \\leq \\|f\\|_p\\) for \\(f \\in L^p(\\mathbb{R})\\), where \\(\\hat{f}\\) is the Fourier transform.',
                    hint: 'The Fourier transform maps \\(L^1 \\to L^\\infty\\) with norm 1 (Riemann-Lebesgue) and \\(L^2 \\to L^2\\) with norm 1 (Plancherel). Interpolate.',
                    solution: 'Endpoint 1: \\(\\|\\hat{f}\\|_\\infty \\leq \\|f\\|_1\\) (direct estimate, \\(|\\hat{f}(\\xi)| \\leq \\int|f|\\)). So \\(T: L^1 \\to L^\\infty\\) with \\(M_0 = 1\\). Endpoint 2: \\(\\|\\hat{f}\\|_2 = \\|f\\|_2\\) (Plancherel). So \\(T: L^2 \\to L^2\\) with \\(M_1 = 1\\). By Riesz-Thorin with \\((p_0, q_0) = (1, \\infty)\\) and \\((p_1, q_1) = (2, 2)\\) and \\(\\theta \\in (0,1)\\): \\(1/p = (1-\\theta)/1 + \\theta/2\\) and \\(1/q = (1-\\theta)/\\infty + \\theta/2 = \\theta/2\\). From the first: \\(1/p = 1 - \\theta/2\\), so \\(\\theta = 2(1 - 1/p) = 2/q\\). Then \\(1/q = \\theta/2 = 1/q\\). \\checkmark. And \\(\\|T\\|_{L^p \\to L^q} \\leq 1^{1-\\theta} \\cdot 1^\\theta = 1\\).'
                },
                {
                    question: '<strong>[Exploration, 2 stars]</strong> Using the L^p Inclusion Map visualization, set \\(\\alpha = 0.4\\) and toggle between the three domains. Explain the "mirror" relationship between the \\((0,1]\\) and \\([1,\\infty)\\) cases.',
                    hint: 'On \\((0,1]\\), \\(f \\in L^p\\) iff \\(p < 1/\\alpha\\). On \\([1,\\infty)\\), \\(f \\in L^p\\) iff \\(p > 1/\\alpha\\). What does this say about the obstructions?',
                    solution: 'For \\(\\alpha = 0.4\\), \\(p^* = 1/0.4 = 2.5\\). On \\((0,1]\\): the function \\(x^{-0.4}\\) blows up at 0, and higher \\(p\\) amplifies this blowup. So \\(f \\in L^p\\) iff \\(p < 2.5\\). On \\([1,\\infty)\\): the function decays as \\(x \\to \\infty\\), and higher \\(p\\) amplifies the decay. So \\(f \\in L^p\\) iff \\(p > 2.5\\). The two conditions are "mirror images": the singularity obstructs large \\(p\\) on \\((0,1]\\), while slow decay obstructs small \\(p\\) on \\([1,\\infty)\\). On the full line \\((0,\\infty)\\), both obstructions apply simultaneously, and \\(f \\notin L^p\\) for any \\(p\\). This is why no inclusion \\(L^p \\subset L^q\\) holds on \\(\\mathbb{R}\\).'
                },
                {
                    question: '<strong>[Proof, 5 stars]</strong> Let \\((X, \\mu)\\) be a \\(\\sigma\\)-finite measure space. Prove that \\(L^p \\cap L^q\\) is dense in \\(L^r\\) for all \\(p < r < q\\).',
                    hint: 'Truncate: for \\(f \\in L^r\\), consider \\(f_n = f \\cdot \\mathbf{1}_{\\{|f| \\leq n\\}} \\cdot \\mathbf{1}_{A_n}\\) where \\(A_n \\nearrow X\\) with \\(\\mu(A_n) < \\infty\\). Show \\(f_n \\in L^p \\cap L^q\\) and \\(f_n \\to f\\) in \\(L^r\\).',
                    solution: 'Since \\((X, \\mu)\\) is \\(\\sigma\\)-finite, write \\(X = \\bigcup A_n\\) with \\(\\mu(A_n) < \\infty\\). Define \\(f_n = f \\cdot \\mathbf{1}_{\\{|f| \\leq n\\}} \\cdot \\mathbf{1}_{A_n}\\). Then \\(|f_n| \\leq n\\) and \\(f_n\\) is supported on \\(A_n\\) with \\(\\mu(A_n) < \\infty\\). So \\(\\int|f_n|^p \\leq n^{p-r}\\int|f_n|^r \\leq n^{p-r}\\|f\\|_r^r < \\infty\\) (using \\(|f_n|^p = |f_n|^{p-r}|f_n|^r \\leq n^{p-r}|f_n|^r\\)) and similarly \\(\\int|f_n|^q \\leq n^{q-r}\\|f\\|_r^r < \\infty\\). So \\(f_n \\in L^p \\cap L^q\\). Also \\(f_n \\to f\\) pointwise and \\(|f_n| \\leq |f|\\) with \\(|f|^r \\in L^1\\), so DCT gives \\(\\|f_n - f\\|_r \\to 0\\).'
                }
            ]
        }
    ]
});

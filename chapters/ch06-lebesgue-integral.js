window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch06',
    number: 6,
    title: 'The Lebesgue Integral',
    subtitle: 'Constructing the Integral via Simple Functions and Extending to General Functions',
    sections: [
        // ============================================================
        // SECTION 1: Integration of Simple Functions
        // ============================================================
        {
            id: 'integration-simple-functions',
            title: 'Integration of Simple Functions',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>From measuring sets to integrating functions.</strong> With measurable functions in hand from Chapter 5, we are finally ready to construct the Lebesgue integral. The strategy is beautifully modular: first define the integral for the simplest measurable functions (simple functions), then extend to all non-negative measurable functions by approximation, and finally handle general measurable functions by decomposition. This section handles step one.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define the integral of non-negative simple functions as a finite weighted sum, prove it is well-defined (independent of representation), and establish linearity and monotonicity.</p>
                    <p><em>Reference alignment: Folland 2.2; Royden-Fitzpatrick 4.2; Stein-Shakarchi III.2.</em></p>
                </div>

                <h2>Simple Functions Revisited</h2>

                <p>Recall from Chapter 5 that a <strong>simple function</strong> is a measurable function taking only finitely many values. Every non-negative simple function can be written in <strong>canonical (standard) form</strong>:</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.1 (Canonical Form of a Simple Function)</div>
                    <div class="env-body">
                        <p>A non-negative simple function \\(\\varphi: X \\to [0, \\infty)\\) has the <strong>canonical representation</strong></p>
                        \\[\\varphi = \\sum_{j=1}^{n} a_j \\, \\mathbf{1}_{E_j},\\]
                        <p>where \\(a_1, \\ldots, a_n\\) are the <em>distinct</em> non-negative values taken by \\(\\varphi\\), and \\(E_j = \\varphi^{-1}(\\{a_j\\})\\). The sets \\(E_1, \\ldots, E_n\\) are pairwise disjoint, their union is \\(X\\), and each \\(E_j \\in \\mathcal{M}\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Non-Canonical Representations)</div>
                    <div class="env-body">
                        <p>A simple function can also be written as \\(\\varphi = \\sum_{k=1}^{m} c_k \\, \\mathbf{1}_{F_k}\\) where the \\(F_k\\) are measurable but not necessarily disjoint, and the \\(c_k\\) are not necessarily distinct. For example, \\(3 \\cdot \\mathbf{1}_{[0,1]} + 3 \\cdot \\mathbf{1}_{[2,3]}\\) and \\(3 \\cdot \\mathbf{1}_{[0,1] \\cup [2,3]}\\) represent the same function. We will need to show that the integral does not depend on the choice of representation.</p>
                    </div>
                </div>

                <h2>The Integral of a Non-Negative Simple Function</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.2 (Integral of a Non-Negative Simple Function)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{M}, \\mu)\\) be a measure space and let \\(\\varphi = \\sum_{j=1}^{n} a_j \\, \\mathbf{1}_{E_j}\\) be a non-negative simple function in canonical form. The <strong>integral of \\(\\varphi\\) with respect to \\(\\mu\\)</strong> is</p>
                        \\[\\int \\varphi \\, d\\mu = \\sum_{j=1}^{n} a_j \\, \\mu(E_j),\\]
                        <p>with the convention that \\(0 \\cdot \\infty = 0\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why \\(0 \\cdot \\infty = 0\\)?)</div>
                    <div class="env-body">
                        <p>If \\(\\varphi = 0\\) on a set of infinite measure, the "area under the curve" is zero: a rectangle of height 0 and infinite width encloses no area. Formally, this convention ensures that the zero function always integrates to zero, regardless of the measure space. It also ensures consistency with monotonicity: \\(0 \\leq \\varphi \\leq \\psi\\) should give \\(\\int \\varphi \\, d\\mu \\leq \\int \\psi \\, d\\mu\\), and \\(\\int 0 \\, d\\mu = 0\\) is the only value that makes this work.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.3 (A Concrete Simple Integral)</div>
                    <div class="env-body">
                        <p>Let \\(X = \\mathbb{R}\\) with Lebesgue measure \\(\\lambda\\), and let \\(\\varphi = 2 \\cdot \\mathbf{1}_{[0,1]} + 5 \\cdot \\mathbf{1}_{(1,3]} + 0 \\cdot \\mathbf{1}_{\\mathbb{R} \\setminus [0,3]}\\). Then:</p>
                        \\[\\int \\varphi \\, d\\lambda = 2 \\cdot \\lambda([0,1]) + 5 \\cdot \\lambda((1,3]) + 0 \\cdot \\lambda(\\mathbb{R} \\setminus [0,3]) = 2 \\cdot 1 + 5 \\cdot 2 + 0 \\cdot \\infty = 12.\\]
                        <p>Note how the convention \\(0 \\cdot \\infty = 0\\) is essential here.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="simple-integral-calculator"></div>

                <h2>Well-Definedness: Independence of Representation</h2>

                <p>The canonical form is unique, so the integral via canonical form is automatically well-defined. But we often write simple functions in non-canonical forms (e.g., with overlapping sets). We must verify that the integral is the same regardless of representation.</p>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 6.4 (Representation Independence)</div>
                    <div class="env-body">
                        <p>If \\(\\varphi = \\sum_{j=1}^{n} a_j \\, \\mathbf{1}_{E_j} = \\sum_{k=1}^{m} b_k \\, \\mathbf{1}_{F_k}\\) are two representations of the same non-negative simple function (with \\(\\{E_j\\}\\) and \\(\\{F_k\\}\\) each consisting of pairwise disjoint measurable sets covering \\(X\\)), then</p>
                        \\[\\sum_{j=1}^{n} a_j \\, \\mu(E_j) = \\sum_{k=1}^{m} b_k \\, \\mu(F_k).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The sets \\(\\{E_j \\cap F_k\\}_{j,k}\\) form a common refinement: they are pairwise disjoint, their union is \\(X\\), and on each piece \\(E_j \\cap F_k\\), the function takes the constant value \\(a_j = b_k\\) (whenever the piece is non-empty). Now:</p>
                        \\[\\sum_{j} a_j \\, \\mu(E_j) = \\sum_{j} a_j \\sum_{k} \\mu(E_j \\cap F_k) = \\sum_{j} \\sum_{k} a_j \\, \\mu(E_j \\cap F_k).\\]
                        <p>Since \\(a_j = b_k\\) on each non-empty \\(E_j \\cap F_k\\), this equals</p>
                        \\[\\sum_{k} \\sum_{j} b_k \\, \\mu(E_j \\cap F_k) = \\sum_{k} b_k \\, \\mu(F_k).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h2>Linearity and Monotonicity</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.5 (Properties of the Simple Function Integral)</div>
                    <div class="env-body">
                        <p>Let \\(\\varphi, \\psi\\) be non-negative simple functions on \\((X, \\mathcal{M}, \\mu)\\) and let \\(c \\geq 0\\). Then:</p>
                        <ol>
                            <li><strong>Scaling:</strong> \\(\\int c\\varphi \\, d\\mu = c \\int \\varphi \\, d\\mu\\).</li>
                            <li><strong>Additivity:</strong> \\(\\int (\\varphi + \\psi) \\, d\\mu = \\int \\varphi \\, d\\mu + \\int \\psi \\, d\\mu\\).</li>
                            <li><strong>Monotonicity:</strong> If \\(\\varphi \\leq \\psi\\) pointwise, then \\(\\int \\varphi \\, d\\mu \\leq \\int \\psi \\, d\\mu\\).</li>
                            <li><strong>Measure-set interaction:</strong> For \\(E \\in \\mathcal{M}\\), define \\(\\int_E \\varphi \\, d\\mu = \\int \\varphi \\cdot \\mathbf{1}_E \\, d\\mu\\). Then \\(E \\mapsto \\int_E \\varphi \\, d\\mu\\) is a measure on \\(\\mathcal{M}\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Additivity)</div>
                    <div class="env-body">
                        <p>Let \\(\\varphi = \\sum_j a_j \\mathbf{1}_{E_j}\\) and \\(\\psi = \\sum_k b_k \\mathbf{1}_{F_k}\\) in canonical form. On each piece \\(E_j \\cap F_k\\), the sum \\(\\varphi + \\psi\\) takes the value \\(a_j + b_k\\). Therefore:</p>
                        \\[\\int (\\varphi + \\psi) \\, d\\mu = \\sum_{j,k} (a_j + b_k) \\mu(E_j \\cap F_k) = \\sum_{j,k} a_j \\mu(E_j \\cap F_k) + \\sum_{j,k} b_k \\mu(E_j \\cap F_k).\\]
                        <p>The first sum equals \\(\\sum_j a_j \\mu(E_j) = \\int \\varphi \\, d\\mu\\) and the second equals \\(\\sum_k b_k \\mu(F_k) = \\int \\psi \\, d\\mu\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.6 (Integration Against Counting Measure)</div>
                    <div class="env-body">
                        <p>Let \\(X = \\{1, 2, 3, 4, 5\\}\\) with counting measure \\(\\mu\\) (so \\(\\mu(E) = |E|\\)). The simple function \\(\\varphi = 3 \\cdot \\mathbf{1}_{\\{1,2\\}} + 7 \\cdot \\mathbf{1}_{\\{3\\}} + 1 \\cdot \\mathbf{1}_{\\{4,5\\}}\\) has integral</p>
                        \\[\\int \\varphi \\, d\\mu = 3 \\cdot 2 + 7 \\cdot 1 + 1 \\cdot 2 = 15.\\]
                        <p>This is just the sum \\(\\varphi(1) + \\varphi(2) + \\cdots + \\varphi(5) = 3 + 3 + 7 + 1 + 1 = 15\\). Integration against counting measure is summation.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (The Convention \\(0 \\cdot \\infty = 0\\) Only Applies Here)</div>
                    <div class="env-body">
                        <p>The convention \\(0 \\cdot \\infty = 0\\) is specific to the definition of the integral. It does <em>not</em> apply to general arithmetic in the extended reals. The expression \\(0 \\cdot \\infty\\) is indeterminate in limit computations. In our context, it is a <em>convention</em>, not a theorem, chosen to make the integral well-behaved.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.2; Royden-Fitzpatrick 4.2; Stein-Shakarchi III.2.</p>
            `,
            visualizations: [
                {
                    id: 'simple-integral-calculator',
                    title: 'Simple Function Integral Calculator',
                    description: 'Define a simple function by adjusting step heights and interval widths. The tool computes the integral step by step, showing each term a_i * mu(E_i).',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 380;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            grid: '#1a1a40', yellow: '#d29922'
                        };

                        // Simple function: 4 adjustable steps on [0, 4]
                        var heights = [2, 5, 1, 3];
                        var numSteps = 4;

                        VizEngine.createSlider(controls, 'Height a\u2081 (on [0,1])', 0, 8, heights[0], 0.5, function(v) {
                            heights[0] = v; draw();
                        });
                        VizEngine.createSlider(controls, 'Height a\u2082 (on [1,2])', 0, 8, heights[1], 0.5, function(v) {
                            heights[1] = v; draw();
                        });
                        VizEngine.createSlider(controls, 'Height a\u2083 (on [2,3])', 0, 8, heights[2], 0.5, function(v) {
                            heights[2] = v; draw();
                        });
                        VizEngine.createSlider(controls, 'Height a\u2084 (on [3,4])', 0, 8, heights[3], 0.5, function(v) {
                            heights[3] = v; draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { left: 60, right: 180, top: 40, bottom: 50 };
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;
                            var maxY = 9;

                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var gy = 0; gy <= maxY; gy++) {
                                var sy = margin.top + plotH - (gy / maxY) * plotH;
                                ctx.beginPath(); ctx.moveTo(margin.left, sy); ctx.lineTo(margin.left + plotW, sy); ctx.stroke();
                            }
                            for (var gx = 0; gx <= numSteps; gx++) {
                                var sx = margin.left + (gx / numSteps) * plotW;
                                ctx.beginPath(); ctx.moveTo(sx, margin.top); ctx.lineTo(sx, margin.top + plotH); ctx.stroke();
                            }

                            // Axes
                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(margin.left, margin.top + plotH); ctx.lineTo(margin.left + plotW, margin.top + plotH); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(margin.left, margin.top); ctx.lineTo(margin.left, margin.top + plotH); ctx.stroke();

                            // Axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var gx = 0; gx <= numSteps; gx++) {
                                ctx.fillText(gx, margin.left + (gx / numSteps) * plotW, margin.top + plotH + 16);
                            }
                            ctx.textAlign = 'right';
                            for (var gy = 0; gy <= maxY; gy += 2) {
                                var sy = margin.top + plotH - (gy / maxY) * plotH;
                                ctx.fillText(gy, margin.left - 8, sy + 4);
                            }

                            // Draw the step function bars
                            var barColors = [colors.blue, colors.teal, colors.green, colors.orange];
                            var total = 0;

                            for (var i = 0; i < numSteps; i++) {
                                var x1 = margin.left + (i / numSteps) * plotW;
                                var barW = plotW / numSteps;
                                var barH = (heights[i] / maxY) * plotH;
                                var y1 = margin.top + plotH - barH;

                                // Filled bar
                                ctx.globalAlpha = 0.35;
                                ctx.fillStyle = barColors[i];
                                ctx.fillRect(x1, y1, barW, barH);
                                ctx.globalAlpha = 1;

                                // Outline
                                ctx.strokeStyle = barColors[i];
                                ctx.lineWidth = 2;
                                ctx.strokeRect(x1, y1, barW, barH);

                                // Height label inside bar
                                ctx.fillStyle = barColors[i];
                                ctx.font = 'bold 13px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('a=' + heights[i].toFixed(1), x1 + barW / 2, y1 - 8);

                                total += heights[i] * 1; // each interval has length 1
                            }

                            // Computation panel on the right
                            var panelX = margin.left + plotW + 15;
                            var panelY = margin.top + 10;
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Integral computation:', panelX, panelY);

                            ctx.font = '12px -apple-system, sans-serif';
                            for (var i = 0; i < numSteps; i++) {
                                var term = heights[i] * 1;
                                ctx.fillStyle = barColors[i];
                                ctx.fillText(heights[i].toFixed(1) + ' \u00D7 \u03BC([' + i + ',' + (i+1) + ']) = ' + term.toFixed(1), panelX, panelY + 22 + i * 18);
                            }

                            // Divider and total
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(panelX, panelY + 22 + numSteps * 18);
                            ctx.lineTo(panelX + 150, panelY + 22 + numSteps * 18);
                            ctx.stroke();

                            ctx.fillStyle = colors.yellow;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.fillText('\u222B\u03C6 d\u03BC = ' + total.toFixed(1), panelX, panelY + 22 + numSteps * 18 + 18);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Simple Function Integral: \u03C6 = \u03A3 a\u1D62 \u00B7 1_{E\u1D62}', w / 2 - 40, 20);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(\\varphi = 4 \\cdot \\mathbf{1}_{[0,2]} + 1 \\cdot \\mathbf{1}_{(2,5]} + 7 \\cdot \\mathbf{1}_{(5,6]}\\) on \\((\\mathbb{R}, \\mathcal{L}, \\lambda)\\). Compute \\(\\int \\varphi \\, d\\lambda\\).',
                    hint: 'Use the definition directly: sum up each coefficient times the Lebesgue measure of the corresponding set.',
                    solution: '\\(\\int \\varphi \\, d\\lambda = 4 \\cdot \\lambda([0,2]) + 1 \\cdot \\lambda((2,5]) + 7 \\cdot \\lambda((5,6]) = 4 \\cdot 2 + 1 \\cdot 3 + 7 \\cdot 1 = 8 + 3 + 7 = 18\\).'
                },
                {
                    question: 'Prove that for any non-negative simple function \\(\\varphi\\), we have \\(\\int \\varphi \\, d\\mu = 0\\) if and only if \\(\\varphi = 0\\) \\(\\mu\\)-almost everywhere.',
                    hint: 'For the forward direction, use the canonical form and the fact that \\(a_j \\mu(E_j) = 0\\) forces either \\(a_j = 0\\) or \\(\\mu(E_j) = 0\\). For the converse, \\(\\varphi = 0\\) a.e. means \\(\\mu(\\{\\varphi > 0\\}) = 0\\).',
                    solution: 'Write \\(\\varphi = \\sum_{j=1}^n a_j \\mathbf{1}_{E_j}\\) in canonical form. Then \\(\\int \\varphi \\, d\\mu = \\sum_j a_j \\mu(E_j) = 0\\). Since all terms are non-negative, each term must vanish: \\(a_j \\mu(E_j) = 0\\) for all \\(j\\). If \\(a_j > 0\\), then \\(\\mu(E_j) = 0\\). So \\(\\{\\varphi > 0\\} = \\bigcup_{j: a_j > 0} E_j\\) has measure zero, i.e., \\(\\varphi = 0\\) a.e. Conversely, if \\(\\varphi = 0\\) a.e., then for each \\(j\\) with \\(a_j > 0\\), we have \\(\\mu(E_j) = 0\\), so \\(a_j \\mu(E_j) = 0\\), giving \\(\\int \\varphi \\, d\\mu = 0\\).'
                },
                {
                    question: 'Show that the map \\(E \\mapsto \\int_E \\varphi \\, d\\mu = \\int \\varphi \\cdot \\mathbf{1}_E \\, d\\mu\\) defines a measure on \\(\\mathcal{M}\\) for any non-negative simple function \\(\\varphi\\).',
                    hint: 'Check that it gives 0 on the empty set and verify countable additivity using the additivity of the integral and the fact that \\(\\mathbf{1}_{\\cup E_n} = \\sum \\mathbf{1}_{E_n}\\) for disjoint sets.',
                    solution: 'Let \\(\\nu(E) = \\int_E \\varphi \\, d\\mu\\). First, \\(\\nu(\\emptyset) = \\int \\varphi \\cdot \\mathbf{1}_\\emptyset \\, d\\mu = \\int 0 \\, d\\mu = 0\\). For countable additivity, let \\(\\{E_n\\}\\) be pairwise disjoint with \\(E = \\bigcup_n E_n\\). Write \\(\\varphi = \\sum_j a_j \\mathbf{1}_{A_j}\\). Then \\(\\nu(E) = \\sum_j a_j \\mu(A_j \\cap E) = \\sum_j a_j \\sum_n \\mu(A_j \\cap E_n) = \\sum_n \\sum_j a_j \\mu(A_j \\cap E_n) = \\sum_n \\nu(E_n)\\), where we used countable additivity of \\(\\mu\\) and rearranged the absolutely convergent non-negative series.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Integration of Non-Negative Measurable Functions
        // ============================================================
        {
            id: 'integration-nonneg-measurable',
            title: 'Integration of Non-Negative Measurable Functions',
            content: `
                <div class="bridge section-bridge">
                    <p>With the integral defined for simple functions, we now extend to all non-negative measurable functions. The idea is elegant: approximate from below by simple functions and take the supremum. The Simple Function Approximation Theorem from Chapter 5 guarantees that every non-negative measurable function can be approximated this way, so this definition captures exactly the "area under the curve."</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define the integral of a non-negative measurable function as a supremum over simple function integrals. Derive monotonicity, scaling, and the fundamental characterization: \\(\\int f \\, d\\mu = 0\\) if and only if \\(f = 0\\) a.e.</p>
                    <p><em>Reference alignment: Folland 2.2; Royden-Fitzpatrick 4.3; Stein-Shakarchi III.2.</em></p>
                </div>

                <h2>The Definition</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.7 (Integral of a Non-Negative Measurable Function)</div>
                    <div class="env-body">
                        <p>Let \\(f: X \\to [0, \\infty]\\) be a measurable function on \\((X, \\mathcal{M}, \\mu)\\). The <strong>Lebesgue integral</strong> of \\(f\\) is</p>
                        \\[\\int f \\, d\\mu = \\sup\\left\\{\\int \\varphi \\, d\\mu : 0 \\leq \\varphi \\leq f, \\; \\varphi \\text{ simple}\\right\\}.\\]
                        <p>The integral takes values in \\([0, \\infty]\\). We write \\(\\int_E f \\, d\\mu = \\int f \\cdot \\mathbf{1}_E \\, d\\mu\\) for integration over a measurable set \\(E\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Staircase from Below)</div>
                    <div class="env-body">
                        <p>Think of building a staircase of simple functions under the graph of \\(f\\), each step a closer approximation from below. The integral of \\(f\\) is the least upper bound of the areas of all such staircases. We do not need any specific approximating sequence; the supremum over <em>all</em> admissible simple functions gives the integral.</p>
                        <p>Crucially, this works because simple functions can get arbitrarily close to \\(f\\): the Simple Function Approximation Theorem (Chapter 5, Theorem 5.14) provides an explicit increasing sequence \\(\\varphi_n \\nearrow f\\) pointwise.</p>
                    </div>
                </div>

                <h2>Immediate Properties</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.8 (Basic Properties for Non-Negative Functions)</div>
                    <div class="env-body">
                        <p>Let \\(f, g: X \\to [0, \\infty]\\) be measurable. Then:</p>
                        <ol>
                            <li><strong>Monotonicity:</strong> If \\(f \\leq g\\) pointwise, then \\(\\int f \\, d\\mu \\leq \\int g \\, d\\mu\\).</li>
                            <li><strong>Scaling:</strong> For \\(c \\in [0, \\infty)\\), \\(\\int cf \\, d\\mu = c \\int f \\, d\\mu\\).</li>
                            <li><strong>Null set invariance:</strong> If \\(f = g\\) \\(\\mu\\)-a.e., then \\(\\int f \\, d\\mu = \\int g \\, d\\mu\\).</li>
                            <li><strong>Vanishing criterion:</strong> \\(\\int f \\, d\\mu = 0\\) if and only if \\(f = 0\\) \\(\\mu\\)-a.e.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Vanishing Criterion)</div>
                    <div class="env-body">
                        <p><strong>(\\(\\Leftarrow\\)):</strong> If \\(f = 0\\) a.e., then for any simple \\(\\varphi\\) with \\(0 \\leq \\varphi \\leq f\\), we have \\(\\varphi = 0\\) a.e., so \\(\\int \\varphi \\, d\\mu = 0\\) (by the simple function result). Taking the supremum gives \\(\\int f \\, d\\mu = 0\\).</p>
                        <p><strong>(\\(\\Rightarrow\\)):</strong> Suppose \\(\\int f \\, d\\mu = 0\\). Define \\(E_n = \\{f &gt; 1/n\\}\\). The simple function \\(\\varphi_n = \\frac{1}{n} \\mathbf{1}_{E_n}\\) satisfies \\(0 \\leq \\varphi_n \\leq f\\), so</p>
                        \\[0 = \\int f \\, d\\mu \\geq \\int \\varphi_n \\, d\\mu = \\frac{1}{n} \\mu(E_n).\\]
                        <p>Thus \\(\\mu(E_n) = 0\\) for all \\(n\\). Since \\(\\{f &gt; 0\\} = \\bigcup_{n=1}^{\\infty} E_n\\), we get \\(\\mu(\\{f &gt; 0\\}) \\leq \\sum_n \\mu(E_n) = 0\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h2>Consistency with Simple Functions</h2>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 6.9 (Consistency)</div>
                    <div class="env-body">
                        <p>If \\(\\varphi\\) is a non-negative simple function, then Definition 6.7 gives the same value as Definition 6.2.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(I_1 = \\sum_j a_j \\mu(E_j)\\) be the value from Definition 6.2, and \\(I_2 = \\sup\\{\\int \\psi \\, d\\mu : 0 \\leq \\psi \\leq \\varphi, \\psi \\text{ simple}\\}\\) from Definition 6.7. Since \\(\\varphi\\) itself is one of the simple functions in the supremum with \\(\\psi = \\varphi \\leq \\varphi\\), we have \\(I_2 \\geq I_1\\). Conversely, for any simple \\(\\psi \\leq \\varphi\\), monotonicity of the simple integral gives \\(\\int \\psi \\, d\\mu \\leq I_1\\), so \\(I_2 \\leq I_1\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h2>The Layer-Cake Representation</h2>

                <p>There is a beautiful alternative formula for the integral that makes the "horizontal slicing" idea from Chapter 0 rigorous.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.10 (Layer-Cake Formula / Cavalieri's Principle)</div>
                    <div class="env-body">
                        <p>Let \\(f: X \\to [0, \\infty]\\) be measurable. Then</p>
                        \\[\\int_X f \\, d\\mu = \\int_0^{\\infty} \\mu\\!\\left(\\{x \\in X : f(x) &gt; t\\}\\right) dt,\\]
                        <p>where the right-hand side is a Lebesgue integral on \\((0, \\infty)\\) with respect to Lebesgue measure.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The key observation is Fubini/Tonelli on the product space \\(X \\times [0, \\infty)\\). Consider the "subgraph" set</p>
                        \\[S = \\{(x, t) \\in X \\times [0, \\infty) : 0 \\leq t &lt; f(x)\\}.\\]
                        <p>This set is measurable in the product sigma-algebra (since \\(f\\) is measurable). By Tonelli's theorem (which we will prove in Chapter 12; for now we use it as motivation):</p>
                        \\[(\\mu \\times \\lambda)(S) = \\int_X \\lambda(\\{t \\geq 0 : t &lt; f(x)\\}) \\, d\\mu(x) = \\int_X f(x) \\, d\\mu(x),\\]
                        <p>since \\(\\lambda([0, f(x))) = f(x)\\). Integrating the other way:</p>
                        \\[(\\mu \\times \\lambda)(S) = \\int_0^{\\infty} \\mu(\\{x : f(x) &gt; t\\}) \\, d\\lambda(t).\\]
                        <p>Equating gives the layer-cake formula.</p>
                        <p><em>Alternative proof without Tonelli (for this chapter):</em> Verify first for simple functions (direct computation), then extend to general non-negative measurable functions by the Monotone Convergence Theorem (Chapter 7) applied to the canonical approximating sequence \\(\\varphi_n \\nearrow f\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Horizontal vs. Vertical Slicing)</div>
                    <div class="env-body">
                        <p>The layer-cake formula says: instead of slicing the area under \\(f\\) into vertical strips (as Riemann does), slice it into horizontal layers at height \\(t\\). The \\(t\\)-th layer has width \\(\\mu(\\{f &gt; t\\})\\). Stacking all layers from \\(t = 0\\) to \\(t = \\infty\\) gives the total area. This is Lebesgue's original insight, now made completely rigorous.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="layer-cake-integral"></div>

                <div class="env-block example">
                    <div class="env-title">Example 6.11 (Layer-Cake for \\(f(x) = x^2\\) on \\([0,1]\\))</div>
                    <div class="env-body">
                        <p>Let \\(f(x) = x^2\\) on \\(([0,1], \\lambda)\\). For \\(0 \\leq t \\leq 1\\):</p>
                        \\[\\mu(\\{x \\in [0,1] : x^2 &gt; t\\}) = \\lambda((\\sqrt{t}, 1]) = 1 - \\sqrt{t}.\\]
                        <p>So the layer-cake formula gives:</p>
                        \\[\\int_0^1 x^2 \\, d\\lambda = \\int_0^1 (1 - \\sqrt{t}) \\, dt = \\left[t - \\frac{2}{3}t^{3/2}\\right]_0^1 = 1 - \\frac{2}{3} = \\frac{1}{3}.\\]
                        <p>This matches the familiar result \\(\\int_0^1 x^2 \\, dx = 1/3\\).</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.2; Royden-Fitzpatrick 4.3; Stein-Shakarchi III.2.</p>
            `,
            visualizations: [
                {
                    id: 'layer-cake-integral',
                    title: 'Lebesgue Integral as Horizontal Slicing (Layer Cake)',
                    description: 'Visualize the layer-cake representation: the integral of f equals the integral of mu({f > t}) from 0 to infinity. Adjust the function and watch horizontal slices stack up.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            grid: '#1a1a40', yellow: '#d29922'
                        };

                        var nSlices = 8;
                        var funcChoice = 0; // 0 = x^2, 1 = sin(pi*x), 2 = sqrt(x)

                        var funcs = [
                            { name: 'x\u00B2', f: function(x) { return x * x; }, max: 1 },
                            { name: 'sin(\u03C0x)', f: function(x) { return Math.sin(Math.PI * x); }, max: 1 },
                            { name: '\u221Ax', f: function(x) { return Math.sqrt(x); }, max: 1 }
                        ];

                        VizEngine.createSlider(controls, 'Number of horizontal slices', 2, 40, nSlices, 1, function(v) {
                            nSlices = Math.round(v); draw();
                        });

                        VizEngine.createButton(controls, 'f(x) = x\u00B2', function() { funcChoice = 0; draw(); });
                        VizEngine.createButton(controls, 'f(x) = sin(\u03C0x)', function() { funcChoice = 1; draw(); });
                        VizEngine.createButton(controls, 'f(x) = \u221Ax', function() { funcChoice = 2; draw(); });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var fn = funcs[funcChoice];
                            var f = fn.f;
                            var fMax = fn.max;

                            // Two panels: left = standard view, right = layer-cake view
                            var panelW = (w - 30) / 2;
                            var margin = { left: 50, right: 10, top: 50, bottom: 45 };
                            var plotW = panelW - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            // ---- LEFT PANEL: function graph with horizontal slices ----
                            var lx = 0;
                            // Axes
                            ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(lx + margin.left, margin.top + plotH); ctx.lineTo(lx + margin.left + plotW, margin.top + plotH); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(lx + margin.left, margin.top); ctx.lineTo(lx + margin.left, margin.top + plotH); ctx.stroke();

                            // Draw horizontal slices
                            var dt = fMax / nSlices;
                            var sliceColors = [];
                            for (var s = 0; s < nSlices; s++) {
                                var t = s * dt;
                                var tNext = (s + 1) * dt;
                                // Find the level set {f > t}: measure of x in [0,1] where f(x) > t
                                // We approximate by sampling
                                var nSamples = 300;
                                var inSet = [];
                                for (var k = 0; k <= nSamples; k++) {
                                    var xx = k / nSamples;
                                    if (f(xx) > t) inSet.push(xx);
                                }
                                // Draw the horizontal band between t and tNext, clipped to where f > t
                                var hue = (s / nSlices) * 240;
                                var col = 'hsla(' + hue + ', 70%, 55%, 0.4)';
                                sliceColors.push('hsla(' + hue + ', 70%, 55%, 0.8)');
                                ctx.fillStyle = col;
                                for (var k = 0; k < inSet.length - 1; k++) {
                                    if (inSet[k + 1] - inSet[k] < 2 / nSamples) {
                                        var sx1 = lx + margin.left + inSet[k] * plotW;
                                        var sx2 = lx + margin.left + inSet[k + 1] * plotW;
                                        var sy1 = margin.top + plotH - (tNext / fMax) * plotH;
                                        var sy2 = margin.top + plotH - (t / fMax) * plotH;
                                        ctx.fillRect(sx1, sy1, sx2 - sx1 + 1, sy2 - sy1);
                                    }
                                }
                            }

                            // Draw the function curve on top
                            ctx.strokeStyle = colors.text; ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var k = 0; k <= 200; k++) {
                                var xx = k / 200;
                                var sx = lx + margin.left + xx * plotW;
                                var sy = margin.top + plotH - (f(xx) / fMax) * plotH;
                                if (k === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Labels
                            ctx.fillStyle = colors.text; ctx.font = 'bold 13px -apple-system, sans-serif'; ctx.textAlign = 'center';
                            ctx.fillText('f(x) = ' + fn.name + ' on [0,1]', lx + margin.left + plotW / 2, 25);
                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('Horizontal slices at height t', lx + margin.left + plotW / 2, 40);

                            // ---- RIGHT PANEL: mu({f > t}) as a function of t ----
                            var rx = panelW + 30;
                            ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(rx + margin.left, margin.top + plotH); ctx.lineTo(rx + margin.left + plotW, margin.top + plotH); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(rx + margin.left, margin.top); ctx.lineTo(rx + margin.left, margin.top + plotH); ctx.stroke();

                            // Compute mu({f > t}) for many t values
                            var muVals = [];
                            var nT = 200;
                            for (var ti = 0; ti <= nT; ti++) {
                                var t = (ti / nT) * fMax;
                                var count = 0;
                                var nSamp = 500;
                                for (var k = 0; k <= nSamp; k++) {
                                    if (f(k / nSamp) > t) count++;
                                }
                                muVals.push(count / (nSamp + 1));
                            }

                            // Draw bars for slices
                            for (var s = 0; s < nSlices; s++) {
                                var tIdx = Math.round((s * dt / fMax) * nT);
                                var muT = muVals[Math.min(tIdx, muVals.length - 1)];
                                var barX = rx + margin.left;
                                var barBottom = margin.top + plotH - (s * dt / fMax) * plotH;
                                var barTop = margin.top + plotH - ((s + 1) * dt / fMax) * plotH;
                                var barRight = rx + margin.left + muT * plotW;

                                ctx.fillStyle = sliceColors[s] || colors.blue;
                                ctx.globalAlpha = 0.4;
                                ctx.fillRect(barX, barTop, barRight - barX, barBottom - barTop);
                                ctx.globalAlpha = 1;
                            }

                            // Draw the mu curve
                            ctx.strokeStyle = colors.teal; ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var ti = 0; ti <= nT; ti++) {
                                var t = (ti / nT) * fMax;
                                var sx = rx + margin.left + muVals[ti] * plotW;
                                var sy = margin.top + plotH - (t / fMax) * plotH;
                                if (ti === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Compute approximate integral
                            var approxInt = 0;
                            for (var ti = 0; ti < nT; ti++) {
                                approxInt += muVals[ti] * (fMax / nT);
                            }

                            ctx.fillStyle = colors.text; ctx.font = 'bold 13px -apple-system, sans-serif'; ctx.textAlign = 'center';
                            ctx.fillText('\u03BC({f > t}) as a function of t', rx + margin.left + plotW / 2, 25);
                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('Area under this curve = \u222Bf d\u03BC', rx + margin.left + plotW / 2, 40);

                            // Display integral value
                            ctx.fillStyle = colors.yellow; ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.fillText('\u222Bf d\u03BC \u2248 ' + approxInt.toFixed(4), rx + margin.left + plotW / 2, h - 10);

                            // Axis labels for right panel
                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('\u03BC({f>t})', rx + margin.left + plotW / 2, margin.top + plotH + 16);
                            ctx.save();
                            ctx.translate(rx + margin.left - 35, margin.top + plotH / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('t', 0, 0);
                            ctx.restore();
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use the layer-cake formula to compute \\(\\int_0^2 x \\, d\\lambda\\).',
                    hint: 'For \\(f(x) = x\\) on \\([0,2]\\), determine \\(\\lambda(\\{x \\in [0,2] : x > t\\})\\) for each \\(t \\geq 0\\).',
                    solution: 'For \\(0 \\leq t \\leq 2\\): \\(\\lambda(\\{x \\in [0,2] : x > t\\}) = \\lambda((t, 2]) = 2 - t\\). For \\(t > 2\\): the set is empty, so the measure is 0. By the layer-cake formula: \\(\\int_0^2 x \\, d\\lambda = \\int_0^2 (2 - t) \\, dt = [2t - t^2/2]_0^2 = 4 - 2 = 2\\). This matches the familiar \\(\\int_0^2 x \\, dx = 2\\).'
                },
                {
                    question: 'Prove that if \\(f \\leq g\\) pointwise and both are non-negative measurable, then \\(\\int f \\, d\\mu \\leq \\int g \\, d\\mu\\).',
                    hint: 'Use the definition as a supremum: any simple function below \\(f\\) is also below \\(g\\).',
                    solution: 'If \\(\\varphi\\) is a simple function with \\(0 \\leq \\varphi \\leq f\\), then \\(\\varphi \\leq f \\leq g\\), so \\(\\varphi\\) belongs to the set \\(\\{\\psi \\text{ simple} : 0 \\leq \\psi \\leq g\\}\\). Therefore \\(\\int \\varphi \\, d\\mu \\leq \\sup\\{\\int \\psi \\, d\\mu : 0 \\leq \\psi \\leq g\\} = \\int g \\, d\\mu\\). Taking the supremum over all such \\(\\varphi\\) gives \\(\\int f \\, d\\mu \\leq \\int g \\, d\\mu\\).'
                },
                {
                    question: 'Let \\(f: X \\to [0, \\infty]\\) be measurable. Show that if \\(\\mu(\\{f = \\infty\\}) > 0\\), then \\(\\int f \\, d\\mu = \\infty\\).',
                    hint: 'Find simple functions below \\(f\\) with arbitrarily large integrals by using \\(M \\cdot \\mathbf{1}_{\\{f = \\infty\\}}\\) for large \\(M\\).',
                    solution: 'Let \\(E = \\{f = \\infty\\}\\) with \\(\\mu(E) > 0\\). For any \\(M > 0\\), the simple function \\(\\varphi_M = M \\cdot \\mathbf{1}_E\\) satisfies \\(0 \\leq \\varphi_M \\leq f\\) (since \\(f = \\infty \\geq M\\) on \\(E\\)). Thus \\(\\int f \\, d\\mu \\geq \\int \\varphi_M \\, d\\mu = M \\cdot \\mu(E)\\). Since \\(\\mu(E) > 0\\) and \\(M\\) is arbitrary, \\(\\int f \\, d\\mu = \\infty\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Integration of General Measurable Functions
        // ============================================================
        {
            id: 'integration-general-functions',
            title: 'Integration of General Measurable Functions',
            content: `
                <div class="bridge section-bridge">
                    <p>So far we have integrated only non-negative functions. To handle functions that take both positive and negative values, we decompose into positive and negative parts, integrate each separately, and subtract. This is the final step in constructing the Lebesgue integral in full generality.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define the integral of a general measurable function via \\(f = f^+ - f^-\\). Introduce the space \\(L^1\\) of integrable functions. Prove linearity of the integral.</p>
                    <p><em>Reference alignment: Folland 2.2; Royden-Fitzpatrick 4.3; Stein-Shakarchi III.2.</em></p>
                </div>

                <h2>Positive and Negative Parts</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.12 (Positive and Negative Parts)</div>
                    <div class="env-body">
                        <p>For a measurable function \\(f: X \\to [-\\infty, \\infty]\\), define:</p>
                        \\[f^+(x) = \\max(f(x), 0), \\qquad f^-(x) = \\max(-f(x), 0).\\]
                        <p>Then \\(f^+, f^- \\geq 0\\) are both measurable, and:</p>
                        \\[f = f^+ - f^-, \\qquad |f| = f^+ + f^-.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Splitting the Function)</div>
                    <div class="env-body">
                        <p>The function \\(f^+\\) captures the "part above the \\(x\\)-axis" and \\(f^-\\) captures the "part below" (flipped to be non-negative). The absolute value \\(|f|\\) is their sum. We can integrate each piece separately using the non-negative theory, then subtract.</p>
                    </div>
                </div>

                <h2>The Full Definition</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.13 (The Lebesgue Integral of a General Function)</div>
                    <div class="env-body">
                        <p>Let \\(f: X \\to [-\\infty, \\infty]\\) be measurable. If at least one of \\(\\int f^+ \\, d\\mu\\) and \\(\\int f^- \\, d\\mu\\) is finite, we define</p>
                        \\[\\int f \\, d\\mu = \\int f^+ \\, d\\mu - \\int f^- \\, d\\mu.\\]
                        <p>If both integrals are finite, we say \\(f\\) is <strong>Lebesgue integrable</strong> (or \\(\\mu\\)-integrable), and write \\(f \\in L^1(\\mu)\\) or \\(f \\in L^1(X, \\mathcal{M}, \\mu)\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (The \\(\\infty - \\infty\\) Problem)</div>
                    <div class="env-body">
                        <p>If \\(\\int f^+ \\, d\\mu = \\int f^- \\, d\\mu = \\infty\\), the integral \\(\\int f \\, d\\mu\\) is <em>undefined</em>. We do not assign it the value 0 or any other number. The expression \\(\\infty - \\infty\\) is meaningless. This is why we require at least one of the two integrals to be finite.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 6.14 (Integrability Criterion)</div>
                    <div class="env-body">
                        <p>A measurable function \\(f\\) is integrable (\\(f \\in L^1\\)) if and only if \\(\\int |f| \\, d\\mu &lt; \\infty\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Since \\(|f| = f^+ + f^-\\), both \\(f^+\\) and \\(f^-\\) are bounded above by \\(|f|\\). If \\(\\int |f| \\, d\\mu &lt; \\infty\\), then by monotonicity, both \\(\\int f^+ \\, d\\mu\\) and \\(\\int f^- \\, d\\mu\\) are finite. Conversely, if both are finite, then \\(\\int |f| \\, d\\mu = \\int f^+ \\, d\\mu + \\int f^- \\, d\\mu &lt; \\infty\\) (where the equality follows from additivity for non-negative functions, which itself follows from the Monotone Convergence Theorem of Chapter 7; at this stage, we can verify it directly for the canonical approximating sequences).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h2>Linearity of the Integral</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.15 (Linearity of the Lebesgue Integral)</div>
                    <div class="env-body">
                        <p>Let \\(f, g \\in L^1(\\mu)\\) and \\(\\alpha, \\beta \\in \\mathbb{R}\\). Then \\(\\alpha f + \\beta g \\in L^1(\\mu)\\) and</p>
                        \\[\\int (\\alpha f + \\beta g) \\, d\\mu = \\alpha \\int f \\, d\\mu + \\beta \\int g \\, d\\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p><strong>Step 1 (Integrability):</strong> \\(|\\alpha f + \\beta g| \\leq |\\alpha||f| + |\\beta||g|\\), so \\(\\int |\\alpha f + \\beta g| \\, d\\mu \\leq |\\alpha| \\int |f| \\, d\\mu + |\\beta| \\int |g| \\, d\\mu &lt; \\infty\\).</p>
                        <p><strong>Step 2 (Additivity):</strong> For non-negative \\(f, g\\), we have \\((f + g)^+ - (f + g)^- = f^+ - f^- + g^+ - g^-\\), so \\((f + g)^+ + f^- + g^- = (f + g)^- + f^+ + g^+\\). Since both sides are non-negative, integration (using additivity for non-negative functions) gives</p>
                        \\[\\int (f+g)^+ \\, d\\mu + \\int f^- \\, d\\mu + \\int g^- \\, d\\mu = \\int (f+g)^- \\, d\\mu + \\int f^+ \\, d\\mu + \\int g^+ \\, d\\mu.\\]
                        <p>Rearranging (all terms are finite since \\(f, g \\in L^1\\)):</p>
                        \\[\\int (f+g) \\, d\\mu = \\int f \\, d\\mu + \\int g \\, d\\mu.\\]
                        <p><strong>Step 3 (Scaling):</strong> For \\(\\alpha \\geq 0\\), \\((\\alpha f)^+ = \\alpha f^+\\) and \\((\\alpha f)^- = \\alpha f^-\\), so \\(\\int \\alpha f = \\alpha \\int f^+ - \\alpha \\int f^- = \\alpha \\int f\\). For \\(\\alpha = -1\\), \\((-f)^+ = f^-\\) and \\((-f)^- = f^+\\), so \\(\\int (-f) = \\int f^- - \\int f^+ = -\\int f\\). General \\(\\alpha &lt; 0\\) follows by combining.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h2>The Triangle Inequality</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.16 (Triangle Inequality for Integrals)</div>
                    <div class="env-body">
                        <p>If \\(f \\in L^1(\\mu)\\), then</p>
                        \\[\\left|\\int f \\, d\\mu\\right| \\leq \\int |f| \\, d\\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Since \\(-|f| \\leq f \\leq |f|\\), monotonicity gives \\(-\\int |f| \\, d\\mu \\leq \\int f \\, d\\mu \\leq \\int |f| \\, d\\mu\\), which is precisely \\(|\\int f \\, d\\mu| \\leq \\int |f| \\, d\\mu\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h2>The Space \\(L^1\\)</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.17 (The Space \\(L^1(\\mu)\\))</div>
                    <div class="env-body">
                        <p>The space of <strong>Lebesgue integrable functions</strong> is</p>
                        \\[L^1(X, \\mathcal{M}, \\mu) = \\left\\{f: X \\to \\mathbb{R} \\text{ measurable} : \\int |f| \\, d\\mu &lt; \\infty\\right\\}.\\]
                        <p>By Theorem 6.15, \\(L^1\\) is a real vector space (closed under addition and scalar multiplication). The functional \\(f \\mapsto \\int f \\, d\\mu\\) is a linear functional on \\(L^1\\). Strictly speaking, elements of \\(L^1\\) are equivalence classes of functions that agree \\(\\mu\\)-a.e.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Preview: \\(L^1\\) as a Banach Space)</div>
                    <div class="env-body">
                        <p>The function \\(\\|f\\|_1 = \\int |f| \\, d\\mu\\) defines a norm on \\(L^1\\) (after identifying functions that agree a.e.). In Chapter 9, we will prove that \\(L^1\\) is <em>complete</em> under this norm (the Riesz-Fischer theorem), making it a Banach space. This completeness is one of the great strengths of the Lebesgue theory.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.18 (An Integrable Function)</div>
                    <div class="env-body">
                        <p>The function \\(f(x) = \\sin(x)/x^2\\) on \\([1, \\infty)\\) is Lebesgue integrable because \\(|f(x)| = |\\sin(x)|/x^2 \\leq 1/x^2\\), and</p>
                        \\[\\int_1^{\\infty} \\frac{1}{x^2} \\, d\\lambda = 1 &lt; \\infty.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.19 (A Non-Integrable Function)</div>
                    <div class="env-body">
                        <p>The function \\(f(x) = \\sin(x)/x\\) on \\([1, \\infty)\\) is <em>not</em> Lebesgue integrable. Its Riemann improper integral \\(\\int_1^{\\infty} \\frac{\\sin x}{x} \\, dx\\) converges (conditionally), but \\(\\int_1^{\\infty} \\frac{|\\sin x|}{x} \\, dx = \\infty\\). The Lebesgue integral requires absolute integrability; it does not recognize conditionally convergent integrals.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Lebesgue Integrability = Absolute Integrability)</div>
                    <div class="env-body">
                        <p>This is a crucial difference from the Riemann improper integral. The Lebesgue integral of \\(f\\) exists (as a finite number) only when \\(\\int |f| &lt; \\infty\\). This means the Lebesgue integral does not directly handle "cancellation" of positive and negative parts that makes conditionally convergent integrals work. This is a design choice, not a defect: it ensures the integral has much better convergence properties (see Chapter 7).</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.2; Royden-Fitzpatrick 4.3; Stein-Shakarchi III.2.</p>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Let \\(f(x) = x\\) on \\(([0,1], \\lambda)\\). Write \\(f = f^+ - f^-\\) and compute \\(\\int f \\, d\\lambda\\) from the definition.',
                    hint: 'Since \\(f \\geq 0\\) on \\([0,1]\\), we have \\(f^+ = f\\) and \\(f^- = 0\\).',
                    solution: 'On \\([0,1]\\), \\(f(x) = x \\geq 0\\), so \\(f^+(x) = x\\) and \\(f^-(x) = 0\\). Thus \\(\\int f \\, d\\lambda = \\int f^+ \\, d\\lambda - \\int f^- \\, d\\lambda = \\int_0^1 x \\, d\\lambda - 0\\). By the layer-cake formula: \\(\\int_0^1 x \\, d\\lambda = \\int_0^1 (1 - t) \\, dt = 1/2\\). Alternatively, the standard antiderivative gives \\(x^2/2 \\big|_0^1 = 1/2\\).'
                },
                {
                    question: 'Prove the triangle inequality for the integral: \\(|\\int f \\, d\\mu| \\leq \\int |f| \\, d\\mu\\) for \\(f \\in L^1\\). (Hint: use \\(-|f| \\leq f \\leq |f|\\) and monotonicity.)',
                    hint: 'Apply monotonicity to \\(f \\leq |f|\\) and to \\(-f \\leq |f|\\).',
                    solution: 'Since \\(f \\leq |f|\\) pointwise, monotonicity gives \\(\\int f \\, d\\mu \\leq \\int |f| \\, d\\mu\\). Since \\(-f \\leq |f|\\) pointwise, we also get \\(\\int (-f) \\, d\\mu \\leq \\int |f| \\, d\\mu\\), i.e., \\(-\\int f \\, d\\mu \\leq \\int |f| \\, d\\mu\\). Combining: \\(-\\int |f| \\leq \\int f \\leq \\int |f|\\), which is \\(|\\int f| \\leq \\int |f|\\).'
                },
                {
                    question: 'Show that \\(f(x) = 1/\\sqrt{x}\\) on \\((0, 1]\\) is Lebesgue integrable, and compute its integral using the layer-cake formula.',
                    hint: 'First check \\(\\int_0^1 |f| = \\int_0^1 x^{-1/2} dx < \\infty\\). For the layer-cake formula, compute \\(\\lambda(\\{1/\\sqrt{x} > t\\})\\) for \\(t > 0\\).',
                    solution: 'Integrability: \\(\\int_0^1 x^{-1/2} dx = [2\\sqrt{x}]_0^1 = 2 < \\infty\\), so \\(f \\in L^1\\). Layer-cake: \\(\\{x \\in (0,1] : 1/\\sqrt{x} > t\\} = \\{x : x < 1/t^2\\} \\cap (0,1]\\). For \\(t \\geq 1\\): this is \\((0, 1/t^2)\\) with measure \\(1/t^2\\). For \\(0 < t < 1\\): this is \\((0, 1]\\) with measure 1. So \\(\\int f = \\int_0^1 1 \\, dt + \\int_1^\\infty t^{-2} \\, dt = 1 + 1 = 2\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Comparison with the Riemann Integral
        // ============================================================
        {
            id: 'comparison-riemann',
            title: 'Comparison with the Riemann Integral',
            content: `
                <div class="bridge section-bridge">
                    <p>With the Lebesgue integral fully constructed, a natural question arises: how does it relate to the Riemann integral that we already know? The answer is reassuring: every Riemann-integrable function is Lebesgue-integrable, and the two integrals agree. But the Lebesgue integral is strictly more powerful, integrating a larger class of functions. This section makes the comparison precise.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove that Riemann integrability implies Lebesgue integrability with the same value. State the Lebesgue criterion for Riemann integrability. Exhibit functions that are Lebesgue-integrable but not Riemann-integrable.</p>
                    <p><em>Reference alignment: Folland 2.5; Royden-Fitzpatrick 4.4; Stein-Shakarchi III.2.</em></p>
                </div>

                <h2>The Lebesgue Criterion for Riemann Integrability</h2>

                <p>We begin with the definitive characterization of Riemann integrability, itself a theorem of Lebesgue.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.20 (Lebesgue's Criterion for Riemann Integrability)</div>
                    <div class="env-body">
                        <p>A bounded function \\(f: [a, b] \\to \\mathbb{R}\\) is Riemann integrable if and only if the set of its discontinuities has Lebesgue measure zero:</p>
                        \\[f \\in \\mathcal{R}[a,b] \\iff \\lambda(\\mathrm{Disc}(f)) = 0.\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Irony)</div>
                    <div class="env-body">
                        <p>The deepest characterization of the Riemann integral requires Lebesgue measure to state! This underscores how fundamental the Lebesgue framework is: even understanding the classical integral properly requires measure theory.</p>
                    </div>
                </div>

                <h2>Riemann Implies Lebesgue</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.21 (Riemann Integrable \\(\\Rightarrow\\) Lebesgue Integrable)</div>
                    <div class="env-body">
                        <p>If \\(f: [a, b] \\to \\mathbb{R}\\) is Riemann integrable, then \\(f\\) is Lebesgue integrable and</p>
                        \\[\\int_{[a,b]} f \\, d\\lambda = (R)\\!\\int_a^b f(x) \\, dx,\\]
                        <p>where \\((R)\\!\\int\\) denotes the Riemann integral.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(P_n\\) be a sequence of partitions of \\([a,b]\\) with mesh \\(\\|P_n\\| \\to 0\\). Define the lower and upper step functions:</p>
                        \\[l_n(x) = \\inf_{I_k \\ni x} f, \\qquad u_n(x) = \\sup_{I_k \\ni x} f,\\]
                        <p>where \\(I_k\\) is the subinterval of \\(P_n\\) containing \\(x\\). These are simple functions with:</p>
                        \\[l_n \\leq f \\leq u_n, \\quad \\int l_n \\, d\\lambda = L(P_n, f), \\quad \\int u_n \\, d\\lambda = U(P_n, f).\\]
                        <p>If we refine partitions so that \\(P_n \\subseteq P_{n+1}\\), then \\(l_n \\nearrow\\) and \\(u_n \\searrow\\). Define \\(l = \\lim l_n\\) and \\(u = \\lim u_n\\). Then \\(l \\leq f \\leq u\\) everywhere.</p>
                        <p>Since \\(f\\) is Riemann integrable, \\(L(P_n, f) \\to (R)\\!\\int f\\) and \\(U(P_n, f) \\to (R)\\!\\int f\\), so \\(\\int (u - l) \\, d\\lambda = \\lim \\int u_n \\, d\\lambda - \\lim \\int l_n \\, d\\lambda = 0\\). By the vanishing criterion (Theorem 6.8), \\(u = l\\) a.e., hence \\(f = l = u\\) a.e.</p>
                        <p>Since \\(l \\leq f \\leq u\\) and \\(l, u\\) are measurable (as limits of simple functions), \\(f\\) agrees a.e. with the measurable function \\(l\\). The bounded function \\(f\\) satisfies \\(|f| \\leq M\\) for some \\(M\\), so \\(\\int |f| \\, d\\lambda \\leq M(b - a) &lt; \\infty\\), giving \\(f \\in L^1\\). Finally, \\(\\int f \\, d\\lambda = \\int l \\, d\\lambda = \\lim \\int l_n \\, d\\lambda = (R)\\!\\int f\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h2>Strictly More Functions Are Lebesgue-Integrable</h2>

                <div class="env-block example">
                    <div class="env-title">Example 6.22 (Dirichlet Function: Lebesgue Yes, Riemann No)</div>
                    <div class="env-body">
                        <p>The Dirichlet function \\(\\mathbf{1}_{\\mathbb{Q} \\cap [0,1]}\\) is discontinuous everywhere (so \\(\\lambda(\\mathrm{Disc}(f)) = 1 &gt; 0\\)), hence not Riemann integrable. But it is measurable and bounded, with</p>
                        \\[\\int_0^1 \\mathbf{1}_{\\mathbb{Q}} \\, d\\lambda = \\lambda(\\mathbb{Q} \\cap [0,1]) = 0.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.23 (Fat Cantor Indicator)</div>
                    <div class="env-body">
                        <p>Let \\(F \\subset [0,1]\\) be a fat Cantor set with \\(\\lambda(F) = 1/2\\). The indicator \\(\\mathbf{1}_F\\) is discontinuous on the boundary \\(\\partial F\\), which has positive measure. So \\(\\mathbf{1}_F\\) is not Riemann integrable. Yet \\(\\int \\mathbf{1}_F \\, d\\lambda = 1/2\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="riemann-vs-lebesgue-comparison"></div>

                <h2>What About Improper Riemann Integrals?</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark (Improper Integrals and Lebesgue)</div>
                    <div class="env-body">
                        <p>The improper Riemann integral \\(\\int_1^{\\infty} f(x) \\, dx = \\lim_{b \\to \\infty} \\int_1^b f(x) \\, dx\\) can converge even when \\(\\int |f| = \\infty\\) (conditional convergence). The classic example is \\(f(x) = \\sin(x)/x\\). In such cases, the <em>Lebesgue integral does not exist</em>. This is not a defect: the Lebesgue theory deliberately sacrifices conditional convergence in exchange for far superior convergence theorems (MCT, DCT in Chapter 7). In practice, the functions one encounters in analysis, probability, and physics are almost always absolutely integrable.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.5; Royden-Fitzpatrick 4.4; Stein-Shakarchi III.2.</p>
            `,
            visualizations: [
                {
                    id: 'riemann-vs-lebesgue-comparison',
                    title: 'Riemann vs. Lebesgue Head-to-Head',
                    description: 'For functions like the Dirichlet function, watch Riemann sums fail to converge while the Lebesgue integral is well-defined. Toggle between example functions.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 400;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            grid: '#1a1a40', yellow: '#d29922'
                        };

                        var nPartition = 10;
                        var funcChoice = 0; // 0 = Dirichlet, 1 = x^2 (both work)

                        VizEngine.createSlider(controls, 'Partition size n', 2, 100, nPartition, 1, function(v) {
                            nPartition = Math.round(v); draw();
                        });
                        VizEngine.createButton(controls, 'Dirichlet function', function() { funcChoice = 0; draw(); });
                        VizEngine.createButton(controls, 'f(x) = x\u00B2 (both work)', function() { funcChoice = 1; draw(); });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { left: 50, right: 20, top: 55, bottom: 55 };
                            var panelW = (w - margin.left - margin.right - 20) / 2;
                            var plotH = h - margin.top - margin.bottom;

                            if (funcChoice === 0) {
                                // Dirichlet function
                                // Left: Riemann sums
                                ctx.fillStyle = colors.text; ctx.font = 'bold 13px -apple-system, sans-serif'; ctx.textAlign = 'center';
                                ctx.fillText('Riemann Integral (Dirichlet Function)', margin.left + panelW / 2, 20);

                                var dx = panelW / nPartition;
                                // Upper sum: sup on each subinterval = 1 (rationals are dense)
                                // Lower sum: inf on each subinterval = 0 (irrationals are dense)
                                for (var i = 0; i < nPartition; i++) {
                                    var x1 = margin.left + i * dx;
                                    // Upper sum bars (red)
                                    ctx.fillStyle = 'rgba(248, 81, 73, 0.3)';
                                    ctx.fillRect(x1, margin.top, dx, plotH);
                                    ctx.strokeStyle = colors.red;
                                    ctx.lineWidth = 1;
                                    ctx.strokeRect(x1, margin.top, dx, plotH);
                                }

                                // Upper sum line
                                ctx.strokeStyle = colors.red; ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(margin.left, margin.top); ctx.lineTo(margin.left + panelW, margin.top); ctx.stroke();

                                // Lower sum line (at bottom = 0)
                                ctx.strokeStyle = colors.green; ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(margin.left, margin.top + plotH); ctx.lineTo(margin.left + panelW, margin.top + plotH); ctx.stroke();

                                ctx.fillStyle = colors.red; ctx.font = '12px -apple-system, sans-serif'; ctx.textAlign = 'left';
                                ctx.fillText('U(P,f) = 1 (always)', margin.left + 5, margin.top - 8);
                                ctx.fillStyle = colors.green;
                                ctx.fillText('L(P,f) = 0 (always)', margin.left + 5, margin.top + plotH + 16);

                                ctx.fillStyle = colors.yellow; ctx.font = 'bold 12px -apple-system, sans-serif'; ctx.textAlign = 'center';
                                ctx.fillText('Gap = 1, never closes!', margin.left + panelW / 2, margin.top + plotH + 35);
                                ctx.fillText('Riemann integral: DOES NOT EXIST', margin.left + panelW / 2, margin.top + plotH + 50);

                                // Right: Lebesgue integral
                                var rx = margin.left + panelW + 20;
                                ctx.fillStyle = colors.text; ctx.font = 'bold 13px -apple-system, sans-serif'; ctx.textAlign = 'center';
                                ctx.fillText('Lebesgue Integral (Dirichlet Function)', rx + panelW / 2, 20);

                                // Draw the horizontal slicing view
                                // f takes values 0 and 1
                                // mu({f > t}) for t in [0,1): if t < 0: measure = 1, if 0 <= t < 1: mu(Q) = 0, if t >= 1: 0
                                // So integral = integral_0^1 mu({f > t}) dt = integral_0^1 0 dt = 0 (since {f > t} = Q cap [0,1] for 0 <= t < 1)

                                // Show the two level sets
                                ctx.fillStyle = 'rgba(63, 185, 160, 0.3)';
                                ctx.fillRect(rx, margin.top + plotH / 2, panelW, plotH / 2);
                                ctx.fillStyle = colors.muted; ctx.font = '12px -apple-system, sans-serif'; ctx.textAlign = 'center';
                                ctx.fillText('Level t=0: \u03BC({f>0}) = \u03BB(\u211A\u2229[0,1]) = 0', rx + panelW / 2, margin.top + plotH * 3 / 4);
                                ctx.fillText('Level t<0: \u03BC({f>t}) = 1', rx + panelW / 2, margin.top + plotH * 3 / 4 + 20);
                                ctx.fillText('Level t\u22651: \u03BC({f>t}) = 0', rx + panelW / 2, margin.top + plotH * 3 / 4 + 40);

                                ctx.fillStyle = colors.teal; ctx.font = 'bold 13px -apple-system, sans-serif';
                                ctx.fillText('\u222B\u2080\u00B9 \u03BC({f>t}) dt = \u222B\u2080\u00B9 0 dt = 0', rx + panelW / 2, margin.top + plotH + 35);
                                ctx.fillStyle = colors.green; ctx.font = 'bold 12px -apple-system, sans-serif';
                                ctx.fillText('Lebesgue integral: 0  \u2713', rx + panelW / 2, margin.top + plotH + 50);
                            } else {
                                // x^2 on [0,1]: both integrals work
                                // Left: Riemann
                                ctx.fillStyle = colors.text; ctx.font = 'bold 13px -apple-system, sans-serif'; ctx.textAlign = 'center';
                                ctx.fillText('Riemann Sums for f(x) = x\u00B2', margin.left + panelW / 2, 20);

                                var dx = panelW / nPartition;
                                var upperSum = 0, lowerSum = 0;
                                for (var i = 0; i < nPartition; i++) {
                                    var xL = i / nPartition;
                                    var xR = (i + 1) / nPartition;
                                    var fL = xL * xL, fR = xR * xR;
                                    var inf = fL, sup = fR; // x^2 is increasing
                                    upperSum += sup / nPartition;
                                    lowerSum += inf / nPartition;

                                    var px1 = margin.left + i * dx;
                                    // Lower bars
                                    var barH = (inf) * plotH;
                                    ctx.fillStyle = 'rgba(63, 185, 80, 0.25)';
                                    ctx.fillRect(px1, margin.top + plotH - barH, dx, barH);
                                    // Upper bars
                                    var barH2 = (sup) * plotH;
                                    ctx.fillStyle = 'rgba(248, 81, 73, 0.15)';
                                    ctx.fillRect(px1, margin.top + plotH - barH2, dx, barH2 - barH);
                                }
                                // Draw curve
                                ctx.strokeStyle = colors.text; ctx.lineWidth = 2; ctx.beginPath();
                                for (var k = 0; k <= 200; k++) {
                                    var xx = k / 200;
                                    var sx = margin.left + xx * panelW;
                                    var sy = margin.top + plotH - (xx * xx) * plotH;
                                    if (k === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();

                                ctx.fillStyle = colors.green; ctx.font = '12px -apple-system, sans-serif'; ctx.textAlign = 'center';
                                ctx.fillText('L = ' + lowerSum.toFixed(4), margin.left + panelW / 2, margin.top + plotH + 18);
                                ctx.fillStyle = colors.red;
                                ctx.fillText('U = ' + upperSum.toFixed(4), margin.left + panelW / 2, margin.top + plotH + 34);
                                ctx.fillStyle = colors.yellow; ctx.font = 'bold 12px -apple-system, sans-serif';
                                ctx.fillText('Both \u2192 1/3 = 0.3333...', margin.left + panelW / 2, margin.top + plotH + 50);

                                // Right: Lebesgue (layer cake)
                                var rx = margin.left + panelW + 20;
                                ctx.fillStyle = colors.text; ctx.font = 'bold 13px -apple-system, sans-serif'; ctx.textAlign = 'center';
                                ctx.fillText('Lebesgue (Layer Cake) for f(x) = x\u00B2', rx + panelW / 2, 20);

                                var nHSlices = nPartition;
                                var dtSlice = 1.0 / nHSlices;
                                var lebesgueApprox = 0;
                                for (var s = 0; s < nHSlices; s++) {
                                    var t = s * dtSlice;
                                    // mu({x^2 > t}) = 1 - sqrt(t) for 0 <= t <= 1
                                    var muT = 1 - Math.sqrt(t);
                                    lebesgueApprox += muT * dtSlice;
                                    var barW = muT * panelW;
                                    var barTop = margin.top + plotH - ((s + 1) * dtSlice) * plotH;
                                    var barBot = margin.top + plotH - (s * dtSlice) * plotH;
                                    var hue = (s / nHSlices) * 200 + 120;
                                    ctx.fillStyle = 'hsla(' + hue + ', 60%, 50%, 0.35)';
                                    ctx.fillRect(rx, barTop, barW, barBot - barTop);
                                }
                                // Draw mu({f>t}) curve (rotated: t on vertical, mu on horizontal)
                                ctx.strokeStyle = colors.teal; ctx.lineWidth = 2; ctx.beginPath();
                                for (var k = 0; k <= 200; k++) {
                                    var t = k / 200;
                                    var mu = 1 - Math.sqrt(t);
                                    var sx = rx + mu * panelW;
                                    var sy = margin.top + plotH - t * plotH;
                                    if (k === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();

                                ctx.fillStyle = colors.teal; ctx.font = '12px -apple-system, sans-serif'; ctx.textAlign = 'center';
                                ctx.fillText('\u222B\u2080\u00B9(1-\u221At) dt = 1/3', rx + panelW / 2, margin.top + plotH + 18);
                                ctx.fillStyle = colors.green; ctx.font = 'bold 12px -apple-system, sans-serif';
                                ctx.fillText('Both methods give 1/3  \u2713', rx + panelW / 2, margin.top + plotH + 50);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify directly that the Thomae function (\\(f(p/q) = 1/q\\) for rationals in lowest terms, \\(f = 0\\) on irrationals) is Riemann integrable on \\([0,1]\\), and compute its Lebesgue integral.',
                    hint: 'Show that the Thomae function is continuous at every irrational and discontinuous at every rational. Since \\(\\lambda(\\mathbb{Q}) = 0\\), the Lebesgue criterion applies.',
                    solution: 'The Thomae function is continuous at every irrational (for any \\(\\varepsilon > 0\\), only finitely many rationals \\(p/q\\) in \\([0,1]\\) have \\(q \\leq 1/\\varepsilon\\), so a small neighborhood of any irrational avoids them). It is discontinuous at every rational (the irrationals are dense, and \\(f\\) takes value 0 nearby but \\(f(p/q) > 0\\)). The set of discontinuities is \\(\\mathbb{Q} \\cap [0,1]\\), which has Lebesgue measure 0. By the Lebesgue criterion, \\(f\\) is Riemann integrable. Since \\(f = 0\\) a.e. (\\(f > 0\\) only on the rationals), \\(\\int_0^1 f \\, d\\lambda = 0\\).'
                },
                {
                    question: 'Give an example of a function on \\([0, \\infty)\\) whose improper Riemann integral converges but whose Lebesgue integral does not exist.',
                    hint: 'Think about conditional convergence: the positive and negative parts both have infinite integral.',
                    solution: 'The function \\(f(x) = \\sin(x)/x\\) on \\([1, \\infty)\\). The improper Riemann integral \\(\\int_1^{\\infty} \\frac{\\sin x}{x} dx\\) converges (by the Dirichlet test or integration by parts). However, \\(\\int_1^{\\infty} \\frac{|\\sin x|}{x} dx = \\infty\\) because \\(\\int_{n\\pi}^{(n+1)\\pi} \\frac{|\\sin x|}{x} dx \\geq \\frac{1}{(n+1)\\pi} \\int_{n\\pi}^{(n+1)\\pi} |\\sin x| dx = \\frac{2}{(n+1)\\pi}\\), and the harmonic series diverges. So \\(f \\notin L^1([1,\\infty))\\), and the Lebesgue integral is undefined.'
                },
                {
                    question: 'Prove that a continuous function \\(f: [a,b] \\to \\mathbb{R}\\) is Riemann integrable and hence Lebesgue integrable, with the two integrals equal.',
                    hint: 'A continuous function on a compact set has an empty set of discontinuities.',
                    solution: 'A continuous function on \\([a,b]\\) has no discontinuities, so \\(\\mathrm{Disc}(f) = \\emptyset\\). Since \\(\\lambda(\\emptyset) = 0\\), the Lebesgue criterion (Theorem 6.20) gives \\(f \\in \\mathcal{R}[a,b]\\). By Theorem 6.21, \\(f\\) is also Lebesgue integrable and \\(\\int_{[a,b]} f \\, d\\lambda = (R)\\int_a^b f(x) dx\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Chebyshev's Inequality and the Markov Inequality
        // ============================================================
        {
            id: 'chebyshev-markov',
            title: "Chebyshev's Inequality and the Markov Inequality",
            content: `
                <div class="bridge section-bridge">
                    <p>One of the first fruits of the Lebesgue integral is a family of inequalities that bound the "size" of level sets of a function in terms of its integral. These are the Markov and Chebyshev inequalities. They are elementary to prove yet enormously powerful, with applications ranging from measure theory to probability to approximation theory.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove Markov's inequality, derive Chebyshev's inequality as a corollary, and show applications to proving that functions vanish almost everywhere.</p>
                    <p><em>Reference alignment: Folland 2.2; Royden-Fitzpatrick 4.4; Stein-Shakarchi III.2.</em></p>
                </div>

                <h2>Markov's Inequality</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.24 (Markov's Inequality)</div>
                    <div class="env-body">
                        <p>Let \\(f: X \\to [0, \\infty]\\) be measurable on \\((X, \\mathcal{M}, \\mu)\\). For any \\(\\alpha &gt; 0\\),</p>
                        \\[\\mu(\\{f \\geq \\alpha\\}) \\leq \\frac{1}{\\alpha} \\int f \\, d\\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(E = \\{f \\geq \\alpha\\}\\). On \\(E\\), we have \\(f \\geq \\alpha\\), so \\(\\alpha \\cdot \\mathbf{1}_E \\leq f\\). By monotonicity of the integral:</p>
                        \\[\\alpha \\, \\mu(E) = \\int \\alpha \\cdot \\mathbf{1}_E \\, d\\mu \\leq \\int f \\, d\\mu.\\]
                        <p>Dividing by \\(\\alpha > 0\\) gives the result.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Blanket Principle)</div>
                    <div class="env-body">
                        <p>If a non-negative function has a small integral (small "total mass"), then it cannot be large on a set of large measure. Think of spreading a fixed amount of paint (the integral) over a floor: the paint can be thick on a small area or thin on a large area, but not thick on a large area. Markov's inequality quantifies this trade-off.</p>
                    </div>
                </div>

                <h2>Chebyshev's Inequality</h2>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 6.25 (Chebyshev's Inequality)</div>
                    <div class="env-body">
                        <p>Let \\(f \\in L^1(\\mu)\\) (or more generally, \\(f\\) measurable). For any \\(\\alpha &gt; 0\\) and \\(p &gt; 0\\):</p>
                        \\[\\mu(\\{|f| \\geq \\alpha\\}) \\leq \\frac{1}{\\alpha^p} \\int |f|^p \\, d\\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The set \\(\\{|f| \\geq \\alpha\\} = \\{|f|^p \\geq \\alpha^p\\}\\). Apply Markov's inequality to the non-negative function \\(|f|^p\\) with threshold \\(\\alpha^p\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Probabilistic Version)</div>
                    <div class="env-body">
                        <p>In probability, if \\(X\\) has mean \\(\\mu\\) and variance \\(\\sigma^2\\), taking \\(f = X - \\mu\\) and \\(p = 2\\) gives \\(P(|X - \\mu| \\geq \\alpha) \\leq \\sigma^2 / \\alpha^2\\). Setting \\(\\alpha = k\\sigma\\): \\(P(|X - \\mu| \\geq k\\sigma) \\leq 1/k^2\\). This is the classical Chebyshev inequality from probability theory.</p>
                    </div>
                </div>

                <h2>Applications: Detecting Measure-Zero Sets</h2>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 6.26 (Integral Test for a.e. Vanishing)</div>
                    <div class="env-body">
                        <p>Let \\(f \\geq 0\\) be measurable. Then \\(f = 0\\) a.e. if and only if \\(\\int f \\, d\\mu = 0\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Using Markov)</div>
                    <div class="env-body">
                        <p>We already proved this as Theorem 6.8(4), but here is a quick reproof via Markov's inequality. If \\(\\int f \\, d\\mu = 0\\), then for each \\(n \\geq 1\\), Markov's inequality gives</p>
                        \\[\\mu\\!\\left(\\left\\{f \\geq \\frac{1}{n}\\right\\}\\right) \\leq n \\int f \\, d\\mu = 0.\\]
                        <p>Since \\(\\{f &gt; 0\\} = \\bigcup_{n=1}^{\\infty} \\{f \\geq 1/n\\}\\), we get \\(\\mu(\\{f &gt; 0\\}) = 0\\), so \\(f = 0\\) a.e.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.27 (Bounding the Size of Level Sets)</div>
                    <div class="env-body">
                        <p>Let \\(f(x) = e^{-x}\\) on \\(([0, \\infty), \\lambda)\\). Then \\(\\int_0^{\\infty} e^{-x} \\, d\\lambda = 1\\). By Markov:</p>
                        \\[\\lambda(\\{e^{-x} \\geq \\alpha\\}) \\leq \\frac{1}{\\alpha} \\quad \\text{for } \\alpha &gt; 0.\\]
                        <p>The exact value is \\(\\lambda(\\{e^{-x} \\geq \\alpha\\}) = \\lambda([0, -\\ln \\alpha]) = -\\ln \\alpha\\) for \\(0 &lt; \\alpha \\leq 1\\). So for \\(\\alpha = 1/e\\), Markov gives \\(\\leq e \\approx 2.72\\), while the exact value is 1. Markov is a rough but universal bound.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="markov-chebyshev-viz"></div>

                <p><strong>Reference alignment:</strong> Folland 2.2; Royden-Fitzpatrick 4.4; Stein-Shakarchi III.2.</p>
            `,
            visualizations: [
                {
                    id: 'markov-chebyshev-viz',
                    title: 'Markov/Chebyshev Inequality Visualizer',
                    description: 'Given a function, shade the set {|f| >= alpha} and bound its measure using the integral. Adjust alpha with a slider.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 380;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            grid: '#1a1a40', yellow: '#d29922'
                        };

                        var alpha = 0.5;
                        var funcChoice = 0; // 0 = e^{-x} on [0,5], 1 = sin^2(2pi x) on [0,1]

                        var funcs = [
                            {
                                name: 'f(x) = e^(-x) on [0, 5]',
                                f: function(x) { return Math.exp(-x); },
                                xMin: 0, xMax: 5, yMax: 1.2,
                                integral: 1 - Math.exp(-5) // approx 0.993
                            },
                            {
                                name: 'f(x) = sin\u00B2(2\u03C0x) on [0, 1]',
                                f: function(x) { return Math.pow(Math.sin(2 * Math.PI * x), 2); },
                                xMin: 0, xMax: 1, yMax: 1.2,
                                integral: 0.5
                            }
                        ];

                        VizEngine.createSlider(controls, 'Threshold \u03B1', 0.05, 1.5, alpha, 0.05, function(v) {
                            alpha = v; draw();
                        });
                        VizEngine.createButton(controls, 'e^(-x)', function() { funcChoice = 0; draw(); });
                        VizEngine.createButton(controls, 'sin\u00B2(2\u03C0x)', function() { funcChoice = 1; draw(); });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var fn = funcs[funcChoice];
                            var f = fn.f;
                            var margin = { left: 55, right: 200, top: 50, bottom: 50 };
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            // Grid
                            ctx.strokeStyle = colors.grid; ctx.lineWidth = 0.5;
                            for (var gy = 0; gy <= 5; gy++) {
                                var sy = margin.top + plotH - (gy / 5) * plotH * (1 / fn.yMax);
                                if (sy >= margin.top && sy <= margin.top + plotH) {
                                    ctx.beginPath(); ctx.moveTo(margin.left, sy); ctx.lineTo(margin.left + plotW, sy); ctx.stroke();
                                }
                            }

                            // Axes
                            ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(margin.left, margin.top + plotH); ctx.lineTo(margin.left + plotW, margin.top + plotH); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(margin.left, margin.top); ctx.lineTo(margin.left, margin.top + plotH); ctx.stroke();

                            // Shade {f >= alpha}
                            var exactMeasure = 0;
                            var nSamp = 500;
                            ctx.fillStyle = 'rgba(248, 81, 73, 0.35)';
                            for (var k = 0; k < nSamp; k++) {
                                var x0 = fn.xMin + (k / nSamp) * (fn.xMax - fn.xMin);
                                var x1 = fn.xMin + ((k + 1) / nSamp) * (fn.xMax - fn.xMin);
                                var fv = f((x0 + x1) / 2);
                                if (fv >= alpha) {
                                    exactMeasure += (x1 - x0);
                                    var sx = margin.left + ((x0 - fn.xMin) / (fn.xMax - fn.xMin)) * plotW;
                                    var sw = ((x1 - x0) / (fn.xMax - fn.xMin)) * plotW;
                                    ctx.fillRect(sx, margin.top, sw + 1, plotH);
                                }
                            }

                            // Draw the function
                            ctx.strokeStyle = colors.blue; ctx.lineWidth = 2.5; ctx.beginPath();
                            for (var k = 0; k <= 300; k++) {
                                var x = fn.xMin + (k / 300) * (fn.xMax - fn.xMin);
                                var sx = margin.left + ((x - fn.xMin) / (fn.xMax - fn.xMin)) * plotW;
                                var sy = margin.top + plotH - (f(x) / fn.yMax) * plotH;
                                if (k === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Alpha threshold line
                            var alphaY = margin.top + plotH - (alpha / fn.yMax) * plotH;
                            if (alphaY >= margin.top && alphaY <= margin.top + plotH) {
                                ctx.strokeStyle = colors.yellow; ctx.lineWidth = 1.5;
                                ctx.setLineDash([6, 4]);
                                ctx.beginPath(); ctx.moveTo(margin.left, alphaY); ctx.lineTo(margin.left + plotW, alphaY); ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = colors.yellow; ctx.font = '12px -apple-system, sans-serif'; ctx.textAlign = 'left';
                                ctx.fillText('\u03B1 = ' + alpha.toFixed(2), margin.left + plotW + 4, alphaY + 4);
                            }

                            // Title
                            ctx.fillStyle = colors.text; ctx.font = 'bold 13px -apple-system, sans-serif'; ctx.textAlign = 'center';
                            ctx.fillText(fn.name, margin.left + plotW / 2, 20);
                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('Red region: {f \u2265 \u03B1}', margin.left + plotW / 2, 36);

                            // Info panel
                            var panelX = margin.left + plotW + 15;
                            var panelY = margin.top + 30;
                            var markovBound = fn.integral / alpha;
                            ctx.fillStyle = colors.text; ctx.font = 'bold 12px -apple-system, sans-serif'; ctx.textAlign = 'left';
                            ctx.fillText('Markov\u2019s Inequality:', panelX, panelY);

                            ctx.fillStyle = colors.muted; ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('\u222Bf d\u03BC = ' + fn.integral.toFixed(3), panelX, panelY + 22);
                            ctx.fillText('\u03B1 = ' + alpha.toFixed(2), panelX, panelY + 40);

                            ctx.fillStyle = colors.orange; ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.fillText('Bound: \u2264 ' + markovBound.toFixed(3), panelX, panelY + 62);

                            ctx.fillStyle = colors.green;
                            ctx.fillText('Exact: ' + exactMeasure.toFixed(3), panelX, panelY + 82);

                            // Visual comparison bar
                            var barY = panelY + 100;
                            var barMaxW = 140;
                            ctx.fillStyle = colors.muted; ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('Exact vs Bound:', panelX, barY);
                            var maxVal = Math.max(markovBound, exactMeasure, 0.01);
                            // Exact bar
                            ctx.fillStyle = colors.green;
                            ctx.fillRect(panelX, barY + 12, (exactMeasure / maxVal) * barMaxW, 10);
                            // Bound bar
                            ctx.fillStyle = colors.orange;
                            ctx.fillRect(panelX, barY + 26, Math.min(1, markovBound / maxVal) * barMaxW, 10);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use the Markov inequality to show that if \\(f \\in L^1(\\mu)\\) with \\(f \\geq 0\\), then \\(\\mu(\\{f \\geq n\\}) \\to 0\\) as \\(n \\to \\infty\\).',
                    hint: 'Apply Markov with \\(\\alpha = n\\).',
                    solution: 'By the Markov inequality, \\(\\mu(\\{f \\geq n\\}) \\leq \\frac{1}{n} \\int f \\, d\\mu\\). Since \\(f \\in L^1\\), the integral is finite, say \\(\\int f = C < \\infty\\). So \\(\\mu(\\{f \\geq n\\}) \\leq C/n \\to 0\\) as \\(n \\to \\infty\\).'
                },
                {
                    question: 'Let \\(f \\in L^2(\\mu)\\) with \\(\\int f \\, d\\mu = m\\) and \\(\\int (f - m)^2 \\, d\\mu = \\sigma^2\\). Show that \\(\\mu(\\{|f - m| \\geq t\\}) \\leq \\sigma^2 / t^2\\) for all \\(t > 0\\).',
                    hint: 'Apply the Chebyshev inequality (Corollary 6.25) with \\(p = 2\\) to the function \\(f - m\\).',
                    solution: 'Apply Corollary 6.25 to \\(g = f - m\\) with \\(p = 2\\) and threshold \\(t\\): \\(\\mu(\\{|f - m| \\geq t\\}) = \\mu(\\{|g| \\geq t\\}) \\leq \\frac{1}{t^2} \\int |g|^2 \\, d\\mu = \\frac{\\sigma^2}{t^2}\\). This is the measure-theoretic Chebyshev inequality, which in probability reads \\(P(|X - \\mathbb{E}[X]| \\geq t) \\leq \\mathrm{Var}(X)/t^2\\).'
                },
                {
                    question: '(Exploration) Using the Markov/Chebyshev visualizer, compare the Markov bound to the exact level-set measure for \\(f(x) = e^{-x}\\) at \\(\\alpha = 0.1, 0.5, 1.0\\). When is Markov tight? When is it loose?',
                    hint: 'Compute both the exact and Markov values for each threshold.',
                    solution: 'For \\(f(x) = e^{-x}\\) on \\([0,5]\\), \\(\\int f \\approx 0.993\\). At \\(\\alpha = 0.1\\): exact measure is \\(-\\ln(0.1) \\approx 2.303\\), Markov bound is \\(0.993/0.1 \\approx 9.93\\) (very loose, factor of 4.3). At \\(\\alpha = 0.5\\): exact is \\(\\ln 2 \\approx 0.693\\), bound is \\(0.993/0.5 \\approx 1.986\\) (factor of 2.9). At \\(\\alpha = 1\\): exact is 0, bound is 0.993. Markov is always an overestimate and is tightest (relatively) when \\(\\alpha\\) is large. The bound is never tight for smooth functions; it is sharp for functions that concentrate mass at the threshold level.'
                }
            ]
        },

        // ============================================================
        // SECTION 6: Integration with Respect to General Measures
        // ============================================================
        {
            id: 'integration-general-measures',
            title: 'Integration with Respect to General Measures',
            content: `
                <div class="bridge section-bridge">
                    <p>Everything we have built works for any measure space \\((X, \\mathcal{M}, \\mu)\\), not just Lebesgue measure on the real line. In this final section, we explore the integral with respect to other measures: counting measure (recovering summation), Dirac masses (recovering evaluation), and Lebesgue-Stieltjes measures (recovering the Riemann-Stieltjes integral). This universality is one of the great strengths of the Lebesgue framework.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Show that the abstract Lebesgue integral specializes to familiar operations (summation, evaluation, Stieltjes integration) under different measures. Establish the change-of-variable formula for pushforward measures.</p>
                    <p><em>Reference alignment: Folland 2.4, 2.6; Royden-Fitzpatrick 4.3, 21.4; Stein-Shakarchi III.2.</em></p>
                </div>

                <h2>Integration Against Counting Measure</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.28 (Counting Measure and Summation)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a countable (or finite) set, \\(\\mathcal{M} = \\mathcal{P}(X)\\), and \\(\\mu = \\)counting measure. For any \\(f: X \\to [0, \\infty]\\):</p>
                        \\[\\int_X f \\, d\\mu = \\sum_{x \\in X} f(x).\\]
                        <p>More generally, \\(f \\in L^1(\\mu)\\) if and only if \\(\\sum_{x \\in X} |f(x)| &lt; \\infty\\) (i.e., \\(f\\) is absolutely summable), and then \\(\\int f \\, d\\mu = \\sum_x f(x)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For \\(f \\geq 0\\), enumerate \\(X = \\{x_1, x_2, \\ldots\\}\\) and define simple functions \\(\\varphi_n = \\sum_{k=1}^{n} f(x_k) \\cdot \\mathbf{1}_{\\{x_k\\}}\\). Then \\(\\varphi_n \\nearrow f\\) pointwise and</p>
                        \\[\\int \\varphi_n \\, d\\mu = \\sum_{k=1}^{n} f(x_k) \\cdot \\mu(\\{x_k\\}) = \\sum_{k=1}^{n} f(x_k).\\]
                        <p>Taking \\(n \\to \\infty\\) (this is justified by the Monotone Convergence Theorem from Chapter 7, or can be verified directly from the supremum definition):</p>
                        \\[\\int f \\, d\\mu = \\lim_{n \\to \\infty} \\sum_{k=1}^{n} f(x_k) = \\sum_{k=1}^{\\infty} f(x_k).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Unifying Sums and Integrals)</div>
                    <div class="env-body">
                        <p>This result reveals that summation and integration are the same operation applied to different measure spaces. A series \\(\\sum a_n\\) is just \\(\\int f \\, d\\mu\\) where \\(f(n) = a_n\\) and \\(\\mu\\) is counting measure on \\(\\mathbb{N}\\). Theorems about integrals (Monotone Convergence, Dominated Convergence, Fubini) immediately give theorems about series. This unification is one of the deepest insights of measure theory.</p>
                    </div>
                </div>

                <h2>Integration Against Dirac Masses</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.29 (Dirac Mass and Evaluation)</div>
                    <div class="env-body">
                        <p>Let \\(\\delta_{x_0}\\) be the Dirac (point) mass at \\(x_0 \\in X\\), defined by \\(\\delta_{x_0}(E) = \\mathbf{1}_E(x_0)\\). For any measurable \\(f\\):</p>
                        \\[\\int_X f \\, d\\delta_{x_0} = f(x_0).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For a non-negative simple function \\(\\varphi = \\sum_j a_j \\mathbf{1}_{E_j}\\) in canonical form, exactly one \\(E_j\\) contains \\(x_0\\) (since they partition \\(X\\)). Say \\(x_0 \\in E_k\\). Then \\(\\int \\varphi \\, d\\delta_{x_0} = \\sum_j a_j \\delta_{x_0}(E_j) = a_k \\cdot 1 = a_k = \\varphi(x_0)\\). For general non-negative measurable \\(f\\), approximate by simple functions: \\(\\int f \\, d\\delta_{x_0} = \\sup\\{\\int \\varphi \\, d\\delta_{x_0} : 0 \\leq \\varphi \\leq f\\} = \\sup\\{\\varphi(x_0) : 0 \\leq \\varphi \\leq f\\} = f(x_0)\\). Extend to general \\(f\\) by \\(f = f^+ - f^-\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h2>Discrete Probability Measures</h2>

                <div class="env-block example">
                    <div class="env-title">Example 6.30 (Expected Value of a Discrete Random Variable)</div>
                    <div class="env-body">
                        <p>Let \\(X = \\{x_1, x_2, \\ldots\\}\\) with probability measure \\(P(\\{x_k\\}) = p_k\\), where \\(p_k \\geq 0\\) and \\(\\sum p_k = 1\\). This is a weighted counting measure: \\(P = \\sum_k p_k \\delta_{x_k}\\). For a random variable \\(g: X \\to \\mathbb{R}\\):</p>
                        \\[\\int g \\, dP = \\sum_{k} g(x_k) \\, p_k = E[g].\\]
                        <p>The Lebesgue integral with respect to a probability measure <em>is</em> expectation.</p>
                    </div>
                </div>

                <h2>Lebesgue-Stieltjes Integration</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.31 (Lebesgue-Stieltjes Integral)</div>
                    <div class="env-body">
                        <p>Let \\(F: \\mathbb{R} \\to \\mathbb{R}\\) be right-continuous and non-decreasing (a <strong>distribution function</strong>). The associated Lebesgue-Stieltjes measure \\(\\mu_F\\) satisfies \\(\\mu_F((a, b]) = F(b) - F(a)\\) (constructed in Chapter 3). The <strong>Lebesgue-Stieltjes integral</strong> of \\(f\\) with respect to \\(F\\) is</p>
                        \\[\\int f \\, dF = \\int f \\, d\\mu_F.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.32 (Recovering Familiar Integrals)</div>
                    <div class="env-body">
                        <p><strong>(a)</strong> If \\(F(x) = x\\), then \\(\\mu_F = \\lambda\\) (Lebesgue measure), and \\(\\int f \\, dF = \\int f \\, d\\lambda\\) is the ordinary Lebesgue integral.</p>
                        <p><strong>(b)</strong> If \\(F(x) = \\sum_{k: x_k \\leq x} p_k\\) is a step function with jumps \\(p_k\\) at \\(x_k\\), then \\(\\mu_F = \\sum_k p_k \\delta_{x_k}\\) and \\(\\int f \\, dF = \\sum_k f(x_k) p_k\\).</p>
                        <p><strong>(c)</strong> If \\(F\\) is absolutely continuous with density \\(g = F'\\), then \\(\\int f \\, dF = \\int f \\cdot g \\, d\\lambda\\). This is the change-of-measure formula: integrating against \\(\\mu_F\\) is the same as integrating against \\(g \\, d\\lambda\\).</p>
                    </div>
                </div>

                <h2>The Transfer Theorem (Change of Variables)</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.33 (Transfer / Change of Variables)</div>
                    <div class="env-body">
                        <p>Let \\(T: (X, \\mathcal{M}) \\to (Y, \\mathcal{N})\\) be measurable, and let \\(\\mu\\) be a measure on \\(X\\). The <strong>pushforward measure</strong> \\(T_* \\mu\\) on \\(Y\\) is defined by \\((T_* \\mu)(E) = \\mu(T^{-1}(E))\\). Then for any measurable \\(f: Y \\to [0, \\infty]\\) (or \\(f \\in L^1(T_* \\mu)\\)):</p>
                        \\[\\int_Y f \\, d(T_* \\mu) = \\int_X (f \\circ T) \\, d\\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p><strong>Step 1:</strong> For indicator functions \\(f = \\mathbf{1}_E\\): \\(\\int \\mathbf{1}_E \\, d(T_* \\mu) = (T_* \\mu)(E) = \\mu(T^{-1}(E)) = \\int \\mathbf{1}_{T^{-1}(E)} \\, d\\mu = \\int (\\mathbf{1}_E \\circ T) \\, d\\mu\\).</p>
                        <p><strong>Step 2:</strong> Extend to simple functions by linearity, then to non-negative measurable functions by the supremum definition, then to general integrable functions by \\(f = f^+ - f^-\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why This Matters)</div>
                    <div class="env-body">
                        <p>The transfer theorem is the abstract backbone of many concrete results:</p>
                        <ul>
                            <li>In probability: \\(E[g(X)] = \\int g \\, d\\mu_X\\), where \\(\\mu_X = X_* P\\) is the distribution of \\(X\\).</li>
                            <li>In calculus: the substitution rule \\(\\int f(u(x)) u'(x) \\, dx = \\int f(u) \\, du\\) is a special case.</li>
                            <li>In differential geometry: integration on manifolds via pullbacks of measures.</li>
                        </ul>
                    </div>
                </div>

                <h2>Summary: The Lebesgue Integral at a Glance</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark (Chapter Summary)</div>
                    <div class="env-body">
                        <p>We have constructed the Lebesgue integral in three stages:</p>
                        <ol>
                            <li><strong>Simple functions:</strong> \\(\\int \\sum a_j \\mathbf{1}_{E_j} = \\sum a_j \\mu(E_j)\\).</li>
                            <li><strong>Non-negative measurable functions:</strong> \\(\\int f = \\sup\\{\\int \\varphi : 0 \\leq \\varphi \\leq f, \\varphi \\text{ simple}\\}\\).</li>
                            <li><strong>General measurable functions:</strong> \\(\\int f = \\int f^+ - \\int f^-\\), provided this does not yield \\(\\infty - \\infty\\).</li>
                        </ol>
                        <p>The resulting integral is linear, monotone, and agrees with Riemann wherever Riemann applies. It extends to any measure space, unifying summation, evaluation, and classical integration. In the next chapter, we will see its crowning achievement: the convergence theorems (MCT, Fatou, DCT) that make the Lebesgue integral indispensable.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.4, 2.6; Royden-Fitzpatrick 4.3, 21.4; Stein-Shakarchi III.2.</p>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Let \\(X = \\mathbb{N}\\), \\(\\mu = \\)counting measure, and \\(f(n) = 1/n^2\\). Compute \\(\\int f \\, d\\mu\\) and verify that \\(f \\in L^1(\\mu)\\).',
                    hint: 'Integration against counting measure is summation.',
                    solution: '\\(\\int f \\, d\\mu = \\sum_{n=1}^{\\infty} f(n) = \\sum_{n=1}^{\\infty} 1/n^2 = \\pi^2/6\\). Since this is finite, \\(f \\in L^1(\\mu)\\).'
                },
                {
                    question: 'Let \\(P = \\frac{1}{2}\\delta_0 + \\frac{1}{2}\\delta_1\\) be a probability measure on \\(\\mathbb{R}\\). Compute \\(\\int x^2 \\, dP\\).',
                    hint: 'Integration against a linear combination of Dirac masses evaluates the function at the mass points and takes the weighted sum.',
                    solution: '\\(\\int x^2 \\, dP = \\frac{1}{2} \\int x^2 \\, d\\delta_0 + \\frac{1}{2} \\int x^2 \\, d\\delta_1 = \\frac{1}{2} \\cdot 0^2 + \\frac{1}{2} \\cdot 1^2 = \\frac{1}{2}\\). Alternatively, this is \\(E[X^2]\\) where \\(X\\) takes values 0 and 1 each with probability \\(1/2\\).'
                },
                {
                    question: 'Let \\(F(x) = 1 - e^{-x}\\) for \\(x \\geq 0\\) (and \\(F(x) = 0\\) for \\(x &lt; 0\\)). This defines an exponential distribution. Compute \\(\\int_0^{\\infty} x \\, dF\\) using the fact that \\(F\\) is absolutely continuous with density \\(f(x) = e^{-x}\\).',
                    hint: 'Since \\(F^{\\prime}(x) = e^{-x}\\), we have \\(\\int x \\, dF = \\int_0^{\\infty} x e^{-x} dx\\).',
                    solution: 'Since \\(F^{\\prime}(x) = e^{-x}\\), Example 6.32(c) gives \\(\\int_0^{\\infty} x \\, dF = \\int_0^{\\infty} x \\cdot e^{-x} \\, d\\lambda = [\\text{integration by parts}] = [-xe^{-x} - e^{-x}]_0^{\\infty} = 0 - (-1) = 1\\). This is the mean of the exponential distribution with rate 1.'
                },
                {
                    question: 'Prove the transfer theorem for indicator functions: \\(\\int_Y \\mathbf{1}_E \\, d(T_* \\mu) = \\int_X \\mathbf{1}_{T^{-1}(E)} \\, d\\mu\\) for any \\(E \\in \\mathcal{N}\\).',
                    hint: 'This is just the definition of pushforward measure.',
                    solution: '\\(\\int_Y \\mathbf{1}_E \\, d(T_* \\mu) = (T_* \\mu)(E) = \\mu(T^{-1}(E))\\) by definition of pushforward. Also, \\(\\int_X \\mathbf{1}_{T^{-1}(E)} \\, d\\mu = \\mu(T^{-1}(E))\\) by definition of the integral of an indicator function. The two are equal.'
                },
                {
                    question: '(Proof) Show that if \\(f(n) = 1/n\\) on \\(\\mathbb{N}\\) with counting measure, then \\(f \\notin L^1\\) but \\(f^2 \\in L^1\\). What does this say about the relationship between \\(L^1\\) and \\(L^2\\) on infinite measure spaces?',
                    hint: 'Compute \\(\\sum 1/n\\) and \\(\\sum 1/n^2\\).',
                    solution: '\\(\\int |f| \\, d\\mu = \\sum_{n=1}^{\\infty} 1/n = \\infty\\) (harmonic series diverges), so \\(f \\notin L^1\\). But \\(\\int |f|^2 \\, d\\mu = \\sum_{n=1}^{\\infty} 1/n^2 = \\pi^2/6 < \\infty\\), so \\(f \\in L^2\\). This shows that on infinite measure spaces, \\(L^2\\) is not contained in \\(L^1\\). (On finite measure spaces, \\(L^2 \\subset L^1\\) by Cauchy-Schwarz.) The inclusion relationships between \\(L^p\\) spaces depend critically on the measure of the underlying space, as we will study in Chapter 9.'
                },
                {
                    question: '(Exploration) Consider the Cantor measure \\(\\mu_C\\) on \\([0,1]\\), defined as the unique probability measure supported on the Cantor set \\(\\mathcal{C}\\) satisfying \\(\\mu_C([0,1/3]) = \\mu_C([2/3,1]) = 1/2\\). Is this measure absolutely continuous with respect to Lebesgue measure? What is \\(\\int_{[0,1]} x \\, d\\mu_C\\)?',
                    hint: 'Think about what \\(\\mu_C\\) assigns to sets of Lebesgue measure zero. For the integral, use the self-similarity of the Cantor measure.',
                    solution: 'The Cantor measure is <em>singular</em> with respect to Lebesgue measure: \\(\\mu_C(\\mathcal{C}) = 1\\) but \\(\\lambda(\\mathcal{C}) = 0\\), so \\(\\mu_C\\) is concentrated on a set of Lebesgue measure zero. It is not absolutely continuous (no density \\(g\\) exists with \\(\\mu_C = g \\, d\\lambda\\)). For the integral: by the self-similarity \\(\\mu_C = \\frac{1}{2} T_1^* \\mu_C + \\frac{1}{2} T_2^* \\mu_C\\) where \\(T_1(x) = x/3\\) and \\(T_2(x) = (x+2)/3\\), we get \\(\\int x \\, d\\mu_C = \\frac{1}{2} \\int x/3 \\, d\\mu_C + \\frac{1}{2} \\int (x+2)/3 \\, d\\mu_C = \\frac{1}{6} \\int x \\, d\\mu_C + \\frac{1}{6} \\int x \\, d\\mu_C + \\frac{1}{3}\\). So \\(\\int x \\, d\\mu_C = \\frac{1}{3} \\int x \\, d\\mu_C + \\frac{1}{3}\\), giving \\(\\int x \\, d\\mu_C = 1/2\\). The "center of mass" of the Cantor measure is \\(1/2\\), which makes sense by symmetry.'
                }
            ]
        }
    ]
});

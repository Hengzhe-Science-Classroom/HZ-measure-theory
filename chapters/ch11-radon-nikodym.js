window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch11',
    number: 11,
    title: 'The Radon-Nikodym Theorem and Lebesgue Decomposition',
    subtitle: 'Absolute Continuity, Densities, and Decomposing Measures',
    sections: [
        // ============================================================
        // Section 1: Absolute Continuity of Measures
        // ============================================================
        {
            id: 'absolute-continuity',
            title: 'Absolute Continuity of Measures',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>This chapter addresses a fundamental question:</strong> when can one measure be expressed in terms of another? If you know how to integrate with respect to Lebesgue measure, can you recover integrals with respect to a probability distribution? The answer involves one of the most elegant and useful results in all of analysis: the Radon-Nikodym theorem. We begin with the notion of absolute continuity, which tells us precisely when one measure is "controlled" by another.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define absolute continuity of measures, develop the \\(\\varepsilon\\)-\\(\\delta\\) characterization for finite measures, and build intuition through probabilistic examples. Understand why absolute continuity is exactly the condition needed for a density to exist.</p>
                </div>

                <h2>The Definition</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (What Can One Measure "See"?)</div>
                    <div class="env-body">
                        <p>Think of two observers examining the same measurable space. Observer \\(\\mu\\) declares certain sets to be "negligible" (measure zero). Observer \\(\\nu\\) has their own assignments. We say \\(\\nu\\) is <strong>absolutely continuous</strong> with respect to \\(\\mu\\) if \\(\\nu\\) agrees with \\(\\mu\\) about what is negligible: every set that \\(\\mu\\) ignores, \\(\\nu\\) also ignores.</p>
                        <p>In probabilistic terms: if an event is impossible under \\(\\mu\\), it is impossible under \\(\\nu\\). The measure \\(\\nu\\) "cannot see things that \\(\\mu\\) cannot see."</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.1 (Absolute Continuity)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu\\) and \\(\\nu\\) be measures on a measurable space \\((X, \\mathcal{A})\\). We say \\(\\nu\\) is <strong>absolutely continuous</strong> with respect to \\(\\mu\\), written \\(\\nu \\ll \\mu\\), if</p>
                        \\[\\mu(E) = 0 \\implies \\nu(E) = 0 \\quad \\text{for all } E \\in \\mathcal{A}.\\]
                        <p>Equivalently, every \\(\\mu\\)-null set is also \\(\\nu\\)-null.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.2 (Density Creates Absolute Continuity)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu\\) be Lebesgue measure on \\(\\mathbb{R}\\) and let \\(f \\geq 0\\) be measurable. Define</p>
                        \\[\\nu(E) = \\int_E f\\,d\\mu.\\]
                        <p>Then \\(\\nu \\ll \\mu\\). Indeed, if \\(\\mu(E) = 0\\), then \\(\\int_E f\\,d\\mu = 0\\) because the integral over a set of measure zero is always zero. This is the prototypical example: having a density with respect to \\(\\mu\\) guarantees absolute continuity. The Radon-Nikodym theorem (Section 4) proves the converse under \\(\\sigma\\)-finiteness.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.3 (Probability Distributions)</div>
                    <div class="env-body">
                        <p>Let \\(X \\sim \\text{Normal}(0,1)\\) with distribution \\(P\\), so that \\(P(E) = \\int_E \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2}\\,dx\\). Then \\(P \\ll \\lambda\\) where \\(\\lambda\\) is Lebesgue measure. The density is \\(f(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2}\\).</p>
                        <p>Conversely, a point mass \\(\\delta_0\\) (with \\(\\delta_0(\\{0\\}) = 1\\)) is <em>not</em> absolutely continuous with respect to Lebesgue measure: \\(\\lambda(\\{0\\}) = 0\\) but \\(\\delta_0(\\{0\\}) = 1\\).</p>
                    </div>
                </div>

                <h2>The \\(\\varepsilon\\)-\\(\\delta\\) Characterization</h2>

                <p>For finite measures, absolute continuity admits a stronger, quantitative formulation reminiscent of the \\(\\varepsilon\\)-\\(\\delta\\) definition of continuity in analysis.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.4 (\\(\\varepsilon\\)-\\(\\delta\\) Characterization)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu\\) be a measure and \\(\\nu\\) a <em>finite</em> measure on \\((X, \\mathcal{A})\\). Then \\(\\nu \\ll \\mu\\) if and only if: for every \\(\\varepsilon > 0\\), there exists \\(\\delta > 0\\) such that</p>
                        \\[\\mu(E) < \\delta \\implies \\nu(E) < \\varepsilon.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 11.4</div>
                    <div class="env-body">
                        <p><strong>(\\(\\Leftarrow\\)):</strong> If the \\(\\varepsilon\\)-\\(\\delta\\) condition holds and \\(\\mu(E) = 0\\), then \\(\\mu(E) < \\delta\\) for every \\(\\delta > 0\\), so \\(\\nu(E) < \\varepsilon\\) for every \\(\\varepsilon > 0\\), hence \\(\\nu(E) = 0\\).</p>

                        <p><strong>(\\(\\Rightarrow\\)):</strong> Suppose \\(\\nu \\ll \\mu\\) but the \\(\\varepsilon\\)-\\(\\delta\\) condition fails. Then there exists \\(\\varepsilon_0 > 0\\) and sets \\(E_n \\in \\mathcal{A}\\) with \\(\\mu(E_n) < 1/2^n\\) but \\(\\nu(E_n) \\geq \\varepsilon_0\\) for all \\(n\\).</p>

                        <p>Define \\(F = \\limsup_{n \\to \\infty} E_n = \\bigcap_{n=1}^{\\infty} \\bigcup_{k=n}^{\\infty} E_k\\). By the Borel-Cantelli lemma (since \\(\\sum \\mu(E_n) < \\infty\\)), we get \\(\\mu(F) = 0\\). But for each \\(n\\),</p>
                        \\[\\nu\\!\\left(\\bigcup_{k=n}^{\\infty} E_k\\right) \\geq \\nu(E_n) \\geq \\varepsilon_0.\\]
                        <p>Since \\(\\bigcup_{k=n}^\\infty E_k \\downarrow F\\) and \\(\\nu\\) is finite (so continuity from above applies),</p>
                        \\[\\nu(F) = \\lim_{n \\to \\infty} \\nu\\!\\left(\\bigcup_{k=n}^{\\infty} E_k\\right) \\geq \\varepsilon_0 > 0.\\]
                        <p>This contradicts \\(\\nu \\ll \\mu\\), since \\(\\mu(F) = 0\\) but \\(\\nu(F) > 0\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Finiteness Is Essential)</div>
                    <div class="env-body">
                        <p>The \\(\\varepsilon\\)-\\(\\delta\\) characterization can fail for infinite measures. Let \\(\\mu = \\lambda\\) (Lebesgue measure) and \\(\\nu(E) = \\int_E |x|\\,d\\lambda(x)\\) on \\(\\mathbb{R}\\). Then \\(\\nu \\ll \\mu\\), but for any \\(\\delta > 0\\), the set \\(E_n = [n, n + \\delta/2]\\) has \\(\\mu(E_n) = \\delta/2 < \\delta\\) while \\(\\nu(E_n) \\geq n\\delta/2 \\to \\infty\\). No uniform \\(\\delta\\) works for \\(\\varepsilon = 1\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Connection to Absolute Continuity of Functions)</div>
                    <div class="env-body">
                        <p>The name "absolute continuity" is not a coincidence. An increasing function \\(F: [a,b] \\to \\mathbb{R}\\) is absolutely continuous in the classical sense (for every \\(\\varepsilon > 0\\) there exists \\(\\delta > 0\\) such that \\(\\sum |F(b_i) - F(a_i)| < \\varepsilon\\) whenever \\(\\sum (b_i - a_i) < \\delta\\)) if and only if the Lebesgue-Stieltjes measure \\(\\mu_F\\) it generates satisfies \\(\\mu_F \\ll \\lambda\\). The two notions are the same idea in different clothing.</p>
                    </div>
                </div>

                <h2>Basic Properties</h2>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 11.5 (Properties of Absolute Continuity)</div>
                    <div class="env-body">
                        <ol>
                            <li><strong>Reflexivity:</strong> \\(\\mu \\ll \\mu\\) for any measure \\(\\mu\\).</li>
                            <li><strong>Transitivity:</strong> If \\(\\nu \\ll \\mu\\) and \\(\\rho \\ll \\nu\\), then \\(\\rho \\ll \\mu\\).</li>
                            <li><strong>Additivity:</strong> If \\(\\nu_1 \\ll \\mu\\) and \\(\\nu_2 \\ll \\mu\\), then \\((\\nu_1 + \\nu_2) \\ll \\mu\\).</li>
                            <li><strong>Density inheritance:</strong> If \\(\\nu(E) = \\int_E f\\,d\\mu\\) for some non-negative measurable \\(f\\), then \\(\\nu \\ll \\mu\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="absolute-continuity-checker"></div>

                <p><strong>Reference alignment:</strong> Folland 3.1; Royden-Fitzpatrick 18.1; Stein-Shakarchi III.3.2.</p>
            `,
            visualizations: [
                {
                    id: 'absolute-continuity-checker',
                    title: 'Absolute Continuity Checker',
                    description: 'Define two measures on a finite partition and check whether one is absolutely continuous with respect to the other. Adjust the measure values and see which null-set conditions hold or fail.',
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
                            yellow: '#d29922'
                        };

                        var n = 5;
                        var muVals = [0.3, 0, 0.2, 0.5, 0];
                        var nuVals = [0.1, 0, 0.4, 0.3, 0.2];

                        var selectedSet = 0;
                        var editingMu = true;

                        VizEngine.createSlider(controls, 'Set index (1-5)', 1, 5, 1, 1, function(v) {
                            selectedSet = Math.round(v) - 1;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'mu value for selected set', 0, 1, 0.3, 0.01, function(v) {
                            muVals[selectedSet] = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'nu value for selected set', 0, 1, 0.1, 0.01, function(v) {
                            nuVals[selectedSet] = v;
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { l: 50, r: 50, t: 60, b: 120 };
                            var plotW = w - margin.l - margin.r;
                            var plotH = h - margin.t - margin.b;
                            var barW = plotW / n;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Absolute Continuity Checker: Does nu << mu?', w / 2, 25);

                            // Check absolute continuity
                            var acHolds = true;
                            var violatingSet = -1;
                            for (var i = 0; i < n; i++) {
                                if (muVals[i] === 0 && nuVals[i] > 0) {
                                    acHolds = false;
                                    violatingSet = i;
                                    break;
                                }
                            }

                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillStyle = acHolds ? colors.green : colors.red;
                            var statusText = acHolds
                                ? 'nu << mu: YES (every mu-null set is nu-null)'
                                : 'nu << mu: NO (set E' + (violatingSet + 1) + ' has mu=0 but nu=' + nuVals[violatingSet].toFixed(2) + ')';
                            ctx.fillText(statusText, w / 2, 45);

                            // Find max for scaling
                            var maxVal = 0.01;
                            for (var i = 0; i < n; i++) {
                                if (muVals[i] > maxVal) maxVal = muVals[i];
                                if (nuVals[i] > maxVal) maxVal = nuVals[i];
                            }

                            // Draw bars
                            for (var i = 0; i < n; i++) {
                                var x = margin.l + i * barW;
                                var halfBar = barW * 0.35;

                                // Highlight selected set
                                if (i === selectedSet) {
                                    ctx.fillStyle = 'rgba(88, 166, 255, 0.08)';
                                    ctx.fillRect(x, margin.t, barW, plotH);
                                }

                                // Highlight violating sets
                                if (muVals[i] === 0 && nuVals[i] > 0) {
                                    ctx.fillStyle = 'rgba(248, 81, 73, 0.15)';
                                    ctx.fillRect(x, margin.t, barW, plotH);
                                }

                                // mu bar (left)
                                var muH = (muVals[i] / maxVal) * plotH;
                                ctx.fillStyle = colors.blue;
                                ctx.globalAlpha = 0.8;
                                ctx.fillRect(x + barW * 0.1, margin.t + plotH - muH, halfBar, muH);

                                // nu bar (right)
                                var nuH = (nuVals[i] / maxVal) * plotH;
                                ctx.fillStyle = colors.orange;
                                ctx.fillRect(x + barW * 0.55, margin.t + plotH - nuH, halfBar, nuH);
                                ctx.globalAlpha = 1;

                                // Labels
                                ctx.fillStyle = colors.muted;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('E' + (i + 1), x + barW / 2, margin.t + plotH + 15);

                                // Values
                                ctx.fillStyle = colors.blue;
                                ctx.fillText(muVals[i].toFixed(2), x + barW * 0.1 + halfBar / 2, margin.t + plotH + 30);
                                ctx.fillStyle = colors.orange;
                                ctx.fillText(nuVals[i].toFixed(2), x + barW * 0.55 + halfBar / 2, margin.t + plotH + 30);

                                // Null set indicator
                                if (muVals[i] === 0) {
                                    ctx.fillStyle = nuVals[i] === 0 ? colors.green : colors.red;
                                    ctx.font = 'bold 11px -apple-system, sans-serif';
                                    var msg = nuVals[i] === 0 ? 'null-null OK' : 'VIOLATION!';
                                    ctx.fillText(msg, x + barW / 2, margin.t + plotH + 48);
                                }
                            }

                            // Legend
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = colors.blue;
                            ctx.fillRect(margin.l, h - 50, 12, 12);
                            ctx.fillText('mu', margin.l + 18, h - 40);
                            ctx.fillStyle = colors.orange;
                            ctx.fillRect(margin.l + 60, h - 50, 12, 12);
                            ctx.fillText('nu', margin.l + 78, h - 40);

                            ctx.fillStyle = colors.muted;
                            ctx.textAlign = 'center';
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('nu << mu iff every set where mu = 0 also has nu = 0', w / 2, h - 15);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(\\mu\\) and \\(\\nu\\) be measures on \\((X, \\mathcal{A})\\). Prove that \\(\\nu \\ll \\mu\\) if and only if for every measurable set \\(E\\), \\(\\nu(E) \\leq \\nu(X \\setminus E) + \\nu(X) \\cdot \\mathbf{1}_{\\{\\mu(E)>0\\}}\\). (Just kidding. Instead, prove directly from the definition that if \\(\\nu \\ll \\mu\\) and \\(\\mu \\ll \\nu\\), then \\(\\mu\\) and \\(\\nu\\) have exactly the same null sets.)',
                    hint: 'If \\(\\mu(E) = 0\\), then \\(\\nu(E) = 0\\) by \\(\\nu \\ll \\mu\\). Conversely, if \\(\\nu(E) = 0\\), then \\(\\mu(E) = 0\\) by \\(\\mu \\ll \\nu\\).',
                    solution: 'Suppose \\(\\nu \\ll \\mu\\) and \\(\\mu \\ll \\nu\\). Let \\(E \\in \\mathcal{A}\\). If \\(\\mu(E) = 0\\), then \\(\\nu \\ll \\mu\\) gives \\(\\nu(E) = 0\\). If \\(\\nu(E) = 0\\), then \\(\\mu \\ll \\nu\\) gives \\(\\mu(E) = 0\\). Therefore \\(\\mu(E) = 0 \\Leftrightarrow \\nu(E) = 0\\): the two measures share exactly the same null sets. We say \\(\\mu\\) and \\(\\nu\\) are <em>equivalent</em>, written \\(\\mu \\sim \\nu\\).'
                },
                {
                    question: 'Let \\(P\\) and \\(Q\\) be probability measures on \\((\\Omega, \\mathcal{F})\\) with \\(Q \\ll P\\). Show that if \\(P(A) = 1\\) then \\(Q(A) = 1\\). Interpret this probabilistically.',
                    hint: 'If \\(P(A) = 1\\) then \\(P(A^c) = 0\\).',
                    solution: 'If \\(P(A) = 1\\), then \\(P(A^c) = 1 - P(A) = 0\\). Since \\(Q \\ll P\\), we get \\(Q(A^c) = 0\\), so \\(Q(A) = 1\\). Probabilistically: any event that occurs almost surely under \\(P\\) also occurs almost surely under \\(Q\\). Absolute continuity preserves almost-sure events. This is why \\(Q \\ll P\\) is sometimes read as "\\(Q\\) is dominated by \\(P\\)."'
                },
                {
                    question: 'Give an example of measures \\(\\mu, \\nu\\) where \\(\\nu \\ll \\mu\\) but \\(\\mu \\not\\ll \\nu\\).',
                    hint: 'Try Lebesgue measure and a probability measure with a density that vanishes on some interval.',
                    solution: 'Let \\(\\mu = \\lambda\\) (Lebesgue measure on \\([0,2]\\)) and \\(\\nu(E) = \\lambda(E \\cap [0,1])\\). Then \\(\\nu \\ll \\mu\\) since \\(\\mu(E) = 0 \\Rightarrow \\lambda(E) = 0 \\Rightarrow \\lambda(E \\cap [0,1]) = 0 = \\nu(E)\\). But \\(\\mu \\not\\ll \\nu\\) because \\(\\nu((1,2]) = 0\\) while \\(\\mu((1,2]) = 1 > 0\\). Here \\(\\nu\\) is concentrated on \\([0,1]\\) and ignores \\((1,2]\\), but \\(\\mu\\) assigns positive measure to \\((1,2]\\).'
                },
                {
                    question: '(\\(\\varepsilon\\)-\\(\\delta\\) condition) Let \\(f \\in L^1(\\mu)\\) with \\(f \\geq 0\\) and define \\(\\nu(E) = \\int_E f\\,d\\mu\\). Prove directly (without using Theorem 11.4) that for every \\(\\varepsilon > 0\\) there exists \\(\\delta > 0\\) such that \\(\\mu(E) < \\delta \\Rightarrow \\nu(E) < \\varepsilon\\).',
                    hint: 'Truncate \\(f\\) at level \\(M\\) and split \\(\\int_E f = \\int_E f \\wedge M + \\int_E (f - f \\wedge M)\\). Choose \\(M\\) first so the tail is small, then choose \\(\\delta\\).',
                    solution: 'Fix \\(\\varepsilon > 0\\). Since \\(f \\geq 0\\) and \\(f \\in L^1(\\mu)\\), the functions \\(f_M = f \\wedge M\\) increase to \\(f\\) as \\(M \\to \\infty\\). By the Monotone Convergence Theorem, \\(\\int (f - f_M)\\,d\\mu \\to 0\\). Choose \\(M\\) so that \\(\\int (f - f_M)\\,d\\mu < \\varepsilon/2\\). Then for any \\(E\\), \\(\\int_E (f - f_M)\\,d\\mu \\leq \\int (f - f_M)\\,d\\mu < \\varepsilon/2\\). Also, \\(\\int_E f_M\\,d\\mu \\leq M \\cdot \\mu(E)\\). Set \\(\\delta = \\varepsilon/(2M)\\). Then \\(\\mu(E) < \\delta\\) gives \\(\\nu(E) = \\int_E f_M + \\int_E (f - f_M) < M \\cdot \\delta + \\varepsilon/2 = \\varepsilon\\).'
                }
            ]
        },

        // ============================================================
        // Section 2: Mutual Singularity
        // ============================================================
        {
            id: 'mutual-singularity',
            title: 'Mutual Singularity',
            content: `
                <div class="bridge section-bridge">
                    <p>Absolute continuity says that \\(\\nu\\) sees nothing that \\(\\mu\\) misses. At the opposite extreme, two measures can "live on completely disjoint parts of the space," sharing no mass at all. This is mutual singularity, and it will form one half of the Lebesgue Decomposition.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define mutual singularity of measures, understand the concept of "disjoint supports," and study key examples including the Cantor measure vs. Lebesgue measure and discrete vs. continuous distributions.</p>
                </div>

                <h2>The Definition</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.6 (Mutual Singularity)</div>
                    <div class="env-body">
                        <p>Two measures \\(\\mu\\) and \\(\\nu\\) on \\((X, \\mathcal{A})\\) are <strong>mutually singular</strong>, written \\(\\mu \\perp \\nu\\), if there exist disjoint sets \\(A, B \\in \\mathcal{A}\\) with \\(A \\cup B = X\\) such that</p>
                        \\[\\mu(B) = 0 \\quad \\text{and} \\quad \\nu(A) = 0.\\]
                        <p>In other words, \\(\\mu\\) "lives on" \\(A\\) and \\(\\nu\\) "lives on" \\(B\\). The two measures concentrate their mass on completely separate parts of the space.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Oil and Water)</div>
                    <div class="env-body">
                        <p>Mutually singular measures are like oil and water in the same container: they occupy the same vessel (the measurable space \\(X\\)) but never mix. The set \\(A\\) is where all of \\(\\mu\\)'s mass sits, and \\(B = X \\setminus A\\) is where all of \\(\\nu\\)'s mass sits. There is zero overlap.</p>
                        <p>In probability: events that distinguish the two measures can be found with certainty. If \\(\\mu \\perp \\nu\\), there is a set \\(A\\) with \\(\\mu(A) = \\mu(X)\\) and \\(\\nu(A) = 0\\), a perfect discriminator.</p>
                    </div>
                </div>

                <h2>Key Examples</h2>

                <div class="env-block example">
                    <div class="env-title">Example 11.7 (Discrete vs. Continuous)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu = \\lambda\\) (Lebesgue measure on \\(\\mathbb{R}\\)) and \\(\\nu = \\sum_{n=1}^{\\infty} 2^{-n} \\delta_{q_n}\\) where \\(\\{q_n\\}\\) is an enumeration of \\(\\mathbb{Q}\\). Then \\(\\mu \\perp \\nu\\): take \\(A = \\mathbb{R} \\setminus \\mathbb{Q}\\) (irrationals) and \\(B = \\mathbb{Q}\\). We have \\(\\mu(B) = \\lambda(\\mathbb{Q}) = 0\\) and \\(\\nu(A) = \\nu(\\mathbb{R} \\setminus \\mathbb{Q}) = 0\\) (since \\(\\nu\\) charges only rational points).</p>
                        <p>More generally, any discrete measure (supported on a countable set) is singular with respect to Lebesgue measure.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.8 (The Cantor Measure)</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{C}\\) be the standard Cantor set and let \\(\\mu_{\\mathcal{C}}\\) be the <strong>Cantor measure</strong>, defined as the unique Borel probability measure satisfying \\(\\mu_{\\mathcal{C}}(\\mathcal{C}) = 1\\) (constructed as the weak limit of the uniform measures on the finite-step Cantor approximations). Then:</p>
                        <ul>
                            <li>\\(\\mu_{\\mathcal{C}} \\perp \\lambda\\) because \\(\\mu_{\\mathcal{C}}\\) is supported on \\(\\mathcal{C}\\), which has \\(\\lambda(\\mathcal{C}) = 0\\). Take \\(A = [0,1] \\setminus \\mathcal{C}\\) and \\(B = \\mathcal{C}\\).</li>
                            <li>\\(\\mu_{\\mathcal{C}}\\) is <em>not</em> discrete: it assigns measure zero to every single point (since \\(\\mathcal{C}\\) is uncountable and \\(\\mu_{\\mathcal{C}}\\) distributes mass uniformly across the Cantor set in a self-similar way).</li>
                        </ul>
                        <p>The Cantor measure is the prototypical example of a <strong>singular continuous</strong> measure: singular with respect to Lebesgue, yet itself continuous (no atoms).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div name="env-title" class="env-title">Example 11.9 (Mutually Singular Probability Measures on the Same Space)</div>
                    <div class="env-body">
                        <p>Consider two coins: \\(P\\) is the law of an infinite sequence of fair coin flips (each flip has probability \\(1/2\\) for heads), and \\(Q\\) is the law when the coin has probability \\(3/4\\) for heads. By the strong law of large numbers:</p>
                        <ul>
                            <li>Under \\(P\\): the fraction of heads converges to \\(1/2\\) almost surely.</li>
                            <li>Under \\(Q\\): the fraction of heads converges to \\(3/4\\) almost surely.</li>
                        </ul>
                        <p>Let \\(A = \\{\\omega : \\text{fraction of heads} \\to 1/2\\}\\) and \\(B = \\{\\omega : \\text{fraction of heads} \\to 3/4\\}\\). Then \\(P(A) = 1\\), \\(Q(A) = 0\\), \\(P(B) = 0\\), \\(Q(B) = 1\\), so \\(P \\perp Q\\). Despite being defined on the same sample space, the two measures concentrate on completely different outcomes.</p>
                    </div>
                </div>

                <h2>Properties</h2>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 11.10 (Properties of Mutual Singularity)</div>
                    <div class="env-body">
                        <ol>
                            <li><strong>Symmetry:</strong> \\(\\mu \\perp \\nu\\) if and only if \\(\\nu \\perp \\mu\\).</li>
                            <li><strong>Absolute continuity vs. singularity:</strong> If \\(\\nu \\ll \\mu\\) and \\(\\nu \\perp \\mu\\), then \\(\\nu = 0\\) (the zero measure).</li>
                            <li><strong>Not transitive:</strong> \\(\\mu \\perp \\nu\\) and \\(\\nu \\perp \\rho\\) do <em>not</em> imply \\(\\mu \\perp \\rho\\). (Example: \\(\\delta_0 \\perp \\delta_1\\) and \\(\\delta_1 \\perp \\delta_0\\), but \\(\\delta_0 \\not\\perp \\delta_0\\) unless \\(\\delta_0 = 0\\).)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of (2)</div>
                    <div class="env-body">
                        <p>Suppose \\(\\nu \\ll \\mu\\) and \\(\\nu \\perp \\mu\\). By singularity, there exists \\(A\\) with \\(\\mu(A) = 0\\) and \\(\\nu(X \\setminus A) = 0\\). Since \\(\\mu(A) = 0\\) and \\(\\nu \\ll \\mu\\), we get \\(\\nu(A) = 0\\). Thus for any \\(E \\in \\mathcal{A}\\), \\(\\nu(E) = \\nu(E \\cap A) + \\nu(E \\setminus A) \\leq \\nu(A) + \\nu(X \\setminus A) = 0\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Landscape of Measure Relationships)</div>
                    <div class="env-body">
                        <p>Absolute continuity and mutual singularity are opposite extremes. A general measure \\(\\nu\\) typically has parts of both: some mass that is "controlled" by \\(\\mu\\) (absolutely continuous part) and some mass that lives where \\(\\mu\\) is absent (singular part). The Lebesgue Decomposition (next section) formalizes this dichotomy.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 3.1; Royden-Fitzpatrick 18.1; Stein-Shakarchi III.3.2.</p>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Prove Proposition 11.10 part (2) in detail: if \\(\\nu \\ll \\mu\\) and \\(\\nu \\perp \\mu\\), then \\(\\nu \\equiv 0\\).',
                    hint: 'By singularity, find a set \\(A\\) carrying all of \\(\\nu\\) where \\(\\mu\\) vanishes. Then use absolute continuity.',
                    solution: 'Since \\(\\nu \\perp \\mu\\), there exists a decomposition \\(X = A \\sqcup B\\) with \\(\\mu(A) = 0\\) and \\(\\nu(B) = 0\\). For any \\(E \\in \\mathcal{A}\\), write \\(\\nu(E) = \\nu(E \\cap A) + \\nu(E \\cap B)\\). Now \\(\\nu(E \\cap B) \\leq \\nu(B) = 0\\). And \\(\\mu(E \\cap A) \\leq \\mu(A) = 0\\), so \\(\\nu \\ll \\mu\\) gives \\(\\nu(E \\cap A) = 0\\). Therefore \\(\\nu(E) = 0\\) for all \\(E\\).'
                },
                {
                    question: 'Show that the Cantor measure \\(\\mu_{\\mathcal{C}}\\) has no atoms: \\(\\mu_{\\mathcal{C}}(\\{x\\}) = 0\\) for every \\(x \\in [0,1]\\). (Hint: use the self-similarity of the Cantor set construction.)',
                    hint: 'At step \\(n\\) of the Cantor construction, \\(x\\) lies in exactly one of the \\(2^n\\) remaining intervals, each carrying measure \\(2^{-n}\\).',
                    solution: 'At step \\(n\\) of the Cantor construction, the Cantor set is contained in \\(2^n\\) intervals \\(I_1^{(n)}, \\ldots, I_{2^n}^{(n)}\\), each of length \\(3^{-n}\\), and by symmetry \\(\\mu_{\\mathcal{C}}(I_k^{(n)}) = 2^{-n}\\) for each \\(k\\). For any point \\(x \\in \\mathcal{C}\\), \\(\\{x\\} \\subseteq I_{k(n)}^{(n)}\\) for some interval at each step \\(n\\), so \\(\\mu_{\\mathcal{C}}(\\{x\\}) \\leq 2^{-n}\\) for all \\(n\\). Letting \\(n \\to \\infty\\), \\(\\mu_{\\mathcal{C}}(\\{x\\}) = 0\\). For \\(x \\notin \\mathcal{C}\\), \\(\\mu_{\\mathcal{C}}(\\{x\\}) = 0\\) trivially since \\(\\mu_{\\mathcal{C}}\\) is supported on \\(\\mathcal{C}\\).'
                },
                {
                    question: 'Let \\(\\mu = \\lambda + \\delta_0\\) on \\(\\mathbb{R}\\). Find all measures \\(\\nu\\) of the form \\(a\\lambda + b\\delta_0\\) (with \\(a, b \\geq 0\\)) such that \\(\\nu \\perp \\mu\\).',
                    hint: 'For \\(\\nu \\perp \\mu\\), you need a set \\(A\\) with \\(\\mu(A) = 0\\) and \\(\\nu(X \\setminus A) = 0\\). What does \\(\\mu(A) = 0\\) force?',
                    solution: 'If \\(\\mu(A) = 0\\), then \\(\\lambda(A) = 0\\) and \\(\\delta_0(A) = 0\\), so \\(0 \\notin A\\) and \\(A\\) has Lebesgue measure zero. Then \\(\\nu(X \\setminus A) = a\\lambda(X \\setminus A) + b\\delta_0(X \\setminus A)\\). Since \\(\\lambda(A) = 0\\), we have \\(\\lambda(X \\setminus A) = \\infty\\) (as \\(\\lambda(\\mathbb{R}) = \\infty\\)), so \\(a\\lambda(X \\setminus A) = 0\\) only if \\(a = 0\\). Also \\(0 \\notin A\\) means \\(0 \\in X \\setminus A\\), so \\(\\delta_0(X \\setminus A) = 1\\), requiring \\(b = 0\\). The only such measure is \\(\\nu = 0\\).'
                }
            ]
        },

        // ============================================================
        // Section 3: The Lebesgue Decomposition Theorem
        // ============================================================
        {
            id: 'lebesgue-decomposition',
            title: 'The Lebesgue Decomposition Theorem',
            content: `
                <div class="bridge section-bridge">
                    <p>We have seen the two extremes: \\(\\nu \\ll \\mu\\) (absolute continuity) and \\(\\nu \\perp \\mu\\) (singularity). The Lebesgue Decomposition Theorem says that every \\(\\sigma\\)-finite measure can be uniquely split into these two parts. This is the measure-theoretic analogue of decomposing a vector into components parallel and perpendicular to a given direction.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove the Lebesgue Decomposition Theorem via the Hilbert space method (von Neumann's proof). Understand uniqueness and build geometric intuition for the decomposition.</p>
                </div>

                <h2>Statement</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.11 (Lebesgue Decomposition)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu\\) and \\(\\nu\\) be \\(\\sigma\\)-finite measures on \\((X, \\mathcal{A})\\). Then there exist unique measures \\(\\nu_{ac}\\) and \\(\\nu_s\\) on \\((X, \\mathcal{A})\\) such that</p>
                        \\[\\nu = \\nu_{ac} + \\nu_s, \\quad \\nu_{ac} \\ll \\mu, \\quad \\nu_s \\perp \\mu.\\]
                        <p>Moreover, there exists a non-negative measurable function \\(f\\) such that \\(\\nu_{ac}(E) = \\int_E f\\,d\\mu\\) for all \\(E \\in \\mathcal{A}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Orthogonal Decomposition)</div>
                    <div class="env-body">
                        <p>Think of the space of measures as a (very abstract) vector space. Given a "direction" \\(\\mu\\), any measure \\(\\nu\\) decomposes into a component "along \\(\\mu\\)" (the absolutely continuous part \\(\\nu_{ac}\\), which has a density with respect to \\(\\mu\\)) and a component "orthogonal to \\(\\mu\\)" (the singular part \\(\\nu_s\\), which lives on a \\(\\mu\\)-null set). This is precisely analogous to the orthogonal projection in a Hilbert space, and indeed von Neumann's proof uses a Hilbert space argument.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.12 (Decomposing a Mixed Distribution)</div>
                    <div class="env-body">
                        <p>In many applied settings, distributions are mixtures of continuous and discrete parts. Consider a random variable \\(X\\) that is 0 with probability \\(p\\) and, conditional on \\(X > 0\\), has an exponential distribution. Its CDF has a jump of size \\(p\\) at 0 and is continuous thereafter. The distribution of \\(X\\) is</p>
                        \\[\\nu = p \\cdot \\delta_0 + (1-p) \\cdot \\text{Exp}(\\lambda).\\]
                        <p>The Lebesgue decomposition with respect to Lebesgue measure gives \\(\\nu_{ac} = (1-p) \\cdot \\text{Exp}(\\lambda)\\) (with density \\((1-p)\\lambda e^{-\\lambda x} \\mathbf{1}_{x>0}\\)) and \\(\\nu_s = p \\cdot \\delta_0\\).</p>
                    </div>
                </div>

                <h2>Proof via the Hilbert Space Method</h2>

                <p>We present von Neumann's elegant proof, which derives both the Lebesgue decomposition and the Radon-Nikodym theorem simultaneously using the Riesz representation theorem for Hilbert spaces.</p>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 11.11 (Finite Case)</div>
                    <div class="env-body">
                        <p>We prove the result first for finite measures \\(\\mu, \\nu\\). The \\(\\sigma\\)-finite case follows by a standard exhaustion argument.</p>

                        <p><strong>Step 1: Set up the Hilbert space.</strong> Let \\(\\rho = \\mu + \\nu\\). Consider the Hilbert space \\(H = L^2(X, \\rho)\\). For any \\(E \\in \\mathcal{A}\\), the map</p>
                        \\[\\varphi(g) = \\int_X g\\,d\\nu\\]
                        <p>is a bounded linear functional on \\(H\\). Indeed, by Cauchy-Schwarz,</p>
                        \\[\\left|\\int g\\,d\\nu\\right| \\leq \\int |g|\\,d\\nu \\leq \\int |g|\\,d\\rho \\leq \\left(\\int |g|^2\\,d\\rho\\right)^{1/2} \\cdot \\rho(X)^{1/2} = \\|g\\|_H \\cdot \\rho(X)^{1/2}.\\]

                        <p><strong>Step 2: Apply Riesz representation.</strong> By the Riesz representation theorem for Hilbert spaces, there exists \\(h \\in L^2(\\rho)\\) such that</p>
                        \\[\\int_X g\\,d\\nu = \\int_X g \\cdot h\\,d\\rho \\quad \\text{for all } g \\in L^2(\\rho).\\]

                        <p><strong>Step 3: Determine the range of \\(h\\).</strong> Substituting \\(g = \\mathbf{1}_E\\) for any \\(E \\in \\mathcal{A}\\),</p>
                        \\[\\nu(E) = \\int_E h\\,d\\rho.\\]
                        <p>Since \\(0 \\leq \\nu(E) \\leq \\rho(E)\\), we get \\(0 \\leq h \\leq 1\\) \\(\\rho\\)-a.e. (by choosing \\(E = \\{h < 0\\}\\) and \\(E = \\{h > 1\\}\\)).</p>

                        <p><strong>Step 4: Decompose.</strong> Define \\(A = \\{x : h(x) < 1\\}\\) and \\(B = \\{x : h(x) = 1\\}\\). Then:</p>
                        <ul>
                            <li>On \\(B\\): \\(\\nu(E \\cap B) = \\int_{E \\cap B} h\\,d\\rho = \\int_{E \\cap B} 1\\,d\\rho = \\rho(E \\cap B) = \\mu(E \\cap B) + \\nu(E \\cap B)\\), so \\(\\mu(E \\cap B) = 0\\) for all \\(E\\), giving \\(\\mu(B) = 0\\).</li>
                            <li>Define \\(\\nu_s(E) = \\nu(E \\cap B)\\) and \\(\\nu_{ac}(E) = \\nu(E \\cap A)\\). Then \\(\\nu = \\nu_{ac} + \\nu_s\\).</li>
                            <li>\\(\\nu_s \\perp \\mu\\) because \\(\\nu_s\\) is supported on \\(B\\) and \\(\\mu(B) = 0\\).</li>
                        </ul>

                        <p><strong>Step 5: Find the density.</strong> For \\(E \\subseteq A\\),</p>
                        \\[\\nu(E) = \\int_E h\\,d\\rho = \\int_E h\\,d\\mu + \\int_E h\\,d\\nu.\\]
                        <p>So \\(\\int_E (1-h)\\,d\\nu = \\int_E h\\,d\\mu\\). Since \\(0 \\leq h < 1\\) on \\(A\\), we can write</p>
                        \\[\\nu_{ac}(E) = \\int_E \\frac{h}{1-h}\\,d\\mu\\]
                        <p>where \\(f = h/(1-h)\\) is the Radon-Nikodym derivative. (This requires a limiting argument: apply to \\(g = \\mathbf{1}_E \\sum_{k=0}^{N} h^k\\) and let \\(N \\to \\infty\\) using MCT.)</p>
                    </div>
                </div>

                <h2>Uniqueness</h2>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 11.13 (Uniqueness of the Decomposition)</div>
                    <div class="env-body">
                        <p>The Lebesgue decomposition \\(\\nu = \\nu_{ac} + \\nu_s\\) is unique: if \\(\\nu = \\nu_{ac}' + \\nu_s'\\) is another decomposition with \\(\\nu_{ac}' \\ll \\mu\\) and \\(\\nu_s' \\perp \\mu\\), then \\(\\nu_{ac} = \\nu_{ac}'\\) and \\(\\nu_s = \\nu_s'\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Uniqueness</div>
                    <div class="env-body">
                        <p>From \\(\\nu_{ac} + \\nu_s = \\nu_{ac}' + \\nu_s'\\), we get \\(\\nu_{ac} - \\nu_{ac}' = \\nu_s' - \\nu_s\\) (as signed measures). The left side is absolutely continuous with respect to \\(\\mu\\) (since both \\(\\nu_{ac}\\) and \\(\\nu_{ac}'\\) are). The right side is singular with respect to \\(\\mu\\) (since both \\(\\nu_s\\) and \\(\\nu_s'\\) are). A signed measure that is both absolutely continuous and singular with respect to \\(\\mu\\) must be the zero measure (by Proposition 11.10 part 2, extended to signed measures). Therefore \\(\\nu_{ac} = \\nu_{ac}'\\) and \\(\\nu_s = \\nu_s'\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Three-Part Decomposition)</div>
                    <div class="env-body">
                        <p>For a Borel measure \\(\\nu\\) on \\(\\mathbb{R}\\), one can refine the decomposition further. The singular part \\(\\nu_s\\) itself decomposes into a <strong>discrete</strong> (or "pure point") part \\(\\nu_d\\) (a countable sum of point masses) and a <strong>singular continuous</strong> part \\(\\nu_{sc}\\) (singular to Lebesgue but with no atoms, like the Cantor measure):</p>
                        \\[\\nu = \\nu_{ac} + \\nu_{sc} + \\nu_d.\\]
                        <p>This gives the classical three-part decomposition of a Borel measure.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lebesgue-decomposition-viz"></div>

                <p><strong>Reference alignment:</strong> Folland 3.2; Royden-Fitzpatrick 18.2; Stein-Shakarchi III.3.2.</p>
            `,
            visualizations: [
                {
                    id: 'lebesgue-decomposition-viz',
                    title: 'Lebesgue Decomposition Visualizer',
                    description: 'Decompose a mixed measure into its absolutely continuous and singular parts with respect to Lebesgue measure. Adjust the weights of continuous density, point masses, and a Cantor-like singular component.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 450;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922'
                        };

                        var wAC = 0.5;
                        var wDisc = 0.3;
                        var wSC = 0.2;
                        var pointLocs = [0.2, 0.5, 0.8];
                        var pointWeights = [0.4, 0.35, 0.25];

                        VizEngine.createSlider(controls, 'Weight: Abs. Continuous', 0, 1, wAC, 0.01, function(v) {
                            wAC = v;
                            normalizeWeights('ac');
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Weight: Discrete (point masses)', 0, 1, wDisc, 0.01, function(v) {
                            wDisc = v;
                            normalizeWeights('disc');
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Weight: Singular Continuous', 0, 1, wSC, 0.01, function(v) {
                            wSC = v;
                            normalizeWeights('sc');
                            draw();
                        });

                        function normalizeWeights(changed) {
                            var total = wAC + wDisc + wSC;
                            if (total > 0) {
                                wAC /= total;
                                wDisc /= total;
                                wSC /= total;
                            }
                        }

                        function densityFunc(x) {
                            return 0.5 * Math.exp(-0.5 * Math.pow((x - 0.4) / 0.15, 2)) / (0.15 * Math.sqrt(2 * Math.PI))
                                 + 0.5 * Math.exp(-0.5 * Math.pow((x - 0.7) / 0.1, 2)) / (0.1 * Math.sqrt(2 * Math.PI));
                        }

                        function cantorCDF(x, depth) {
                            if (depth === 0) return x;
                            if (x < 1/3) return 0.5 * cantorCDF(3 * x, depth - 1);
                            if (x > 2/3) return 0.5 + 0.5 * cantorCDF(3 * x - 2, depth - 1);
                            return 0.5;
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { l: 50, r: 30, t: 55, b: 55 };
                            var plotW = w - margin.l - margin.r;
                            var panelH = (h - margin.t - margin.b - 30) / 2;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Lebesgue Decomposition: nu = nu_ac + nu_s', w / 2, 20);

                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillStyle = colors.muted;
                            ctx.fillText(
                                'AC: ' + (wAC * 100).toFixed(0) + '%   Discrete: ' + (wDisc * 100).toFixed(0) + '%   Sing. Cont.: ' + (wSC * 100).toFixed(0) + '%',
                                w / 2, 40
                            );

                            // Compute CDF samples
                            var nSamp = 400;
                            var cdfTotal = [];
                            var cdfAC = [];
                            var cdfDisc = [];
                            var cdfSC = [];

                            // Normalize density
                            var densSum = 0;
                            for (var i = 0; i < nSamp; i++) {
                                densSum += densityFunc(i / nSamp) / nSamp;
                            }

                            for (var i = 0; i <= nSamp; i++) {
                                var x = i / nSamp;
                                // AC part CDF
                                var acCDF = 0;
                                for (var j = 0; j < i; j++) {
                                    acCDF += densityFunc(j / nSamp) / nSamp / densSum;
                                }
                                cdfAC.push(wAC * acCDF);

                                // Discrete part CDF
                                var dCDF = 0;
                                for (var k = 0; k < pointLocs.length; k++) {
                                    if (x >= pointLocs[k]) dCDF += pointWeights[k];
                                }
                                cdfDisc.push(wDisc * dCDF);

                                // Singular continuous CDF (Cantor-like)
                                var scCDF = cantorCDF(Math.max(0, Math.min(1, x)), 8);
                                cdfSC.push(wSC * scCDF);

                                cdfTotal.push(cdfAC[i] + cdfDisc[i] + cdfSC[i]);
                            }

                            // Top panel: Total CDF
                            var y0 = margin.t;
                            drawCDFPanel(y0, panelH, 'Total Measure nu (CDF)', cdfTotal, colors.text, true);

                            // Bottom panel: Components
                            var y1 = margin.t + panelH + 30;
                            drawComponentPanel(y1, panelH, cdfAC, cdfDisc, cdfSC);

                            function drawCDFPanel(py, ph, title, cdfData, col, showJumps) {
                                // Axes
                                ctx.strokeStyle = colors.muted;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(margin.l, py);
                                ctx.lineTo(margin.l, py + ph);
                                ctx.lineTo(margin.l + plotW, py + ph);
                                ctx.stroke();

                                // Title
                                ctx.fillStyle = colors.text;
                                ctx.font = '12px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText(title, margin.l + 5, py + 14);

                                // Plot
                                ctx.strokeStyle = col;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= nSamp; i++) {
                                    var px = margin.l + (i / nSamp) * plotW;
                                    var pyy = py + ph - cdfData[i] * ph;
                                    if (i === 0) ctx.moveTo(px, pyy);
                                    else ctx.lineTo(px, pyy);
                                }
                                ctx.stroke();

                                // Y-axis labels
                                ctx.fillStyle = colors.muted;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText('0', margin.l - 5, py + ph + 3);
                                ctx.fillText('1', margin.l - 5, py + 5);

                                // Show jumps
                                if (showJumps && wDisc > 0.01) {
                                    for (var k = 0; k < pointLocs.length; k++) {
                                        var px = margin.l + pointLocs[k] * plotW;
                                        ctx.strokeStyle = colors.red;
                                        ctx.lineWidth = 1;
                                        ctx.setLineDash([3, 3]);
                                        ctx.beginPath();
                                        ctx.moveTo(px, py);
                                        ctx.lineTo(px, py + ph);
                                        ctx.stroke();
                                        ctx.setLineDash([]);

                                        // Jump dot
                                        var idx = Math.round(pointLocs[k] * nSamp);
                                        if (idx > 0 && idx <= nSamp) {
                                            var jumpSize = wDisc * pointWeights[k];
                                            ctx.fillStyle = colors.red;
                                            ctx.beginPath();
                                            ctx.arc(px, py + ph - cdfTotal[idx] * ph, 4, 0, 2 * Math.PI);
                                            ctx.fill();
                                        }
                                    }
                                }
                            }

                            function drawComponentPanel(py, ph, acData, discData, scData) {
                                // Axes
                                ctx.strokeStyle = colors.muted;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(margin.l, py);
                                ctx.lineTo(margin.l, py + ph);
                                ctx.lineTo(margin.l + plotW, py + ph);
                                ctx.stroke();

                                ctx.fillStyle = colors.text;
                                ctx.font = '12px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('Decomposition Components', margin.l + 5, py + 14);

                                // AC component
                                ctx.strokeStyle = colors.blue;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                for (var i = 0; i <= nSamp; i++) {
                                    var px = margin.l + (i / nSamp) * plotW;
                                    var pyy = py + ph - acData[i] * ph;
                                    if (i === 0) ctx.moveTo(px, pyy);
                                    else ctx.lineTo(px, pyy);
                                }
                                ctx.stroke();

                                // Discrete component
                                ctx.strokeStyle = colors.red;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                for (var i = 0; i <= nSamp; i++) {
                                    var px = margin.l + (i / nSamp) * plotW;
                                    var pyy = py + ph - discData[i] * ph;
                                    if (i === 0) ctx.moveTo(px, pyy);
                                    else ctx.lineTo(px, pyy);
                                }
                                ctx.stroke();

                                // SC component
                                ctx.strokeStyle = colors.purple;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                for (var i = 0; i <= nSamp; i++) {
                                    var px = margin.l + (i / nSamp) * plotW;
                                    var pyy = py + ph - scData[i] * ph;
                                    if (i === 0) ctx.moveTo(px, pyy);
                                    else ctx.lineTo(px, pyy);
                                }
                                ctx.stroke();

                                // Legend
                                var legY = py + ph + 15;
                                ctx.font = '11px -apple-system, sans-serif';

                                ctx.fillStyle = colors.blue;
                                ctx.fillRect(margin.l, legY, 10, 10);
                                ctx.fillText(' AC (nu_ac << lambda)', margin.l + 14, legY + 9);

                                ctx.fillStyle = colors.red;
                                ctx.fillRect(margin.l + 170, legY, 10, 10);
                                ctx.fillText(' Discrete (nu_d perp lambda)', margin.l + 184, legY + 9);

                                ctx.fillStyle = colors.purple;
                                ctx.fillRect(margin.l + 380, legY, 10, 10);
                                ctx.fillText(' Sing. Cont. (nu_sc perp lambda)', margin.l + 394, legY + 9);

                                // Y-axis
                                ctx.fillStyle = colors.muted;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText('0', margin.l - 5, py + ph + 3);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(\\nu\\) be a finite Borel measure on \\(\\mathbb{R}\\) and let \\(F(x) = \\nu((-\\infty, x])\\) be its CDF. Show that the singular part \\(\\nu_s\\) with respect to Lebesgue measure is supported on the set where \\(F\\) is not differentiable or where \\(F\'(x) = 0\\).',
                    hint: 'The Lebesgue differentiation theorem says \\(F\'(x)\\) exists a.e. and equals the density of \\(\\nu_{ac}\\).',
                    solution: 'By the Lebesgue decomposition, \\(\\nu = \\nu_{ac} + \\nu_s\\) where \\(\\nu_{ac}(E) = \\int_E f\\,d\\lambda\\). By the Lebesgue differentiation theorem, \\(F\'(x) = f(x)\\) for \\(\\lambda\\)-a.e. \\(x\\). Since \\(\\nu_s \\perp \\lambda\\), there exists \\(S\\) with \\(\\lambda(S) = 0\\) and \\(\\nu_s(S^c) = 0\\). On \\(S^c\\), \\(\\nu\\) behaves like \\(\\nu_{ac}\\) and \\(F\'(x) = f(x)\\) exists for a.e. point. On \\(S\\), \\(F\\) may fail to be differentiable (as at point masses) or may have \\(F\' = 0\\) (as at singular continuous parts). So \\(\\nu_s\\) is supported on \\(S\\), which lies inside the set where \\(F\\) is not differentiable or has derivative zero.'
                },
                {
                    question: 'Verify the Lebesgue decomposition for the measure \\(\\nu = 2\\lambda|_{[0,1]} + 3\\delta_0 + \\delta_1\\) with respect to \\(\\mu = \\lambda\\) (Lebesgue measure on \\(\\mathbb{R}\\)). Identify \\(\\nu_{ac}\\) and \\(\\nu_s\\) and their density/support.',
                    hint: 'The density part integrates against Lebesgue measure. Point masses are singular.',
                    solution: 'The measure \\(\\nu\\) has three components. The part \\(2\\lambda|_{[0,1]}\\) has density \\(f(x) = 2 \\cdot \\mathbf{1}_{[0,1]}(x)\\) with respect to Lebesgue measure, so it is absolutely continuous. The parts \\(3\\delta_0\\) and \\(\\delta_1\\) are point masses, which are singular to Lebesgue measure (supported on \\(\\{0,1\\}\\), a set of Lebesgue measure zero). So \\(\\nu_{ac} = 2\\lambda|_{[0,1]}\\) with density \\(f(x) = 2 \\cdot \\mathbf{1}_{[0,1]}(x)\\), and \\(\\nu_s = 3\\delta_0 + \\delta_1\\), supported on \\(\\{0,1\\}\\).'
                },
                {
                    question: 'Prove uniqueness of the Lebesgue decomposition directly: if \\(\\nu = \\nu_1 + \\sigma_1 = \\nu_2 + \\sigma_2\\) with \\(\\nu_i \\ll \\mu\\) and \\(\\sigma_i \\perp \\mu\\) for \\(i = 1,2\\), then \\(\\nu_1 = \\nu_2\\) and \\(\\sigma_1 = \\sigma_2\\).',
                    hint: 'Show that \\(\\nu_1 - \\nu_2 = \\sigma_2 - \\sigma_1\\) is both absolutely continuous and singular to \\(\\mu\\).',
                    solution: 'From \\(\\nu_1 + \\sigma_1 = \\nu_2 + \\sigma_2\\), rearranging gives \\(\\nu_1 - \\nu_2 = \\sigma_2 - \\sigma_1\\) as signed measures. The left side: \\(\\nu_1 \\ll \\mu\\) and \\(\\nu_2 \\ll \\mu\\) imply \\(\\nu_1 - \\nu_2 \\ll \\mu\\). The right side: \\(\\sigma_1 \\perp \\mu\\) means there exists \\(A_1\\) with \\(\\mu(A_1) = 0\\), \\(\\sigma_1(A_1^c) = 0\\). Similarly \\(A_2\\) for \\(\\sigma_2\\). Then \\(\\sigma_2 - \\sigma_1\\) is supported on \\(A_1 \\cup A_2\\), which has \\(\\mu(A_1 \\cup A_2) = 0\\), so \\(\\sigma_2 - \\sigma_1 \\perp \\mu\\). A signed measure that is both \\(\\ll \\mu\\) and \\(\\perp \\mu\\) must be zero: if it lives on a \\(\\mu\\)-null set \\(N\\), then absolute continuity forces it to vanish on \\(N\\) as well. Hence \\(\\nu_1 = \\nu_2\\) and \\(\\sigma_1 = \\sigma_2\\).'
                },
                {
                    question: '(Exploration) Use the Lebesgue Decomposition Visualizer to set the singular continuous weight to 1 (and the others to 0). Describe the shape of the resulting CDF. Why does it look "staircase-like" but have no visible jumps?',
                    hint: 'This is the Cantor function (devil\'s staircase). It is continuous but increases only on the Cantor set.',
                    solution: 'With only the singular continuous component active, the CDF is the <em>Cantor function</em> (devil\'s staircase). It is continuous (no jumps, since there are no atoms), non-decreasing from 0 to 1, yet it has derivative zero almost everywhere (it is constant on each removed interval of the Cantor set construction). It increases only on the Cantor set, which has Lebesgue measure zero. This is the hallmark of a singular continuous measure: it assigns all its mass to a Lebesgue-null set, yet does so without concentrating on any single point. The "staircase" appearance comes from the self-similar structure: each plateau corresponds to a removed middle third.'
                }
            ]
        },

        // ============================================================
        // Section 4: The Radon-Nikodym Theorem
        // ============================================================
        {
            id: 'radon-nikodym-theorem',
            title: 'The Radon-Nikodym Theorem',
            content: `
                <div class="bridge section-bridge">
                    <p>The Lebesgue decomposition tells us that the absolutely continuous part \\(\\nu_{ac}\\) can be written as \\(\\int_E f\\,d\\mu\\) for some non-negative function \\(f\\). The Radon-Nikodym theorem makes this precise: whenever \\(\\nu \\ll \\mu\\) (and both measures are \\(\\sigma\\)-finite), there exists a measurable function \\(f\\), unique up to \\(\\mu\\)-a.e. equality, that serves as the "density" of \\(\\nu\\) with respect to \\(\\mu\\). This function \\(f = d\\nu/d\\mu\\) is the <strong>Radon-Nikodym derivative</strong>, and it is one of the most important objects in all of measure theory.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State the Radon-Nikodym theorem precisely, discuss the proof, establish uniqueness, and develop the chain rule for Radon-Nikodym derivatives. Understand the derivative as a likelihood ratio.</p>
                </div>

                <h2>Statement</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.14 (Radon-Nikodym)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu\\) and \\(\\nu\\) be \\(\\sigma\\)-finite measures on \\((X, \\mathcal{A})\\) with \\(\\nu \\ll \\mu\\). Then there exists a measurable function \\(f: X \\to [0, \\infty)\\) such that</p>
                        \\[\\nu(E) = \\int_E f\\,d\\mu \\quad \\text{for all } E \\in \\mathcal{A}.\\]
                        <p>The function \\(f\\) is unique \\(\\mu\\)-a.e.: if \\(g\\) also satisfies \\(\\nu(E) = \\int_E g\\,d\\mu\\) for all \\(E\\), then \\(f = g\\) \\(\\mu\\)-a.e.</p>
                        <p>We write \\(f = \\frac{d\\nu}{d\\mu}\\) and call it the <strong>Radon-Nikodym derivative</strong> of \\(\\nu\\) with respect to \\(\\mu\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Density as a Local Ratio)</div>
                    <div class="env-body">
                        <p>The Radon-Nikodym derivative \\(f(x) = \\frac{d\\nu}{d\\mu}(x)\\) measures, at each point \\(x\\), how much more (or less) mass \\(\\nu\\) places compared to \\(\\mu\\). If \\(f(x) = 3\\), then near \\(x\\), \\(\\nu\\) is "three times denser" than \\(\\mu\\). This is exactly the notion of a probability density function: the PDF of a continuous random variable is the Radon-Nikodym derivative of its distribution with respect to Lebesgue measure.</p>
                        <p>In the language of probability: if \\(P\\) and \\(Q\\) are probability measures with \\(Q \\ll P\\), then \\(dQ/dP\\) is the <strong>likelihood ratio</strong>. Observing data \\(x\\), the ratio \\(\\frac{dQ}{dP}(x)\\) tells you how much more likely \\(x\\) is under \\(Q\\) than under \\(P\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (\\(\\sigma\\)-Finiteness Is Essential)</div>
                    <div class="env-body">
                        <p>The Radon-Nikodym theorem fails without \\(\\sigma\\)-finiteness. Let \\(\\mu\\) be counting measure on \\(([0,1], \\mathcal{B}([0,1]))\\) and \\(\\nu = \\lambda\\) (Lebesgue measure). Then \\(\\nu \\ll \\mu\\) (since \\(\\mu(E) = 0\\) only for \\(E = \\emptyset\\)). But no density \\(f\\) satisfies \\(\\lambda(E) = \\int_E f\\,d\\mu = \\sum_{x \\in E} f(x)\\) for all Borel \\(E\\), because the right side counts values of \\(f\\) while the left side is Lebesgue measure. Here \\(\\mu\\) is not \\(\\sigma\\)-finite.</p>
                    </div>
                </div>

                <h2>Proof Sketch</h2>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 11.14 (Sketch)</div>
                    <div class="env-body">
                        <p>The proof follows from the Lebesgue decomposition (Theorem 11.11). Since \\(\\nu \\ll \\mu\\), the Lebesgue decomposition gives \\(\\nu = \\nu_{ac} + \\nu_s\\) with \\(\\nu_{ac} \\ll \\mu\\) and \\(\\nu_s \\perp \\mu\\). But \\(\\nu_s \\ll \\nu \\ll \\mu\\), and \\(\\nu_s \\perp \\mu\\), so by Proposition 11.10(2), \\(\\nu_s = 0\\). Therefore \\(\\nu = \\nu_{ac}\\) and the density \\(f\\) from the decomposition serves as \\(d\\nu/d\\mu\\).</p>
                        <p><strong>Uniqueness:</strong> If \\(\\int_E f\\,d\\mu = \\int_E g\\,d\\mu\\) for all \\(E\\), then \\(\\int_E (f-g)\\,d\\mu = 0\\) for all \\(E\\). Taking \\(E = \\{f > g\\}\\) gives \\(\\int_{\\{f>g\\}} (f-g)\\,d\\mu = 0\\), which forces \\(f \\leq g\\) \\(\\mu\\)-a.e. By symmetry, \\(g \\leq f\\) \\(\\mu\\)-a.e., so \\(f = g\\) \\(\\mu\\)-a.e.</p>
                    </div>
                </div>

                <h2>Properties of the Radon-Nikodym Derivative</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.15 (Integration with Radon-Nikodym Derivatives)</div>
                    <div class="env-body">
                        <p>If \\(\\nu \\ll \\mu\\) with \\(f = d\\nu/d\\mu\\), then for any measurable \\(g: X \\to [0, \\infty]\\) (or any \\(g \\in L^1(\\nu)\\)),</p>
                        \\[\\int_X g\\,d\\nu = \\int_X g \\cdot f\\,d\\mu.\\]
                        <p>This is the <strong>change of measure formula</strong>: to compute integrals with respect to \\(\\nu\\), multiply by the density and integrate with respect to \\(\\mu\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 11.15</div>
                    <div class="env-body">
                        <p>For \\(g = \\mathbf{1}_E\\): \\(\\int \\mathbf{1}_E\\,d\\nu = \\nu(E) = \\int_E f\\,d\\mu = \\int \\mathbf{1}_E \\cdot f\\,d\\mu\\). By linearity, the result extends to simple functions. By the Monotone Convergence Theorem (approximating \\(g\\) by increasing simple functions), the result holds for all non-negative measurable \\(g\\). The \\(L^1\\) case follows by writing \\(g = g^+ - g^-\\).</p>
                    </div>
                </div>

                <h2>The Chain Rule</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.16 (Chain Rule for Radon-Nikodym Derivatives)</div>
                    <div class="env-body">
                        <p>Let \\(\\rho \\ll \\nu \\ll \\mu\\) be \\(\\sigma\\)-finite measures on \\((X, \\mathcal{A})\\). Then</p>
                        \\[\\frac{d\\rho}{d\\mu} = \\frac{d\\rho}{d\\nu} \\cdot \\frac{d\\nu}{d\\mu} \\quad \\mu\\text{-a.e.}\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of the Chain Rule</div>
                    <div class="env-body">
                        <p>Let \\(f = d\\rho/d\\nu\\) and \\(g = d\\nu/d\\mu\\). For any \\(E \\in \\mathcal{A}\\),</p>
                        \\[\\rho(E) = \\int_E f\\,d\\nu = \\int_E f \\cdot g\\,d\\mu\\]
                        <p>where the second equality uses Theorem 11.15. Since \\(\\rho(E) = \\int_E \\frac{d\\rho}{d\\mu}\\,d\\mu\\) by definition, uniqueness of the Radon-Nikodym derivative gives \\(\\frac{d\\rho}{d\\mu} = f \\cdot g = \\frac{d\\rho}{d\\nu} \\cdot \\frac{d\\nu}{d\\mu}\\) \\(\\mu\\)-a.e.</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 11.17 (Reciprocal Rule)</div>
                    <div class="env-body">
                        <p>If \\(\\nu \\ll \\mu\\) and \\(\\mu \\ll \\nu\\) (i.e., \\(\\mu \\sim \\nu\\), the measures are equivalent), then</p>
                        \\[\\frac{d\\mu}{d\\nu} = \\left(\\frac{d\\nu}{d\\mu}\\right)^{-1} \\quad \\mu\\text{-a.e. (equivalently, } \\nu\\text{-a.e.).}\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Apply the chain rule with \\(\\rho = \\mu\\): \\(\\frac{d\\mu}{d\\mu} = \\frac{d\\mu}{d\\nu} \\cdot \\frac{d\\nu}{d\\mu}\\). Since \\(\\frac{d\\mu}{d\\mu} = 1\\) a.e., we get \\(\\frac{d\\mu}{d\\nu} \\cdot \\frac{d\\nu}{d\\mu} = 1\\) a.e.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.18 (Chain Rule for Normal Distributions)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu = \\lambda\\) (Lebesgue), \\(\\nu = \\text{N}(0,1)\\), and \\(\\rho = \\text{N}(\\theta, 1)\\). Then:</p>
                        <ul>
                            <li>\\(\\frac{d\\nu}{d\\mu}(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2}\\) (standard normal density)</li>
                            <li>\\(\\frac{d\\rho}{d\\mu}(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-(x-\\theta)^2/2}\\) (shifted normal density)</li>
                            <li>\\(\\frac{d\\rho}{d\\nu}(x) = \\frac{d\\rho/d\\mu}{d\\nu/d\\mu}(x) = e^{\\theta x - \\theta^2/2}\\) (the <strong>likelihood ratio</strong>)</li>
                        </ul>
                        <p>The last expression is the exponential tilt familiar from hypothesis testing: the Neyman-Pearson lemma says the most powerful test of \\(H_0: \\theta = 0\\) vs. \\(H_1: \\theta = \\theta_1\\) rejects when this likelihood ratio is large.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="rn-derivative-plotter"></div>

                <div class="viz-placeholder" data-viz="chain-rule-diagram"></div>

                <p><strong>Reference alignment:</strong> Folland 3.2; Royden-Fitzpatrick 18.2; Stein-Shakarchi III.3.2; Billingsley 32.</p>
            `,
            visualizations: [
                {
                    id: 'rn-derivative-plotter',
                    title: 'Radon-Nikodym Derivative Plotter',
                    description: 'Display the Radon-Nikodym derivative dnu/dmu for two probability distributions. Verify that integrating the derivative over any set recovers nu.',
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
                            yellow: '#d29922'
                        };

                        var muMean = 0;
                        var muSigma = 1.0;
                        var nuMean = 1.0;
                        var nuSigma = 0.8;
                        var regionLeft = -0.5;
                        var regionRight = 1.5;

                        VizEngine.createSlider(controls, 'nu mean', -3, 3, nuMean, 0.1, function(v) {
                            nuMean = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'nu sigma', 0.2, 3, nuSigma, 0.1, function(v) {
                            nuSigma = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Integration region left', -4, 4, regionLeft, 0.1, function(v) {
                            regionLeft = v;
                            if (regionLeft >= regionRight) regionRight = regionLeft + 0.1;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Integration region right', -4, 4, regionRight, 0.1, function(v) {
                            regionRight = v;
                            if (regionRight <= regionLeft) regionLeft = regionRight - 0.1;
                            draw();
                        });

                        function normalPDF(x, mu, sigma) {
                            return Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2)) / (sigma * Math.sqrt(2 * Math.PI));
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { l: 55, r: 30, t: 50, b: 50 };
                            var plotW = w - margin.l - margin.r;
                            var panelH = (h - margin.t - margin.b - 40) / 2;

                            var xMin = -4, xMax = 4;
                            var nPts = 500;

                            function sx(x) { return margin.l + ((x - xMin) / (xMax - xMin)) * plotW; }

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Radon-Nikodym Derivative: dnu/dmu', w / 2, 22);

                            // Top panel: densities
                            var py1 = margin.t;
                            var maxDens = 0;
                            for (var i = 0; i <= nPts; i++) {
                                var x = xMin + (i / nPts) * (xMax - xMin);
                                var d1 = normalPDF(x, muMean, muSigma);
                                var d2 = normalPDF(x, nuMean, nuSigma);
                                if (d1 > maxDens) maxDens = d1;
                                if (d2 > maxDens) maxDens = d2;
                            }
                            maxDens *= 1.1;

                            function sy1(y) { return py1 + panelH - (y / maxDens) * panelH; }

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.l, py1);
                            ctx.lineTo(margin.l, py1 + panelH);
                            ctx.lineTo(margin.l + plotW, py1 + panelH);
                            ctx.stroke();

                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Densities dmu/dlambda and dnu/dlambda', margin.l + 5, py1 + 14);

                            // Shade integration region on top panel
                            ctx.fillStyle = 'rgba(63, 185, 160, 0.15)';
                            var rl = Math.max(sx(regionLeft), margin.l);
                            var rr = Math.min(sx(regionRight), margin.l + plotW);
                            ctx.fillRect(rl, py1, rr - rl, panelH);

                            // Plot mu density
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= nPts; i++) {
                                var x = xMin + (i / nPts) * (xMax - xMin);
                                var y = normalPDF(x, muMean, muSigma);
                                if (i === 0) ctx.moveTo(sx(x), sy1(y));
                                else ctx.lineTo(sx(x), sy1(y));
                            }
                            ctx.stroke();

                            // Plot nu density
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= nPts; i++) {
                                var x = xMin + (i / nPts) * (xMax - xMin);
                                var y = normalPDF(x, nuMean, nuSigma);
                                if (i === 0) ctx.moveTo(sx(x), sy1(y));
                                else ctx.lineTo(sx(x), sy1(y));
                            }
                            ctx.stroke();

                            // Bottom panel: RN derivative
                            var py2 = margin.t + panelH + 40;
                            var maxRN = 0.01;
                            for (var i = 0; i <= nPts; i++) {
                                var x = xMin + (i / nPts) * (xMax - xMin);
                                var dmu = normalPDF(x, muMean, muSigma);
                                if (dmu > 1e-10) {
                                    var rn = normalPDF(x, nuMean, nuSigma) / dmu;
                                    if (rn > maxRN && rn < 50) maxRN = rn;
                                }
                            }
                            maxRN = Math.min(maxRN * 1.2, 50);

                            function sy2(y) { return py2 + panelH - (Math.min(y, maxRN) / maxRN) * panelH; }

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.l, py2);
                            ctx.lineTo(margin.l, py2 + panelH);
                            ctx.lineTo(margin.l + plotW, py2 + panelH);
                            ctx.stroke();

                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Radon-Nikodym derivative dnu/dmu = (dnu/dlambda) / (dmu/dlambda)', margin.l + 5, py2 + 14);

                            // Shade integration region on bottom panel
                            ctx.fillStyle = 'rgba(63, 185, 160, 0.15)';
                            ctx.fillRect(rl, py2, rr - rl, panelH);

                            // Plot RN derivative
                            ctx.strokeStyle = colors.teal;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= nPts; i++) {
                                var x = xMin + (i / nPts) * (xMax - xMin);
                                var dmu = normalPDF(x, muMean, muSigma);
                                if (dmu > 1e-10) {
                                    var rn = normalPDF(x, nuMean, nuSigma) / dmu;
                                    if (!started) { ctx.moveTo(sx(x), sy2(rn)); started = true; }
                                    else ctx.lineTo(sx(x), sy2(rn));
                                }
                            }
                            ctx.stroke();

                            // Reference line at 1
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            ctx.moveTo(margin.l, sy2(1));
                            ctx.lineTo(margin.l + plotW, sy2(1));
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('1', margin.l - 5, sy2(1) + 3);

                            // Compute nu(E) by integrating RN derivative against mu
                            var dx = (xMax - xMin) / nPts;
                            var nuE_direct = 0;
                            var nuE_viarn = 0;
                            for (var i = 0; i < nPts; i++) {
                                var x = xMin + (i + 0.5) * dx;
                                if (x >= regionLeft && x <= regionRight) {
                                    nuE_direct += normalPDF(x, nuMean, nuSigma) * dx;
                                    var dmu = normalPDF(x, muMean, muSigma);
                                    if (dmu > 1e-10) {
                                        nuE_viarn += (normalPDF(x, nuMean, nuSigma) / dmu) * dmu * dx;
                                    }
                                }
                            }

                            // Verification text
                            ctx.fillStyle = colors.text;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            var verifyText = 'Region [' + regionLeft.toFixed(1) + ', ' + regionRight.toFixed(1) + ']:  ';
                            verifyText += 'nu(E) = ' + nuE_direct.toFixed(4) + '  |  ';
                            verifyText += 'integral (dnu/dmu) dmu = ' + nuE_viarn.toFixed(4);
                            ctx.fillText(verifyText, w / 2, h - 10);

                            // Legend
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = colors.blue;
                            ctx.fillText('mu = N(' + muMean + ', ' + muSigma.toFixed(1) + ')', margin.l, py1 - 5);
                            ctx.fillStyle = colors.orange;
                            ctx.fillText('nu = N(' + nuMean.toFixed(1) + ', ' + nuSigma.toFixed(1) + ')', margin.l + 150, py1 - 5);
                            ctx.fillStyle = colors.teal;
                            ctx.fillText('dnu/dmu', margin.l + 330, py1 - 5);
                        }

                        draw();
                    }
                },
                {
                    id: 'chain-rule-diagram',
                    title: 'Chain Rule Diagram',
                    description: 'Visualize three measures connected by absolute continuity. The chain rule says the composite RN derivative is the product of the two intermediate derivatives.',
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
                            yellow: '#d29922'
                        };

                        // Three normal distributions: mu, nu, rho
                        var nuMean = 0.5;
                        var rhoMean = 1.5;

                        VizEngine.createSlider(controls, 'nu mean (middle measure)', -2, 2, nuMean, 0.1, function(v) {
                            nuMean = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'rho mean (top measure)', -2, 3, rhoMean, 0.1, function(v) {
                            rhoMean = v;
                            draw();
                        });

                        function normalPDF(x, mu, sigma) {
                            return Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2)) / (sigma * Math.sqrt(2 * Math.PI));
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { l: 55, r: 30, t: 50, b: 70 };
                            var plotW = w - margin.l - margin.r;
                            var plotH = h - margin.t - margin.b;

                            var xMin = -4, xMax = 5;
                            var nPts = 400;
                            var sigma = 1.0;

                            function sx(x) { return margin.l + ((x - xMin) / (xMax - xMin)) * plotW; }

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Chain Rule: d(rho)/d(mu) = d(rho)/d(nu) * d(nu)/d(mu)', w / 2, 22);

                            // Compute max for RN derivatives
                            var maxRN = 0.01;
                            for (var i = 0; i <= nPts; i++) {
                                var x = xMin + (i / nPts) * (xMax - xMin);
                                var dmu = normalPDF(x, 0, sigma);
                                if (dmu > 1e-10) {
                                    var rn1 = normalPDF(x, nuMean, sigma) / dmu;
                                    var rn2 = normalPDF(x, rhoMean, sigma) / normalPDF(x, nuMean, sigma);
                                    var rnDirect = normalPDF(x, rhoMean, sigma) / dmu;
                                    var rnProduct = rn1 * rn2;
                                    var m = Math.max(rn1, rn2, rnDirect, rnProduct);
                                    if (m > maxRN && m < 100) maxRN = m;
                                }
                            }
                            maxRN = Math.min(maxRN * 1.15, 100);

                            function sy(y) { return margin.t + plotH - (Math.min(y, maxRN) / maxRN) * plotH; }

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.l, margin.t);
                            ctx.lineTo(margin.l, margin.t + plotH);
                            ctx.lineTo(margin.l + plotW, margin.t + plotH);
                            ctx.stroke();

                            // Reference line at 1
                            ctx.strokeStyle = colors.muted;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath();
                            ctx.moveTo(margin.l, sy(1));
                            ctx.lineTo(margin.l + plotW, sy(1));
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('1', margin.l - 5, sy(1) + 3);

                            // Plot dnu/dmu
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= nPts; i++) {
                                var x = xMin + (i / nPts) * (xMax - xMin);
                                var dmu = normalPDF(x, 0, sigma);
                                if (dmu > 1e-10) {
                                    var rn = normalPDF(x, nuMean, sigma) / dmu;
                                    if (!started) { ctx.moveTo(sx(x), sy(rn)); started = true; }
                                    else ctx.lineTo(sx(x), sy(rn));
                                }
                            }
                            ctx.stroke();

                            // Plot drho/dnu
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            started = false;
                            for (var i = 0; i <= nPts; i++) {
                                var x = xMin + (i / nPts) * (xMax - xMin);
                                var dnu = normalPDF(x, nuMean, sigma);
                                if (dnu > 1e-10) {
                                    var rn = normalPDF(x, rhoMean, sigma) / dnu;
                                    if (!started) { ctx.moveTo(sx(x), sy(rn)); started = true; }
                                    else ctx.lineTo(sx(x), sy(rn));
                                }
                            }
                            ctx.stroke();

                            // Plot drho/dmu (direct)
                            ctx.strokeStyle = colors.green;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            started = false;
                            for (var i = 0; i <= nPts; i++) {
                                var x = xMin + (i / nPts) * (xMax - xMin);
                                var dmu = normalPDF(x, 0, sigma);
                                if (dmu > 1e-10) {
                                    var rn = normalPDF(x, rhoMean, sigma) / dmu;
                                    if (!started) { ctx.moveTo(sx(x), sy(rn)); started = true; }
                                    else ctx.lineTo(sx(x), sy(rn));
                                }
                            }
                            ctx.stroke();

                            // Plot product (dashed, should overlap green)
                            ctx.strokeStyle = colors.purple;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            started = false;
                            for (var i = 0; i <= nPts; i++) {
                                var x = xMin + (i / nPts) * (xMax - xMin);
                                var dmu = normalPDF(x, 0, sigma);
                                var dnu = normalPDF(x, nuMean, sigma);
                                if (dmu > 1e-10 && dnu > 1e-10) {
                                    var rn1 = dnu / dmu;
                                    var rn2 = normalPDF(x, rhoMean, sigma) / dnu;
                                    var prod = rn1 * rn2;
                                    if (!started) { ctx.moveTo(sx(x), sy(prod)); started = true; }
                                    else ctx.lineTo(sx(x), sy(prod));
                                }
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Legend
                            var legY = h - 55;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';

                            ctx.fillStyle = colors.blue;
                            ctx.fillRect(margin.l, legY, 12, 3);
                            ctx.fillText('dnu/dmu', margin.l + 16, legY + 4);

                            ctx.fillStyle = colors.orange;
                            ctx.fillRect(margin.l + 100, legY, 12, 3);
                            ctx.fillText('drho/dnu', margin.l + 116, legY + 4);

                            ctx.fillStyle = colors.green;
                            ctx.fillRect(margin.l + 210, legY, 12, 3);
                            ctx.fillText('drho/dmu (direct)', margin.l + 226, legY + 4);

                            ctx.fillStyle = colors.purple;
                            ctx.fillRect(margin.l + 370, legY, 12, 3);
                            ctx.fillText('product (chain rule)', margin.l + 386, legY + 4);

                            ctx.fillStyle = colors.teal;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('mu = N(0,1), nu = N(' + nuMean.toFixed(1) + ',1), rho = N(' + rhoMean.toFixed(1) + ',1)', w / 2, h - 15);
                            ctx.fillStyle = colors.muted;
                            ctx.fillText('Green (direct) and purple (product) curves overlap, confirming the chain rule.', w / 2, h - 2);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(P\\) and \\(Q\\) be probability measures with \\(Q \\ll P\\) and let \\(L = dQ/dP\\). Show that \\(E_P[L] = 1\\).',
                    hint: 'Integrate \\(L\\) over the whole space with respect to \\(P\\).',
                    solution: '\\(E_P[L] = \\int_X L\\,dP = \\int_X \\frac{dQ}{dP}\\,dP = Q(X) = 1\\). The Radon-Nikodym derivative, viewed as a random variable under \\(P\\), has expectation 1. This is the fundamental property of likelihood ratios and is the basis for importance sampling.'
                },
                {
                    question: 'Let \\(P = \\text{N}(0,1)\\) and \\(Q = \\text{N}(\\mu, \\sigma^2)\\) on \\((\\mathbb{R}, \\mathcal{B})\\). Compute \\(dQ/dP\\) explicitly.',
                    hint: 'Divide the densities. Simplify the ratio of the two exponential expressions.',
                    solution: '\\(\\frac{dQ}{dP}(x) = \\frac{(2\\pi\\sigma^2)^{-1/2} e^{-(x-\\mu)^2/(2\\sigma^2)}}{(2\\pi)^{-1/2} e^{-x^2/2}} = \\frac{1}{\\sigma} \\exp\\!\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2} + \\frac{x^2}{2}\\right) = \\frac{1}{\\sigma} \\exp\\!\\left(\\frac{x^2(\\sigma^2 - 1) + 2\\mu x - \\mu^2}{2\\sigma^2}\\right)\\). For \\(\\sigma = 1\\), this simplifies to \\(\\exp(\\mu x - \\mu^2/2)\\), the familiar exponential tilt.'
                },
                {
                    question: 'Prove the uniqueness of the Radon-Nikodym derivative: if \\(\\int_E f\\,d\\mu = \\int_E g\\,d\\mu\\) for all \\(E \\in \\mathcal{A}\\), then \\(f = g\\) \\(\\mu\\)-a.e.',
                    hint: 'Consider the set \\(E = \\{x : f(x) > g(x)\\}\\).',
                    solution: 'Let \\(E = \\{f > g\\}\\). Then \\(0 = \\int_E f\\,d\\mu - \\int_E g\\,d\\mu = \\int_E (f - g)\\,d\\mu\\). Since \\(f - g > 0\\) on \\(E\\), this integral being zero forces \\(\\mu(E) = 0\\) (a non-negative function with zero integral on a set must vanish a.e. on that set, meaning the set where it is strictly positive has measure zero). Similarly, \\(\\mu(\\{g > f\\}) = 0\\). Therefore \\(f = g\\) \\(\\mu\\)-a.e.'
                },
                {
                    question: 'Verify the chain rule for \\(\\rho \\ll \\nu \\ll \\mu\\) in the following concrete case: \\(\\mu = \\lambda\\) on \\([0,1]\\), \\(d\\nu/d\\mu = 2x\\), and \\(d\\rho/d\\nu = 3x^2\\). Compute \\(d\\rho/d\\mu\\) both by the chain rule and by directly computing \\(\\rho\\).',
                    hint: 'Chain rule: multiply the two derivatives. Direct: \\(\\rho(E) = \\int_E 3x^2 \\cdot 2x\\,dx\\).',
                    solution: 'By the chain rule: \\(\\frac{d\\rho}{d\\mu}(x) = \\frac{d\\rho}{d\\nu}(x) \\cdot \\frac{d\\nu}{d\\mu}(x) = 3x^2 \\cdot 2x = 6x^3\\). Direct verification: \\(\\rho(E) = \\int_E \\frac{d\\rho}{d\\nu}\\,d\\nu = \\int_E 3x^2 \\cdot 2x\\,d\\lambda = \\int_E 6x^3\\,d\\lambda\\). So \\(d\\rho/d\\mu = 6x^3\\), confirming the chain rule. As a sanity check: \\(\\rho([0,1]) = \\int_0^1 6x^3\\,dx = 6/4 = 3/2\\).'
                }
            ]
        },

        // ============================================================
        // Section 5: Applications
        // ============================================================
        {
            id: 'applications',
            title: 'Applications',
            content: `
                <div class="bridge section-bridge">
                    <p>The Radon-Nikodym theorem is not merely an abstract existence result; it is the engine behind some of the most important constructions in probability theory, statistics, and information theory. In this section, we explore four major applications: conditional expectation, change of variables, likelihood ratios, and the Kullback-Leibler divergence.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> See how the Radon-Nikodym theorem underpins conditional expectation, the change-of-variable formula, Bayesian updating via likelihood ratios, and the information-theoretic KL divergence. Each application illustrates a different facet of the density concept.</p>
                </div>

                <h2>Application 1: Conditional Expectation</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Conditional Expectation as a Radon-Nikodym Derivative)</div>
                    <div class="env-body">
                        <p>Suppose you observe partial information about a random experiment. Conditional expectation answers: "given what you have observed, what is the best prediction of a quantity of interest?" The Radon-Nikodym theorem provides the rigorous foundation. The key idea: define a new measure by \\(\\nu(A) = E[X \\cdot \\mathbf{1}_A]\\) (restricted to the sub-\\(\\sigma\\)-algebra of your observations). This measure is absolutely continuous with respect to \\(P\\) restricted to the same sub-algebra, and the Radon-Nikodym derivative is exactly the conditional expectation \\(E[X \\mid \\mathcal{G}]\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.19 (Conditional Expectation)</div>
                    <div class="env-body">
                        <p>Let \\((\\Omega, \\mathcal{F}, P)\\) be a probability space, \\(X \\in L^1(P)\\), and \\(\\mathcal{G} \\subseteq \\mathcal{F}\\) a sub-\\(\\sigma\\)-algebra. The <strong>conditional expectation</strong> \\(E[X \\mid \\mathcal{G}]\\) is the (\\(P\\)-a.s. unique) \\(\\mathcal{G}\\)-measurable function satisfying</p>
                        \\[\\int_G E[X \\mid \\mathcal{G}]\\,dP = \\int_G X\\,dP \\quad \\text{for all } G \\in \\mathcal{G}.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.20 (Existence via Radon-Nikodym)</div>
                    <div class="env-body">
                        <p>Conditional expectation exists and is unique \\(P\\)-a.s. The proof is a direct application of the Radon-Nikodym theorem.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Existence of Conditional Expectation)</div>
                    <div class="env-body">
                        <p>First, assume \\(X \\geq 0\\). Define the measure \\(\\nu(G) = \\int_G X\\,dP\\) for \\(G \\in \\mathcal{G}\\). Since \\(P(G) = 0 \\Rightarrow \\int_G X\\,dP = 0\\), we have \\(\\nu \\ll P|_{\\mathcal{G}}\\) (the restriction of \\(P\\) to \\(\\mathcal{G}\\)). Both are \\(\\sigma\\)-finite on \\((\\Omega, \\mathcal{G})\\) (since \\(P\\) is a probability measure). By the Radon-Nikodym theorem, there exists a \\(\\mathcal{G}\\)-measurable function \\(f \\geq 0\\) with \\(\\nu(G) = \\int_G f\\,dP\\) for all \\(G \\in \\mathcal{G}\\). This \\(f\\) is \\(E[X \\mid \\mathcal{G}]\\). For general \\(X \\in L^1\\), apply to \\(X^+\\) and \\(X^-\\) separately and define \\(E[X \\mid \\mathcal{G}] = E[X^+ \\mid \\mathcal{G}] - E[X^- \\mid \\mathcal{G}]\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why This Matters)</div>
                    <div class="env-body">
                        <p>Before this construction, "conditional expectation given a \\(\\sigma\\)-algebra" was undefined. Kolmogorov's original formulation of conditional probability via the Radon-Nikodym theorem (1933) was a watershed moment in probability theory: it freed conditioning from the constraint of conditioning on events of positive probability and made the theory of stochastic processes possible.</p>
                    </div>
                </div>

                <h2>Application 2: Change of Variables</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.21 (Abstract Change of Variables)</div>
                    <div class="env-body">
                        <p>Let \\(T: (X, \\mathcal{A}) \\to (Y, \\mathcal{B})\\) be measurable and let \\(\\mu\\) be a measure on \\(X\\). The <strong>pushforward measure</strong> \\(T_*\\mu\\) is defined by \\(T_*\\mu(B) = \\mu(T^{-1}(B))\\). If \\(T_*\\mu \\ll \\nu\\) for some measure \\(\\nu\\) on \\(Y\\), then for any measurable \\(g: Y \\to [0, \\infty]\\),</p>
                        \\[\\int_Y g\\,d(T_*\\mu) = \\int_X g \\circ T\\,d\\mu = \\int_Y g \\cdot \\frac{d(T_*\\mu)}{d\\nu}\\,d\\nu.\\]
                        <p>When \\(T\\) is a diffeomorphism and \\(\\mu, \\nu\\) are Lebesgue measure, the Radon-Nikodym derivative \\(d(T_*\\mu)/d\\nu\\) is \\(|\\det DT^{-1}|\\), recovering the classical Jacobian formula.</p>
                    </div>
                </div>

                <h2>Application 3: Likelihood Ratios and Bayesian Updating</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Radon-Nikodym Derivative as a Likelihood Ratio)</div>
                    <div class="env-body">
                        <p>Suppose a scientist has two hypotheses, \\(H_0\\) and \\(H_1\\), which predict data distributions \\(P_0\\) and \\(P_1\\) respectively. If \\(P_1 \\ll P_0\\), the Radon-Nikodym derivative \\(L(x) = dP_1/dP_0(x)\\) is the <strong>likelihood ratio</strong>. It answers: "how many times more likely is the observed data \\(x\\) under \\(H_1\\) compared to \\(H_0\\)?"</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.22 (Bayes' Rule via Radon-Nikodym)</div>
                    <div class="env-body">
                        <p>Let \\(P_0\\) and \\(P_1\\) be probability measures on \\((\\Omega, \\mathcal{F})\\) with \\(P_1 \\ll P_0\\). Let \\(L = dP_1/dP_0\\). Given prior probabilities \\(\\pi_0, \\pi_1\\) with \\(\\pi_0 + \\pi_1 = 1\\), define the mixture \\(P = \\pi_0 P_0 + \\pi_1 P_1\\). The <strong>posterior probability</strong> of \\(H_1\\) given observation \\(x\\) is</p>
                        \\[P(H_1 \\mid x) = \\frac{\\pi_1 L(x)}{\\pi_0 + \\pi_1 L(x)}.\\]
                        <p>This is Bayes' rule, derived purely from the Radon-Nikodym theorem.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.23 (Bayesian Updating with Normal Data)</div>
                    <div class="env-body">
                        <p>Let \\(P_0 = \\text{N}(0, 1)\\) and \\(P_1 = \\text{N}(\\theta, 1)\\) for some \\(\\theta > 0\\). The likelihood ratio is</p>
                        \\[L(x) = \\frac{dP_1}{dP_0}(x) = \\exp\\!\\left(\\theta x - \\frac{\\theta^2}{2}\\right).\\]
                        <p>With equal priors (\\(\\pi_0 = \\pi_1 = 1/2\\)), the posterior probability of \\(H_1\\) is</p>
                        \\[P(H_1 \\mid x) = \\frac{e^{\\theta x - \\theta^2/2}}{1 + e^{\\theta x - \\theta^2/2}} = \\sigma\\!\\left(\\theta x - \\frac{\\theta^2}{2}\\right)\\]
                        <p>where \\(\\sigma(t) = 1/(1+e^{-t})\\) is the logistic function. The posterior is a logistic function of the sufficient statistic \\(x\\). This is a manifestation of the exponential family structure.</p>
                    </div>
                </div>

                <h2>Application 4: Kullback-Leibler Divergence</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.24 (KL Divergence)</div>
                    <div class="env-body">
                        <p>Let \\(Q \\ll P\\) be probability measures on \\((\\Omega, \\mathcal{F})\\). The <strong>Kullback-Leibler divergence</strong> (or relative entropy) of \\(Q\\) from \\(P\\) is</p>
                        \\[D_{\\mathrm{KL}}(Q \\| P) = \\int \\log\\frac{dQ}{dP}\\,dQ = E_Q\\!\\left[\\log \\frac{dQ}{dP}\\right].\\]
                        <p>If \\(Q\\) is not absolutely continuous with respect to \\(P\\), we define \\(D_{\\mathrm{KL}}(Q \\| P) = +\\infty\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.25 (Gibbs' Inequality)</div>
                    <div class="env-body">
                        <p>\\(D_{\\mathrm{KL}}(Q \\| P) \\geq 0\\) for all \\(Q, P\\), with equality if and only if \\(Q = P\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Gibbs' Inequality</div>
                    <div class="env-body">
                        <p>Let \\(L = dQ/dP\\). By Jensen's inequality applied to the convex function \\(t \\mapsto -\\log t\\),</p>
                        \\[D_{\\mathrm{KL}}(Q \\| P) = E_Q[-\\log(1/L)] = -E_Q[\\log(1/L)] \\geq -\\log E_Q[1/L].\\]
                        <p>Now \\(E_Q[1/L] = \\int \\frac{1}{L}\\,dQ = \\int \\frac{1}{L} \\cdot L\\,dP = \\int dP = 1\\), so \\(D_{\\mathrm{KL}}(Q \\| P) \\geq -\\log 1 = 0\\). Equality holds iff \\(1/L\\) is constant \\(Q\\)-a.s., i.e., \\(L = 1\\) \\(Q\\)-a.s., meaning \\(Q = P\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Connections)</div>
                    <div class="env-body">
                        <p>The KL divergence is the central object linking measure theory to information theory and statistical inference:</p>
                        <ul>
                            <li><strong>Information geometry:</strong> \\(D_{\\mathrm{KL}}\\) is the canonical divergence on a statistical manifold. Its Hessian at \\(Q = P\\) recovers the Fisher information metric \\(g_{ij} = E_P[\\partial_i \\log p \\cdot \\partial_j \\log p]\\).</li>
                            <li><strong>Maximum likelihood:</strong> Minimizing \\(D_{\\mathrm{KL}}(P_{\\text{true}} \\| P_\\theta)\\) over \\(\\theta\\) is equivalent to maximizing the expected log-likelihood.</li>
                            <li><strong>Hypothesis testing:</strong> By Stein's lemma, the KL divergence governs the exponential rate of decay of Type II error in the Neyman-Pearson framework.</li>
                            <li><strong>Statistical mechanics:</strong> \\(D_{\\mathrm{KL}}(Q \\| P)\\) is the free energy difference when \\(P\\) is the Boltzmann distribution, connecting the Radon-Nikodym theorem to thermodynamics.</li>
                        </ul>
                    </div>
                </div>

                <h2>Summary: The Radon-Nikodym Theorem in Perspective</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Big Picture)</div>
                    <div class="env-body">
                        <p>The Radon-Nikodym theorem and Lebesgue decomposition together tell a complete story about the relationship between measures:</p>
                        <ul>
                            <li>Every measure decomposes into an absolutely continuous part and a singular part (Lebesgue decomposition).</li>
                            <li>The absolutely continuous part is characterized by a density function (Radon-Nikodym derivative).</li>
                            <li>This density obeys a chain rule, making it behave like a genuine derivative.</li>
                            <li>In probability, the density is a likelihood ratio; in statistics, it is the foundation of sufficiency, conditioning, and inference; in information theory, it defines divergence and entropy.</li>
                        </ul>
                        <p>These results, together with the convergence theorems of Chapter 7, form the technical backbone of modern probability theory and mathematical statistics.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 3.2-3.3; Royden-Fitzpatrick 18; Billingsley 32-33; Stein-Shakarchi III.3; Williams Ch. 10.</p>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Let \\(X\\) be a random variable with \\(E[|X|] < \\infty\\) on \\((\\Omega, \\mathcal{F}, P)\\), and let \\(\\mathcal{G} = \\{\\emptyset, \\Omega\\}\\) be the trivial \\(\\sigma\\)-algebra. Show that \\(E[X \\mid \\mathcal{G}] = E[X]\\) a.s.',
                    hint: 'The only \\(\\mathcal{G}\\)-measurable functions are constants.',
                    solution: 'Since \\(\\mathcal{G} = \\{\\emptyset, \\Omega\\}\\), any \\(\\mathcal{G}\\)-measurable function is constant (a.s.). The conditional expectation \\(Y = E[X \\mid \\mathcal{G}]\\) must be \\(\\mathcal{G}\\)-measurable, so \\(Y = c\\) a.s. for some constant \\(c\\). The defining property requires \\(\\int_\\Omega Y\\,dP = \\int_\\Omega X\\,dP\\), i.e., \\(c \\cdot P(\\Omega) = E[X]\\), giving \\(c = E[X]\\). Therefore \\(E[X \\mid \\mathcal{G}] = E[X]\\) a.s. With no information, the best prediction is the unconditional mean.'
                },
                {
                    question: 'Compute \\(D_{\\mathrm{KL}}(Q \\| P)\\) where \\(P = \\text{N}(0, 1)\\) and \\(Q = \\text{N}(\\mu, \\sigma^2)\\).',
                    hint: 'Compute \\(E_Q[\\log(dQ/dP)]\\) using the known moments of \\(Q\\).',
                    solution: '\\(\\log \\frac{dQ}{dP}(x) = \\log\\frac{(2\\pi)^{-1/2} e^{-x^2/2}}{(2\\pi\\sigma^2)^{-1/2} e^{-(x-\\mu)^2/(2\\sigma^2)}} = -\\frac{1}{2}\\log\\sigma^2 - \\frac{(x-\\mu)^2}{2\\sigma^2} + \\frac{x^2}{2}\\). Wait, we need \\(\\log(dQ/dP)\\), not \\(\\log(dP/dQ)\\). So: \\(\\log\\frac{dQ}{dP}(x) = -\\frac{1}{2}\\log\\sigma^2 - \\frac{(x-\\mu)^2}{2\\sigma^2} + \\frac{x^2}{2}\\). Wait, let me redo this carefully. \\(\\log\\frac{dQ}{dP}(x) = \\log\\frac{\\sigma^{-1}\\phi((x-\\mu)/\\sigma)}{\\phi(x)} = -\\log\\sigma + \\frac{x^2}{2} - \\frac{(x-\\mu)^2}{2\\sigma^2}\\). Taking \\(E_Q\\): \\(D_{\\mathrm{KL}} = -\\log\\sigma + \\frac{1}{2}E_Q[X^2] - \\frac{1}{2\\sigma^2}E_Q[(X-\\mu)^2] = -\\log\\sigma + \\frac{\\mu^2 + \\sigma^2}{2} - \\frac{1}{2}\\). So \\(D_{\\mathrm{KL}}(\\text{N}(\\mu,\\sigma^2) \\| \\text{N}(0,1)) = \\frac{1}{2}\\left(\\mu^2 + \\sigma^2 - 1 - \\log\\sigma^2\\right)\\).'
                },
                {
                    question: 'Show that \\(D_{\\mathrm{KL}}(Q \\| P) = +\\infty\\) when \\(Q\\) is not absolutely continuous with respect to \\(P\\). Give a concrete example.',
                    hint: 'If \\(Q(A) > 0\\) but \\(P(A) = 0\\), the log-likelihood ratio is infinite on \\(A\\).',
                    solution: 'If \\(Q \\not\\ll P\\), there exists \\(A\\) with \\(P(A) = 0\\) but \\(Q(A) > 0\\). On \\(A\\), the density \\(dP\\) is zero, so the ratio \\(dQ/dP\\) is undefined (or infinite). Formally, one can show that any attempt to compute \\(\\int \\log(dQ/dP)\\,dQ\\) yields \\(+\\infty\\) because the integral over \\(A\\) is \\(\\int_A \\log(\\infty)\\,dQ = +\\infty\\). Concrete example: \\(P = \\text{N}(0,1)\\) and \\(Q = \\delta_0\\). Since \\(P(\\{0\\}) = 0\\) but \\(Q(\\{0\\}) = 1\\), \\(Q \\not\\ll P\\), so \\(D_{\\mathrm{KL}}(\\delta_0 \\| \\text{N}(0,1)) = +\\infty\\). Intuitively, a point mass carries infinite surprise relative to a continuous distribution.'
                },
                {
                    question: 'Let \\(P_\\theta\\) be the distribution of \\(n\\) i.i.d. observations from \\(\\text{N}(\\theta, 1)\\). Show that the Radon-Nikodym derivative \\(dP_\\theta/dP_0\\) depends on the data only through the sample mean \\(\\bar{X}\\), and relate this to the concept of a sufficient statistic.',
                    hint: 'Write the joint density ratio and simplify.',
                    solution: 'The joint density of \\((X_1, \\ldots, X_n)\\) under \\(P_\\theta\\) is \\(\\prod_{i=1}^n \\frac{1}{\\sqrt{2\\pi}} e^{-(x_i - \\theta)^2/2}\\). The likelihood ratio is \\(\\frac{dP_\\theta}{dP_0}(x_1, \\ldots, x_n) = \\prod_{i=1}^n e^{\\theta x_i - \\theta^2/2} = \\exp(\\theta n\\bar{x} - n\\theta^2/2)\\) where \\(\\bar{x} = \\frac{1}{n}\\sum x_i\\). This depends on the data only through \\(\\bar{X}\\). By the Fisher-Neyman factorization theorem, \\(\\bar{X}\\) is a sufficient statistic for \\(\\theta\\). The Radon-Nikodym derivative naturally identifies sufficient statistics: it factors as \\(g(T(x), \\theta) \\cdot h(x)\\) where \\(T = \\bar{X}\\) and \\(h = 1\\).'
                },
                {
                    question: 'Let \\(\\nu_1 \\ll \\mu\\) and \\(\\nu_2 \\ll \\mu\\). Express \\(d(\\alpha\\nu_1 + \\beta\\nu_2)/d\\mu\\) in terms of \\(d\\nu_1/d\\mu\\) and \\(d\\nu_2/d\\mu\\) for \\(\\alpha, \\beta \\geq 0\\).',
                    hint: 'Check that \\(\\alpha f_1 + \\beta f_2\\) satisfies the defining property.',
                    solution: 'Let \\(f_1 = d\\nu_1/d\\mu\\) and \\(f_2 = d\\nu_2/d\\mu\\). For any \\(E \\in \\mathcal{A}\\), \\((\\alpha\\nu_1 + \\beta\\nu_2)(E) = \\alpha\\int_E f_1\\,d\\mu + \\beta\\int_E f_2\\,d\\mu = \\int_E (\\alpha f_1 + \\beta f_2)\\,d\\mu\\). By uniqueness of the Radon-Nikodym derivative, \\(d(\\alpha\\nu_1 + \\beta\\nu_2)/d\\mu = \\alpha \\cdot d\\nu_1/d\\mu + \\beta \\cdot d\\nu_2/d\\mu\\) \\(\\mu\\)-a.e. The Radon-Nikodym derivative is <em>linear</em> in the numerator measure.'
                },
                {
                    question: '(Synthesis) Explain why the Radon-Nikodym theorem implies that every probability density function (PDF) is a Radon-Nikodym derivative. Conversely, explain why not every probability measure has a PDF.',
                    hint: 'A PDF is defined as a non-negative function integrating to 1 against Lebesgue measure.',
                    solution: 'A probability measure \\(P\\) on \\((\\mathbb{R}, \\mathcal{B})\\) has a PDF \\(f\\) if \\(P(E) = \\int_E f\\,d\\lambda\\) for all Borel \\(E\\). This is exactly the statement that \\(f = dP/d\\lambda\\), so every PDF is a Radon-Nikodym derivative with respect to Lebesgue measure. Conversely, a probability measure may fail to have a PDF if \\(P \\not\\ll \\lambda\\). For example, \\(P = \\delta_0\\) satisfies \\(P(\\{0\\}) = 1\\) but \\(\\lambda(\\{0\\}) = 0\\), so \\(P \\not\\ll \\lambda\\) and no PDF exists. More generally, any measure with a discrete or singular continuous component relative to Lebesgue measure lacks a (complete) PDF. The Radon-Nikodym theorem says: a PDF exists if and only if \\(P \\ll \\lambda\\).'
                }
            ]
        }
    ]
});

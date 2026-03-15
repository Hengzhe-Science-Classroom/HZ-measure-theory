window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch13',
    number: 13,
    title: 'Differentiation of Measures',
    subtitle: 'The Lebesgue Differentiation Theorem and Functions of Bounded Variation',
    sections: [
        // ============================================================
        // Section 1: The Maximal Function and Covering Lemmas
        // ============================================================
        {
            id: 'maximal-function-covering',
            title: 'The Maximal Function and Covering Lemmas',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>This chapter answers a question that has been implicit since we first met the Lebesgue integral:</strong> can we recover a function from its integrals? More precisely, if we know all the averages of \\(f\\) over balls, can we recover \\(f\\) pointwise? The affirmative answer, the Lebesgue Differentiation Theorem, is one of the crowning achievements of real analysis. To reach it, we need two preliminary tools: a covering lemma (to handle overlapping balls) and the Hardy-Littlewood maximal function (to control the worst-case behavior of averages).</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define the Hardy-Littlewood maximal function, prove the Vitali covering lemma, and establish the maximal inequality (weak type \\((1,1)\\) bound). These are the technical engines that power the differentiation theorem in Section 2.</p>
                </div>

                <h2>Averages Over Balls</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Averaging as Blurring)</div>
                    <div class="env-body">
                        <p>Given a locally integrable function \\(f\\) on \\(\\mathbb{R}^d\\), the average of \\(f\\) over a ball \\(B(x, r)\\) of center \\(x\\) and radius \\(r\\) is</p>
                        \\[A_r f(x) = \\frac{1}{m(B(x,r))} \\int_{B(x,r)} f(y)\\,dy,\\]
                        <p>where \\(m\\) denotes Lebesgue measure. Think of this as a "blurred" version of \\(f\\): the average smooths out local fluctuations. As \\(r \\to 0\\), the blurring disappears and we expect to recover \\(f(x)\\) itself. The Lebesgue Differentiation Theorem says this works for almost every \\(x\\).</p>
                    </div>
                </div>

                <p>But proving convergence a.e. requires controlling the <em>supremum</em> of these averages over all radii. This leads to the maximal function.</p>

                <h2>The Hardy-Littlewood Maximal Function</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.1 (Hardy-Littlewood Maximal Function)</div>
                    <div class="env-body">
                        <p>For \\(f \\in L^1_{\\text{loc}}(\\mathbb{R}^d)\\), the <strong>Hardy-Littlewood maximal function</strong> is</p>
                        \\[Mf(x) = \\sup_{r > 0} \\frac{1}{m(B(x,r))} \\int_{B(x,r)} |f(y)|\\,dy.\\]
                        <p>Note: \\(Mf\\) takes absolute values inside the integral, so \\(Mf(x) \\geq 0\\) always. The supremum is over all radii \\(r > 0\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Worst-Case Average)</div>
                    <div class="env-body">
                        <p>The maximal function \\(Mf(x)\\) asks: over all possible balls centered at \\(x\\), what is the largest average of \\(|f|\\)? If \\(f\\) has a spike near \\(x\\), some ball will capture it, making \\(Mf(x)\\) large. The maximal function detects concentration of mass at every scale.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 13.2 (Maximal Function of a Characteristic Function)</div>
                    <div class="env-body">
                        <p>Let \\(f = \\mathbf{1}_{[0,1]}\\) on \\(\\mathbb{R}\\). For \\(x \\in [0,1]\\), we have \\(Mf(x) = 1\\) (take \\(r\\) small so the ball is contained in \\([0,1]\\)). For \\(x > 1\\), the best strategy is to take a ball that reaches back into \\([0,1]\\): the ball \\((x - r, x + r)\\) captures \\(\\min(1, x+r) - \\max(0, x-r)\\) of the interval. We get \\(Mf(x) = \\frac{1}{2(x - 1) + \\varepsilon}\\) roughly, which decays like \\(1/(2|x|)\\) for large \\(x\\). The maximal function has a "tail" that decays, but only polynomially, not exponentially.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (\\(Mf\\) Is Not Integrable in General)</div>
                    <div class="env-body">
                        <p>Even for \\(f \\in L^1(\\mathbb{R})\\), the maximal function \\(Mf\\) is typically <em>not</em> in \\(L^1\\). For \\(f = \\mathbf{1}_{[0,1]}\\), we have \\(Mf(x) \\geq c/|x|\\) for large \\(|x|\\), and \\(1/|x|\\) is not integrable. This is why the maximal inequality takes the form of a <em>weak</em> \\(L^1\\) bound rather than a strong \\(L^1\\) bound.</p>
                    </div>
                </div>

                <h2>The Vitali Covering Lemma</h2>

                <p>The key geometric tool is a covering lemma that extracts a disjoint subcollection from an arbitrary collection of balls, while still covering "most" of the union.</p>

                <div class="env-block theorem">
                    <div class="env-title">Lemma 13.3 (Vitali Covering Lemma, Finite Version)</div>
                    <div class="env-body">
                        <p>Let \\(B_1, B_2, \\ldots, B_N\\) be a finite collection of open balls in \\(\\mathbb{R}^d\\). There exists a subcollection \\(B_{i_1}, \\ldots, B_{i_k}\\) of <strong>pairwise disjoint</strong> balls such that</p>
                        \\[\\bigcup_{j=1}^{N} B_j \\subseteq \\bigcup_{\\ell=1}^{k} 3 B_{i_\\ell},\\]
                        <p>where \\(3B\\) denotes the ball with the same center as \\(B\\) but three times the radius.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Lemma 13.3</div>
                    <div class="env-body">
                        <p><strong>Greedy algorithm.</strong> Sort the balls by radius in decreasing order (break ties arbitrarily). Initialize the selected collection as empty. Process balls one by one: add the current ball to the selected collection if it is disjoint from all previously selected balls; otherwise skip it.</p>
                        <p>Claim: the selected balls \\(\\{B_{i_\\ell}\\}\\) satisfy the covering property. Indeed, let \\(B_j\\) be any ball that was skipped. Then \\(B_j\\) intersects some selected ball \\(B_{i_\\ell}\\) with \\(r_{i_\\ell} \\geq r_j\\) (because \\(B_{i_\\ell}\\) was processed before \\(B_j\\)). Since \\(B_j\\) intersects \\(B_{i_\\ell}\\) and \\(r_j \\leq r_{i_\\ell}\\), every point of \\(B_j\\) is within distance \\(r_j + r_{i_\\ell} + r_{i_\\ell} \\leq 3r_{i_\\ell}\\) from the center of \\(B_{i_\\ell}\\). Thus \\(B_j \\subseteq 3B_{i_\\ell}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Factor of 3)</div>
                    <div class="env-body">
                        <p>The price we pay for extracting disjoint balls is that we must inflate each selected ball by a factor of 3 to cover everything. This factor is sharp in general. The constant 3 propagates through the maximal inequality, affecting the constants but not the qualitative result.</p>
                    </div>
                </div>

                <h2>The Maximal Inequality</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.4 (Hardy-Littlewood Maximal Inequality, Weak Type (1,1))</div>
                    <div class="env-body">
                        <p>There exists a constant \\(C_d > 0\\) (depending only on the dimension \\(d\\)) such that for every \\(f \\in L^1(\\mathbb{R}^d)\\) and every \\(\\alpha > 0\\),</p>
                        \\[m\\!\\left(\\{x \\in \\mathbb{R}^d : Mf(x) > \\alpha\\}\\right) \\leq \\frac{C_d}{\\alpha} \\int_{\\mathbb{R}^d} |f|\\,dm.\\]
                        <p>One can take \\(C_d = 3^d\\). This is a <strong>weak type (1,1)</strong> estimate: it controls the distribution function of \\(Mf\\) rather than its \\(L^1\\) norm.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch of Theorem 13.4</div>
                    <div class="env-body">
                        <p>Let \\(E_\\alpha = \\{x : Mf(x) > \\alpha\\}\\). For each \\(x \\in E_\\alpha\\), there exists a ball \\(B_x = B(x, r_x)\\) with</p>
                        \\[\\frac{1}{m(B_x)} \\int_{B_x} |f|\\,dm > \\alpha, \\quad \\text{i.e.,} \\quad m(B_x) < \\frac{1}{\\alpha} \\int_{B_x} |f|\\,dm.\\]
                        <p>The collection \\(\\{B_x\\}_{x \\in E_\\alpha}\\) covers \\(E_\\alpha\\). For any compact \\(K \\subseteq E_\\alpha\\), extract a finite subcover, then apply the Vitali Covering Lemma to get disjoint balls \\(B_{x_1}, \\ldots, B_{x_k}\\) with \\(K \\subseteq \\bigcup 3B_{x_i}\\). Then</p>
                        \\[m(K) \\leq \\sum_{i=1}^k m(3B_{x_i}) = 3^d \\sum_{i=1}^k m(B_{x_i}) \\leq \\frac{3^d}{\\alpha} \\sum_{i=1}^k \\int_{B_{x_i}} |f|\\,dm \\leq \\frac{3^d}{\\alpha} \\|f\\|_1.\\]
                        <p>The last inequality uses disjointness of the \\(B_{x_i}\\). Taking the supremum over all compact \\(K \\subseteq E_\\alpha\\) yields the result by inner regularity.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 13.5 (Strong Type \\((p,p)\\) for \\(p > 1\\))</div>
                    <div class="env-body">
                        <p>For \\(1 < p \\leq \\infty\\) and \\(f \\in L^p(\\mathbb{R}^d)\\), we have \\(Mf \\in L^p(\\mathbb{R}^d)\\) and</p>
                        \\[\\|Mf\\|_p \\leq C_{d,p} \\|f\\|_p.\\]
                        <p>This follows from the Marcinkiewicz interpolation theorem, interpolating between the weak \\((1,1)\\) estimate and the trivial \\(L^\\infty\\) bound \\(\\|Mf\\|_\\infty \\leq \\|f\\|_\\infty\\). The constant \\(C_{d,p} \\to \\infty\\) as \\(p \\to 1^+\\), consistent with the failure of the strong \\((1,1)\\) bound.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Weak vs. Strong)</div>
                    <div class="env-body">
                        <p>A weak type \\((1,1)\\) bound is strictly weaker than a strong type \\((1,1)\\) bound. The strong bound \\(\\|Mf\\|_1 \\leq C\\|f\\|_1\\) fails: as noted, \\(Mf \\notin L^1\\) for nonzero \\(f \\in L^1\\). The weak bound controls the <em>level sets</em> of \\(Mf\\) instead, which suffices for proving a.e. convergence.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="maximal-function-visualizer"></div>

                <p><strong>Reference alignment:</strong> Folland 3.4; Stein-Shakarchi III.1; Royden-Fitzpatrick 18.3.</p>
            `,
            visualizations: [
                {
                    id: 'maximal-function-visualizer',
                    title: 'Maximal Function Visualizer',
                    description: 'Draw an L^1 function and see its Hardy-Littlewood maximal function computed numerically. The weak (1,1) bound is displayed as a horizontal reference.',
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

                        var funcType = 0;
                        var alpha = 1.0;

                        var funcNames = ['Bump', 'Step', 'Spike', 'Two Bumps'];
                        var funcs = [
                            function(x) { return Math.exp(-x * x * 4); },
                            function(x) { return (x >= -0.5 && x <= 0.5) ? 1 : 0; },
                            function(x) { return 1 / (1 + 10 * x * x); },
                            function(x) { return 0.8 * Math.exp(-(x + 1.5) * (x + 1.5) * 4) + 1.2 * Math.exp(-(x - 1) * (x - 1) * 8); }
                        ];

                        VizEngine.createSlider(controls, 'Function type (0-3)', 0, 3, funcType, 1, function(v) {
                            funcType = Math.round(v);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Threshold alpha', 0.05, 2.0, alpha, 0.05, function(v) {
                            alpha = v;
                            draw();
                        });

                        function computeMaximalFunction(f, xArr) {
                            var n = xArr.length;
                            var mf = new Array(n);
                            for (var i = 0; i < n; i++) {
                                var best = 0;
                                var x0 = xArr[i];
                                for (var ri = 1; ri <= 80; ri++) {
                                    var r = ri * 0.1;
                                    var sum = 0;
                                    var count = 0;
                                    for (var j = 0; j < n; j++) {
                                        if (Math.abs(xArr[j] - x0) < r) {
                                            sum += Math.abs(f(xArr[j]));
                                            count++;
                                        }
                                    }
                                    if (count > 0) {
                                        var avg = sum / count;
                                        if (avg > best) best = avg;
                                    }
                                }
                                mf[i] = best;
                            }
                            return mf;
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { l: 55, r: 25, t: 55, b: 55 };
                            var pw = w - margin.l - margin.r;
                            var ph = h - margin.t - margin.b;

                            var xMin = -4, xMax = 4;
                            var N = 200;
                            var xArr = [];
                            var dx = (xMax - xMin) / N;
                            for (var i = 0; i <= N; i++) {
                                xArr.push(xMin + i * dx);
                            }

                            var f = funcs[funcType];
                            var fVals = xArr.map(f);
                            var mfVals = computeMaximalFunction(f, xArr);

                            var yMax = 0;
                            for (var i = 0; i < fVals.length; i++) {
                                if (Math.abs(fVals[i]) > yMax) yMax = Math.abs(fVals[i]);
                                if (mfVals[i] > yMax) yMax = mfVals[i];
                            }
                            yMax = Math.max(yMax * 1.15, 0.1);

                            function sx(x) { return margin.l + ((x - xMin) / (xMax - xMin)) * pw; }
                            function sy(y) { return margin.t + ph - (y / yMax) * ph; }

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Hardy-Littlewood Maximal Function: ' + funcNames[funcType], w / 2, 20);

                            // Compute L1 norm and weak bound
                            var l1norm = 0;
                            for (var i = 0; i < fVals.length; i++) {
                                l1norm += Math.abs(fVals[i]) * dx;
                            }
                            var weakBound = (3 / alpha) * l1norm;

                            // Compute measure of superlevel set
                            var superMeasure = 0;
                            for (var i = 0; i < mfVals.length; i++) {
                                if (mfVals[i] > alpha) superMeasure += dx;
                            }

                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText(
                                '||f||_1 = ' + l1norm.toFixed(3) +
                                '    m({Mf > alpha}) = ' + superMeasure.toFixed(3) +
                                '    3/alpha * ||f||_1 = ' + weakBound.toFixed(3),
                                w / 2, 40
                            );

                            // Grid
                            ctx.strokeStyle = '#1a1a40';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.l, sy(0));
                            ctx.lineTo(margin.l + pw, sy(0));
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(sx(0), margin.t);
                            ctx.lineTo(sx(0), margin.t + ph);
                            ctx.stroke();

                            // Shade superlevel set
                            for (var i = 0; i < mfVals.length; i++) {
                                if (mfVals[i] > alpha) {
                                    ctx.fillStyle = 'rgba(248, 81, 73, 0.15)';
                                    ctx.fillRect(sx(xArr[i]), margin.t, dx / (xMax - xMin) * pw + 1, ph);
                                }
                            }

                            // Draw alpha line
                            if (alpha <= yMax) {
                                ctx.strokeStyle = colors.red;
                                ctx.lineWidth = 1;
                                ctx.setLineDash([5, 5]);
                                ctx.beginPath();
                                ctx.moveTo(margin.l, sy(alpha));
                                ctx.lineTo(margin.l + pw, sy(alpha));
                                ctx.stroke();
                                ctx.setLineDash([]);

                                ctx.fillStyle = colors.red;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('alpha = ' + alpha.toFixed(2), margin.l + pw - 80, sy(alpha) - 5);
                            }

                            // Draw f
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < xArr.length; i++) {
                                var px = sx(xArr[i]), py = sy(Math.abs(fVals[i]));
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Draw Mf
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < xArr.length; i++) {
                                var px = sx(xArr[i]), py = sy(mfVals[i]);
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Legend
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = colors.blue;
                            ctx.fillRect(margin.l + 10, margin.t + 10, 15, 3);
                            ctx.fillText('|f|', margin.l + 30, margin.t + 15);
                            ctx.fillStyle = colors.orange;
                            ctx.fillRect(margin.l + 10, margin.t + 25, 15, 3);
                            ctx.fillText('Mf', margin.l + 30, margin.t + 30);

                            // Axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('x', w / 2, h - 10);
                            ctx.save();
                            ctx.translate(15, margin.t + ph / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('value', 0, 0);
                            ctx.restore();

                            // Verdict
                            var holds = superMeasure <= weakBound + 0.01;
                            ctx.fillStyle = holds ? colors.green : colors.red;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(
                                holds ? 'Weak (1,1) bound HOLDS: m({Mf > alpha}) <= C/alpha ||f||_1' : 'Check: numerical approximation',
                                w / 2, h - 25
                            );
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(f = \\mathbf{1}_{[0,1]}\\) on \\(\\mathbb{R}\\). Compute \\(Mf(x)\\) explicitly for \\(x > 1\\). Show that \\(Mf(x) = \\frac{1}{2(x - 0)}\\) is not the right formula and find the correct one.',
                    hint: 'For \\(x > 1\\), the ball \\((x-r, x+r)\\) captures the portion of \\([0,1]\\) in \\((x-r, x+r)\\). Optimize over \\(r\\). The optimal \\(r\\) makes the left endpoint \\(x - r\\) as small as helpful.',
                    solution: 'For \\(x > 1\\), the average of \\(|f|\\) over \\((x-r, x+r)\\) is \\(\\frac{\\min(1, x+r) - \\max(0, x-r)}{2r}\\) when this is positive. For \\(r > x\\), it becomes \\(\\frac{1}{2r}\\). For \\(x - 1 < r \\leq x\\), it is \\(\\frac{1 - (x - r)}{2r} = \\frac{1 - x + r}{2r}\\). Taking the derivative with respect to \\(r\\) and setting to zero, or simply noting that the average is maximized when the ball just reaches 0 (i.e., \\(r = x\\)), we get \\(Mf(x) = \\frac{1}{2x}\\). For \\(x - 1 < r < x\\), the average is \\(\\frac{r - x + 1}{2r}\\), which is increasing in \\(r\\), so the supremum over this range is at \\(r = x\\): \\(\\frac{1}{2x}\\). For \\(r > x\\), the average is \\(\\frac{1}{2r} < \\frac{1}{2x}\\). So \\(Mf(x) = \\frac{1}{2x}\\) for \\(x > 1\\).'
                },
                {
                    question: 'Show that \\(Mf\\) is lower semicontinuous (i.e., \\(\\{x : Mf(x) > \\alpha\\}\\) is open for every \\(\\alpha\\)). Conclude that \\(Mf\\) is measurable.',
                    hint: 'If \\(Mf(x) > \\alpha\\), there is a ball \\(B(x,r)\\) where the average exceeds \\(\\alpha\\). Show this persists for nearby points.',
                    solution: 'Suppose \\(Mf(x_0) > \\alpha\\). Then there exists \\(r_0 > 0\\) with \\(\\frac{1}{m(B(x_0, r_0))} \\int_{B(x_0, r_0)} |f| > \\alpha\\). For \\(x\\) close to \\(x_0\\), the ball \\(B(x, r_0 + |x - x_0|)\\) contains \\(B(x_0, r_0)\\), so \\(\\int_{B(x, r_0 + |x - x_0|)} |f| \\geq \\int_{B(x_0, r_0)} |f|\\). As \\(x \\to x_0\\), the volume \\(m(B(x, r_0 + |x - x_0|)) \\to m(B(x_0, r_0))\\), so the average stays above \\(\\alpha\\) for \\(x\\) in a neighborhood of \\(x_0\\). Thus \\(\\{Mf > \\alpha\\}\\) is open. Open sets are Borel, so \\(Mf\\) is Borel measurable.'
                },
                {
                    question: 'Prove the Vitali Covering Lemma (Lemma 13.3) in full detail, carefully verifying that every skipped ball \\(B_j\\) is contained in \\(3B_{i_\\ell}\\) for some selected ball.',
                    hint: 'If \\(B_j\\) was skipped, it intersects some earlier-selected ball \\(B_{i_\\ell}\\) with \\(r_{i_\\ell} \\geq r_j\\). Use the triangle inequality.',
                    solution: 'Let the balls be \\(B(x_j, r_j)\\). Sort so \\(r_1 \\geq r_2 \\geq \\cdots \\geq r_N\\). Greedily select: pick \\(B_1\\); skip \\(B_j\\) if it intersects any previously selected ball; otherwise select it. Let the selected balls be \\(B_{i_1}, \\ldots, B_{i_k}\\). For any skipped \\(B_j\\), let \\(B_{i_\\ell}\\) be the first selected ball intersecting \\(B_j\\). Then \\(r_{i_\\ell} \\geq r_j\\) (since \\(B_{i_\\ell}\\) was processed first). Let \\(z \\in B_j \\cap B_{i_\\ell}\\). For any \\(y \\in B_j\\), \\(|y - x_{i_\\ell}| \\leq |y - x_j| + |x_j - z| + |z - x_{i_\\ell}| < r_j + r_j + r_{i_\\ell} \\leq 3r_{i_\\ell}\\). So \\(B_j \\subseteq B(x_{i_\\ell}, 3r_{i_\\ell}) = 3B_{i_\\ell}\\).'
                },
                {
                    question: 'Use the maximal inequality to show: if \\(f \\in L^1(\\mathbb{R}^d)\\) and \\(\\varepsilon > 0\\), then \\(m(\\{Mf > \\varepsilon\\}) < \\infty\\). What does this say about the "size" of the set where \\(Mf\\) is large?',
                    hint: 'Directly apply Theorem 13.4 with \\(\\alpha = \\varepsilon\\).',
                    solution: 'By the maximal inequality, \\(m(\\{Mf > \\varepsilon\\}) \\leq \\frac{C_d}{\\varepsilon} \\|f\\|_1 < \\infty\\) since \\(f \\in L^1\\). This says that for any fixed threshold \\(\\varepsilon > 0\\), the set where \\(Mf\\) exceeds \\(\\varepsilon\\) has finite measure. As \\(\\varepsilon \\to 0\\), this set can grow to fill all of \\(\\mathbb{R}^d\\), but for each fixed positive level, the superlevel set is bounded in measure. In particular, \\(Mf < \\infty\\) a.e.'
                }
            ]
        },

        // ============================================================
        // Section 2: The Lebesgue Differentiation Theorem
        // ============================================================
        {
            id: 'lebesgue-differentiation',
            title: 'The Lebesgue Differentiation Theorem',
            content: `
                <div class="bridge section-bridge">
                    <p>With the maximal inequality in hand, we can prove the central result of this chapter: the Lebesgue Differentiation Theorem. It asserts that for any locally integrable function, the averages over shrinking balls converge to the function value at almost every point. This is the measure-theoretic analog of the Fundamental Theorem of Calculus, and it justifies the intuition that integration and differentiation are inverse operations.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove the Lebesgue Differentiation Theorem. Define Lebesgue points and show that almost every point is a Lebesgue point.</p>
                </div>

                <h2>Statement and Proof</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.6 (Lebesgue Differentiation Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(f \\in L^1_{\\text{loc}}(\\mathbb{R}^d)\\). Then for Lebesgue-almost every \\(x \\in \\mathbb{R}^d\\),</p>
                        \\[\\lim_{r \\to 0^+} \\frac{1}{m(B(x,r))} \\int_{B(x,r)} f(y)\\,dy = f(x).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 13.6</div>
                    <div class="env-body">
                        <p><strong>Step 1: Reduce to \\(L^1\\).</strong> Since the result is local, it suffices to prove it for \\(f \\in L^1(\\mathbb{R}^d)\\) (restrict \\(f\\) to a large ball and argue on each ball separately).</p>

                        <p><strong>Step 2: Continuous functions are easy.</strong> If \\(g\\) is continuous at \\(x\\), then \\(A_r g(x) \\to g(x)\\) as \\(r \\to 0\\) (by uniform continuity on the ball).</p>

                        <p><strong>Step 3: Approximation + maximal function.</strong> Fix \\(\\varepsilon > 0\\). Since continuous functions with compact support are dense in \\(L^1\\), choose continuous \\(g\\) with \\(\\|f - g\\|_1 < \\varepsilon\\). Write \\(f = g + h\\) where \\(h = f - g\\). Then</p>
                        \\[|A_r f(x) - f(x)| \\leq |A_r g(x) - g(x)| + |A_r h(x)| + |h(x)|.\\]
                        <p>The first term vanishes as \\(r \\to 0\\) for every \\(x\\). For the middle term, \\(|A_r h(x)| \\leq Mh(x)\\). So</p>
                        \\[\\limsup_{r \\to 0} |A_r f(x) - f(x)| \\leq Mh(x) + |h(x)|.\\]

                        <p><strong>Step 4: Apply the maximal inequality.</strong> For any \\(\\alpha > 0\\),</p>
                        \\[m\\!\\left(\\left\\{x : \\limsup_{r \\to 0} |A_r f(x) - f(x)| > 2\\alpha\\right\\}\\right) \\leq m(\\{Mh > \\alpha\\}) + m(\\{|h| > \\alpha\\}).\\]
                        <p>By the maximal inequality, \\(m(\\{Mh > \\alpha\\}) \\leq \\frac{C_d}{\\alpha}\\|h\\|_1 < \\frac{C_d \\varepsilon}{\\alpha}\\). By Chebyshev, \\(m(\\{|h| > \\alpha\\}) \\leq \\frac{\\|h\\|_1}{\\alpha} < \\frac{\\varepsilon}{\\alpha}\\).</p>

                        <p>So \\(m\\!\\left(\\{\\limsup_{r \\to 0} |A_r f - f| > 2\\alpha\\}\\right) \\leq \\frac{(C_d + 1)\\varepsilon}{\\alpha}\\). Since \\(\\varepsilon > 0\\) was arbitrary, this measure is 0. Since \\(\\alpha > 0\\) was arbitrary, \\(\\limsup_{r \\to 0} |A_r f(x) - f(x)| = 0\\) for a.e. \\(x\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Role of the Maximal Inequality)</div>
                    <div class="env-body">
                        <p>The proof follows a powerful template in harmonic analysis: (1) verify the result for a dense class of "nice" functions, (2) control the error using a maximal inequality, (3) use density to extend to the full space. This strategy, sometimes called the "maximal function method," recurs throughout analysis (e.g., in proving pointwise convergence of Fourier series).</p>
                    </div>
                </div>

                <h2>Lebesgue Points</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.7 (Lebesgue Point)</div>
                    <div class="env-body">
                        <p>A point \\(x\\) is a <strong>Lebesgue point</strong> of \\(f \\in L^1_{\\text{loc}}(\\mathbb{R}^d)\\) if</p>
                        \\[\\lim_{r \\to 0^+} \\frac{1}{m(B(x,r))} \\int_{B(x,r)} |f(y) - f(x)|\\,dy = 0.\\]
                        <p>This is strictly stronger than the conclusion of Theorem 13.6: not only does the average of \\(f\\) converge to \\(f(x)\\), but the average of the <em>deviation</em> \\(|f - f(x)|\\) converges to 0.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.8 (Almost Every Point Is a Lebesgue Point)</div>
                    <div class="env-body">
                        <p>If \\(f \\in L^1_{\\text{loc}}(\\mathbb{R}^d)\\), then almost every \\(x \\in \\mathbb{R}^d\\) is a Lebesgue point of \\(f\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>For each rational \\(q\\), apply Theorem 13.6 to the function \\(g_q(y) = |f(y) - q|\\) to conclude that for a.e. \\(x\\),</p>
                        \\[\\lim_{r \\to 0} \\frac{1}{m(B(x,r))} \\int_{B(x,r)} |f(y) - q|\\,dy = |f(x) - q|.\\]
                        <p>Intersecting over all rationals \\(q\\) (countable intersection of full-measure sets), we get a set of full measure where this holds for all \\(q\\) simultaneously. At such a point \\(x\\), choose \\(q_n \\to f(x)\\) and use the triangle inequality:</p>
                        \\[\\frac{1}{m(B(x,r))} \\int_{B(x,r)} |f(y) - f(x)|\\,dy \\leq \\frac{1}{m(B(x,r))} \\int_{B(x,r)} |f(y) - q_n|\\,dy + |q_n - f(x)|.\\]
                        <p>Taking \\(r \\to 0\\) and then \\(n \\to \\infty\\) yields the Lebesgue point condition.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 13.9 (Non-Lebesgue Points)</div>
                    <div class="env-body">
                        <p>If \\(f = \\mathbf{1}_{(0,\\infty)}\\) on \\(\\mathbb{R}\\), then \\(x = 0\\) is <em>not</em> a Lebesgue point: the average over \\((-r, r)\\) is \\(1/2\\), not \\(f(0) = 0\\) (or \\(1\\), depending on how we define \\(f(0)\\)). But Theorem 13.8 guarantees that \\(x = 0\\) is the <em>only</em> non-Lebesgue point (up to measure zero). Indeed, for \\(x \\neq 0\\), small balls are eventually contained entirely in \\((-\\infty, 0)\\) or \\((0, \\infty)\\), so the averages converge to \\(0\\) or \\(1\\) respectively.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why "Lebesgue Point" Matters)</div>
                    <div class="env-body">
                        <p>At a Lebesgue point, the function is "well-behaved on average" near \\(x\\): not only is the average close to \\(f(x)\\), but the function values near \\(x\\) are concentrated around \\(f(x)\\) in the \\(L^1\\) sense. Think of it as a measure-theoretic version of continuity. Every point of continuity is a Lebesgue point, but Lebesgue points can exist at discontinuities too, as long as the discontinuity is "small" in an \\(L^1\\) sense.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lebesgue-differentiation-demo"></div>

                <p><strong>Reference alignment:</strong> Folland 3.4; Stein-Shakarchi III.1.3; Royden-Fitzpatrick 18.4.</p>
            `,
            visualizations: [
                {
                    id: 'lebesgue-differentiation-demo',
                    title: 'Lebesgue Differentiation Demo',
                    description: 'Pick a point x and watch the averages over shrinking balls converge to f(x). The shaded region shows the ball, and the average is tracked on a convergence plot.',
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

                        var x0 = 0.5;
                        var radius = 1.0;
                        var funcType = 0;

                        var funcNames = ['Step function', 'Oscillatory', 'Spike train'];
                        var funcs = [
                            function(x) { return x > 0 ? 1 : (x < 0 ? 0 : 0.5); },
                            function(x) { return Math.sin(5 * x) + 0.5 * Math.cos(13 * x); },
                            function(x) {
                                var s = 0;
                                for (var k = -3; k <= 3; k++) {
                                    s += Math.exp(-20 * (x - k) * (x - k));
                                }
                                return s;
                            }
                        ];

                        VizEngine.createSlider(controls, 'Center x0', -3, 3, x0, 0.05, function(v) {
                            x0 = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Radius r', 0.02, 3.0, radius, 0.02, function(v) {
                            radius = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Function (0-2)', 0, 2, funcType, 1, function(v) {
                            funcType = Math.round(v);
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var f = funcs[funcType];
                            var xMin = -4, xMax = 4;
                            var margin = { l: 55, r: 160, t: 50, b: 50 };
                            var pw = w - margin.l - margin.r;
                            var ph = h - margin.t - margin.b;

                            // Compute y range
                            var yMin = 1e9, yMax = -1e9;
                            var N = 400;
                            var dx = (xMax - xMin) / N;
                            for (var i = 0; i <= N; i++) {
                                var v = f(xMin + i * dx);
                                if (v < yMin) yMin = v;
                                if (v > yMax) yMax = v;
                            }
                            var yPad = (yMax - yMin) * 0.15 + 0.1;
                            yMin -= yPad;
                            yMax += yPad;

                            function sx(x) { return margin.l + ((x - xMin) / (xMax - xMin)) * pw; }
                            function sy(y) { return margin.t + ph - ((y - yMin) / (yMax - yMin)) * ph; }

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Lebesgue Differentiation: ' + funcNames[funcType], w / 2 - 50, 20);

                            // Shade the ball region
                            var ballLeft = Math.max(xMin, x0 - radius);
                            var ballRight = Math.min(xMax, x0 + radius);
                            ctx.fillStyle = 'rgba(88, 166, 255, 0.12)';
                            ctx.fillRect(sx(ballLeft), margin.t, sx(ballRight) - sx(ballLeft), ph);

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.l, sy(0));
                            ctx.lineTo(margin.l + pw, sy(0));
                            ctx.stroke();

                            // Draw function
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var xx = xMin + i * dx;
                                var px = sx(xx), py = sy(f(xx));
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Compute average
                            var sum = 0, count = 0;
                            for (var i = 0; i <= N; i++) {
                                var xx = xMin + i * dx;
                                if (Math.abs(xx - x0) < radius) {
                                    sum += f(xx);
                                    count++;
                                }
                            }
                            var avg = count > 0 ? sum / count : 0;
                            var fAtX0 = f(x0);

                            // Draw average line
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(sx(ballLeft), sy(avg));
                            ctx.lineTo(sx(ballRight), sy(avg));
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Draw f(x0) marker
                            ctx.fillStyle = colors.green;
                            ctx.beginPath();
                            ctx.arc(sx(x0), sy(fAtX0), 5, 0, 2 * Math.PI);
                            ctx.fill();

                            // Draw x0 vertical line
                            ctx.strokeStyle = colors.green;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath();
                            ctx.moveTo(sx(x0), margin.t);
                            ctx.lineTo(sx(x0), margin.t + ph);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Info panel on the right
                            var infoX = margin.l + pw + 15;
                            ctx.textAlign = 'left';
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.fillStyle = colors.text;
                            ctx.fillText('Data:', infoX, margin.t + 20);

                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillStyle = colors.green;
                            ctx.fillText('f(x0) = ' + fAtX0.toFixed(4), infoX, margin.t + 40);
                            ctx.fillStyle = colors.orange;
                            ctx.fillText('A_r f(x0) = ' + avg.toFixed(4), infoX, margin.t + 58);
                            ctx.fillStyle = colors.teal;
                            ctx.fillText('|diff| = ' + Math.abs(avg - fAtX0).toFixed(4), infoX, margin.t + 76);

                            ctx.fillStyle = colors.muted;
                            ctx.fillText('r = ' + radius.toFixed(2), infoX, margin.t + 100);
                            ctx.fillText('x0 = ' + x0.toFixed(2), infoX, margin.t + 118);

                            // Convergence trace: compute for multiple radii
                            var radii = [];
                            var avgs = [];
                            for (var ri = 1; ri <= 30; ri++) {
                                var rr = ri * 0.1;
                                radii.push(rr);
                                var s = 0, c = 0;
                                for (var i = 0; i <= N; i++) {
                                    var xx = xMin + i * dx;
                                    if (Math.abs(xx - x0) < rr) { s += f(xx); c++; }
                                }
                                avgs.push(c > 0 ? s / c : 0);
                            }

                            // Mini convergence plot
                            var miniX = infoX;
                            var miniY = margin.t + 145;
                            var miniW = 130;
                            var miniH = 100;

                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.strokeRect(miniX, miniY, miniW, miniH);

                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Convergence', miniX + miniW / 2, miniY - 5);
                            ctx.fillText('r', miniX + miniW / 2, miniY + miniH + 12);

                            // Plot averages vs radius
                            var avMin = fAtX0, avMax = fAtX0;
                            for (var i = 0; i < avgs.length; i++) {
                                if (avgs[i] < avMin) avMin = avgs[i];
                                if (avgs[i] > avMax) avMax = avgs[i];
                            }
                            var avPad = (avMax - avMin) * 0.2 + 0.05;
                            avMin -= avPad;
                            avMax += avPad;

                            // f(x0) reference
                            var refY = miniY + miniH - ((fAtX0 - avMin) / (avMax - avMin)) * miniH;
                            ctx.strokeStyle = colors.green;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath();
                            ctx.moveTo(miniX, refY);
                            ctx.lineTo(miniX + miniW, refY);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Average curve
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var i = 0; i < radii.length; i++) {
                                var px = miniX + (radii[i] / 3) * miniW;
                                var py = miniY + miniH - ((avgs[i] - avMin) / (avMax - avMin)) * miniH;
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Current radius marker
                            if (radius <= 3) {
                                var curPx = miniX + (radius / 3) * miniW;
                                ctx.fillStyle = colors.red;
                                ctx.beginPath();
                                ctx.arc(curPx, miniY + miniH - ((avg - avMin) / (avMax - avMin)) * miniH, 3, 0, 2 * Math.PI);
                                ctx.fill();
                            }

                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('green = f(x0)', miniX, miniY + miniH + 25);
                            ctx.fillText('orange = A_r f', miniX, miniY + miniH + 38);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(f = \\mathbf{1}_{\\mathbb{Q}}\\) (the Dirichlet function) on \\(\\mathbb{R}\\). What does the Lebesgue Differentiation Theorem say about the averages of \\(f\\)?',
                    hint: 'Since \\(f = 0\\) a.e. (the rationals have measure zero), the function \\(f\\) is equal a.e. to the zero function.',
                    solution: 'The function \\(f = \\mathbf{1}_{\\mathbb{Q}}\\) equals 0 almost everywhere, so it represents the same element of \\(L^1_{\\text{loc}}\\) as the zero function. The Lebesgue Differentiation Theorem says that for a.e. \\(x\\), \\(A_r f(x) \\to 0\\) as \\(r \\to 0\\). Indeed, since \\(\\mathbb{Q}\\) has measure zero, \\(\\frac{1}{2r}\\int_{x-r}^{x+r} \\mathbf{1}_{\\mathbb{Q}}(y)\\,dy = 0\\) for all \\(r > 0\\) and all \\(x\\). So the averages are identically 0 and converge to 0 everywhere, not just a.e. Note that \\(f(x) = 1\\) at rational points, but the theorem only guarantees convergence to the a.e. representative \\(f(x) = 0\\).'
                },
                {
                    question: 'Show that every point of continuity of \\(f \\in L^1_{\\text{loc}}\\) is a Lebesgue point.',
                    hint: 'At a point of continuity, \\(|f(y) - f(x)| < \\varepsilon\\) for \\(y\\) near \\(x\\). Bound the average of \\(|f(y) - f(x)|\\) directly.',
                    solution: 'Suppose \\(f\\) is continuous at \\(x\\). For any \\(\\varepsilon > 0\\), there exists \\(\\delta > 0\\) with \\(|f(y) - f(x)| < \\varepsilon\\) whenever \\(|y - x| < \\delta\\). For \\(r < \\delta\\), \\(B(x,r) \\subseteq B(x,\\delta)\\), so \\(\\frac{1}{m(B(x,r))} \\int_{B(x,r)} |f(y) - f(x)|\\,dy < \\frac{1}{m(B(x,r))} \\int_{B(x,r)} \\varepsilon\\,dy = \\varepsilon\\). Since \\(\\varepsilon\\) was arbitrary, the limit is 0. Thus \\(x\\) is a Lebesgue point. Note the converse fails: a function can have Lebesgue points at discontinuities.'
                },
                {
                    question: 'Prove that if \\(f \\in L^1(\\mathbb{R}^d)\\) and \\(\\int_{B(x,r)} |f|\\,dm = 0\\) for all \\(r > 0\\), then \\(f(x) = 0\\) for a.e. \\(x\\) in some neighborhood. Use the Lebesgue Differentiation Theorem.',
                    hint: 'If the integral of \\(|f|\\) over every ball centered at \\(x\\) is 0, what is \\(Mf(x)\\)?',
                    solution: 'If \\(\\int_{B(x_0,r)} |f| = 0\\) for all \\(r > 0\\), then for any \\(x \\in B(x_0, r/2)\\), the ball \\(B(x, r/2) \\subseteq B(x_0, r)\\), so \\(\\int_{B(x, r/2)} |f| = 0\\). At a Lebesgue point \\(x\\), \\(|f(x)| = \\lim_{s \\to 0} \\frac{1}{m(B(x,s))} \\int_{B(x,s)} |f| = 0\\). Since a.e. point is a Lebesgue point, \\(f = 0\\) a.e. on \\(B(x_0, r/2)\\). Since \\(r\\) was arbitrary, \\(f = 0\\) a.e. on \\(\\bigcup_r B(x_0, r) = \\mathbb{R}^d\\). Actually, the hypothesis is much stronger than needed; even a single ball suffices locally.'
                },
                {
                    question: '(Harder) Show that the Lebesgue Differentiation Theorem implies the Fundamental Theorem of Calculus for Lebesgue integrals: if \\(f \\in L^1([a,b])\\) and \\(F(x) = \\int_a^x f(t)\\,dt\\), then \\(F\'(x) = f(x)\\) for a.e. \\(x\\).',
                    hint: 'Express \\(\\frac{F(x+h) - F(x)}{h}\\) as an average of \\(f\\) over an interval.',
                    solution: 'We have \\(F(x+h) - F(x) = \\int_x^{x+h} f(t)\\,dt\\) for \\(h > 0\\). So \\(\\frac{F(x+h) - F(x)}{h} = \\frac{1}{h}\\int_x^{x+h} f(t)\\,dt = \\frac{1}{m([x, x+h])}\\int_{[x, x+h]} f\\,dm\\). This is the average of \\(f\\) over the interval \\([x, x+h]\\). By the Lebesgue Differentiation Theorem (in \\(d=1\\), averages over shrinking intervals work the same as averages over shrinking symmetric intervals, which can be verified), this converges to \\(f(x)\\) for a.e. \\(x\\). Similarly for \\(h < 0\\). Thus \\(F\'(x) = f(x)\\) a.e.'
                }
            ]
        },

        // ============================================================
        // Section 3: Differentiation of Monotone Functions
        // ============================================================
        {
            id: 'monotone-differentiation',
            title: 'Differentiation of Monotone Functions',
            content: `
                <div class="bridge section-bridge">
                    <p>We now turn from \\(\\mathbb{R}^d\\) back to the real line and study the differentiability of monotone functions. The classical result, due to Lebesgue (1904), states that every monotone function on an interval is differentiable almost everywhere. The proof uses the tools we built in Sections 1 and 2, and the result connects beautifully to the theory of measures via the Lebesgue-Stieltjes construction.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove that monotone functions are differentiable a.e. Understand why the integral of the derivative can be strictly less than the total increase (the Cantor function). Recognize this as the phenomenon of singular measures.</p>
                </div>

                <h2>Rising Functions and Their Derivatives</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.10 (Monotone Increasing Function)</div>
                    <div class="env-body">
                        <p>A function \\(F: [a,b] \\to \\mathbb{R}\\) is <strong>monotone increasing</strong> (or non-decreasing) if \\(F(x) \\leq F(y)\\) whenever \\(x \\leq y\\). We write \\(F \\nearrow\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.11 (Lebesgue's Differentiation Theorem for Monotone Functions)</div>
                    <div class="env-body">
                        <p>Let \\(F: [a,b] \\to \\mathbb{R}\\) be monotone increasing. Then:</p>
                        <ol>
                            <li>\\(F'(x)\\) exists for Lebesgue-almost every \\(x \\in [a,b]\\).</li>
                            <li>\\(F'\\) is measurable and non-negative a.e.</li>
                            <li>\\(\\displaystyle \\int_a^b F'(x)\\,dx \\leq F(b) - F(a)\\).</li>
                        </ol>
                        <p>The inequality in (3) can be strict.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch of Theorem 13.11</div>
                    <div class="env-body">
                        <p><strong>Key idea:</strong> A monotone increasing function \\(F\\) generates a Lebesgue-Stieltjes measure \\(\\mu_F\\) on \\([a,b]\\) via \\(\\mu_F((c,d]) = F(d) - F(c)\\). This measure satisfies \\(\\mu_F \\ll \\lambda + \\mu_F^s\\) where \\(\\mu_F^s\\) is the singular part. By the Radon-Nikodym theorem applied to the absolutely continuous part, there exists \\(g \\in L^1\\) with \\(\\mu_F^{ac}(E) = \\int_E g\\,d\\lambda\\).</p>

                        <p>The Lebesgue Differentiation Theorem (applied to \\(g\\)) then shows that</p>
                        \\[F'(x) = \\lim_{h \\to 0} \\frac{F(x+h) - F(x)}{h} = \\lim_{h \\to 0} \\frac{\\mu_F((x, x+h])}{h} = g(x) \\quad \\text{a.e.}\\]

                        <p>The inequality \\(\\int_a^b F' \\leq F(b) - F(a)\\) becomes \\(\\mu_F^{ac}([a,b]) \\leq \\mu_F([a,b])\\), which holds because \\(\\mu_F = \\mu_F^{ac} + \\mu_F^s\\) and \\(\\mu_F^s \\geq 0\\). Equality holds if and only if \\(\\mu_F^s = 0\\), i.e., \\(\\mu_F \\ll \\lambda\\).</p>

                        <p><strong>Alternative classical proof:</strong> One can also use the Vitali Covering Lemma directly on the "rising sun" sets where the upper and lower derivatives of \\(F\\) disagree. We define the four Dini derivatives and show they coincide a.e. This approach avoids the Radon-Nikodym theorem but is more technical.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Strict Inequality and the Cantor Function)</div>
                    <div class="env-body">
                        <p>The inequality \\(\\int_a^b F' \\leq F(b) - F(a)\\) is strict precisely when \\(F\\) has a non-trivial singular part. The most famous example is the <strong>Cantor function</strong> (or "Devil's Staircase").</p>
                    </div>
                </div>

                <h2>The Cantor Function</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.12 (Cantor Function / Devil's Staircase)</div>
                    <div class="env-body">
                        <p>The <strong>Cantor function</strong> \\(F_C: [0,1] \\to [0,1]\\) is the unique continuous, monotone increasing function satisfying:</p>
                        <ul>
                            <li>\\(F_C(0) = 0\\), \\(F_C(1) = 1\\).</li>
                            <li>\\(F_C\\) is constant on each removed middle-third interval of the Cantor set construction: \\(F_C \\equiv 1/2\\) on \\((1/3, 2/3)\\), \\(F_C \\equiv 1/4\\) on \\((1/9, 2/9)\\), \\(F_C \\equiv 3/4\\) on \\((7/9, 8/9)\\), etc.</li>
                        </ul>
                        <p>Equivalently, if \\(x = 0.a_1 a_2 a_3 \\ldots\\) in base 3, replace every digit 1 by 2, delete everything after the first 2, divide the remaining digits by 2, and read the result in base 2.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 13.13 (Properties of the Cantor Function)</div>
                    <div class="env-body">
                        <ol>
                            <li>\\(F_C\\) is continuous and monotone increasing.</li>
                            <li>\\(F_C'(x) = 0\\) for every \\(x\\) in the complement of the Cantor set \\(\\mathcal{C}\\), which has measure 1.</li>
                            <li>Thus \\(F_C' = 0\\) a.e., yet \\(F_C(1) - F_C(0) = 1\\).</li>
                            <li>\\(\\int_0^1 F_C'(x)\\,dx = 0 < 1 = F_C(1) - F_C(0)\\).</li>
                        </ol>
                        <p>The Cantor function increases from 0 to 1, but all its increase happens on the Cantor set, a set of measure zero. The Lebesgue-Stieltjes measure \\(\\mu_{F_C}\\) is entirely singular with respect to Lebesgue measure.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Where Does the Increase Go?)</div>
                    <div class="env-body">
                        <p>The Cantor function climbs a total of 1 unit, but \\(F' = 0\\) a.e. Where does the increase go? It is distributed across the Cantor set, an uncountable set of measure zero. No single point contributes a jump (\\(F_C\\) is continuous), but the collective effect of the Cantor set accounts for the entire increase. This is the hallmark of a <strong>singular continuous</strong> distribution: no atoms, no density, yet carrying all the mass.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Monotone + Differentiable a.e. Does Not Imply FTC)</div>
                    <div class="env-body">
                        <p>The Cantor function is a stark warning: a function can be monotone, continuous, and differentiable a.e. with \\(F' = 0\\) a.e., yet fail the Fundamental Theorem of Calculus. The missing condition is <strong>absolute continuity</strong>, which we develop in Sections 4 and 5.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="cantor-function-viz"></div>

                <p><strong>Reference alignment:</strong> Folland 3.5; Royden-Fitzpatrick 6.2, 6.3; Stein-Shakarchi III.1.4.</p>
            `,
            visualizations: [
                {
                    id: 'cantor-function-viz',
                    title: 'Cantor Function and Its Derivative',
                    description: 'Watch the Devil\'s Staircase being constructed level by level. The derivative panel shows it is 0 on each removed interval, yet the function rises from 0 to 1.',
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

                        var level = 6;

                        VizEngine.createSlider(controls, 'Construction level', 1, 12, level, 1, function(v) {
                            level = Math.round(v);
                            draw();
                        });

                        function cantorFunction(x, maxLevel) {
                            // Build via ternary expansion
                            var result = 0;
                            var power = 0.5;
                            var lo = 0, hi = 1;
                            for (var i = 0; i < maxLevel; i++) {
                                var third1 = lo + (hi - lo) / 3;
                                var third2 = lo + 2 * (hi - lo) / 3;
                                if (x < third1) {
                                    hi = third1;
                                } else if (x > third2) {
                                    result += power;
                                    lo = third2;
                                } else {
                                    result += power;
                                    return result;
                                }
                                power /= 2;
                            }
                            // Linear interpolation at finest level
                            result += power * 2 * (x - lo) / (hi - lo);
                            return result;
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { l: 55, r: 25, t: 50, b: 55 };
                            var pw = w - margin.l - margin.r;
                            var ph = h - margin.t - margin.b;

                            function sx(x) { return margin.l + x * pw; }
                            function sy(y) { return margin.t + ph - y * ph; }

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText("Devil's Staircase (Cantor Function), Level " + level, w / 2, 20);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText("F' = 0 on removed intervals (measure 1), yet F(1) - F(0) = 1", w / 2, 38);

                            // Grid
                            ctx.strokeStyle = '#1a1a40';
                            ctx.lineWidth = 1;
                            for (var g = 0; g <= 4; g++) {
                                var gy = sy(g / 4);
                                ctx.beginPath();
                                ctx.moveTo(margin.l, gy);
                                ctx.lineTo(margin.l + pw, gy);
                                ctx.stroke();
                                ctx.fillStyle = colors.muted;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText((g / 4).toFixed(2), margin.l - 5, gy + 3);
                            }

                            // Shade removed intervals
                            function shadeRemoved(lo, hi, lev) {
                                if (lev >= level) return;
                                var t1 = lo + (hi - lo) / 3;
                                var t2 = lo + 2 * (hi - lo) / 3;
                                ctx.fillStyle = 'rgba(248, 81, 73, 0.08)';
                                ctx.fillRect(sx(t1), margin.t, sx(t2) - sx(t1), ph);
                                shadeRemoved(lo, t1, lev + 1);
                                shadeRemoved(t2, hi, lev + 1);
                            }
                            shadeRemoved(0, 1, 0);

                            // Draw Cantor function
                            var N = 2000;
                            ctx.strokeStyle = colors.teal;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var x = i / N;
                                var y = cantorFunction(x, level);
                                var px = sx(x), py = sy(y);
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Draw flat segments more visibly
                            function highlightFlats(lo, hi, lev, valBase, valPow) {
                                if (lev >= level) return;
                                var t1 = lo + (hi - lo) / 3;
                                var t2 = lo + 2 * (hi - lo) / 3;
                                var midVal = valBase + valPow;

                                // This middle third is a flat segment at value midVal
                                ctx.strokeStyle = colors.orange;
                                ctx.lineWidth = 3;
                                ctx.beginPath();
                                ctx.moveTo(sx(t1), sy(midVal));
                                ctx.lineTo(sx(t2), sy(midVal));
                                ctx.stroke();

                                highlightFlats(lo, t1, lev + 1, valBase, valPow / 2);
                                highlightFlats(t2, hi, lev + 1, valBase + valPow, valPow / 2);
                            }
                            highlightFlats(0, 1, 0, 0, 0.5);

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.l, margin.t);
                            ctx.lineTo(margin.l, margin.t + ph);
                            ctx.lineTo(margin.l + pw, margin.t + ph);
                            ctx.stroke();

                            // Compute fraction of [0,1] that is removed
                            var removedFrac = 1 - Math.pow(2 / 3, level);
                            ctx.fillStyle = colors.orange;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(
                                "Flat segments (F' = 0): " + (removedFrac * 100).toFixed(1) + '% of [0,1]',
                                w / 2, h - 32
                            );
                            ctx.fillStyle = colors.teal;
                            ctx.fillText(
                                'Remaining Cantor set: ' + ((1 - removedFrac) * 100).toFixed(1) + '% (all increase happens here)',
                                w / 2, h - 12
                            );

                            // X-axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var g = 0; g <= 4; g++) {
                                ctx.fillText((g / 4).toFixed(2), sx(g / 4), margin.t + ph + 15);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that a monotone increasing function \\(F: [a,b] \\to \\mathbb{R}\\) has at most countably many points of discontinuity.',
                    hint: 'At each discontinuity \\(x\\), the jump \\(F(x^+) - F(x^-) > 0\\). Assign a rational to each jump interval.',
                    solution: 'At each point of discontinuity \\(x\\), let \\(J(x) = F(x^+) - F(x^-) > 0\\) (the jump). For distinct discontinuities \\(x_1 < x_2\\), the intervals \\((F(x_i^-), F(x_i^+))\\) are disjoint and each has positive length. Each such interval contains a rational number. Since \\(\\mathbb{Q}\\) is countable and the intervals are disjoint, there can be at most countably many. Alternatively, for each \\(n \\geq 1\\), the set \\(\\{x : J(x) > 1/n\\}\\) is finite (since \\(\\sum J(x_i) \\leq F(b) - F(a) < \\infty\\)), so the set of all discontinuities is \\(\\bigcup_n \\{x : J(x) > 1/n\\}\\), a countable union of finite sets.'
                },
                {
                    question: 'Verify directly that the Cantor function \\(F_C\\) satisfies \\(F_C\'(x) = 0\\) for every \\(x\\) in the complement of the Cantor set.',
                    hint: 'If \\(x \\notin \\mathcal{C}\\), then \\(x\\) lies in some removed open interval where \\(F_C\\) is constant.',
                    solution: 'If \\(x \\notin \\mathcal{C}\\), then \\(x\\) belongs to one of the removed open intervals \\((a_k, b_k)\\) from the Cantor construction. On this interval, \\(F_C\\) is constant (it takes the value \\(F_C(a_k) = F_C(b_k)\\)). A constant function has derivative 0. Since the complement \\([0,1] \\setminus \\mathcal{C}\\) is the union of all removed intervals and has Lebesgue measure \\(1\\), we get \\(F_C\' = 0\\) on a set of measure 1, i.e., \\(F_C\' = 0\\) a.e.'
                },
                {
                    question: 'Construct a continuous, strictly increasing function \\(G: [0,1] \\to [0,2]\\) such that \\(G\' = 0\\) on a set of positive measure.',
                    hint: 'Add the identity function to the Cantor function: \\(G(x) = F_C(x) + x\\).',
                    solution: 'Let \\(G(x) = F_C(x) + x\\). Then \\(G\\) is continuous and strictly increasing (since \\(x \\mapsto x\\) is strictly increasing and \\(F_C\\) is non-decreasing). We have \\(G(0) = 0\\) and \\(G(1) = 2\\). Now \\(G\' = F_C\' + 1 = 0 + 1 = 1\\) a.e. (on the complement of \\(\\mathcal{C}\\)). So actually \\(G\' = 1\\) a.e. This does not quite work. Instead, consider the inverse approach: let \\(\\phi = G^{-1}: [0,2] \\to [0,1]\\). Then \\(\\phi\\) maps the image \\(G(\\mathcal{C})\\) (which has positive measure since \\(m(G(\\mathcal{C})) = m([0,2]) - m(G([0,1]\\setminus\\mathcal{C})) = 2 - 1 = 1\\)) to the Cantor set. On \\(G(\\mathcal{C})\\), \\(\\phi\\) is differentiable with \\(\\phi\' = 0\\) cannot hold since \\(\\phi\\) is strictly increasing. A direct construction: take a fat Cantor set \\(K\\) of positive measure and let \\(G(x) = m(K \\cap [0,x])\\). Then \\(G\\) is continuous increasing, and \\(G\' = 0\\) on \\([0,1]\\setminus K\\), which has positive measure \\(1 - m(K)\\). Yet \\(G(1) = m(K) > 0\\).'
                }
            ]
        },

        // ============================================================
        // Section 4: Functions of Bounded Variation
        // ============================================================
        {
            id: 'bounded-variation',
            title: 'Functions of Bounded Variation',
            content: `
                <div class="bridge section-bridge">
                    <p>Monotone functions are differentiable a.e., but many important functions (e.g., \\(\\sin x\\)) are not monotone. Can we extend the differentiability result? Yes, by decomposing functions into differences of monotone functions. The correct class is <strong>functions of bounded variation</strong> (BV), which captures exactly those functions expressible as such a difference.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define total variation and the BV class. Prove the Jordan decomposition (BV = difference of monotone functions). Conclude BV functions are differentiable a.e.</p>
                </div>

                <h2>Total Variation</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.14 (Total Variation)</div>
                    <div class="env-body">
                        <p>Let \\(f: [a,b] \\to \\mathbb{R}\\). The <strong>total variation</strong> of \\(f\\) on \\([a,b]\\) is</p>
                        \\[V_a^b(f) = \\sup \\left\\{ \\sum_{i=1}^{n} |f(t_i) - f(t_{i-1})| : a = t_0 < t_1 < \\cdots < t_n = b,\\; n \\in \\mathbb{N} \\right\\}.\\]
                        <p>The supremum is over all finite partitions of \\([a,b]\\). We say \\(f\\) is of <strong>bounded variation</strong> (written \\(f \\in \\text{BV}([a,b])\\)) if \\(V_a^b(f) < \\infty\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Odometer Reading)</div>
                    <div class="env-body">
                        <p>Think of \\(f(x)\\) as the position of a car on a road. The total variation is the <em>total distance traveled</em>, regardless of direction. A car that drives 3 km east then 2 km west has total variation 5, even though the net displacement is only 1. Bounded variation means the car travels a finite total distance.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 13.15 (BV and Non-BV Functions)</div>
                    <div class="env-body">
                        <ul>
                            <li><strong>Monotone functions:</strong> If \\(f\\) is monotone increasing, \\(V_a^b(f) = f(b) - f(a)\\). All monotone functions are BV.</li>
                            <li><strong>Lipschitz functions:</strong> If \\(|f(x) - f(y)| \\leq L|x - y|\\), then \\(V_a^b(f) \\leq L(b-a)\\). All Lipschitz functions are BV.</li>
                            <li><strong>\\(C^1\\) functions:</strong> If \\(f'\\) is continuous, then \\(V_a^b(f) = \\int_a^b |f'(x)|\\,dx < \\infty\\).</li>
                            <li><strong>Not BV:</strong> \\(f(x) = x\\sin(1/x)\\) on \\((0,1]\\) with \\(f(0) = 0\\). The oscillations near 0 have decreasing amplitude but the total variation diverges (it includes \\(\\sum 1/n\\)).</li>
                        </ul>
                    </div>
                </div>

                <h2>The Jordan Decomposition</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.16 (Variation Function)</div>
                    <div class="env-body">
                        <p>For \\(f \\in \\text{BV}([a,b])\\), define the <strong>variation function</strong> \\(V_f: [a,b] \\to [0, \\infty)\\) by</p>
                        \\[V_f(x) = V_a^x(f), \\quad V_f(a) = 0.\\]
                        <p>Then \\(V_f\\) is monotone increasing and \\(V_f(b) = V_a^b(f)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.17 (Jordan Decomposition for BV Functions)</div>
                    <div class="env-body">
                        <p>A function \\(f: [a,b] \\to \\mathbb{R}\\) is of bounded variation if and only if it can be written as the difference of two monotone increasing functions:</p>
                        \\[f = g - h, \\quad g, h \\nearrow.\\]
                        <p>One canonical choice is \\(g = V_f\\) and \\(h = V_f - f\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 13.17</div>
                    <div class="env-body">
                        <p><strong>(\\(\\Rightarrow\\)):</strong> Suppose \\(f \\in \\text{BV}\\). Set \\(g(x) = V_f(x)\\) and \\(h(x) = V_f(x) - f(x)\\). Then \\(f = g - h\\) and \\(g = V_f\\) is increasing. We must show \\(h\\) is also increasing. For \\(x < y\\):</p>
                        \\[h(y) - h(x) = [V_f(y) - V_f(x)] - [f(y) - f(x)] = V_x^y(f) - [f(y) - f(x)].\\]
                        <p>Since \\(|f(y) - f(x)| \\leq V_x^y(f)\\), we have \\(f(y) - f(x) \\leq V_x^y(f)\\), so \\(h(y) - h(x) \\geq 0\\). Thus \\(h\\) is increasing.</p>

                        <p><strong>(\\(\\Leftarrow\\)):</strong> If \\(f = g - h\\) with \\(g, h\\) increasing, then for any partition,</p>
                        \\[\\sum |f(t_i) - f(t_{i-1})| \\leq \\sum [g(t_i) - g(t_{i-1})] + \\sum [h(t_i) - h(t_{i-1})] = [g(b) - g(a)] + [h(b) - h(a)].\\]
                        <p>So \\(V_a^b(f) \\leq [g(b) - g(a)] + [h(b) - h(a)] < \\infty\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 13.18 (BV Functions Are Differentiable a.e.)</div>
                    <div class="env-body">
                        <p>If \\(f \\in \\text{BV}([a,b])\\), then \\(f'(x)\\) exists for a.e. \\(x \\in [a,b]\\), and \\(f' \\in L^1([a,b])\\) with \\(\\int_a^b |f'|\\,dx \\leq V_a^b(f)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Write \\(f = g - h\\) with \\(g, h\\) monotone increasing. By Theorem 13.11, both \\(g'\\) and \\(h'\\) exist a.e., so \\(f' = g' - h'\\) exists a.e. Moreover, \\(\\int_a^b |f'| \\leq \\int_a^b g' + \\int_a^b h' \\leq [g(b) - g(a)] + [h(b) - h(a)] = V_a^b(f)\\).</p>
                    </div>
                </div>

                <h2>Properties of BV</h2>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 13.19 (BV Is a Vector Space with a Norm)</div>
                    <div class="env-body">
                        <p>\\(\\text{BV}([a,b])\\) is a real vector space. With the norm \\(\\|f\\|_{\\text{BV}} = |f(a)| + V_a^b(f)\\), it becomes a Banach space. Key properties:</p>
                        <ol>
                            <li>\\(V_a^b(\\alpha f) = |\\alpha| V_a^b(f)\\).</li>
                            <li>\\(V_a^b(f + g) \\leq V_a^b(f) + V_a^b(g)\\).</li>
                            <li>If \\(f \\in \\text{BV}([a,b])\\), then \\(f\\) is bounded: \\(\\|f\\|_\\infty \\leq |f(a)| + V_a^b(f)\\).</li>
                            <li>BV functions have at most countably many discontinuities (all are jump discontinuities for the monotone pieces).</li>
                        </ol>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="bv-function-tester"></div>

                <p><strong>Reference alignment:</strong> Folland 3.5; Royden-Fitzpatrick 6.1-6.3; Stein-Shakarchi III.2.</p>
            `,
            visualizations: [
                {
                    id: 'bv-function-tester',
                    title: 'BV and AC Function Tester',
                    description: 'Choose from several functions and see their total variation computed via increasingly fine partitions. Functions of bounded variation have a converging total variation; non-BV functions diverge.',
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

                        var funcType = 0;
                        var nPart = 20;

                        var funcNames = ['sin(x) [BV]', 'x sin(1/x) [Not BV]', 'Sawtooth [BV]', 'x^2 sin(1/x^2) [Not BV]', 'Step function [BV]'];
                        var funcs = [
                            function(x) { return Math.sin(Math.PI * x * 3); },
                            function(x) { return x < 0.001 ? 0 : x * Math.sin(1 / x); },
                            function(x) { return x * 4 - Math.floor(x * 4); },
                            function(x) { return x < 0.01 ? 0 : x * x * Math.sin(1 / (x * x)); },
                            function(x) { return x < 0.25 ? 0 : (x < 0.5 ? 1 : (x < 0.75 ? 0.5 : 1.5)); }
                        ];
                        var isBV = [true, false, true, false, true];

                        VizEngine.createSlider(controls, 'Function (0-4)', 0, 4, funcType, 1, function(v) {
                            funcType = Math.round(v);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Partition points', 4, 500, nPart, 1, function(v) {
                            nPart = Math.round(v);
                            draw();
                        });

                        function computeTV(f, n) {
                            var tv = 0;
                            var dt = 1.0 / n;
                            for (var i = 0; i < n; i++) {
                                tv += Math.abs(f((i + 1) * dt) - f(i * dt));
                            }
                            return tv;
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var f = funcs[funcType];
                            var margin = { l: 55, r: 180, t: 55, b: 50 };
                            var pw = w - margin.l - margin.r;
                            var ph = h - margin.t - margin.b;

                            // Compute function values
                            var N = 500;
                            var yMin = 1e9, yMax = -1e9;
                            for (var i = 0; i <= N; i++) {
                                var v = f(i / N);
                                if (v < yMin) yMin = v;
                                if (v > yMax) yMax = v;
                            }
                            var yPad = (yMax - yMin) * 0.1 + 0.05;
                            yMin -= yPad;
                            yMax += yPad;

                            function sx(x) { return margin.l + x * pw; }
                            function sy(y) { return margin.t + ph - ((y - yMin) / (yMax - yMin)) * ph; }

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Total Variation: ' + funcNames[funcType], w / 2 - 60, 20);

                            // Compute TV for current partition
                            var tvCurrent = computeTV(f, nPart);

                            ctx.fillStyle = isBV[funcType] ? colors.green : colors.red;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText(
                                'V(f) with ' + nPart + ' points: ' + tvCurrent.toFixed(4) +
                                (isBV[funcType] ? ' [BV: converges]' : ' [Not BV: diverges]'),
                                w / 2 - 60, 40
                            );

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.l, margin.t);
                            ctx.lineTo(margin.l, margin.t + ph);
                            ctx.lineTo(margin.l + pw, margin.t + ph);
                            ctx.stroke();

                            // Draw function
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var x = i / N;
                                var px = sx(x), py = sy(f(x));
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Draw partition points and segments
                            var dt = 1.0 / nPart;
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 1;
                            ctx.globalAlpha = 0.5;
                            for (var i = 0; i < nPart; i++) {
                                var x1 = i * dt, x2 = (i + 1) * dt;
                                var y1 = f(x1), y2 = f(x2);
                                ctx.beginPath();
                                ctx.moveTo(sx(x1), sy(y1));
                                ctx.lineTo(sx(x2), sy(y2));
                                ctx.stroke();
                            }
                            ctx.globalAlpha = 1;

                            // Partition dots
                            ctx.fillStyle = colors.orange;
                            if (nPart <= 100) {
                                for (var i = 0; i <= nPart; i++) {
                                    var x = i * dt;
                                    ctx.beginPath();
                                    ctx.arc(sx(x), sy(f(x)), 2, 0, 2 * Math.PI);
                                    ctx.fill();
                                }
                            }

                            // Right panel: TV convergence
                            var infoX = margin.l + pw + 15;
                            var partCounts = [5, 10, 20, 50, 100, 200, 500, 1000];
                            var tvVals = partCounts.map(function(n) { return computeTV(f, n); });

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('TV Convergence:', infoX, margin.t + 15);

                            ctx.font = '10px -apple-system, sans-serif';
                            for (var i = 0; i < partCounts.length; i++) {
                                ctx.fillStyle = colors.muted;
                                ctx.fillText(
                                    'n=' + partCounts[i] + ': ' + tvVals[i].toFixed(3),
                                    infoX, margin.t + 35 + i * 16
                                );
                            }

                            // Mini convergence plot
                            var miniX = infoX;
                            var miniY = margin.t + 180;
                            var miniW = 145;
                            var miniH = 100;

                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.strokeRect(miniX, miniY, miniW, miniH);

                            var tvMax = 0;
                            for (var i = 0; i < tvVals.length; i++) {
                                if (tvVals[i] > tvMax) tvMax = tvVals[i];
                            }
                            tvMax = tvMax * 1.1 + 0.1;

                            ctx.strokeStyle = isBV[funcType] ? colors.green : colors.red;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var i = 0; i < tvVals.length; i++) {
                                var px = miniX + (i / (tvVals.length - 1)) * miniW;
                                var py = miniY + miniH - (tvVals[i] / tvMax) * miniH;
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            ctx.fillStyle = colors.muted;
                            ctx.font = '9px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('n (partition size)', miniX + miniW / 2, miniY + miniH + 12);

                            // Verdict
                            ctx.fillStyle = isBV[funcType] ? colors.green : colors.red;
                            ctx.font = 'bold 11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText(
                                isBV[funcType] ? 'BV: diff. a.e., Jordan decomp. exists' : 'Not BV: TV diverges with finer partitions',
                                infoX, miniY + miniH + 30
                            );
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that \\(f(x) = x \\sin(1/x)\\) for \\(x \\in (0, 1]\\) with \\(f(0) = 0\\) is not of bounded variation on \\([0,1]\\).',
                    hint: 'Use the partition points \\(t_k = \\frac{1}{k\\pi}\\) for large \\(k\\). Compute the sum of \\(|f(t_k) - f(t_{k+1})|\\) and show it grows like a harmonic series.',
                    solution: 'Take the partition \\(0 < \\frac{1}{n\\pi} < \\frac{1}{(n-1)\\pi} < \\cdots < \\frac{1}{\\pi} \\leq 1\\). At \\(t_k = \\frac{1}{k\\pi}\\), \\(f(t_k) = \\frac{1}{k\\pi}\\sin(k\\pi) = 0\\) for all \\(k\\). But at \\(s_k = \\frac{2}{(2k-1)\\pi}\\), \\(f(s_k) = \\frac{2}{(2k-1)\\pi} \\sin\\!\\left(\\frac{(2k-1)\\pi}{2}\\right) = \\pm \\frac{2}{(2k-1)\\pi}\\). Using a refined partition that includes both \\(t_k\\) and \\(s_k\\), the variation picks up contributions of order \\(\\frac{1}{k}\\) from each oscillation. Since \\(\\sum_{k=1}^n \\frac{1}{k} \\to \\infty\\), the total variation is infinite.'
                },
                {
                    question: 'Prove that if \\(f\\) is Lipschitz with constant \\(L\\) on \\([a,b]\\), then \\(f \\in \\text{BV}([a,b])\\) and \\(V_a^b(f) \\leq L(b-a)\\).',
                    hint: 'For any partition, bound each \\(|f(t_i) - f(t_{i-1})| \\leq L(t_i - t_{i-1})\\) and sum.',
                    solution: 'For any partition \\(a = t_0 < t_1 < \\cdots < t_n = b\\), \\(\\sum_{i=1}^n |f(t_i) - f(t_{i-1})| \\leq \\sum_{i=1}^n L(t_i - t_{i-1}) = L \\sum_{i=1}^n (t_i - t_{i-1}) = L(b - a)\\). Taking the supremum over all partitions, \\(V_a^b(f) \\leq L(b-a) < \\infty\\). In fact, equality holds when \\(f\\) is \\(C^1\\) and \\(\\sup |f\'| = L\\).'
                },
                {
                    question: 'Let \\(f, g \\in \\text{BV}([a,b])\\). Show that the product \\(fg\\) is also in \\(\\text{BV}([a,b])\\) and bound its total variation.',
                    hint: 'Use the identity \\(f(t_i)g(t_i) - f(t_{i-1})g(t_{i-1}) = f(t_i)[g(t_i) - g(t_{i-1})] + g(t_{i-1})[f(t_i) - f(t_{i-1})]\\).',
                    solution: 'Using the hint identity, \\(|f(t_i)g(t_i) - f(t_{i-1})g(t_{i-1})| \\leq |f(t_i)||g(t_i) - g(t_{i-1})| + |g(t_{i-1})||f(t_i) - f(t_{i-1})| \\leq \\|f\\|_\\infty |g(t_i) - g(t_{i-1})| + \\|g\\|_\\infty |f(t_i) - f(t_{i-1})|\\). Summing over the partition: \\(\\sum |fg(t_i) - fg(t_{i-1})| \\leq \\|f\\|_\\infty V_a^b(g) + \\|g\\|_\\infty V_a^b(f)\\). Since BV functions are bounded (\\(\\|f\\|_\\infty \\leq |f(a)| + V_a^b(f)\\)), we get \\(V_a^b(fg) \\leq \\|f\\|_\\infty V_a^b(g) + \\|g\\|_\\infty V_a^b(f) < \\infty\\).'
                }
            ]
        },

        // ============================================================
        // Section 5: Absolutely Continuous Functions
        // ============================================================
        {
            id: 'absolutely-continuous-functions',
            title: 'Absolutely Continuous Functions',
            content: `
                <div class="bridge section-bridge">
                    <p>The Cantor function showed that monotone (or BV) functions can fail the Fundamental Theorem of Calculus. To recover FTC in the Lebesgue setting, we need a stronger condition than bounded variation. This is <strong>absolute continuity</strong>, the precise condition that characterizes when a function equals the integral of its derivative.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define absolute continuity for functions. Prove that AC implies BV. State and prove the Lebesgue FTC: \\(f\\) is AC if and only if \\(f(x) = f(a) + \\int_a^x f'(t)\\,dt\\). Connect AC functions to Radon-Nikodym derivatives.</p>
                </div>

                <h2>The Definition</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.20 (Absolute Continuity)</div>
                    <div class="env-body">
                        <p>A function \\(f: [a,b] \\to \\mathbb{R}\\) is <strong>absolutely continuous</strong> (written \\(f \\in \\text{AC}([a,b])\\)) if for every \\(\\varepsilon > 0\\) there exists \\(\\delta > 0\\) such that for any finite collection of pairwise disjoint open intervals \\(\\{(a_k, b_k)\\}_{k=1}^n\\) in \\([a,b]\\),</p>
                        \\[\\sum_{k=1}^n (b_k - a_k) < \\delta \\implies \\sum_{k=1}^n |f(b_k) - f(a_k)| < \\varepsilon.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Uniform Continuity on Steroids)</div>
                    <div class="env-body">
                        <p>Ordinary (uniform) continuity says: if a <em>single</em> interval is short, the function does not change much. Absolute continuity says: if a <em>collection</em> of intervals has small total length, the function does not change much <em>in total</em>. This is strictly stronger. The Cantor function is uniformly continuous on \\([0,1]\\), but not absolutely continuous: one can choose intervals covering \\([0,1] \\setminus \\mathcal{C}\\) with total length close to 1, on which \\(F_C\\) has total change close to 0, while the total change on the Cantor set intervals is close to 1, despite them having total length close to 0.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 13.21 (AC and Non-AC Functions)</div>
                    <div class="env-body">
                        <ul>
                            <li><strong>Lipschitz functions are AC:</strong> If \\(|f(x) - f(y)| \\leq L|x - y|\\), take \\(\\delta = \\varepsilon/L\\). Then \\(\\sum |f(b_k) - f(a_k)| \\leq L \\sum (b_k - a_k) < L\\delta = \\varepsilon\\).</li>
                            <li><strong>\\(f(x) = \\sqrt{x}\\) on \\([0,1]\\):</strong> AC despite not being Lipschitz (\\(f'(x) = 1/(2\\sqrt{x})\\), which is unbounded but integrable).</li>
                            <li><strong>The Cantor function:</strong> Continuous, monotone, BV, but NOT absolutely continuous.</li>
                        </ul>
                    </div>
                </div>

                <h2>AC Implies BV</h2>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 13.22 (AC \\(\\subset\\) BV \\(\\subset\\) Differentiable a.e.)</div>
                    <div class="env-body">
                        <p>Every absolutely continuous function is of bounded variation. Consequently, every AC function is differentiable a.e.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(f \\in \\text{AC}([a,b])\\). Choose \\(\\delta > 0\\) corresponding to \\(\\varepsilon = 1\\). Partition \\([a,b]\\) into \\(N = \\lceil(b-a)/\\delta\\rceil\\) subintervals of length at most \\(\\delta\\). On each subinterval \\([c_j, c_{j+1}]\\), the total variation is at most 1 (by the AC condition, any sub-partition within \\([c_j, c_{j+1}]\\) has total length at most \\(\\delta\\), so total variation at most \\(\\varepsilon = 1\\)). Thus \\(V_a^b(f) \\leq N < \\infty\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Hierarchy of Regularity)</div>
                    <div class="env-body">
                        <p>We now have a clean hierarchy on \\([a,b]\\):</p>
                        \\[\\text{Lipschitz} \\subsetneq \\text{AC} \\subsetneq \\text{BV} \\subsetneq \\text{Differentiable a.e.}\\]
                        <p>Each inclusion is strict. Lipschitz \\(\\subsetneq\\) AC: \\(\\sqrt{x}\\) is AC but not Lipschitz. AC \\(\\subsetneq\\) BV: the Cantor function is BV but not AC. BV \\(\\subsetneq\\) differentiable a.e.: there exist functions differentiable a.e. but not of bounded variation.</p>
                    </div>
                </div>

                <h2>The Fundamental Theorem of Calculus for Lebesgue Integrals</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.23 (FTC for Lebesgue Integrals, Part I)</div>
                    <div class="env-body">
                        <p>If \\(f \\in L^1([a,b])\\), define \\(F(x) = \\int_a^x f(t)\\,dt\\). Then \\(F\\) is absolutely continuous on \\([a,b]\\) and \\(F'(x) = f(x)\\) for a.e. \\(x\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p><strong>AC of \\(F\\):</strong> Given \\(\\varepsilon > 0\\), by the absolute continuity of the Lebesgue integral (if \\(f \\in L^1\\), then for every \\(\\varepsilon > 0\\) there exists \\(\\delta > 0\\) such that \\(\\int_E |f| < \\varepsilon\\) whenever \\(m(E) < \\delta\\)), choose such a \\(\\delta\\). If \\(\\sum(b_k - a_k) < \\delta\\), then \\(E = \\bigcup(a_k, b_k)\\) has \\(m(E) < \\delta\\), so \\(\\sum|F(b_k) - F(a_k)| \\leq \\sum \\int_{a_k}^{b_k} |f| = \\int_E |f| < \\varepsilon\\).</p>
                        <p><strong>\\(F' = f\\) a.e.:</strong> This is exactly the Lebesgue Differentiation Theorem applied in dimension 1 (see Exercise 4 of Section 2).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.24 (FTC for Lebesgue Integrals, Part II)</div>
                    <div class="env-body">
                        <p>If \\(F: [a,b] \\to \\mathbb{R}\\) is absolutely continuous, then \\(F'\\) exists a.e., \\(F' \\in L^1([a,b])\\), and</p>
                        \\[F(x) = F(a) + \\int_a^x F'(t)\\,dt \\quad \\text{for all } x \\in [a,b].\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Idea</div>
                    <div class="env-body">
                        <p>Since \\(F \\in \\text{AC} \\subset \\text{BV}\\), \\(F'\\) exists a.e. and \\(F' \\in L^1\\). Define \\(G(x) = F(a) + \\int_a^x F'(t)\\,dt\\). By Part I, \\(G\\) is AC and \\(G' = F'\\) a.e. So \\(H = F - G\\) is AC with \\(H' = 0\\) a.e. The key claim is: <em>an AC function with zero derivative a.e. is constant</em>.</p>
                        <p>To prove the claim: \\(H' = 0\\) a.e. means that for a.e. \\(x\\) and every \\(\\eta > 0\\), we have \\(|H(y) - H(x)| < \\eta|y - x|\\) for \\(y\\) near \\(x\\). Using the Vitali covering lemma and the AC property, one shows \\(|H(y) - H(x)| \\leq \\eta(y - x) + \\varepsilon\\) for arbitrary \\(\\eta, \\varepsilon > 0\\), hence \\(H\\) is constant. Thus \\(F = G\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 13.25 (Characterization of Absolute Continuity)</div>
                    <div class="env-body">
                        <p>A function \\(F: [a,b] \\to \\mathbb{R}\\) is absolutely continuous if and only if all three of the following hold:</p>
                        <ol>
                            <li>\\(F'\\) exists a.e.</li>
                            <li>\\(F' \\in L^1([a,b])\\).</li>
                            <li>\\(F(x) = F(a) + \\int_a^x F'(t)\\,dt\\) for all \\(x\\).</li>
                        </ol>
                    </div>
                </div>

                <h2>Connection to Radon-Nikodym</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.26 (AC Functions and Radon-Nikodym)</div>
                    <div class="env-body">
                        <p>Let \\(F: [a,b] \\to \\mathbb{R}\\) be monotone increasing and let \\(\\mu_F\\) be its Lebesgue-Stieltjes measure. Then:</p>
                        <ol>
                            <li>\\(F \\in \\text{AC}\\) if and only if \\(\\mu_F \\ll \\lambda\\) (Lebesgue measure).</li>
                            <li>When \\(F \\in \\text{AC}\\), the Radon-Nikodym derivative is \\(\\frac{d\\mu_F}{d\\lambda} = F'\\) a.e.</li>
                            <li>The Lebesgue decomposition \\(\\mu_F = \\mu_F^{ac} + \\mu_F^s\\) corresponds to \\(F = F_{ac} + F_s\\) where \\(F_{ac}\\) is AC and \\(F_s'= 0\\) a.e.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Grand Picture)</div>
                    <div class="env-body">
                        <p>This theorem closes a beautiful circle connecting four chapters of this course:</p>
                        <ul>
                            <li><strong>Lebesgue measure</strong> (Chapter 4) gives us the reference measure \\(\\lambda\\).</li>
                            <li><strong>The Lebesgue integral</strong> (Chapter 6) lets us integrate \\(F'\\).</li>
                            <li><strong>Radon-Nikodym</strong> (Chapter 11) guarantees the density \\(dF/d\\lambda\\) when \\(\\mu_F \\ll \\lambda\\).</li>
                            <li><strong>Differentiation</strong> (this chapter) identifies that density as the classical derivative \\(F'\\).</li>
                        </ul>
                        <p>The Fundamental Theorem of Calculus, in its definitive Lebesgue form, states that the operations "integrate" (\\(f \\mapsto \\int_a^x f\\)) and "differentiate" (\\(F \\mapsto F'\\)) are inverses, provided we work with AC functions and \\(L^1\\) derivatives.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ftc-comparison"></div>

                <p><strong>Reference alignment:</strong> Folland 3.5; Royden-Fitzpatrick 6.4-6.5; Stein-Shakarchi III.3.</p>
            `,
            visualizations: [
                {
                    id: 'ftc-comparison',
                    title: 'FTC Comparison: Riemann vs. Lebesgue',
                    description: 'Side-by-side comparison of the Fundamental Theorem of Calculus in the Riemann and Lebesgue settings. See which functions satisfy FTC and which do not.',
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

                        var example = 0;

                        var exNames = [
                            'AC: F(x)=x^2, F\'=2x [FTC holds]',
                            'AC: F=integral of |t|^{-1/2} [FTC holds]',
                            'BV, not AC: Cantor function [FTC fails]',
                            'Not BV: x sin(1/x) [neither]'
                        ];

                        // Functions F and their derivatives
                        var Fs = [
                            function(x) { return x * x; },
                            function(x) { return 2 * Math.sqrt(Math.max(x, 0)); },
                            null, // Cantor function (special)
                            function(x) { return x < 0.001 ? 0 : x * Math.sin(1 / x); }
                        ];

                        var Fprimes = [
                            function(x) { return 2 * x; },
                            function(x) { return x <= 0.001 ? 10 : 1 / Math.sqrt(x); },
                            function(x) { return 0; }, // Cantor: F' = 0 a.e.
                            function(x) { return x < 0.001 ? 0 : Math.sin(1 / x) - Math.cos(1 / x) / x; }
                        ];

                        var isAC = [true, true, false, false];
                        var isBVArr = [true, true, true, false];

                        function cantorF(x, lev) {
                            var result = 0;
                            var power = 0.5;
                            var lo = 0, hi = 1;
                            for (var i = 0; i < lev; i++) {
                                var t1 = lo + (hi - lo) / 3;
                                var t2 = lo + 2 * (hi - lo) / 3;
                                if (x < t1) { hi = t1; }
                                else if (x > t2) { result += power; lo = t2; }
                                else { result += power; return result; }
                                power /= 2;
                            }
                            result += power * 2 * (x - lo) / (hi - lo);
                            return result;
                        }

                        VizEngine.createSlider(controls, 'Example (0-3)', 0, 3, example, 1, function(v) {
                            example = Math.round(v);
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var halfW = Math.floor(w / 2) - 10;
                            var margin = { l: 50, r: 15, t: 70, b: 50 };

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('FTC Comparison: ' + exNames[example], w / 2, 20);

                            var acText = isAC[example] ? 'AC: YES' : 'AC: NO';
                            var bvText = isBVArr[example] ? 'BV: YES' : 'BV: NO';
                            var ftcText = isAC[example] ? 'FTC: F(x) = F(0) + integral F\'' : 'FTC: FAILS';

                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillStyle = isAC[example] ? colors.green : colors.red;
                            ctx.fillText(acText + '    ' + bvText + '    ' + ftcText, w / 2, 42);

                            function drawPanel(ox, title, plotFunc, color, label) {
                                var pw = halfW - margin.l - margin.r;
                                var ph = h - margin.t - margin.b;

                                ctx.fillStyle = colors.text;
                                ctx.font = 'bold 12px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(title, ox + halfW / 2, 60);

                                // Compute range
                                var N = 500;
                                var xMin = 0, xMax = 1;
                                var dx = (xMax - xMin) / N;
                                var yMin = 1e9, yMax = -1e9;
                                var vals = [];
                                for (var i = 0; i <= N; i++) {
                                    var x = xMin + i * dx;
                                    var v = plotFunc(x);
                                    v = Math.max(-5, Math.min(5, v)); // clamp
                                    vals.push(v);
                                    if (v < yMin) yMin = v;
                                    if (v > yMax) yMax = v;
                                }
                                var yPad = (yMax - yMin) * 0.1 + 0.05;
                                yMin -= yPad;
                                yMax += yPad;

                                function sx(x) { return ox + margin.l + ((x - xMin) / (xMax - xMin)) * pw; }
                                function sy(y) { return margin.t + ph - ((y - yMin) / (yMax - yMin)) * ph; }

                                // Axes
                                ctx.strokeStyle = colors.muted;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(ox + margin.l, margin.t);
                                ctx.lineTo(ox + margin.l, margin.t + ph);
                                ctx.lineTo(ox + margin.l + pw, margin.t + ph);
                                ctx.stroke();

                                if (yMin < 0 && yMax > 0) {
                                    ctx.strokeStyle = '#1a1a40';
                                    ctx.beginPath();
                                    ctx.moveTo(ox + margin.l, sy(0));
                                    ctx.lineTo(ox + margin.l + pw, sy(0));
                                    ctx.stroke();
                                }

                                // Plot
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= N; i++) {
                                    var px = sx(xMin + i * dx);
                                    var py = sy(vals[i]);
                                    if (i === 0) ctx.moveTo(px, py);
                                    else ctx.lineTo(px, py);
                                }
                                ctx.stroke();

                                // Label
                                ctx.fillStyle = color;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText(label, ox + margin.l + 5, margin.t + 15);
                            }

                            var F = example === 2 ? function(x) { return cantorF(x, 10); } : Fs[example];
                            var Fp = Fprimes[example];

                            drawPanel(0, 'F(x)', F, colors.blue, 'F');
                            drawPanel(halfW + 20, "F'(x) a.e.", Fp, colors.orange, "F'");

                            // Also draw integral of F' on left panel for comparison
                            if (example <= 1) {
                                // Numerically integrate F'
                                var N2 = 500;
                                var dx2 = 1.0 / N2;
                                var integral = [];
                                var running = F(0);
                                integral.push(running);
                                for (var i = 1; i <= N2; i++) {
                                    var x = i * dx2;
                                    running += Fp((i - 0.5) * dx2) * dx2;
                                    integral.push(running);
                                }

                                // Draw as dashed
                                var pw = halfW - margin.l - margin.r;
                                var ph = h - margin.t - margin.b;
                                var yMin2 = 1e9, yMax2 = -1e9;
                                for (var i = 0; i <= N2; i++) {
                                    var fv = F(i / N2);
                                    if (fv < yMin2) yMin2 = fv;
                                    if (fv > yMax2) yMax2 = fv;
                                    if (integral[i] < yMin2) yMin2 = integral[i];
                                    if (integral[i] > yMax2) yMax2 = integral[i];
                                }
                                var yPad2 = (yMax2 - yMin2) * 0.1 + 0.05;
                                yMin2 -= yPad2;
                                yMax2 += yPad2;

                                function sx2(x) { return margin.l + x * pw; }
                                function sy2(y) { return margin.t + ph - ((y - yMin2) / (yMax2 - yMin2)) * ph; }

                                ctx.strokeStyle = colors.green;
                                ctx.lineWidth = 1.5;
                                ctx.setLineDash([4, 4]);
                                ctx.beginPath();
                                for (var i = 0; i <= N2; i++) {
                                    var px = sx2(i / N2);
                                    var py = sy2(integral[i]);
                                    if (i === 0) ctx.moveTo(px, py);
                                    else ctx.lineTo(px, py);
                                }
                                ctx.stroke();
                                ctx.setLineDash([]);

                                ctx.fillStyle = colors.green;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText("F(a)+int F' (dashed)", margin.l + 5, margin.t + 30);
                            }

                            // Bottom summary
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            if (example === 2) {
                                ctx.fillText("Cantor: F' = 0 a.e., so integral of F' = 0, but F(1) - F(0) = 1. The singular part carries all the increase.", w / 2, h - 10);
                            } else if (example === 0 || example === 1) {
                                ctx.fillText("AC function: F(x) = F(0) + integral_0^x F'(t) dt. Blue = F, green dashed = integral of F'. They match!", w / 2, h - 10);
                            } else {
                                ctx.fillText("Not BV: F' exists a.e. but is not L^1. FTC is not applicable.", w / 2, h - 10);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that the Cantor function is NOT absolutely continuous.',
                    hint: 'Find a collection of intervals covering \\([0,1] \\setminus \\mathcal{C}\\) with total length 1, on which the total change of \\(F_C\\) is 0. Then consider what happens on the complementary intervals.',
                    solution: 'The Cantor set \\(\\mathcal{C}\\) has measure 0, so for any \\(\\delta > 0\\), we can cover \\(\\mathcal{C}\\) by finitely many disjoint open intervals \\((a_k, b_k)\\) with \\(\\sum(b_k - a_k) < \\delta\\). But \\(F_C\\) does all its increasing on \\(\\mathcal{C}\\), so \\(\\sum|F_C(b_k) - F_C(a_k)|\\) captures most of the total increase of 1. More precisely: the complement \\([0,1] \\setminus \\mathcal{C}\\) is a union of open intervals on which \\(F_C\\) is constant (zero change). Thus the total variation on any covering of \\(\\mathcal{C}\\) must equal \\(F_C(1) - F_C(0) = 1\\). So for \\(\\varepsilon < 1\\), no \\(\\delta > 0\\) works, and \\(F_C \\notin \\text{AC}\\).'
                },
                {
                    question: 'Show that \\(f(x) = \\sqrt{x}\\) is absolutely continuous on \\([0,1]\\) even though \\(f\'(x) = 1/(2\\sqrt{x})\\) is unbounded.',
                    hint: 'Verify the AC condition directly, or use Theorem 13.23: \\(f(x) = \\int_0^x \\frac{1}{2\\sqrt{t}}\\,dt\\) and \\(1/(2\\sqrt{t}) \\in L^1([0,1])\\).',
                    solution: 'Since \\(\\int_0^1 \\frac{1}{2\\sqrt{t}}\\,dt = [\\sqrt{t}]_0^1 = 1 < \\infty\\), the derivative \\(f\' = 1/(2\\sqrt{t})\\) is in \\(L^1([0,1])\\). By Theorem 13.23 (FTC Part I), \\(F(x) = \\int_0^x \\frac{1}{2\\sqrt{t}}\\,dt = \\sqrt{x}\\) is absolutely continuous. Alternatively, verify directly: for disjoint intervals \\((a_k, b_k)\\), \\(\\sum|\\sqrt{b_k} - \\sqrt{a_k}| = \\sum \\frac{b_k - a_k}{\\sqrt{b_k} + \\sqrt{a_k}} \\leq \\frac{1}{2\\sqrt{\\min a_k}} \\sum(b_k - a_k)\\), but this bound is not uniform. The \\(L^1\\) approach via Theorem 13.23 is cleaner.'
                },
                {
                    question: 'Let \\(F\\) be AC on \\([a,b]\\) with \\(F\' \\geq 0\\) a.e. Prove that \\(F\\) is monotone increasing.',
                    hint: 'Use the FTC representation: \\(F(y) - F(x) = \\int_x^y F\'(t)\\,dt\\).',
                    solution: 'By Theorem 13.24, \\(F(y) - F(x) = \\int_x^y F\'(t)\\,dt\\) for all \\(a \\leq x \\leq y \\leq b\\). Since \\(F\' \\geq 0\\) a.e., the integral of a non-negative function over an interval is non-negative: \\(\\int_x^y F\' \\geq 0\\). Thus \\(F(y) \\geq F(x)\\) whenever \\(y \\geq x\\), so \\(F\\) is monotone increasing.'
                },
                {
                    question: 'Prove that if \\(F\\) is AC and \\(F\' = 0\\) a.e., then \\(F\\) is constant. (This is the key lemma in the proof of Theorem 13.24.)',
                    hint: 'The FTC gives \\(F(x) - F(a) = \\int_a^x 0\\,dt = 0\\).',
                    solution: 'Since \\(F\\) is AC, Theorem 13.24 gives \\(F(x) = F(a) + \\int_a^x F\'(t)\\,dt = F(a) + \\int_a^x 0\\,dt = F(a)\\) for all \\(x \\in [a,b]\\). (To avoid circular reasoning, one proves this lemma independently using the Vitali covering argument: for each \\(\\eta > 0\\), the set where \\(|F(y) - F(x)| \\leq \\eta|y - x|\\) for small \\(|y - x|\\) has full measure. Cover \\([a,b]\\) by such intervals, use AC to control the remainder, and conclude \\(|F(b) - F(a)| \\leq \\eta(b - a) + \\varepsilon\\) for arbitrary \\(\\eta, \\varepsilon\\).)'
                },
                {
                    question: '(Synthesis) Summarize the three conditions that distinguish AC from BV: give an example of a function that is (a) AC, (b) BV but not AC, and (c) continuous but not BV. For each, state whether the FTC \\(F(x) = F(a) + \\int_a^x F\'\\) holds.',
                    hint: 'Use the canonical examples from this section.',
                    solution: '(a) \\(F(x) = x^2\\) on \\([0,1]\\): AC, \\(F\' = 2x\\), FTC holds: \\(x^2 = 0 + \\int_0^x 2t\\,dt\\). (b) The Cantor function \\(F_C\\) on \\([0,1]\\): BV (\\(V = 1\\)), not AC, \\(F_C\' = 0\\) a.e., FTC fails: \\(\\int_0^1 0\\,dt = 0 \\neq 1 = F_C(1) - F_C(0)\\). The missing increment is the singular part \\(\\mu_{F_C}^s\\). (c) \\(f(x) = x\\sin(1/x)\\) on \\([0,1]\\): continuous, not BV (oscillations give \\(V = \\infty\\)), \\(f\'\\) exists a.e. but is not \\(L^1\\), FTC is not applicable. The hierarchy: Lipschitz \\(\\subset\\) AC \\(\\subset\\) BV \\(\\subset\\) differentiable a.e., with each \\(\\subset\\) strict.'
                }
            ]
        }
    ]
});

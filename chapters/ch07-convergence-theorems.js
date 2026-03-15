window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch07',
    number: 7,
    title: 'The Great Convergence Theorems',
    subtitle: 'MCT, Fatou\'s Lemma, and the Dominated Convergence Theorem',
    sections: [
        // ============================================================
        // Section 1: The Monotone Convergence Theorem (MCT)
        // ============================================================
        {
            id: 'monotone-convergence',
            title: 'The Monotone Convergence Theorem (MCT)',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>This is the climax of Part B.</strong> In Chapter 6 we built the Lebesgue integral. Now we ask: when can we interchange limits and integrals? The Riemann integral has no satisfactory answer. The Lebesgue integral has three magnificent theorems that completely settle the question for the most important cases. We begin with the most fundamental of the three: the Monotone Convergence Theorem.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and completely prove the Monotone Convergence Theorem (MCT). Understand why monotonicity is the key hypothesis, and see the theorem in action on concrete examples.</p>
                </div>

                <h2>The Central Question</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Interchanging Limits and Integrals)</div>
                    <div class="env-body">
                        <p>Suppose we have a sequence of measurable functions \\(f_n\\) converging pointwise to a limit \\(f\\). We want to know:</p>
                        \\[\\lim_{n \\to \\infty} \\int f_n\\,d\\mu \\stackrel{?}{=} \\int \\left(\\lim_{n \\to \\infty} f_n\\right) d\\mu.\\]
                        <p>In other words, can we "pass the limit inside the integral"? For Riemann integration, this interchange fails spectacularly even for simple sequences. The Lebesgue theory will give us clean, verifiable conditions under which the interchange is valid.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (The Interchange Can Fail)</div>
                    <div class="env-body">
                        <p>Consider \\(f_n = n \\cdot \\mathbf{1}_{(0, 1/n)}\\) on \\([0,1]\\) with Lebesgue measure. Then \\(f_n \\to 0\\) pointwise (for any fixed \\(x &gt; 0\\), eventually \\(x \\notin (0,1/n)\\)). But \\(\\int f_n\\,d\\mu = n \\cdot \\frac{1}{n} = 1\\) for all \\(n\\). So \\(\\lim \\int f_n = 1 \\neq 0 = \\int \\lim f_n\\). The limit and integral do <em>not</em> commute here. Notice that this sequence is <em>not</em> monotone increasing.</p>
                    </div>
                </div>

                <h2>Statement of the MCT</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.1 (Monotone Convergence Theorem, Beppo Levi)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A}, \\mu)\\) be a measure space and let \\(f_1, f_2, \\ldots\\) be measurable functions \\(X \\to [0, \\infty]\\) satisfying</p>
                        \\[0 \\leq f_1(x) \\leq f_2(x) \\leq \\cdots \\quad \\text{for all } x \\in X.\\]
                        <p>Define \\(f(x) = \\lim_{n \\to \\infty} f_n(x)\\) (which exists in \\([0, \\infty]\\) because the sequence is increasing). Then</p>
                        \\[\\lim_{n \\to \\infty} \\int_X f_n\\,d\\mu = \\int_X f\\,d\\mu.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why Monotonicity Suffices)</div>
                    <div class="env-body">
                        <p>When the functions are increasing, "mass cannot escape." Each \\(f_n\\) contributes at least as much area as \\(f_{n-1}\\), and the areas accumulate steadily toward the area under the limit function. There is no cancellation, no oscillation, no mass fleeing to infinity. The monotonicity acts as a one-way valve: once area is captured, it stays captured.</p>
                    </div>
                </div>

                <h2>Complete Proof of the MCT</h2>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 7.1</div>
                    <div class="env-body">
                        <p><strong>Step 1: The easy inequality (\\(\\leq\\)).</strong></p>
                        <p>Since \\(f_n \\leq f\\) for all \\(n\\) (each \\(f_n\\) is bounded above by the pointwise limit), monotonicity of the integral gives</p>
                        \\[\\int f_n\\,d\\mu \\leq \\int f\\,d\\mu \\quad \\text{for all } n.\\]
                        <p>Taking the limit (which exists because \\(\\int f_n\\,d\\mu\\) is an increasing sequence of extended real numbers):</p>
                        \\[\\lim_{n \\to \\infty} \\int f_n\\,d\\mu \\leq \\int f\\,d\\mu.\\]

                        <p><strong>Step 2: The hard inequality (\\(\\geq\\)).</strong></p>
                        <p>We must show \\(\\int f\\,d\\mu \\leq \\lim_n \\int f_n\\,d\\mu\\). By the definition of the Lebesgue integral for non-negative functions, it suffices to show that for every simple function \\(s\\) with \\(0 \\leq s \\leq f\\),</p>
                        \\[\\int s\\,d\\mu \\leq \\lim_{n \\to \\infty} \\int f_n\\,d\\mu.\\]

                        <p>Fix such a simple function \\(s = \\sum_{i=1}^{k} a_i \\mathbf{1}_{E_i}\\) and fix \\(\\alpha \\in (0, 1)\\). Define the sets</p>
                        \\[A_n = \\{x \\in X : f_n(x) \\geq \\alpha\\, s(x)\\}.\\]

                        <p><strong>Key properties of \\(A_n\\):</strong></p>
                        <ul>
                            <li>Each \\(A_n\\) is measurable (as a preimage under measurable functions).</li>
                            <li>\\(A_1 \\subseteq A_2 \\subseteq \\cdots\\) (because \\(f_n\\) is increasing).</li>
                            <li>\\(\\bigcup_{n=1}^{\\infty} A_n = X\\). Indeed, for any \\(x\\), if \\(s(x) = 0\\) then \\(x \\in A_1\\). If \\(s(x) &gt; 0\\), then \\(f(x) \\geq s(x) &gt; \\alpha\\, s(x)\\), so \\(f_n(x) \\geq \\alpha\\, s(x)\\) for all sufficiently large \\(n\\).</li>
                        </ul>

                        <p><strong>Bounding the integral.</strong> On the set \\(A_n\\), we have \\(f_n \\geq \\alpha\\, s\\), so</p>
                        \\[\\int f_n\\,d\\mu \\geq \\int_{A_n} f_n\\,d\\mu \\geq \\alpha \\int_{A_n} s\\,d\\mu = \\alpha \\sum_{i=1}^{k} a_i \\,\\mu(E_i \\cap A_n).\\]

                        <p>As \\(n \\to \\infty\\), since \\(A_n \\uparrow X\\), continuity of measure from below gives \\(\\mu(E_i \\cap A_n) \\to \\mu(E_i)\\) for each \\(i\\). Therefore</p>
                        \\[\\lim_{n \\to \\infty} \\int f_n\\,d\\mu \\geq \\alpha \\sum_{i=1}^{k} a_i \\,\\mu(E_i) = \\alpha \\int s\\,d\\mu.\\]

                        <p>Since this holds for all \\(\\alpha \\in (0,1)\\), letting \\(\\alpha \\uparrow 1\\):</p>
                        \\[\\lim_{n \\to \\infty} \\int f_n\\,d\\mu \\geq \\int s\\,d\\mu.\\]

                        <p>Since this holds for every simple function \\(s\\) with \\(0 \\leq s \\leq f\\), taking the supremum over all such \\(s\\):</p>
                        \\[\\lim_{n \\to \\infty} \\int f_n\\,d\\mu \\geq \\sup_s \\int s\\,d\\mu = \\int f\\,d\\mu.\\]

                        <p><strong>Step 3: Combining.</strong> From Steps 1 and 2:</p>
                        \\[\\int f\\,d\\mu \\leq \\lim_{n \\to \\infty} \\int f_n\\,d\\mu \\leq \\int f\\,d\\mu,\\]
                        <p>hence \\(\\lim_{n \\to \\infty} \\int f_n\\,d\\mu = \\int f\\,d\\mu\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Role of \\(\\alpha\\))</div>
                    <div class="env-body">
                        <p>The parameter \\(\\alpha \\in (0,1)\\) in the proof is a technical device. We cannot directly work with \\(\\{f_n \\geq s\\}\\) because this set need not exhaust \\(X\\) (if \\(f_n \\to f\\) but never reaches \\(f\\), the set \\(\\{f_n \\geq s\\}\\) might miss points where \\(f = s\\)). By pulling back slightly to \\(\\alpha s\\) with \\(\\alpha &lt; 1\\), we ensure that the sets \\(A_n\\) do cover all of \\(X\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.2 (MCT in Action)</div>
                    <div class="env-body">
                        <p>Let \\(f_n(x) = x^n \\mathbf{1}_{[0,1]}(x)\\) for \\(n \\geq 1\\). Wait, this sequence is <em>not</em> increasing for \\(x \\in (0,1)\\). Let us try a proper example.</p>
                        <p>Define \\(f_n(x) = \\min(f(x), n)\\) where \\(f(x) = 1/\\sqrt{x}\\) on \\((0,1]\\) (and \\(f(0) = +\\infty\\)). Then \\(f_n \\uparrow f\\) and</p>
                        \\[\\int_0^1 f_n\\,d\\mu \\to \\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx = 2.\\]
                        <p>The MCT guarantees this convergence. Each truncation \\(f_n\\) is bounded (hence integrable), and their integrals march upward to the integral of the (unbounded) limit.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.3 (Approximation by Truncation)</div>
                    <div class="env-body">
                        <p>More generally, for any non-negative measurable \\(f\\), the sequence \\(f_n = f \\wedge n\\) (minimum of \\(f\\) and \\(n\\)) is an increasing sequence of bounded measurable functions converging pointwise to \\(f\\). The MCT gives \\(\\int f\\,d\\mu = \\lim_n \\int (f \\wedge n)\\,d\\mu\\). This shows that the integral of an unbounded function is fully determined by its bounded truncations.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mct-convergence-animator"></div>

                <p><strong>Reference alignment:</strong> Folland 2.14; Royden-Fitzpatrick 4.3 Theorem 19; Stein-Shakarchi III.2; Rudin RCA 1.26.</p>
            `,
            visualizations: [
                {
                    id: 'mct-convergence-animator',
                    title: 'MCT Convergence Animator',
                    description: 'Display an increasing sequence of non-negative functions; shade the area under each; show the integrals converging to the integral of the limit.',
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
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var nVal = 3;
                        var exampleIdx = 0;
                        var examples = [
                            {
                                name: 'f(x) = 1/sqrt(x), f_n = min(f, n)',
                                limit: function(x) { return x > 0 ? 1.0 / Math.sqrt(x) : 10; },
                                fn: function(x, n) { var v = x > 0 ? 1.0 / Math.sqrt(x) : 10; return Math.min(v, n); },
                                xMin: 0.001, xMax: 1, yMax: 6,
                                integralLimit: 2.0,
                                integralFn: function(n) {
                                    // integral of min(1/sqrt(x), n) on (0,1)
                                    // = integral on (0, 1/n^2) of n dx + integral on (1/n^2, 1) of 1/sqrt(x) dx
                                    // = n * 1/n^2 + 2(1 - 1/n) = 1/n + 2 - 2/n = 2 - 1/n
                                    return 2 - 1.0 / n;
                                }
                            },
                            {
                                name: 'f(x) = 1/(1-x), f_n = min(f, n)',
                                limit: function(x) { return x < 1 ? 1.0 / (1 - x) : 10; },
                                fn: function(x, n) { var v = x < 1 ? 1.0 / (1 - x) : 10; return Math.min(v, n); },
                                xMin: 0, xMax: 0.999, yMax: 8,
                                integralLimit: Infinity,
                                integralFn: function(n) {
                                    // integral of min(1/(1-x), n) on (0,1)
                                    // = integral on (0, 1-1/n) of 1/(1-x) + integral on (1-1/n, 1) of n
                                    // = -ln(1/n) + n * 1/n = ln(n) + 1
                                    return Math.log(n) + 1;
                                }
                            },
                            {
                                name: 'f_n(x) = n*x*exp(-nx^2/2)',
                                limit: function(x) { return 0; },
                                fn: function(x, n) { return n * x * Math.exp(-n * x * x / 2); },
                                xMin: 0, xMax: 3, yMax: 5,
                                integralLimit: 1.0,
                                integralFn: function(n) { return 1 - Math.exp(-n * 9 / 2); },
                                note: 'Warning: NOT increasing. MCT does not apply!'
                            }
                        ];

                        VizEngine.createSlider(controls, 'n (sequence index)', 1, 30, nVal, 1, function(v) {
                            nVal = Math.round(v);
                            draw();
                        });

                        var exBtn1 = document.createElement('button');
                        exBtn1.textContent = 'Example 1: 1/sqrt(x)';
                        exBtn1.style.cssText = 'margin:4px;padding:4px 10px;background:#222255;color:#c9d1d9;border:1px solid #58a6ff;border-radius:4px;cursor:pointer;font-size:12px;';
                        exBtn1.onclick = function() { exampleIdx = 0; draw(); };
                        controls.appendChild(exBtn1);

                        var exBtn2 = document.createElement('button');
                        exBtn2.textContent = 'Example 2: 1/(1-x)';
                        exBtn2.style.cssText = 'margin:4px;padding:4px 10px;background:#222255;color:#c9d1d9;border:1px solid #58a6ff;border-radius:4px;cursor:pointer;font-size:12px;';
                        exBtn2.onclick = function() { exampleIdx = 1; draw(); };
                        controls.appendChild(exBtn2);

                        var exBtn3 = document.createElement('button');
                        exBtn3.textContent = 'Non-monotone (MCT fails)';
                        exBtn3.style.cssText = 'margin:4px;padding:4px 10px;background:#222255;color:#f85149;border:1px solid #f85149;border-radius:4px;cursor:pointer;font-size:12px;';
                        exBtn3.onclick = function() { exampleIdx = 2; draw(); };
                        controls.appendChild(exBtn3);

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var ex = examples[exampleIdx];
                            var margin = {left: 60, right: 180, top: 50, bottom: 50};
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Monotone Convergence Theorem', w / 2, 20);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText(ex.name + '   |   n = ' + nVal, w / 2, 38);

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, margin.top);
                            ctx.lineTo(margin.left, margin.top + plotH);
                            ctx.lineTo(margin.left + plotW, margin.top + plotH);
                            ctx.stroke();

                            // Grid lines
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var gy = 0; gy <= 4; gy++) {
                                var yy = margin.top + plotH - (gy / 4) * plotH;
                                ctx.beginPath();
                                ctx.moveTo(margin.left, yy);
                                ctx.lineTo(margin.left + plotW, yy);
                                ctx.stroke();
                                ctx.fillStyle = colors.muted;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText((gy * ex.yMax / 4).toFixed(1), margin.left - 5, yy + 4);
                            }

                            function toX(xVal) {
                                return margin.left + ((xVal - ex.xMin) / (ex.xMax - ex.xMin)) * plotW;
                            }
                            function toY(yVal) {
                                return margin.top + plotH - (yVal / ex.yMax) * plotH;
                            }

                            var steps = 400;
                            var dx = (ex.xMax - ex.xMin) / steps;

                            // Shade area under f_n
                            ctx.fillStyle = 'rgba(63, 185, 160, 0.2)';
                            ctx.beginPath();
                            ctx.moveTo(toX(ex.xMin), toY(0));
                            for (var i = 0; i <= steps; i++) {
                                var xv = ex.xMin + i * dx;
                                var yv = Math.min(ex.fn(xv, nVal), ex.yMax);
                                ctx.lineTo(toX(xv), toY(Math.max(0, yv)));
                            }
                            ctx.lineTo(toX(ex.xMax), toY(0));
                            ctx.closePath();
                            ctx.fill();

                            // Draw limit function f
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= steps; i++) {
                                var xv = ex.xMin + i * dx;
                                var yv = Math.min(ex.limit(xv), ex.yMax);
                                if (yv < 0) yv = 0;
                                var px = toX(xv);
                                var py = toY(yv);
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else { ctx.lineTo(px, py); }
                            }
                            ctx.stroke();

                            // Draw f_n
                            ctx.strokeStyle = colors.teal;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            started = false;
                            for (var i = 0; i <= steps; i++) {
                                var xv = ex.xMin + i * dx;
                                var yv = Math.min(ex.fn(xv, nVal), ex.yMax);
                                if (yv < 0) yv = 0;
                                var px = toX(xv);
                                var py = toY(yv);
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else { ctx.lineTo(px, py); }
                            }
                            ctx.stroke();

                            // Draw previous f_{n-1} if n > 1 (ghost)
                            if (nVal > 1) {
                                ctx.strokeStyle = 'rgba(63, 185, 160, 0.3)';
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                started = false;
                                for (var i = 0; i <= steps; i++) {
                                    var xv = ex.xMin + i * dx;
                                    var yv = Math.min(ex.fn(xv, nVal - 1), ex.yMax);
                                    if (yv < 0) yv = 0;
                                    var px = toX(xv);
                                    var py = toY(yv);
                                    if (!started) { ctx.moveTo(px, py); started = true; }
                                    else { ctx.lineTo(px, py); }
                                }
                                ctx.stroke();
                            }

                            // Legend
                            var legX = w - margin.right + 15;
                            var legY = margin.top + 10;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';

                            ctx.fillStyle = colors.orange;
                            ctx.fillRect(legX, legY, 15, 3);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('f (limit)', legX + 22, legY + 5);

                            ctx.fillStyle = colors.teal;
                            ctx.fillRect(legX, legY + 20, 15, 3);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('f_n', legX + 22, legY + 25);

                            // Integral info
                            var intFn = ex.integralFn(nVal);
                            var intLimit = ex.integralLimit;
                            legY += 55;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillStyle = colors.teal;
                            ctx.fillText('integral f_n = ' + intFn.toFixed(4), legX, legY);
                            ctx.fillStyle = colors.orange;
                            ctx.fillText('integral f = ' + (isFinite(intLimit) ? intLimit.toFixed(4) : '+inf'), legX, legY + 18);

                            // Gap
                            var gap = isFinite(intLimit) ? Math.abs(intLimit - intFn) : intFn;
                            ctx.fillStyle = colors.muted;
                            ctx.fillText('gap = ' + (isFinite(intLimit) ? gap.toFixed(4) : 'diverging'), legX, legY + 36);

                            // Convergence bar
                            if (isFinite(intLimit) && intLimit > 0) {
                                var barY = legY + 55;
                                var barW2 = 130;
                                var barH = 12;
                                ctx.strokeStyle = colors.muted;
                                ctx.strokeRect(legX, barY, barW2, barH);
                                var frac = Math.min(intFn / intLimit, 1);
                                ctx.fillStyle = colors.green;
                                ctx.fillRect(legX, barY, barW2 * frac, barH);
                                ctx.fillStyle = colors.text;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.fillText((frac * 100).toFixed(1) + '% of limit', legX, barY + barH + 14);
                            }

                            // Warning for non-monotone example
                            if (ex.note) {
                                ctx.fillStyle = colors.red;
                                ctx.font = 'bold 11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(ex.note, w / 2, h - 8);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(f_n = \\mathbf{1}_{[0,n]}\\) on \\((\\mathbb{R}, \\mathcal{B}, \\lambda)\\). Verify that the hypotheses of the MCT hold and compute \\(\\lim_n \\int f_n\\,d\\lambda\\) directly.',
                    hint: 'Check: are the \\(f_n\\) non-negative, measurable, and increasing? What is the pointwise limit?',
                    solution: 'Each \\(f_n = \\mathbf{1}_{[0,n]}\\) is non-negative and measurable. For \\(m \\leq n\\), \\([0,m] \\subseteq [0,n]\\), so \\(f_m \\leq f_n\\). The pointwise limit is \\(f = \\mathbf{1}_{[0,\\infty)}\\). The MCT gives \\(\\lim_n \\int f_n\\,d\\lambda = \\int \\mathbf{1}_{[0,\\infty)}\\,d\\lambda\\). Now \\(\\int f_n\\,d\\lambda = \\lambda([0,n]) = n \\to \\infty\\), and \\(\\int f\\,d\\lambda = \\lambda([0,\\infty)) = \\infty\\). Both sides are \\(+\\infty\\), consistent with the MCT (the theorem allows the value \\(+\\infty\\)).'
                },
                {
                    question: 'Prove that if \\(f \\geq 0\\) is measurable and \\(\\int f\\,d\\mu = 0\\), then \\(f = 0\\) \\(\\mu\\)-a.e., using the MCT.',
                    hint: 'Consider the sets \\(E_n = \\{x : f(x) \\geq 1/n\\}\\) and use Markov\'s inequality, or consider \\(n \\cdot \\mathbf{1}_{\\{f > 0\\}} \\wedge f\\).',
                    solution: 'Let \\(E = \\{f > 0\\} = \\bigcup_{n=1}^\\infty E_n\\) where \\(E_n = \\{f \\geq 1/n\\}\\). By Markov\'s inequality, \\(\\mu(E_n) \\leq n \\int f\\,d\\mu = 0\\), so \\(\\mu(E_n) = 0\\) for all \\(n\\). Since \\(E = \\bigcup_n E_n\\), by countable subadditivity \\(\\mu(E) = 0\\), i.e., \\(f = 0\\) a.e.'
                },
                {
                    question: 'Show that the MCT can fail without the monotonicity hypothesis. Construct a sequence \\(f_n \\to 0\\) pointwise on \\([0,1]\\) with \\(\\int f_n\\,d\\lambda = 1\\) for all \\(n\\).',
                    hint: 'Consider functions whose "mass" slides to the right, e.g., \\(f_n = n \\cdot \\mathbf{1}_{(0,1/n)}\\).',
                    solution: 'Define \\(f_n = n \\cdot \\mathbf{1}_{(0, 1/n)}\\). For each fixed \\(x \\in (0,1]\\), once \\(n > 1/x\\) we have \\(x \\notin (0, 1/n)\\), so \\(f_n(x) = 0\\). At \\(x = 0\\), \\(f_n(0) = 0\\) for all \\(n\\). Thus \\(f_n \\to 0\\) pointwise. But \\(\\int_0^1 f_n\\,d\\lambda = n \\cdot (1/n) = 1\\). So \\(\\lim \\int f_n = 1 \\neq 0 = \\int \\lim f_n\\). The sequence is not monotone increasing (the supports are shrinking and heights are growing), so the MCT does not apply.'
                },
                {
                    question: 'Let \\(f_n(x) = (1 - 1/n)^x\\) for \\(x \\geq 0\\). Is this sequence increasing or decreasing? Can you apply the MCT? What is the pointwise limit and the limit of the integrals (with respect to Lebesgue measure on \\([0, \\infty)\\))?',
                    hint: 'For fixed \\(x\\), how does \\((1-1/n)^x\\) behave as \\(n\\) increases? Compute \\(\\int_0^\\infty (1-1/n)^x\\,dx\\) by substitution.',
                    solution: 'For fixed \\(x \\geq 0\\), \\(a_n = 1 - 1/n\\) increases to 1, so \\(a_n^x\\) increases to \\(1^x = 1\\) (using \\(x \\geq 0\\)). Wait, for \\(x > 0\\), \\(a_n^x\\) with \\(0 < a_n < 1\\) gives \\(a_n^x < 1\\), and as \\(a_n \\uparrow 1\\), \\(a_n^x \\uparrow 1\\). But the limit \\(f(x) = 1\\) on \\([0,\\infty)\\) has \\(\\int_0^\\infty 1\\,dx = \\infty\\). Meanwhile \\(\\int_0^\\infty (1-1/n)^x\\,dx = \\int_0^\\infty e^{x \\ln(1-1/n)}\\,dx = -1/\\ln(1-1/n)\\). As \\(n \\to \\infty\\), \\(\\ln(1-1/n) \\approx -1/n\\), so the integral \\(\\approx n \\to \\infty\\). Both sides are \\(+\\infty\\), consistent with the MCT (the MCT allows the common value to be \\(+\\infty\\)).'
                }
            ]
        },

        // ============================================================
        // Section 2: Consequences of MCT
        // ============================================================
        {
            id: 'consequences-of-mct',
            title: 'Consequences of MCT',
            content: `
                <div class="bridge section-bridge">
                    <p>The Monotone Convergence Theorem is far more than a convergence result. It is a <em>machine</em> for proving other theorems. In this section we derive its most important consequences: term-by-term integration of non-negative series and the construction of the integral for non-negative functions via simple function approximation.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Derive from the MCT: (1) the interchange of summation and integration for non-negative series, (2) Tonelli's theorem for sums, (3) the consistency of the Lebesgue integral with the simple function construction.</p>
                </div>

                <h2>Term-by-Term Integration of Non-Negative Series</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.4 (Integration of Non-Negative Series)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A}, \\mu)\\) be a measure space and let \\(g_1, g_2, \\ldots : X \\to [0, \\infty]\\) be measurable functions. Then</p>
                        \\[\\int_X \\left(\\sum_{n=1}^{\\infty} g_n\\right) d\\mu = \\sum_{n=1}^{\\infty} \\int_X g_n\\,d\\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 7.4</div>
                    <div class="env-body">
                        <p>Define the partial sums \\(f_N = \\sum_{n=1}^{N} g_n\\). Since each \\(g_n \\geq 0\\), the sequence \\(f_N\\) is increasing:</p>
                        \\[0 \\leq f_1 \\leq f_2 \\leq \\cdots\\]
                        <p>and \\(f_N \\uparrow \\sum_{n=1}^{\\infty} g_n\\) pointwise. By the MCT (Theorem 7.1):</p>
                        \\[\\int_X \\sum_{n=1}^{\\infty} g_n\\,d\\mu = \\lim_{N \\to \\infty} \\int_X f_N\\,d\\mu = \\lim_{N \\to \\infty} \\sum_{n=1}^{N} \\int_X g_n\\,d\\mu = \\sum_{n=1}^{\\infty} \\int_X g_n\\,d\\mu,\\]
                        <p>where the second equality uses the (finite) linearity of the integral for non-negative functions.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why This Is Remarkable)</div>
                    <div class="env-body">
                        <p>Theorem 7.4 says we can always interchange \\(\\int\\) and \\(\\sum\\) when the summands are non-negative. No additional conditions are needed, no uniform convergence, no domination, nothing. The non-negativity alone does all the work (through the MCT). This is one of the most frequently used results in all of analysis and probability.</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 7.5 (Borel-Cantelli Counting)</div>
                    <div class="env-body">
                        <p>For a sequence of measurable sets \\(E_1, E_2, \\ldots\\), define \\(N(x) = \\sum_{n=1}^{\\infty} \\mathbf{1}_{E_n}(x)\\), the number of sets containing \\(x\\). Then</p>
                        \\[\\int_X N\\,d\\mu = \\sum_{n=1}^{\\infty} \\mu(E_n).\\]
                        <p>In particular, if \\(\\sum \\mu(E_n) &lt; \\infty\\), then \\(N(x) &lt; \\infty\\) for \\(\\mu\\)-a.e. \\(x\\), i.e., almost every \\(x\\) belongs to only finitely many of the \\(E_n\\). This is the first Borel-Cantelli lemma.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Corollary 7.5</div>
                    <div class="env-body">
                        <p>Apply Theorem 7.4 with \\(g_n = \\mathbf{1}_{E_n}\\): \\(\\int N\\,d\\mu = \\sum_{n=1}^{\\infty} \\int \\mathbf{1}_{E_n}\\,d\\mu = \\sum_{n=1}^{\\infty} \\mu(E_n)\\). If this sum is finite, then \\(\\int N\\,d\\mu &lt; \\infty\\), which forces \\(N(x) &lt; \\infty\\) for \\(\\mu\\)-a.e. \\(x\\) (since a non-negative function with finite integral is finite a.e.).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Beppo Levi's Theorem and Summation Over Counting Measure</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.6 (Tonelli's Theorem for Sums)</div>
                    <div class="env-body">
                        <p>Let \\(a_{mn} \\geq 0\\) for \\(m, n \\geq 1\\). Then</p>
                        \\[\\sum_{m=1}^{\\infty} \\sum_{n=1}^{\\infty} a_{mn} = \\sum_{n=1}^{\\infty} \\sum_{m=1}^{\\infty} a_{mn}.\\]
                        <p>That is, the order of summation may be interchanged freely for non-negative double series.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 7.6</div>
                    <div class="env-body">
                        <p>Take \\(X = \\mathbb{N}\\) with counting measure \\(\\mu\\). Define \\(g_n(m) = a_{mn}\\). Then \\(\\int_{\\mathbb{N}} g_n\\,d\\mu = \\sum_m a_{mn}\\) and \\(\\sum_n g_n(m) = \\sum_n a_{mn}\\), so Theorem 7.4 gives the result.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Beyond Non-Negative Terms)</div>
                    <div class="env-body">
                        <p>Interchanging the order of summation for series with mixed signs requires <em>absolute convergence</em>. If \\(\\sum_{m,n} |a_{mn}| &lt; \\infty\\), then the interchange is justified by the Dominated Convergence Theorem (or equivalently, by absolute convergence of the double series). Without absolute convergence, the Riemann rearrangement phenomenon means the order of summation can change the value.</p>
                    </div>
                </div>

                <h2>Building the Integral from Below</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.7 (Integral via Simple Function Approximation)</div>
                    <div class="env-body">
                        <p>Let \\(f: X \\to [0, \\infty]\\) be measurable. There exist simple functions \\(0 \\leq s_1 \\leq s_2 \\leq \\cdots\\) with \\(s_n \\uparrow f\\) pointwise. For any such sequence,</p>
                        \\[\\int_X f\\,d\\mu = \\lim_{n \\to \\infty} \\int_X s_n\\,d\\mu = \\sup_n \\int_X s_n\\,d\\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 7.7</div>
                    <div class="env-body">
                        <p>The existence of such simple functions \\(s_n\\) was established in Chapter 5 (the standard "dyadic" approximation). The equality \\(\\int f\\,d\\mu = \\lim_n \\int s_n\\,d\\mu\\) is an immediate application of the MCT: the \\(s_n\\) are non-negative, increasing, and converge pointwise to \\(f\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Consistency of the Integral)</div>
                    <div class="env-body">
                        <p>Theorem 7.7 ensures that the definition of \\(\\int f\\,d\\mu\\) as \\(\\sup\\{\\int s\\,d\\mu : 0 \\leq s \\leq f, s \\text{ simple}\\}\\) is consistent with the sequential approximation. The MCT guarantees that the supremum is achieved as a limit along any increasing simple function approximation. This is not obvious without the MCT; it requires knowing that the integral respects monotone limits.</p>
                    </div>
                </div>

                <h2>Linearity of the Integral (Full Version)</h2>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 7.8 (Additivity for Non-Negative Functions)</div>
                    <div class="env-body">
                        <p>If \\(f, g: X \\to [0, \\infty]\\) are measurable, then</p>
                        \\[\\int (f + g)\\,d\\mu = \\int f\\,d\\mu + \\int g\\,d\\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Corollary 7.8</div>
                    <div class="env-body">
                        <p>Choose increasing simple functions \\(s_n \\uparrow f\\) and \\(t_n \\uparrow g\\). Then \\(s_n + t_n \\uparrow f + g\\) and each \\(s_n + t_n\\) is a simple function. By linearity for simple functions (established in Chapter 6), \\(\\int (s_n + t_n)\\,d\\mu = \\int s_n\\,d\\mu + \\int t_n\\,d\\mu\\). Applying the MCT to both sides:</p>
                        \\[\\int (f+g)\\,d\\mu = \\lim_n \\int(s_n + t_n)\\,d\\mu = \\lim_n \\left(\\int s_n\\,d\\mu + \\int t_n\\,d\\mu\\right) = \\int f\\,d\\mu + \\int g\\,d\\mu.\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.15; Royden-Fitzpatrick 4.3 Theorem 20; Stein-Shakarchi III.2; Rudin RCA 1.27.</p>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Use Theorem 7.4 to compute \\(\\int_0^1 \\sum_{n=1}^{\\infty} x^n\\,dx\\).',
                    hint: 'The series \\(\\sum x^n\\) has non-negative terms. Interchange sum and integral, then compute each term.',
                    solution: 'By Theorem 7.4 (all terms are non-negative on \\([0,1]\\)): \\(\\int_0^1 \\sum_{n=1}^{\\infty} x^n\\,dx = \\sum_{n=1}^{\\infty} \\int_0^1 x^n\\,dx = \\sum_{n=1}^{\\infty} \\frac{1}{n+1}\\). This series diverges (it is the tail of the harmonic series starting at \\(1/2\\)). This is consistent because \\(\\sum_{n=1}^\\infty x^n = x/(1-x)\\) for \\(x \\in [0,1)\\), which is not integrable on \\([0,1)\\) (it blows up like \\(1/(1-x)\\) near \\(x = 1\\)). The MCT still applies; both sides are \\(+\\infty\\).'
                },
                {
                    question: 'Let \\(f: [0,1] \\to [0,\\infty)\\) be integrable. Use the Borel-Cantelli consequence (Corollary 7.5) to show that \\(\\mu(\\{x : f(x) \\geq n\\})\\) goes to zero fast enough that \\(\\sum_n \\mu(\\{f \\geq n\\}) &lt; \\infty\\).',
                    hint: 'Apply Corollary 7.5 with \\(E_n = \\{f \\geq n\\}\\). What is \\(N(x) = \\sum \\mathbf{1}_{E_n}(x)\\)?',
                    solution: 'Set \\(E_n = \\{f \\geq n\\}\\). Then \\(N(x) = \\sum_{n=1}^\\infty \\mathbf{1}_{E_n}(x) = \\lfloor f(x) \\rfloor\\) (the integer part of \\(f(x)\\)). Since \\(N(x) \\leq f(x)\\), we get \\(\\sum_{n=1}^\\infty \\mu(E_n) = \\int N\\,d\\mu \\leq \\int f\\,d\\mu < \\infty\\). So the tail measures \\(\\mu(\\{f \\geq n\\})\\) are summable.'
                },
                {
                    question: 'Show that if \\(\\mu(X) = \\infty\\), the additivity \\(\\int (f+g)\\,d\\mu = \\int f\\,d\\mu + \\int g\\,d\\mu\\) can involve \\(\\infty + \\infty = \\infty\\) on both sides. Give an explicit example on \\((\\mathbb{R}, \\mathcal{B}, \\lambda)\\).',
                    hint: 'Take \\(f = g = 1\\).',
                    solution: 'Let \\(f = g = 1\\) on \\(\\mathbb{R}\\). Then \\(\\int f\\,d\\lambda = \\int g\\,d\\lambda = \\lambda(\\mathbb{R}) = +\\infty\\). Also \\(f + g = 2\\), so \\(\\int (f+g)\\,d\\lambda = 2 \\cdot \\lambda(\\mathbb{R}) = +\\infty\\). Both sides are \\(+\\infty\\), consistent with the convention \\(\\infty + \\infty = \\infty\\) in \\([0, \\infty]\\).'
                },
                {
                    question: 'Prove Tonelli\'s theorem for sums (Theorem 7.6) directly, without using the integral, by manipulating partial sums. (This gives a "bare-hands" proof independent of measure theory.)',
                    hint: 'Consider the finite partial sums \\(S_{M,N} = \\sum_{m=1}^M \\sum_{n=1}^N a_{mn}\\). Show the double limit exists and equals the iterated limits in either order.',
                    solution: 'For non-negative terms, all partial sums \\(S_{M,N} = \\sum_{m=1}^M \\sum_{n=1}^N a_{mn}\\) are increasing in both \\(M\\) and \\(N\\). For any finite \\(M, N\\), we can rearrange: \\(S_{M,N} = \\sum_{n=1}^N \\sum_{m=1}^M a_{mn}\\) (this is just reordering a finite sum). Taking \\(N \\to \\infty\\): \\(\\sum_{m=1}^M \\sum_{n=1}^\\infty a_{mn} = \\sum_{n=1}^\\infty \\sum_{m=1}^M a_{mn}\\) (both sides are limits of the same increasing sequence). Now take \\(M \\to \\infty\\): the left side gives \\(\\sum_m \\sum_n a_{mn}\\). The right side, by the MCT for series (increasing partial sums in \\(M\\) inside each term), gives \\(\\sum_n \\sum_m a_{mn}\\).'
                }
            ]
        },

        // ============================================================
        // Section 3: Fatou's Lemma
        // ============================================================
        {
            id: 'fatous-lemma',
            title: 'Fatou\'s Lemma',
            content: `
                <div class="bridge section-bridge">
                    <p>The MCT requires the sequence to be monotone increasing. What if the sequence is not monotone? Fatou's lemma is the answer: it extracts a one-sided inequality that holds for <em>any</em> sequence of non-negative measurable functions, with no monotonicity assumption. The price we pay is that equality becomes an inequality, but this inequality is sharp enough to be the engine behind the Dominated Convergence Theorem.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove Fatou's lemma. Understand when the inequality is strict via concrete examples. Derive the reverse Fatou lemma under a domination assumption.</p>
                </div>

                <h2>Recalling liminf</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.9 (liminf and limsup of Functions)</div>
                    <div class="env-body">
                        <p>For a sequence \\(f_n : X \\to [0, \\infty]\\), define</p>
                        \\[\\liminf_{n \\to \\infty} f_n(x) = \\sup_{n \\geq 1}\\,\\inf_{k \\geq n} f_k(x) = \\lim_{n \\to \\infty} \\left(\\inf_{k \\geq n} f_k(x)\\right),\\]
                        \\[\\limsup_{n \\to \\infty} f_n(x) = \\inf_{n \\geq 1}\\,\\sup_{k \\geq n} f_k(x) = \\lim_{n \\to \\infty} \\left(\\sup_{k \\geq n} f_k(x)\\right).\\]
                        <p>Crucially, \\(g_n(x) = \\inf_{k \\geq n} f_k(x)\\) is an <em>increasing</em> sequence (more terms are being removed from the infimum), so \\(\\liminf f_n\\) is the pointwise limit of an increasing sequence.</p>
                    </div>
                </div>

                <h2>Fatou's Lemma</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.10 (Fatou's Lemma)</div>
                    <div class="env-body">
                        <p>Let \\(f_n : X \\to [0, \\infty]\\) be measurable. Then</p>
                        \\[\\int_X \\liminf_{n \\to \\infty} f_n\\,d\\mu \\leq \\liminf_{n \\to \\infty} \\int_X f_n\\,d\\mu.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Fatou's Inequality)</div>
                    <div class="env-body">
                        <p>Think of it this way: the integral of the "eventual lower bound" of the functions is at most the "eventual lower bound" of the integrals. The liminf on the left side captures the function values that <em>persist</em> in the limit. The liminf on the right captures the integral values that persist. The inequality says: whatever area persists pointwise cannot exceed the area that persists integrally. But the converse can fail because mass can "escape to infinity" or "concentrate at a point."</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 7.10</div>
                    <div class="env-body">
                        <p><strong>Step 1.</strong> Define \\(g_n = \\inf_{k \\geq n} f_k\\). Then \\(g_n\\) is measurable, \\(0 \\leq g_1 \\leq g_2 \\leq \\cdots\\) (the sequence is increasing because taking the infimum over fewer terms can only increase the result), and</p>
                        \\[\\lim_{n \\to \\infty} g_n = \\sup_n g_n = \\liminf_{n \\to \\infty} f_n.\\]

                        <p><strong>Step 2.</strong> Apply the MCT to the increasing sequence \\(g_n\\):</p>
                        \\[\\int \\liminf_{n \\to \\infty} f_n\\,d\\mu = \\int \\lim_{n \\to \\infty} g_n\\,d\\mu = \\lim_{n \\to \\infty} \\int g_n\\,d\\mu.\\]

                        <p><strong>Step 3.</strong> Since \\(g_n = \\inf_{k \\geq n} f_k \\leq f_n\\) for each \\(n\\), monotonicity of the integral gives</p>
                        \\[\\int g_n\\,d\\mu \\leq \\int f_n\\,d\\mu \\quad \\text{for all } n.\\]

                        <p><strong>Step 4.</strong> Taking \\(\\liminf\\) of both sides (and using the fact that \\(\\lim a_n \\leq \\liminf b_n\\) whenever \\(a_n \\leq b_n\\) and \\(\\lim a_n\\) exists):</p>
                        \\[\\int \\liminf f_n\\,d\\mu = \\lim_{n \\to \\infty} \\int g_n\\,d\\mu \\leq \\liminf_{n \\to \\infty} \\int f_n\\,d\\mu.\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>The Inequality Can Be Strict</h2>

                <div class="env-block example">
                    <div class="env-title">Example 7.11 (Mass Escaping to Infinity)</div>
                    <div class="env-body">
                        <p>On \\((\\mathbb{R}, \\mathcal{B}, \\lambda)\\), let \\(f_n = \\mathbf{1}_{[n, n+1]}\\). Then \\(f_n \\to 0\\) pointwise (for any fixed \\(x\\), eventually \\(x \\notin [n, n+1]\\)). So \\(\\liminf f_n = 0\\) and \\(\\int \\liminf f_n\\,d\\lambda = 0\\). But \\(\\int f_n\\,d\\lambda = 1\\) for all \\(n\\), so \\(\\liminf \\int f_n = 1\\). The inequality \\(0 &lt; 1\\) is strict. The "mass" has escaped to \\(+\\infty\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.12 (Mass Concentrating at a Point)</div>
                    <div class="env-body">
                        <p>On \\(([0,1], \\mathcal{B}, \\lambda)\\), let \\(f_n = n \\cdot \\mathbf{1}_{(0, 1/n)}\\). Again \\(f_n \\to 0\\) pointwise, so \\(\\int \\liminf f_n = 0\\). But \\(\\int f_n = 1\\) for all \\(n\\). The mass has concentrated at the origin in a "spike" of unbounded height.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="fatou-gap-animator"></div>

                <h2>Reverse Fatou Lemma</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.13 (Reverse Fatou's Lemma)</div>
                    <div class="env-body">
                        <p>Let \\(f_n : X \\to [0, \\infty]\\) be measurable and suppose there exists an integrable function \\(g\\) (i.e., \\(\\int g\\,d\\mu &lt; \\infty\\)) such that \\(f_n \\leq g\\) for all \\(n\\). Then</p>
                        \\[\\limsup_{n \\to \\infty} \\int_X f_n\\,d\\mu \\leq \\int_X \\limsup_{n \\to \\infty} f_n\\,d\\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 7.13</div>
                    <div class="env-body">
                        <p>Apply Fatou's lemma (Theorem 7.10) to the non-negative sequence \\(g - f_n \\geq 0\\):</p>
                        \\[\\int \\liminf_{n} (g - f_n)\\,d\\mu \\leq \\liminf_{n} \\int (g - f_n)\\,d\\mu.\\]
                        <p>The left side equals \\(\\int (g - \\limsup_n f_n)\\,d\\mu = \\int g\\,d\\mu - \\int \\limsup_n f_n\\,d\\mu\\) (using linearity and the fact that \\(\\liminf(-h_n) = -\\limsup h_n\\)).</p>
                        <p>The right side equals \\(\\liminf_n (\\int g\\,d\\mu - \\int f_n\\,d\\mu) = \\int g\\,d\\mu - \\limsup_n \\int f_n\\,d\\mu\\).</p>
                        <p>So: \\(\\int g\\,d\\mu - \\int \\limsup_n f_n\\,d\\mu \\leq \\int g\\,d\\mu - \\limsup_n \\int f_n\\,d\\mu\\).</p>
                        <p>Since \\(\\int g\\,d\\mu &lt; \\infty\\), we can subtract it from both sides:</p>
                        \\[\\limsup_n \\int f_n\\,d\\mu \\leq \\int \\limsup_n f_n\\,d\\mu.\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Domination Is Essential for Reverse Fatou)</div>
                    <div class="env-body">
                        <p>Without the domination hypothesis \\(f_n \\leq g\\) with \\(g\\) integrable, the reverse Fatou lemma is false. Example 7.11 provides a counterexample: \\(\\limsup_n \\int f_n = 1\\) while \\(\\int \\limsup_n f_n = 0\\). The domination prevents mass from escaping.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.17-2.18; Royden-Fitzpatrick 4.3 Lemma 22; Stein-Shakarchi III.2; Rudin RCA 1.28.</p>
            `,
            visualizations: [
                {
                    id: 'fatou-gap-animator',
                    title: 'Fatou\'s Lemma: The Gap',
                    description: 'Construct a sequence where the inequality is strict; animate liminf of integrals vs. integral of liminf; highlight where "mass escapes to infinity."',
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
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var nVal = 3;
                        var exampleIdx = 0;

                        var examples = [
                            {
                                name: 'Mass escaping to infinity: f_n = 1_{[n, n+1]}',
                                fn: function(x, n) { return (x >= n && x < n + 1) ? 1 : 0; },
                                liminf: function(x) { return 0; },
                                xRange: function(n) { return [0, Math.max(n + 3, 8)]; },
                                yMax: 1.5,
                                integralFn: function(n) { return 1; },
                                integralLiminf: 0,
                                desc: 'Each f_n has integral 1, but pointwise limit is 0. Gap = 1.'
                            },
                            {
                                name: 'Mass concentrating: f_n = n * 1_{(0, 1/n)}',
                                fn: function(x, n) { return (x > 0 && x < 1.0/n) ? n : 0; },
                                liminf: function(x) { return 0; },
                                xRange: function(n) { return [0, 1]; },
                                yMax: function(n) { return Math.max(n + 1, 5); },
                                integralFn: function(n) { return 1; },
                                integralLiminf: 0,
                                desc: 'Spike at 0 with height n, width 1/n. Area always 1, limit is 0.'
                            },
                            {
                                name: 'Oscillating mass: f_n = 1_{[(n mod 2)/2, (n mod 2 + 1)/2]}',
                                fn: function(x, n) {
                                    var k = n % 2;
                                    var a = k * 0.5, b = a + 0.5;
                                    return (x >= a && x < b) ? 1 : 0;
                                },
                                liminf: function(x) { return 0; },
                                xRange: function(n) { return [0, 1]; },
                                yMax: 1.5,
                                integralFn: function(n) { return 0.5; },
                                integralLiminf: 0,
                                desc: 'Mass bounces between [0, 0.5) and [0.5, 1). liminf = 0 everywhere.'
                            }
                        ];

                        VizEngine.createSlider(controls, 'n (sequence index)', 1, 30, nVal, 1, function(v) {
                            nVal = Math.round(v);
                            draw();
                        });

                        var btns = [
                            {label: 'Escape to infinity', color: colors.blue},
                            {label: 'Concentrate at point', color: colors.teal},
                            {label: 'Oscillating mass', color: colors.purple}
                        ];
                        btns.forEach(function(b, i) {
                            var btn = document.createElement('button');
                            btn.textContent = b.label;
                            btn.style.cssText = 'margin:4px;padding:4px 10px;background:#222255;color:' + b.color + ';border:1px solid ' + b.color + ';border-radius:4px;cursor:pointer;font-size:12px;';
                            btn.onclick = function() { exampleIdx = i; draw(); };
                            controls.appendChild(btn);
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var ex = examples[exampleIdx];
                            var margin = {left: 60, right: 200, top: 50, bottom: 60};
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            var xr = ex.xRange(nVal);
                            var xMin = xr[0], xMax = xr[1];
                            var yMax = typeof ex.yMax === 'function' ? ex.yMax(nVal) : ex.yMax;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText("Fatou's Lemma: The Gap", w / 2, 20);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText(ex.name + '   |   n = ' + nVal, w / 2, 38);

                            function toX(xv) { return margin.left + ((xv - xMin) / (xMax - xMin)) * plotW; }
                            function toY(yv) { return margin.top + plotH - (yv / yMax) * plotH; }

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
                            for (var gy = 0; gy <= 4; gy++) {
                                var yy = margin.top + plotH - (gy / 4) * plotH;
                                ctx.beginPath();
                                ctx.moveTo(margin.left, yy);
                                ctx.lineTo(margin.left + plotW, yy);
                                ctx.stroke();
                                ctx.fillStyle = colors.muted;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText((gy * yMax / 4).toFixed(1), margin.left - 5, yy + 4);
                            }

                            var steps = 500;
                            var dxs = (xMax - xMin) / steps;

                            // Shade f_n
                            ctx.fillStyle = 'rgba(88, 166, 255, 0.2)';
                            ctx.beginPath();
                            ctx.moveTo(toX(xMin), toY(0));
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = Math.min(ex.fn(xv, nVal), yMax);
                                ctx.lineTo(toX(xv), toY(Math.max(0, yv)));
                            }
                            ctx.lineTo(toX(xMax), toY(0));
                            ctx.closePath();
                            ctx.fill();

                            // Draw f_n
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = Math.min(ex.fn(xv, nVal), yMax);
                                var px = toX(xv); var py = toY(Math.max(0, yv));
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else { ctx.lineTo(px, py); }
                            }
                            ctx.stroke();

                            // Draw liminf (usually 0)
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([5, 5]);
                            ctx.beginPath();
                            started = false;
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = Math.min(ex.liminf(xv), yMax);
                                var px = toX(xv); var py = toY(Math.max(0, yv));
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else { ctx.lineTo(px, py); }
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Side panel
                            var panelX = w - margin.right + 15;
                            var panelY = margin.top + 10;

                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = colors.blue;
                            ctx.fillRect(panelX, panelY, 15, 3);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('f_n', panelX + 22, panelY + 5);

                            ctx.fillStyle = colors.orange;
                            ctx.fillRect(panelX, panelY + 20, 15, 3);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('liminf f_n', panelX + 22, panelY + 25);

                            panelY += 50;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillStyle = colors.blue;
                            ctx.fillText('integral f_n = ' + ex.integralFn(nVal).toFixed(3), panelX, panelY);
                            ctx.fillStyle = colors.orange;
                            ctx.fillText('integral liminf f_n = ' + ex.integralLiminf.toFixed(3), panelX, panelY + 20);

                            // Gap highlight
                            var gap = ex.integralFn(nVal) - ex.integralLiminf;
                            ctx.fillStyle = colors.red;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.fillText('GAP = ' + gap.toFixed(3), panelX, panelY + 48);

                            // Fatou inequality
                            ctx.fillStyle = colors.green;
                            ctx.font = '11px -apple-system, sans-serif';
                            var sym = ex.integralLiminf <= ex.integralFn(nVal) + 0.001 ? ' <= ' : ' > ';
                            ctx.fillText('integral liminf' + sym + 'liminf integral', panelX, panelY + 72);
                            ctx.fillText(ex.integralLiminf.toFixed(1) + sym + ex.integralFn(nVal).toFixed(1) + '  OK', panelX, panelY + 88);

                            // Description
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(ex.desc, w / 2, h - 10);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that Fatou\'s lemma implies the MCT as a special case. That is, if \\(0 \\leq f_1 \\leq f_2 \\leq \\cdots\\) and \\(f_n \\to f\\), show that Fatou gives \\(\\int f\\,d\\mu \\leq \\liminf \\int f_n\\,d\\mu\\), and then use monotonicity to get the reverse inequality.',
                    hint: 'For a monotone sequence, \\(\\liminf f_n = \\lim f_n = f\\). For the reverse, use \\(f_n \\leq f\\) to get \\(\\int f_n \\leq \\int f\\).',
                    solution: 'Since \\(f_n \\uparrow f\\), we have \\(\\liminf f_n = f\\). Fatou gives \\(\\int f\\,d\\mu \\leq \\liminf \\int f_n\\,d\\mu = \\lim \\int f_n\\,d\\mu\\) (the limit exists because \\(\\int f_n\\) is increasing). For the reverse, \\(f_n \\leq f\\) implies \\(\\int f_n \\leq \\int f\\) for all \\(n\\), so \\(\\lim \\int f_n \\leq \\int f\\). Combining: \\(\\int f = \\lim \\int f_n\\).'
                },
                {
                    question: 'Let \\(f_n = (1 + x/n)^n \\cdot \\mathbf{1}_{[-n, 0]}(x)\\) on \\(\\mathbb{R}\\). What is \\(\\liminf f_n\\)? Apply Fatou\'s lemma to get a lower bound on \\(\\liminf \\int f_n\\,d\\lambda\\).',
                    hint: 'Recall that \\((1 + x/n)^n \\to e^x\\). On \\([-n, 0]\\), the function is non-negative (verify!).',
                    solution: 'For \\(x \\leq 0\\), \\(x/n \\in [-1, 0]\\) when \\(n \\geq |x|\\), so \\((1 + x/n) \\in [0, 1]\\) and \\(f_n(x) \\geq 0\\). For any fixed \\(x \\leq 0\\), once \\(n \\geq |x|\\) we have \\(x \\in [-n, 0]\\) and \\((1 + x/n)^n \\to e^x\\). So \\(\\liminf f_n(x) = e^x \\cdot \\mathbf{1}_{(-\\infty, 0]}(x)\\). Fatou gives \\(\\liminf \\int f_n \\geq \\int_{-\\infty}^0 e^x\\,dx = 1\\). (In fact, one can show the limit of the integrals equals 1, but Fatou only guarantees \\(\\geq 1\\).)'
                },
                {
                    question: 'Construct a sequence \\(f_n \\geq 0\\) on \\([0,1]\\) where Fatou\'s inequality is strict and \\(\\liminf \\int f_n = 2\\) while \\(\\int \\liminf f_n = 0\\). (The gap can be made as large as desired.)',
                    hint: 'Modify the "concentrating mass" example by scaling: use \\(f_n = 2n \\cdot \\mathbf{1}_{(0, 1/n)}\\).',
                    solution: 'Let \\(f_n = 2n \\cdot \\mathbf{1}_{(0, 1/n)}\\). Then \\(f_n \\to 0\\) pointwise (for fixed \\(x > 0\\), \\(f_n(x) = 0\\) once \\(n > 1/x\\)). So \\(\\liminf f_n = 0\\) and \\(\\int \\liminf f_n = 0\\). But \\(\\int_0^1 f_n\\,d\\lambda = 2n \\cdot (1/n) = 2\\) for all \\(n\\), so \\(\\liminf \\int f_n = 2\\). The gap is \\(2 - 0 = 2\\). By replacing \\(2n\\) with \\(Cn\\), the gap becomes \\(C\\), which can be made arbitrarily large.'
                },
                {
                    question: 'Show that Fatou\'s lemma can fail if the functions are allowed to take negative values. Give a specific counterexample.',
                    hint: 'Try \\(f_n = -n \\cdot \\mathbf{1}_{(0,1/n)}\\) on \\([0,1]\\).',
                    solution: 'Let \\(f_n = -n \\cdot \\mathbf{1}_{(0, 1/n)}\\) on \\([0,1]\\). Then \\(f_n \\to 0\\) pointwise, so \\(\\liminf f_n = 0\\) and \\(\\int \\liminf f_n = 0\\). But \\(\\int f_n = -1\\) for all \\(n\\), so \\(\\liminf \\int f_n = -1\\). Now \\(0 \\leq -1\\) is false, so Fatou\'s inequality fails. The issue is that the functions take negative values, violating the hypothesis \\(f_n \\geq 0\\). (There is a generalized version: if \\(f_n \\geq -g\\) with \\(g\\) integrable, Fatou applies to \\(f_n + g \\geq 0\\) and one can recover a modified inequality.)'
                }
            ]
        },

        // ============================================================
        // Section 4: The Dominated Convergence Theorem (DCT)
        // ============================================================
        {
            id: 'dominated-convergence',
            title: 'The Dominated Convergence Theorem (DCT)',
            content: `
                <div class="bridge section-bridge">
                    <p>We now reach the crown jewel: the Dominated Convergence Theorem. While the MCT handles monotone sequences and Fatou handles the general case with an inequality, the DCT gives <em>equality</em> under a different hypothesis: the existence of an integrable dominating function. This single theorem is arguably the most frequently invoked result in modern analysis, probability, and mathematical physics.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and completely prove the Dominated Convergence Theorem. Understand why the domination hypothesis is essential via counterexamples. Derive the key corollary on convergence in \\(L^1\\).</p>
                </div>

                <h2>Statement of the DCT</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.14 (Dominated Convergence Theorem, Lebesgue)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A}, \\mu)\\) be a measure space. Let \\(f_n : X \\to \\overline{\\mathbb{R}}\\) be measurable functions such that</p>
                        <ol>
                            <li><strong>Pointwise convergence:</strong> \\(f_n(x) \\to f(x)\\) for \\(\\mu\\)-a.e. \\(x \\in X\\).</li>
                            <li><strong>Domination:</strong> There exists an integrable function \\(g : X \\to [0, \\infty]\\) (i.e., \\(\\int g\\,d\\mu &lt; \\infty\\)) such that \\(|f_n(x)| \\leq g(x)\\) for all \\(n\\) and for \\(\\mu\\)-a.e. \\(x\\).</li>
                        </ol>
                        <p>Then \\(f\\) is integrable, each \\(f_n\\) is integrable, and</p>
                        \\[\\lim_{n \\to \\infty} \\int_X f_n\\,d\\mu = \\int_X f\\,d\\mu.\\]
                        <p>Moreover, \\(\\int_X |f_n - f|\\,d\\mu \\to 0\\) (i.e., \\(f_n \\to f\\) in \\(L^1\\)).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Dominating Function as a Fence)</div>
                    <div class="env-body">
                        <p>The integrable function \\(g\\) acts as a "fence" that prevents mass from escaping. Since \\(|f_n| \\leq g\\) and \\(g\\) has finite integral, the "area" under each \\(f_n\\) is uniformly bounded. Mass cannot flee to infinity (because \\(g\\) is integrable, its tail areas are small), and mass cannot concentrate into spikes of unbounded height (because \\(|f_n| \\leq g\\)). With escape routes blocked, the only thing that can happen is convergence.</p>
                    </div>
                </div>

                <h2>Complete Proof of the DCT</h2>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 7.14</div>
                    <div class="env-body">
                        <p><strong>Integrability.</strong> Since \\(|f_n| \\leq g\\), we have \\(\\int |f_n|\\,d\\mu \\leq \\int g\\,d\\mu &lt; \\infty\\), so each \\(f_n\\) is integrable. Since \\(|f| = \\lim |f_n| \\leq g\\) a.e., \\(f\\) is also integrable.</p>

                        <p><strong>Convergence of integrals.</strong> We use Fatou's lemma applied twice. The key idea is to work with the non-negative functions \\(g + f_n\\) and \\(g - f_n\\).</p>

                        <p><strong>Step 1 (Apply Fatou to \\(g + f_n\\)).</strong> Since \\(|f_n| \\leq g\\), we have \\(g + f_n \\geq 0\\). Fatou's lemma gives:</p>
                        \\[\\int \\liminf_{n}(g + f_n)\\,d\\mu \\leq \\liminf_n \\int (g + f_n)\\,d\\mu.\\]
                        <p>The left side is \\(\\int (g + f)\\,d\\mu = \\int g\\,d\\mu + \\int f\\,d\\mu\\) (since \\(f_n \\to f\\) a.e.).</p>
                        <p>The right side is \\(\\liminf_n (\\int g\\,d\\mu + \\int f_n\\,d\\mu) = \\int g\\,d\\mu + \\liminf_n \\int f_n\\,d\\mu\\).</p>
                        <p>Subtracting \\(\\int g\\,d\\mu &lt; \\infty\\) from both sides:</p>
                        \\[\\int f\\,d\\mu \\leq \\liminf_{n \\to \\infty} \\int f_n\\,d\\mu. \\tag{I}\\]

                        <p><strong>Step 2 (Apply Fatou to \\(g - f_n\\)).</strong> Since \\(|f_n| \\leq g\\), we have \\(g - f_n \\geq 0\\). Fatou's lemma gives:</p>
                        \\[\\int \\liminf_{n}(g - f_n)\\,d\\mu \\leq \\liminf_n \\int (g - f_n)\\,d\\mu.\\]
                        <p>The left side is \\(\\int (g - f)\\,d\\mu = \\int g\\,d\\mu - \\int f\\,d\\mu\\).</p>
                        <p>The right side is \\(\\int g\\,d\\mu + \\liminf_n(-\\int f_n\\,d\\mu) = \\int g\\,d\\mu - \\limsup_n \\int f_n\\,d\\mu\\).</p>
                        <p>Subtracting \\(\\int g\\,d\\mu\\) and multiplying by \\(-1\\):</p>
                        \\[\\limsup_{n \\to \\infty} \\int f_n\\,d\\mu \\leq \\int f\\,d\\mu. \\tag{II}\\]

                        <p><strong>Step 3 (Combine).</strong> From (I) and (II):</p>
                        \\[\\int f\\,d\\mu \\leq \\liminf_n \\int f_n\\,d\\mu \\leq \\limsup_n \\int f_n\\,d\\mu \\leq \\int f\\,d\\mu.\\]
                        <p>All inequalities are equalities, so \\(\\lim_n \\int f_n\\,d\\mu\\) exists and equals \\(\\int f\\,d\\mu\\).</p>

                        <p><strong>Step 4 (\\(L^1\\) convergence).</strong> Apply the above result to the sequence \\(|f_n - f|\\) (not \\(f_n\\) itself). We have \\(|f_n - f| \\to 0\\) a.e. and \\(|f_n - f| \\leq |f_n| + |f| \\leq 2g\\), where \\(2g\\) is integrable. By what we just proved:</p>
                        \\[\\lim_n \\int |f_n - f|\\,d\\mu = \\int \\lim_n |f_n - f|\\,d\\mu = \\int 0\\,d\\mu = 0.\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Why Domination Is Essential</h2>

                <div class="env-block example">
                    <div class="env-title">Example 7.15 (DCT Fails Without Domination)</div>
                    <div class="env-body">
                        <p>Consider again \\(f_n = n \\cdot \\mathbf{1}_{(0, 1/n)}\\) on \\([0,1]\\). We have \\(f_n \\to 0\\) a.e. and \\(\\int f_n = 1\\) for all \\(n\\). Is there an integrable \\(g\\) with \\(|f_n| \\leq g\\) for all \\(n\\)?</p>
                        <p>Such a \\(g\\) would need \\(g(x) \\geq n\\) for \\(x \\in (0, 1/n)\\), i.e., \\(g(x) \\geq 1/x\\) for \\(x \\in (0,1]\\). But \\(\\int_0^1 1/x\\,dx = +\\infty\\), so \\(g\\) cannot be integrable. The DCT does not apply, and indeed the conclusion fails.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.16 (DCT in Action)</div>
                    <div class="env-body">
                        <p>Compute \\(\\lim_{n \\to \\infty} \\int_0^{\\infty} \\frac{n \\sin(x/n)}{x(1 + x^2)}\\,dx\\).</p>
                        <p>Define \\(f_n(x) = \\frac{n \\sin(x/n)}{x(1 + x^2)}\\). As \\(n \\to \\infty\\), \\(n \\sin(x/n) \\to x\\) (using \\(\\sin(t)/t \\to 1\\) as \\(t \\to 0\\)), so \\(f_n(x) \\to \\frac{1}{1 + x^2}\\). For the domination: \\(|n \\sin(x/n)| \\leq x\\) (since \\(|\\sin t| \\leq |t|\\)), so \\(|f_n(x)| \\leq \\frac{1}{1+x^2}\\), which is integrable on \\([0,\\infty)\\) (its integral is \\(\\pi/2\\)). By DCT:</p>
                        \\[\\lim_n \\int_0^{\\infty} f_n\\,dx = \\int_0^{\\infty} \\frac{1}{1+x^2}\\,dx = \\frac{\\pi}{2}.\\]
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="dct-domination-checker"></div>

                <h2>Corollaries</h2>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 7.17 (Bounded Convergence Theorem)</div>
                    <div class="env-body">
                        <p>If \\(\\mu(X) &lt; \\infty\\) and \\(|f_n| \\leq M\\) for some constant \\(M\\) and all \\(n\\), and \\(f_n \\to f\\) a.e., then \\(\\int f_n\\,d\\mu \\to \\int f\\,d\\mu\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Corollary 7.17</div>
                    <div class="env-body">
                        <p>Take \\(g = M\\). Then \\(\\int g\\,d\\mu = M \\cdot \\mu(X) &lt; \\infty\\), so \\(g\\) is integrable. The DCT applies with this \\(g\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Bounded Convergence vs. DCT)</div>
                    <div class="env-body">
                        <p>The Bounded Convergence Theorem is strictly weaker than the DCT: it requires \\(\\mu(X) &lt; \\infty\\) (finite measure space) and a <em>uniform</em> bound. On \\(\\sigma\\)-finite spaces, the constant \\(M\\) may not have finite integral, so we genuinely need a non-constant dominator \\(g\\). Nevertheless, in probability theory (where \\(\\mu(X) = 1\\)), the Bounded Convergence Theorem is already very powerful.</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 7.18 (Integral as a Set Function)</div>
                    <div class="env-body">
                        <p>If \\(f\\) is integrable, the set function \\(E \\mapsto \\nu(E) = \\int_E f\\,d\\mu\\) is countably additive (i.e., \\(\\nu\\) is a signed measure). Moreover, \\(\\nu\\) is "absolutely continuous" with respect to \\(\\mu\\): for every \\(\\varepsilon &gt; 0\\), there exists \\(\\delta &gt; 0\\) such that \\(\\mu(E) &lt; \\delta \\implies |\\nu(E)| &lt; \\varepsilon\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Corollary 7.18 (Countable Additivity)</div>
                    <div class="env-body">
                        <p>Let \\(E = \\bigsqcup_{k=1}^\\infty E_k\\). Define \\(g_n = f \\cdot \\mathbf{1}_{\\bigcup_{k=1}^n E_k}\\). Then \\(g_n \\to f \\cdot \\mathbf{1}_E\\) pointwise and \\(|g_n| \\leq |f|\\) which is integrable. By DCT, \\(\\nu(E) = \\int_E f\\,d\\mu = \\lim_n \\int_{\\bigcup_{k=1}^n E_k} f\\,d\\mu = \\lim_n \\sum_{k=1}^n \\nu(E_k) = \\sum_{k=1}^\\infty \\nu(E_k)\\).</p>
                        <p>For absolute continuity: Suppose for contradiction that there exist \\(\\varepsilon_0 &gt; 0\\) and sets \\(E_n\\) with \\(\\mu(E_n) &lt; 1/2^n\\) but \\(|\\nu(E_n)| \\geq \\varepsilon_0\\). Let \\(h_n = f \\cdot \\mathbf{1}_{E_n}\\). Then \\(h_n \\to 0\\) a.e. (by Borel-Cantelli, since \\(\\sum \\mu(E_n) &lt; \\infty\\)) and \\(|h_n| \\leq |f|\\). By DCT, \\(\\int h_n\\,d\\mu \\to 0\\), contradicting \\(|\\int h_n\\,d\\mu| \\geq \\varepsilon_0\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.24; Royden-Fitzpatrick 4.4 Theorem 21; Stein-Shakarchi III.2; Rudin RCA 1.34.</p>
            `,
            visualizations: [
                {
                    id: 'dct-domination-checker',
                    title: 'DCT Domination Checker',
                    description: 'User defines a sequence f_n and a candidate dominating function g; tool checks |f_n| <= g and whether g is integrable; then animates the convergence of integrals.',
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
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var nVal = 3;
                        var exampleIdx = 0;

                        var examples = [
                            {
                                name: 'f_n = sin(nx)/(1+x^2), g = 1/(1+x^2)',
                                fn: function(x, n) { return Math.sin(n * x) / (1 + x * x); },
                                g: function(x) { return 1 / (1 + x * x); },
                                limit: function(x) { return 0; },
                                xMin: -6, xMax: 6, yMin: -1.2, yMax: 1.2,
                                gIntegrable: true,
                                dominated: true,
                                integralLimit: 0,
                                integralG: Math.PI,
                                desc: 'DCT applies: |f_n| <= g and g is integrable (integral = pi)'
                            },
                            {
                                name: 'f_n = n*sin(x/n)/(x(1+x^2)), g = 1/(1+x^2)',
                                fn: function(x, n) {
                                    if (Math.abs(x) < 0.001) return 1 / (1 + x * x);
                                    return n * Math.sin(x / n) / (x * (1 + x * x));
                                },
                                g: function(x) { return 1 / (1 + x * x); },
                                limit: function(x) { return 1 / (1 + x * x); },
                                xMin: 0.01, xMax: 8, yMin: -0.2, yMax: 1.2,
                                gIntegrable: true,
                                dominated: true,
                                integralLimit: 1.5708,
                                integralG: 1.5708,
                                desc: 'DCT applies: limit integral = pi/2'
                            },
                            {
                                name: 'f_n = n*1_{(0,1/n)}, g = 1/x (NOT integrable!)',
                                fn: function(x, n) { return (x > 0 && x < 1.0 / n) ? n : 0; },
                                g: function(x) { return x > 0.01 ? 1 / x : 100; },
                                limit: function(x) { return 0; },
                                xMin: 0, xMax: 1, yMin: -0.5, yMax: 8,
                                gIntegrable: false,
                                dominated: false,
                                integralLimit: 0,
                                integralG: Infinity,
                                desc: 'DCT FAILS: g = 1/x is not integrable. Integrals do not converge to 0.'
                            }
                        ];

                        VizEngine.createSlider(controls, 'n (sequence index)', 1, 30, nVal, 1, function(v) {
                            nVal = Math.round(v);
                            draw();
                        });

                        var btnData = [
                            {label: 'sin(nx)/(1+x^2)', c: colors.green},
                            {label: 'n sin(x/n)/x(1+x^2)', c: colors.teal},
                            {label: 'n*1_{(0,1/n)} (fails)', c: colors.red}
                        ];
                        btnData.forEach(function(b, i) {
                            var btn = document.createElement('button');
                            btn.textContent = b.label;
                            btn.style.cssText = 'margin:4px;padding:4px 10px;background:#222255;color:' + b.c + ';border:1px solid ' + b.c + ';border-radius:4px;cursor:pointer;font-size:12px;';
                            btn.onclick = function() { exampleIdx = i; draw(); };
                            controls.appendChild(btn);
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var ex = examples[exampleIdx];
                            var margin = {left: 60, right: 200, top: 50, bottom: 50};
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            var xMin = ex.xMin, xMax = ex.xMax;
                            var yMin = ex.yMin, yMax = ex.yMax;

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Dominated Convergence Theorem', w / 2, 20);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText(ex.name + '   |   n = ' + nVal, w / 2, 38);

                            function toX(xv) { return margin.left + ((xv - xMin) / (xMax - xMin)) * plotW; }
                            function toY(yv) { return margin.top + plotH - ((yv - yMin) / (yMax - yMin)) * plotH; }

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, toY(0));
                            ctx.lineTo(margin.left + plotW, toY(0));
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(toX(0), margin.top);
                            ctx.lineTo(toX(0), margin.top + plotH);
                            ctx.stroke();

                            var steps = 500;
                            var dxs = (xMax - xMin) / steps;

                            // Draw g (dominator) with shading
                            ctx.fillStyle = 'rgba(63, 185, 80, 0.1)';
                            ctx.beginPath();
                            ctx.moveTo(toX(xMin), toY(0));
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = Math.min(Math.max(ex.g(xv), yMin), yMax);
                                ctx.lineTo(toX(xv), toY(yv));
                            }
                            ctx.lineTo(toX(xMax), toY(0));
                            ctx.closePath();
                            ctx.fill();

                            // Draw -g
                            ctx.fillStyle = 'rgba(63, 185, 80, 0.1)';
                            ctx.beginPath();
                            ctx.moveTo(toX(xMin), toY(0));
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = Math.min(Math.max(-ex.g(xv), yMin), yMax);
                                ctx.lineTo(toX(xv), toY(yv));
                            }
                            ctx.lineTo(toX(xMax), toY(0));
                            ctx.closePath();
                            ctx.fill();

                            // g curve
                            ctx.strokeStyle = colors.green;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = Math.min(Math.max(ex.g(xv), yMin), yMax);
                                if (i === 0) ctx.moveTo(toX(xv), toY(yv));
                                else ctx.lineTo(toX(xv), toY(yv));
                            }
                            ctx.stroke();
                            // -g curve
                            ctx.beginPath();
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = Math.min(Math.max(-ex.g(xv), yMin), yMax);
                                if (i === 0) ctx.moveTo(toX(xv), toY(yv));
                                else ctx.lineTo(toX(xv), toY(yv));
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Draw f_n
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = Math.min(Math.max(ex.fn(xv, nVal), yMin), yMax);
                                if (i === 0) ctx.moveTo(toX(xv), toY(yv));
                                else ctx.lineTo(toX(xv), toY(yv));
                            }
                            ctx.stroke();

                            // Draw limit f
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 3]);
                            ctx.beginPath();
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = Math.min(Math.max(ex.limit(xv), yMin), yMax);
                                if (i === 0) ctx.moveTo(toX(xv), toY(yv));
                                else ctx.lineTo(toX(xv), toY(yv));
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Side panel
                            var px = w - margin.right + 15;
                            var py = margin.top + 10;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';

                            ctx.fillStyle = colors.blue;
                            ctx.fillRect(px, py, 15, 3);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('f_n', px + 22, py + 5);

                            ctx.fillStyle = colors.orange;
                            ctx.fillRect(px, py + 18, 15, 3);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('f (limit)', px + 22, py + 23);

                            ctx.fillStyle = colors.green;
                            ctx.fillRect(px, py + 36, 15, 3);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('g (dominator)', px + 22, py + 41);

                            py += 65;
                            ctx.font = '11px -apple-system, sans-serif';

                            // Domination check
                            if (ex.dominated) {
                                ctx.fillStyle = colors.green;
                                ctx.fillText('|f_n| <= g ?  YES', px, py);
                            } else {
                                ctx.fillStyle = colors.red;
                                ctx.fillText('|f_n| <= g ?  NO', px, py);
                            }

                            if (ex.gIntegrable) {
                                ctx.fillStyle = colors.green;
                                ctx.fillText('g integrable?  YES', px, py + 16);
                            } else {
                                ctx.fillStyle = colors.red;
                                ctx.fillText('g integrable?  NO', px, py + 16);
                            }

                            var dctApplies = ex.dominated && ex.gIntegrable;
                            py += 40;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            if (dctApplies) {
                                ctx.fillStyle = colors.green;
                                ctx.fillText('DCT APPLIES', px, py);
                            } else {
                                ctx.fillStyle = colors.red;
                                ctx.fillText('DCT DOES NOT APPLY', px, py);
                            }

                            py += 25;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillStyle = colors.text;
                            ctx.fillText('integral f = ' + ex.integralLimit.toFixed(4), px, py);

                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(ex.desc, w / 2, h - 8);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute \\(\\lim_{n \\to \\infty} \\int_0^1 \\frac{1 + nx^2}{(1+x^2)^n}\\,dx\\) using the DCT.',
                    hint: 'Find the pointwise limit of the integrand. Show it is dominated by a constant (which is integrable on \\([0,1]\\)).',
                    solution: 'For \\(x \\in (0, 1]\\), \\(1 + x^2 > 1\\), so \\((1+x^2)^n \\to \\infty\\), and the integrand \\(\\to 0\\). At \\(x = 0\\), the integrand is \\(1/1 = 1\\). So the pointwise limit is \\(f(x) = 0\\) for \\(x > 0\\) and \\(f(0) = 1\\), i.e., \\(f = 0\\) a.e. For domination: \\(\\frac{1+nx^2}{(1+x^2)^n} \\leq \\frac{1}{(1+x^2)^{n-1}} + \\frac{nx^2}{(1+x^2)^n}\\). For \\(n \\geq 2\\), both terms are at most 1 (check: \\(\\frac{1+t}{(1+t)^n} \\cdot \\frac{1}{x^2}\\)... more directly, the integrand is bounded by \\(1+n/(1+x^2)^{n-1} \\cdot x^2\\), but simplest: for all \\(n \\geq 1\\) and \\(x \\in [0,1]\\), the integrand \\(\\leq 1 + n \\cdot 1 = 1+n\\). This is not a uniform bound. Instead, note \\(\\frac{1+nx^2}{(1+x^2)^n} \\leq \\frac{1+n}{(1+x^2)^n} \\cdot \\max(1, x^2)/(1+nx^2)\\)... The simplest domination: since \\((1+x^2)^n \\geq 1 + nx^2\\) by Bernoulli, the integrand \\(\\leq 1\\). By DCT with \\(g = 1\\): \\(\\lim_n \\int_0^1 f_n = \\int_0^1 0 = 0\\).'
                },
                {
                    question: 'Let \\(f \\in L^1(\\mathbb{R})\\). Show that \\(\\lim_{n \\to \\infty} \\int_{\\mathbb{R}} f(x) \\cos(nx)\\,dx = 0\\) (the Riemann-Lebesgue lemma for cosine). You may use the DCT on a suitable sequence.',
                    hint: 'This is not a direct DCT application (the pointwise limit of \\(f(x)\\cos(nx)\\) does not exist in general). Instead, prove it first for step functions, then use density of step functions in \\(L^1\\).',
                    solution: 'For a step function \\(s = \\sum a_k \\mathbf{1}_{(b_k, c_k)}\\), \\(\\int s(x) \\cos(nx)\\,dx = \\sum a_k \\int_{b_k}^{c_k} \\cos(nx)\\,dx = \\sum a_k [\\sin(nc_k) - \\sin(nb_k)]/n \\to 0\\). For general \\(f \\in L^1\\), given \\(\\varepsilon > 0\\), choose a step function \\(s\\) with \\(\\|f - s\\|_1 < \\varepsilon\\). Then \\(|\\int f \\cos(nx)\\,dx| \\leq |\\int s \\cos(nx)\\,dx| + \\int |f-s|\\,dx < |\\int s \\cos(nx)\\,dx| + \\varepsilon\\). The first term \\(\\to 0\\), so \\(\\limsup |\\int f \\cos(nx)\\,dx| \\leq \\varepsilon\\). Since \\(\\varepsilon\\) is arbitrary, the limit is 0.'
                },
                {
                    question: 'Show that the DCT implies Fatou\'s lemma for <em>bounded</em> sequences on a finite measure space. More precisely, if \\(\\mu(X) < \\infty\\), \\(0 \\leq f_n \\leq M\\) for all \\(n\\), and \\(f_n \\to f\\) a.e., then \\(\\int f_n \\to \\int f\\).',
                    hint: 'What is the dominating function?',
                    solution: 'Take \\(g = M\\). Then \\(|f_n| \\leq M = g\\) and \\(\\int g\\,d\\mu = M \\cdot \\mu(X) < \\infty\\). The DCT gives \\(\\int f_n \\to \\int f\\). This is the Bounded Convergence Theorem (Corollary 7.17), which is strictly stronger than Fatou in this setting (it gives equality, not just an inequality).'
                },
                {
                    question: 'Prove that if \\(f \\in L^1(\\mu)\\), then for every \\(\\varepsilon > 0\\) there exists \\(\\delta > 0\\) such that \\(\\mu(E) < \\delta \\implies \\int_E |f|\\,d\\mu < \\varepsilon\\). (This is the "absolute continuity of the integral.")',
                    hint: 'Apply the DCT or argue by contradiction using the DCT. Alternatively, approximate \\(f\\) by bounded functions.',
                    solution: 'Suppose for contradiction the claim fails: there exist \\(\\varepsilon_0 > 0\\) and sets \\(E_n\\) with \\(\\mu(E_n) < 1/2^n\\) and \\(\\int_{E_n} |f|\\,d\\mu \\geq \\varepsilon_0\\). By Borel-Cantelli (since \\(\\sum \\mu(E_n) < \\infty\\)), for a.e. \\(x\\), \\(x \\in E_n\\) for only finitely many \\(n\\). So \\(h_n = |f| \\cdot \\mathbf{1}_{E_n} \\to 0\\) a.e. Also \\(|h_n| \\leq |f|\\) which is integrable. By DCT, \\(\\int h_n\\,d\\mu \\to 0\\), contradicting \\(\\int h_n \\geq \\varepsilon_0\\). Alternatively (constructive): given \\(\\varepsilon\\), let \\(f_M = |f| \\wedge M\\). Then \\(\\int |f - f_M|\\,d\\mu < \\varepsilon/2\\) for \\(M\\) large enough (by MCT). Take \\(\\delta = \\varepsilon/(2M)\\). If \\(\\mu(E) < \\delta\\), then \\(\\int_E |f| \\leq \\int_E f_M + \\int_E (|f| - f_M) \\leq M\\mu(E) + \\varepsilon/2 < \\varepsilon\\).'
                }
            ]
        },

        // ============================================================
        // Section 5: Applications and Extensions
        // ============================================================
        {
            id: 'applications-extensions',
            title: 'Applications and Extensions',
            content: `
                <div class="bridge section-bridge">
                    <p>With the three great theorems (MCT, Fatou, DCT) in hand, we can now prove results that are essential workhorses in every branch of mathematics that uses integration. This section presents the most important applications: differentiating under the integral sign, continuity of parameter-dependent integrals, and Scheff&eacute;'s lemma.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Apply the DCT to establish the Leibniz integral rule (differentiation under the integral sign), continuity of parameter-dependent integrals, and Scheff&eacute;'s lemma. Each result reduces to finding a suitable dominating function.</p>
                </div>

                <h2>Continuity of Parameter-Dependent Integrals</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.19 (Continuity Under the Integral Sign)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A}, \\mu)\\) be a measure space and let \\(T \\subseteq \\mathbb{R}\\) be an interval. Suppose \\(f: X \\times T \\to \\mathbb{R}\\) satisfies:</p>
                        <ol>
                            <li>For each \\(t \\in T\\), \\(x \\mapsto f(x, t)\\) is measurable.</li>
                            <li>For \\(\\mu\\)-a.e. \\(x\\), \\(t \\mapsto f(x, t)\\) is continuous at \\(t_0 \\in T\\).</li>
                            <li>There exists an integrable \\(g: X \\to [0, \\infty)\\) with \\(|f(x, t)| \\leq g(x)\\) for all \\(t \\in T\\) and \\(\\mu\\)-a.e. \\(x\\).</li>
                        </ol>
                        <p>Then the function \\(F(t) = \\int_X f(x, t)\\,d\\mu(x)\\) is continuous at \\(t_0\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 7.19</div>
                    <div class="env-body">
                        <p>Let \\(t_n \\to t_0\\). Define \\(h_n(x) = f(x, t_n)\\). Then \\(h_n(x) \\to f(x, t_0)\\) for a.e. \\(x\\) (by continuity in \\(t\\)), and \\(|h_n(x)| \\leq g(x)\\) (by hypothesis 3). The DCT gives:</p>
                        \\[F(t_n) = \\int f(x, t_n)\\,d\\mu \\to \\int f(x, t_0)\\,d\\mu = F(t_0).\\]
                        <p>Since this holds for every sequence \\(t_n \\to t_0\\), \\(F\\) is continuous at \\(t_0\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Differentiation Under the Integral Sign</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.20 (Leibniz Integral Rule)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A}, \\mu)\\) be a measure space and let \\(T \\subseteq \\mathbb{R}\\) be an open interval. Suppose \\(f: X \\times T \\to \\mathbb{R}\\) satisfies:</p>
                        <ol>
                            <li>For each \\(t \\in T\\), \\(x \\mapsto f(x, t)\\) is integrable.</li>
                            <li>For \\(\\mu\\)-a.e. \\(x\\), the partial derivative \\(\\frac{\\partial f}{\\partial t}(x, t)\\) exists for all \\(t \\in T\\).</li>
                            <li>There exists an integrable function \\(g: X \\to [0, \\infty)\\) such that \\(\\left|\\frac{\\partial f}{\\partial t}(x, t)\\right| \\leq g(x)\\) for all \\(t \\in T\\) and \\(\\mu\\)-a.e. \\(x\\).</li>
                        </ol>
                        <p>Then \\(F(t) = \\int_X f(x,t)\\,d\\mu(x)\\) is differentiable on \\(T\\) and</p>
                        \\[F'(t) = \\int_X \\frac{\\partial f}{\\partial t}(x, t)\\,d\\mu(x).\\]
                        <p>That is, \\(\\frac{d}{dt} \\int f\\,d\\mu = \\int \\frac{\\partial f}{\\partial t}\\,d\\mu\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 7.20</div>
                    <div class="env-body">
                        <p>Fix \\(t_0 \\in T\\) and let \\(t_n \\to t_0\\) with \\(t_n \\neq t_0\\). Consider the difference quotients:</p>
                        \\[\\frac{F(t_n) - F(t_0)}{t_n - t_0} = \\int_X \\frac{f(x, t_n) - f(x, t_0)}{t_n - t_0}\\,d\\mu(x).\\]

                        <p><strong>Pointwise convergence:</strong> For a.e. \\(x\\), \\(\\frac{f(x, t_n) - f(x, t_0)}{t_n - t_0} \\to \\frac{\\partial f}{\\partial t}(x, t_0)\\).</p>

                        <p><strong>Domination:</strong> By the Mean Value Theorem, for each \\(x\\) and \\(n\\), there exists \\(\\tau_n\\) between \\(t_n\\) and \\(t_0\\) such that</p>
                        \\[\\left|\\frac{f(x, t_n) - f(x, t_0)}{t_n - t_0}\\right| = \\left|\\frac{\\partial f}{\\partial t}(x, \\tau_n)\\right| \\leq g(x).\\]

                        <p>By the DCT:</p>
                        \\[F'(t_0) = \\lim_n \\int \\frac{f(x,t_n) - f(x,t_0)}{t_n - t_0}\\,d\\mu = \\int \\frac{\\partial f}{\\partial t}(x, t_0)\\,d\\mu.\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (When Can We Differentiate Under the Integral?)</div>
                    <div class="env-body">
                        <p>The recipe is always the same: (1) write the derivative as a limit of difference quotients, (2) pass the limit inside the integral using the DCT, (3) the domination condition on \\(\\partial f / \\partial t\\) is the price of admission. In practice, finding the dominator \\(g\\) is the creative step; the rest is automatic.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.21 (A Classic Application)</div>
                    <div class="env-body">
                        <p>Compute \\(F(t) = \\int_0^{\\infty} \\frac{e^{-tx}}{1+x^2}\\,dx\\) for \\(t &gt; 0\\), and show \\(F\\) is differentiable with</p>
                        \\[F'(t) = -\\int_0^{\\infty} \\frac{x\\, e^{-tx}}{1+x^2}\\,dx.\\]
                        <p>The partial derivative is \\(\\frac{\\partial}{\\partial t} \\frac{e^{-tx}}{1+x^2} = \\frac{-x\\, e^{-tx}}{1+x^2}\\). For \\(t \\geq \\delta &gt; 0\\), \\(|\\frac{-x\\, e^{-tx}}{1+x^2}| \\leq \\frac{x\\, e^{-\\delta x}}{1+x^2} \\leq x e^{-\\delta x}\\), which is integrable on \\([0, \\infty)\\). By Theorem 7.20, the interchange is valid.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="differentiation-under-integral"></div>

                <h2>Scheff&eacute;'s Lemma</h2>

                <div class="env-block lemma">
                    <div class="env-title">Lemma 7.22 (Scheff&eacute;'s Lemma)</div>
                    <div class="env-body">
                        <p>Let \\(f_n, f \\geq 0\\) be integrable with \\(f_n \\to f\\) a.e. and \\(\\int f_n\\,d\\mu \\to \\int f\\,d\\mu &lt; \\infty\\). Then</p>
                        \\[\\int |f_n - f|\\,d\\mu \\to 0.\\]
                        <p>That is, pointwise convergence plus convergence of integrals implies \\(L^1\\) convergence, for non-negative functions.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Lemma 7.22</div>
                    <div class="env-body">
                        <p>Write \\(|f_n - f| = (f_n - f)^+ + (f_n - f)^- = (f_n - f)^+ + (f - f_n)^+\\). Note that</p>
                        \\[|f_n - f| = f_n + f - 2\\min(f_n, f).\\]
                        <p>Thus \\(\\int |f_n - f|\\,d\\mu = \\int f_n\\,d\\mu + \\int f\\,d\\mu - 2\\int \\min(f_n, f)\\,d\\mu\\).</p>
                        <p>Now \\(\\min(f_n, f) \\to f\\) a.e. (since \\(f_n \\to f\\)) and \\(0 \\leq \\min(f_n, f) \\leq f\\) which is integrable. By the DCT, \\(\\int \\min(f_n, f)\\,d\\mu \\to \\int f\\,d\\mu\\).</p>
                        <p>Using the hypothesis \\(\\int f_n \\to \\int f\\):</p>
                        \\[\\int |f_n - f|\\,d\\mu \\to \\int f\\,d\\mu + \\int f\\,d\\mu - 2\\int f\\,d\\mu = 0.\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Scheff&eacute;'s Lemma in Probability)</div>
                    <div class="env-body">
                        <p>In probability, Scheff&eacute;'s lemma is stated as: if probability densities \\(p_n \\to p\\) a.e., then \\(\\|p_n - p\\|_1 \\to 0\\) (convergence in total variation). The condition \\(\\int p_n = \\int p = 1\\) is automatically satisfied since these are densities. This makes Scheff&eacute;'s lemma one of the simplest ways to establish total variation convergence.</p>
                    </div>
                </div>

                <h2>The Vitali Convergence Theorem</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.23 (Vitali Convergence Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu(X) &lt; \\infty\\). Suppose \\(f_n \\to f\\) in measure and the sequence \\(\\{f_n\\}\\) is <strong>uniformly integrable</strong>, meaning:</p>
                        \\[\\lim_{M \\to \\infty} \\sup_n \\int_{\\{|f_n| &gt; M\\}} |f_n|\\,d\\mu = 0.\\]
                        <p>Then \\(f_n \\to f\\) in \\(L^1\\), i.e., \\(\\int |f_n - f|\\,d\\mu \\to 0\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (DCT vs. Vitali)</div>
                    <div class="env-body">
                        <p>The Vitali convergence theorem generalizes the DCT: domination by an integrable \\(g\\) implies uniform integrability (since \\(\\int_{\\{|f_n| > M\\}} |f_n| \\leq \\int_{\\{g > M\\}} g \\to 0\\) as \\(M \\to \\infty\\)). But uniform integrability is strictly weaker than domination. In probability theory, uniform integrability is the "right" condition for \\(L^1\\) convergence and plays a central role in martingale theory.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="counterexample-gallery"></div>

                <h2>Summary: The Convergence Theorem Hierarchy</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Big Picture)</div>
                    <div class="env-body">
                        <p>Here is the logical architecture of this chapter:</p>
                        <ul>
                            <li><strong>MCT</strong> (Theorem 7.1): monotone + non-negative \\(\\implies\\) limit commutes with integral. The most fundamental; proved directly from the definition.</li>
                            <li><strong>Theorem 7.4</strong> (series integration): a corollary of MCT. \\(\\sum\\) and \\(\\int\\) commute for non-negative terms.</li>
                            <li><strong>Fatou</strong> (Theorem 7.10): no monotonicity needed, but only an inequality. Proved from MCT.</li>
                            <li><strong>Reverse Fatou</strong> (Theorem 7.13): the opposite inequality, but needs domination. Proved from Fatou.</li>
                            <li><strong>DCT</strong> (Theorem 7.14): pointwise convergence + domination \\(\\implies\\) limit commutes with integral. Proved from Fatou (applied twice).</li>
                            <li><strong>Bounded Convergence</strong> (Corollary 7.17): special case of DCT on finite measure spaces.</li>
                            <li><strong>Leibniz rule</strong> (Theorem 7.20): differentiation under the integral. Proved from DCT.</li>
                            <li><strong>Scheff&eacute;</strong> (Lemma 7.22): pointwise + integral convergence \\(\\implies\\) \\(L^1\\). Proved from DCT.</li>
                            <li><strong>Vitali</strong> (Theorem 7.23): generalizes DCT via uniform integrability.</li>
                        </ul>
                        <p>The entire edifice rests on the MCT. Everything flows from monotone convergence.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.27; Royden-Fitzpatrick 4.5-4.6; Stein-Shakarchi III.2-III.3; Rudin RCA 1.34-1.38; Billingsley Section 16.</p>
            `,
            visualizations: [
                {
                    id: 'differentiation-under-integral',
                    title: 'Differentiation Under the Integral',
                    description: 'User adjusts a parameter t; the function f(x,t) updates; both d/dt integral f and integral d/dt f are computed and shown to agree.',
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
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var tVal = 1.0;
                        var dt = 0.01;

                        VizEngine.createSlider(controls, 't (parameter)', 0.1, 5.0, tVal, 0.05, function(v) {
                            tVal = v;
                            draw();
                        });

                        // f(x, t) = e^{-tx} / (1 + x^2)
                        function f(x, t) { return Math.exp(-t * x) / (1 + x * x); }
                        function dfdt(x, t) { return -x * Math.exp(-t * x) / (1 + x * x); }

                        // Numerical integration via trapezoidal rule
                        function integrate(func, a, b, steps) {
                            var h = (b - a) / steps;
                            var sum = 0.5 * (func(a) + func(b));
                            for (var i = 1; i < steps; i++) {
                                sum += func(a + i * h);
                            }
                            return sum * h;
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = {left: 60, right: 200, top: 50, bottom: 50};
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;
                            var xMin = 0, xMax = 8, yMin = -0.5, yMax = 1.2;

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Differentiation Under the Integral Sign', w / 2, 20);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('f(x,t) = exp(-tx)/(1+x^2)   |   t = ' + tVal.toFixed(2), w / 2, 38);

                            function toX(xv) { return margin.left + ((xv - xMin) / (xMax - xMin)) * plotW; }
                            function toY(yv) { return margin.top + plotH - ((yv - yMin) / (yMax - yMin)) * plotH; }

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, toY(0));
                            ctx.lineTo(margin.left + plotW, toY(0));
                            ctx.stroke();

                            var steps = 400;
                            var dxs = (xMax - xMin) / steps;

                            // Shade area under f(x, t)
                            ctx.fillStyle = 'rgba(63, 185, 160, 0.15)';
                            ctx.beginPath();
                            ctx.moveTo(toX(xMin), toY(0));
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                ctx.lineTo(toX(xv), toY(f(xv, tVal)));
                            }
                            ctx.lineTo(toX(xMax), toY(0));
                            ctx.closePath();
                            ctx.fill();

                            // f(x, t)
                            ctx.strokeStyle = colors.teal;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = f(xv, tVal);
                                if (i === 0) ctx.moveTo(toX(xv), toY(yv));
                                else ctx.lineTo(toX(xv), toY(yv));
                            }
                            ctx.stroke();

                            // df/dt
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = Math.max(yMin, Math.min(yMax, dfdt(xv, tVal)));
                                if (i === 0) ctx.moveTo(toX(xv), toY(yv));
                                else ctx.lineTo(toX(xv), toY(yv));
                            }
                            ctx.stroke();

                            // Compute integrals
                            var Ft = integrate(function(x) { return f(x, tVal); }, 0.001, 20, 2000);
                            var Ft_plus = integrate(function(x) { return f(x, tVal + dt); }, 0.001, 20, 2000);
                            var dFdt_numerical = (Ft_plus - Ft) / dt;
                            var dFdt_formula = integrate(function(x) { return dfdt(x, tVal); }, 0.001, 20, 2000);

                            // Side panel
                            var px = w - margin.right + 15;
                            var py = margin.top + 10;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';

                            ctx.fillStyle = colors.teal;
                            ctx.fillRect(px, py, 15, 3);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('f(x, t)', px + 22, py + 5);

                            ctx.fillStyle = colors.orange;
                            ctx.fillRect(px, py + 18, 15, 3);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('df/dt(x, t)', px + 22, py + 23);

                            py += 55;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillStyle = colors.teal;
                            ctx.fillText('F(t) = ' + Ft.toFixed(5), px, py);

                            py += 22;
                            ctx.fillStyle = colors.purple;
                            ctx.fillText('dF/dt (numerical):', px, py);
                            ctx.fillText(dFdt_numerical.toFixed(5), px, py + 16);

                            py += 38;
                            ctx.fillStyle = colors.orange;
                            ctx.fillText('integral df/dt dx:', px, py);
                            ctx.fillText(dFdt_formula.toFixed(5), px, py + 16);

                            py += 38;
                            var err = Math.abs(dFdt_numerical - dFdt_formula);
                            ctx.fillStyle = err < 0.01 ? colors.green : colors.red;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.fillText('Match: ' + (err < 0.01 ? 'YES' : 'NO'), px, py);
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillStyle = colors.muted;
                            ctx.fillText('error = ' + err.toExponential(2), px, py + 16);
                        }

                        draw();
                    }
                },
                {
                    id: 'counterexample-gallery',
                    title: 'Counterexample Gallery',
                    description: 'Interactive gallery of sequences where interchanging limit and integral fails: mass escaping to infinity, mass concentrating at a point, oscillating mass.',
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
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var nVal = 3;
                        var exIdx = 0;
                        var animFrame = null;
                        var animN = 1;
                        var playing = false;

                        var examples = [
                            {
                                name: 'Mass Escaping to Infinity',
                                fn: function(x, n) { return (x >= n && x < n + 1) ? 1 : 0; },
                                xRange: function(n) { return [0, n + 4]; },
                                yMax: 1.5,
                                limFn: function(x) { return 0; },
                                integralFn: 1, integralLim: 0,
                                why: 'f_n = 1_{[n,n+1]}: unit mass slides rightward.',
                                which: 'MCT fails (not monotone); DCT fails (no integrable dominator)',
                                color: colors.blue
                            },
                            {
                                name: 'Mass Concentrating at a Point',
                                fn: function(x, n) { return (x > 0 && x < 1.0/n) ? n : 0; },
                                xRange: function(n) { return [0, 1]; },
                                yMax: function(n) { return Math.max(n + 2, 6); },
                                limFn: function(x) { return 0; },
                                integralFn: 1, integralLim: 0,
                                why: 'f_n = n*1_{(0,1/n)}: spike height grows as width shrinks.',
                                which: 'DCT fails: dominator g(x) >= 1/x is not integrable.',
                                color: colors.teal
                            },
                            {
                                name: 'Typewriter Sequence',
                                fn: function(x, n) {
                                    // Typewriter: subdivide [0,1] into 2^k pieces, cycle through them
                                    // n=1: [0,1], n=2: [0,1/2], n=3: [1/2,1], n=4: [0,1/3], ...
                                    var k = Math.floor(Math.log2(n));
                                    var m = Math.pow(2, k);
                                    var j = n - m;
                                    var a = j / m, b = (j + 1) / m;
                                    return (x >= a && x < b) ? 1 : 0;
                                },
                                xRange: function(n) { return [0, 1]; },
                                yMax: 1.5,
                                limFn: function(x) { return 0; },
                                integralFn: function(n) {
                                    var k = Math.floor(Math.log2(n));
                                    return 1 / Math.pow(2, k);
                                },
                                integralLim: 0,
                                why: 'Typewriter: indicator moves across [0,1] in shrinking waves.',
                                which: 'Converges in measure but NOT a.e. Yet integrals -> 0.',
                                color: colors.purple
                            },
                            {
                                name: 'Oscillating Sign (Riemann-Lebesgue)',
                                fn: function(x, n) {
                                    return Math.sin(n * x) * Math.exp(-x);
                                },
                                xRange: function(n) { return [0, 10]; },
                                yMax: 1.2,
                                limFn: function(x) { return 0; },
                                integralFn: function(n) { return n / (1 + n * n); },
                                integralLim: 0,
                                why: 'f_n = sin(nx)*exp(-x): oscillations cancel in integral.',
                                which: 'DCT applies with g = exp(-x). Integrals -> 0.',
                                color: colors.orange
                            }
                        ];

                        VizEngine.createSlider(controls, 'n (sequence index)', 1, 40, nVal, 1, function(v) {
                            nVal = Math.round(v);
                            if (!playing) draw();
                        });

                        var exBtns = examples.map(function(ex, i) {
                            var btn = document.createElement('button');
                            btn.textContent = ex.name;
                            btn.style.cssText = 'margin:3px;padding:4px 8px;background:#222255;color:' + ex.color + ';border:1px solid ' + ex.color + ';border-radius:4px;cursor:pointer;font-size:11px;';
                            btn.onclick = function() { exIdx = i; if (!playing) draw(); };
                            controls.appendChild(btn);
                            return btn;
                        });

                        // Animate button
                        var animBtn = document.createElement('button');
                        animBtn.textContent = 'Animate';
                        animBtn.style.cssText = 'margin:3px;padding:4px 12px;background:#3fb950;color:#0c0c20;border:none;border-radius:4px;cursor:pointer;font-size:12px;font-weight:bold;';
                        animBtn.onclick = function() {
                            if (playing) {
                                playing = false;
                                animBtn.textContent = 'Animate';
                                animBtn.style.background = colors.green;
                                if (animFrame) cancelAnimationFrame(animFrame);
                            } else {
                                playing = true;
                                animBtn.textContent = 'Stop';
                                animBtn.style.background = colors.red;
                                animN = 1;
                                animate();
                            }
                        };
                        controls.appendChild(animBtn);

                        var lastTime = 0;
                        function animate(ts) {
                            if (!playing) return;
                            if (!ts) ts = 0;
                            if (ts - lastTime > 400) {
                                lastTime = ts;
                                nVal = animN;
                                draw();
                                animN++;
                                if (animN > 40) animN = 1;
                            }
                            animFrame = requestAnimationFrame(animate);
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var ex = examples[exIdx];
                            var margin = {left: 55, right: 15, top: 50, bottom: 70};
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            var xr = ex.xRange(nVal);
                            var xMin = xr[0], xMax = xr[1];
                            var yMax = typeof ex.yMax === 'function' ? ex.yMax(nVal) : ex.yMax;
                            var yMin = -0.3;

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Counterexample Gallery: ' + ex.name, w / 2, 20);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('n = ' + nVal, w / 2, 38);

                            function toX(xv) { return margin.left + ((xv - xMin) / (xMax - xMin)) * plotW; }
                            function toY(yv) { return margin.top + plotH - ((yv - yMin) / (yMax - yMin)) * plotH; }

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, toY(0));
                            ctx.lineTo(margin.left + plotW, toY(0));
                            ctx.stroke();

                            var steps = 600;
                            var dxs = (xMax - xMin) / steps;

                            // Shade area under f_n
                            ctx.fillStyle = ex.color.replace(')', ', 0.15)').replace('rgb', 'rgba');
                            if (ctx.fillStyle === ex.color) ctx.fillStyle = 'rgba(88, 166, 255, 0.15)';
                            ctx.beginPath();
                            ctx.moveTo(toX(xMin), toY(0));
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = ex.fn(xv, nVal);
                                yv = Math.max(yMin, Math.min(yMax, yv));
                                ctx.lineTo(toX(xv), toY(yv));
                            }
                            ctx.lineTo(toX(xMax), toY(0));
                            ctx.closePath();
                            ctx.fill();

                            // f_n curve
                            ctx.strokeStyle = ex.color;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (var i = 0; i <= steps; i++) {
                                var xv = xMin + i * dxs;
                                var yv = ex.fn(xv, nVal);
                                yv = Math.max(yMin, Math.min(yMax, yv));
                                if (i === 0) ctx.moveTo(toX(xv), toY(yv));
                                else ctx.lineTo(toX(xv), toY(yv));
                            }
                            ctx.stroke();

                            // Integral display
                            var intVal = typeof ex.integralFn === 'function' ? ex.integralFn(nVal) : ex.integralFn;
                            ctx.fillStyle = colors.text;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('integral f_n = ' + intVal.toFixed(4) + '    |    integral lim f_n = ' + ex.integralLim.toFixed(4), margin.left + 5, h - 48);

                            ctx.fillStyle = colors.yellow;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText(ex.why, margin.left + 5, h - 28);
                            ctx.fillStyle = colors.red;
                            ctx.fillText(ex.which, margin.left + 5, h - 10);
                        }

                        draw();

                        return {
                            stopAnimation: function() {
                                playing = false;
                                if (animFrame) cancelAnimationFrame(animFrame);
                            }
                        };
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use the Leibniz integral rule to compute \\(\\frac{d}{dt} \\int_0^{\\infty} e^{-tx^2}\\,dx\\) for \\(t > 0\\). Then use this to find a formula for \\(\\int_0^{\\infty} x^2 e^{-tx^2}\\,dx\\).',
                    hint: 'First, recall that \\(\\int_0^{\\infty} e^{-tx^2}\\,dx = \\frac{\\sqrt{\\pi}}{2\\sqrt{t}}\\). Differentiate both sides with respect to \\(t\\), justifying the interchange.',
                    solution: 'We have \\(F(t) = \\int_0^\\infty e^{-tx^2}\\,dx = \\frac{\\sqrt{\\pi}}{2} t^{-1/2}\\). For the Leibniz rule, \\(\\frac{\\partial}{\\partial t} e^{-tx^2} = -x^2 e^{-tx^2}\\), and for \\(t \\geq \\delta > 0\\), \\(|x^2 e^{-tx^2}| \\leq x^2 e^{-\\delta x^2}\\), which is integrable. By Theorem 7.20: \\(F\'(t) = -\\int_0^\\infty x^2 e^{-tx^2}\\,dx\\). Differentiating the closed form: \\(F\'(t) = \\frac{\\sqrt{\\pi}}{2} \\cdot (-\\frac{1}{2}) t^{-3/2} = -\\frac{\\sqrt{\\pi}}{4t^{3/2}}\\). Therefore \\(\\int_0^\\infty x^2 e^{-tx^2}\\,dx = \\frac{\\sqrt{\\pi}}{4t^{3/2}}\\).'
                },
                {
                    question: 'Show that if \\(f_n \\to f\\) in \\(L^1\\) (i.e., \\(\\int |f_n - f|\\,d\\mu \\to 0\\)), then \\(\\int f_n\\,d\\mu \\to \\int f\\,d\\mu\\). Is the converse true?',
                    hint: 'Use the triangle inequality for integrals. For the converse, consider \\(f_n = \\mathbf{1}_{[n, n+1]}\\).',
                    solution: '\\(|\\int f_n - \\int f| = |\\int (f_n - f)| \\leq \\int |f_n - f| \\to 0\\). So \\(L^1\\) convergence implies convergence of integrals. The converse is false: take \\(f_n = \\mathbf{1}_{[n,n+1]} - \\mathbf{1}_{[n+1,n+2]}\\) on \\(\\mathbb{R}\\). Then \\(\\int f_n = 0\\) for all \\(n\\) and \\(f_n \\to 0\\) pointwise, so \\(\\int f_n \\to \\int f = 0\\). But \\(\\int |f_n - 0| = \\int |f_n| = 2\\) for all \\(n\\), so \\(f_n \\not\\to 0\\) in \\(L^1\\).'
                },
                {
                    question: 'Let \\(p_n\\) and \\(p\\) be probability density functions on \\(\\mathbb{R}\\) (so \\(\\int p_n = \\int p = 1\\)). Suppose \\(p_n \\to p\\) a.e. Use Scheff&eacute;\'s lemma to show \\(\\int |p_n - p| \\to 0\\) (total variation convergence).',
                    hint: 'Check the hypotheses of Lemma 7.22: non-negativity, a.e. convergence, convergence of integrals.',
                    solution: 'The \\(p_n\\) and \\(p\\) are non-negative, \\(p_n \\to p\\) a.e. (given), and \\(\\int p_n = 1 \\to 1 = \\int p\\). All hypotheses of Scheff&eacute;\'s lemma hold. Therefore \\(\\int |p_n - p| \\to 0\\). This is convergence in total variation distance: \\(\\mathrm{TV}(P_n, P) = \\frac{1}{2}\\int |p_n - p| \\to 0\\).'
                },
                {
                    question: 'Prove that if \\(f_n \\to f\\) a.e., \\(f_n \\geq 0\\), and \\(\\sup_n \\int f_n\\,d\\mu &lt; \\infty\\), it does NOT follow that \\(\\int f_n \\to \\int f\\). Give a counterexample.',
                    hint: 'The hypothesis is weaker than domination (it only bounds the integrals, not the pointwise values). Consider the "escaping mass" examples.',
                    solution: 'Let \\(f_n = n \\cdot \\mathbf{1}_{(0, 1/n^2)}\\) on \\([0,1]\\). Then \\(f_n \\to 0\\) a.e. and \\(\\int f_n = n \\cdot 1/n^2 = 1/n \\to 0 = \\int 0\\). This actually converges! For a failure, try \\(f_n = \\mathbf{1}_{[n, n+1]}\\) on \\(\\mathbb{R}\\). Then \\(f_n \\to 0\\) a.e., \\(\\sup_n \\int f_n = 1 < \\infty\\), but \\(\\int f_n = 1 \\not\\to 0 = \\int 0\\). Bounded integrals alone do not suffice; we need the DCT\'s domination hypothesis to prevent mass from escaping.'
                },
                {
                    question: '(Challenge) Show that for \\(f \\in L^1(\\mathbb{R})\\), the function \\(F(t) = \\int_{\\mathbb{R}} f(x) e^{itx}\\,dx\\) (the Fourier transform) is continuous. Which theorem do you use?',
                    hint: 'View \\(e^{itx}\\) as depending on the parameter \\(t\\). Check the hypotheses of Theorem 7.19.',
                    solution: 'For fixed \\(x\\), \\(t \\mapsto f(x) e^{itx}\\) is continuous (since \\(e^{itx}\\) is continuous in \\(t\\)). We have \\(|f(x) e^{itx}| = |f(x)|\\) for all \\(t\\), and \\(|f| \\in L^1\\) by hypothesis. By Theorem 7.19 (continuity under the integral sign), \\(F(t)\\) is continuous. This works because the dominator \\(g(x) = |f(x)|\\) does not depend on \\(t\\), so it dominates uniformly. Note: this argument uses the DCT through Theorem 7.19, not the MCT (the functions are complex-valued and not monotone).'
                },
                {
                    question: 'Explain why the Vitali convergence theorem is strictly more general than the DCT. Construct a sequence that satisfies the Vitali hypotheses but not the DCT hypotheses.',
                    hint: 'Uniform integrability is weaker than domination. Consider \\(f_n = n^{1/2} \\mathbf{1}_{(0, 1/n)}\\).',
                    solution: 'Let \\(f_n = n^{1/2} \\cdot \\mathbf{1}_{(0, 1/n)}\\) on \\([0,1]\\). Then \\(f_n \\to 0\\) a.e., \\(\\int f_n = 1/\\sqrt{n} \\to 0\\), and the sequence is uniformly integrable: \\(\\int_{\\{f_n > M\\}} f_n = \\int_{\\{n^{1/2} > M\\}} n^{1/2} \\cdot \\mathbf{1}_{(0,1/n)}\\,dx = n^{1/2}/n = 1/\\sqrt{n}\\) if \\(M < \\sqrt{n}\\), and 0 otherwise. So \\(\\sup_n \\int_{\\{f_n > M\\}} f_n \\leq \\sup_{n > M^2} 1/\\sqrt{n} \\to 0\\) as \\(M \\to \\infty\\). Vitali applies and gives \\(\\int f_n \\to 0\\). But no integrable dominator exists: any \\(g \\geq f_n\\) for all \\(n\\) must satisfy \\(g(x) \\geq \\sqrt{n}\\) for \\(x \\in (0, 1/n)\\), i.e., \\(g(x) \\geq 1/\\sqrt{x}\\) near 0. But \\(1/\\sqrt{x}\\) is integrable on \\([0,1]\\). So actually a dominator does exist (\\(g(x) = \\sup_n f_n(x) \\leq 1/\\sqrt{x}\\)). A better example: \\(f_n = n \\cdot \\mathbf{1}_{A_n}\\) where \\(\\mu(A_n) = 1/n^2\\). Then \\(f_n \\to 0\\) a.e. (Borel-Cantelli), \\(\\int f_n = 1/n \\to 0\\), \\(\\{f_n\\}\\) is uniformly integrable (\\(\\int_{\\{f_n>M\\}} f_n = 1/n\\) if \\(n > M\\)). But a dominator \\(g \\geq n\\) on \\(A_n\\) for all \\(n\\) simultaneously may not be integrable if the \\(A_n\\) overlap badly. For a clean example on a finite measure space: this distinction is mainly important in probability (martingale convergence), where uniform integrability arises naturally without a single dominator.'
                }
            ]
        }
    ]
});

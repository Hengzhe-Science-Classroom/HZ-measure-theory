window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch08',
    number: 8,
    title: 'Modes of Convergence',
    subtitle: 'Pointwise, Uniform, L^p, in Measure, and Their Interrelations',
    sections: [
        // ============================================================
        // Section 1: Pointwise and Almost-Everywhere Convergence
        // ============================================================
        {
            id: 'pointwise-ae-convergence',
            title: 'Pointwise and Almost-Everywhere Convergence',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>Chapter 7 gave us the great limit theorems.</strong> Each of those theorems assumed some form of convergence (pointwise, a.e., monotone) and delivered convergence of integrals. But we glossed over a fundamental question: there are <em>many</em> ways a sequence of functions can "converge," and they do not all agree. This chapter maps out five principal modes of convergence, proves the implications between them, and catalogs the counterexamples that show why no further implications hold.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define pointwise convergence and almost-everywhere convergence. Understand that a.e. convergence is equivalent to pointwise convergence after discarding a null set, and see why a.e. convergence is the "right" notion for integration theory.</p>
                </div>

                <h2>A Motivating Example</h2>

                <div class="env-block example">
                    <div class="env-title">Example 8.1 (Two Sequences, Same Limit?)</div>
                    <div class="env-body">
                        <p>On \\([0,1]\\) with Lebesgue measure, consider:</p>
                        <ul>
                            <li>\\(f_n(x) = x^n\\). For \\(x \\in [0,1)\\), \\(f_n(x) \\to 0\\). At \\(x = 1\\), \\(f_n(1) = 1\\) for all \\(n\\). So \\(f_n \\to \\mathbf{1}_{\\{1\\}}\\) pointwise, and also a.e. (the exceptional set \\(\\{1\\}\\) has measure zero).</li>
                            <li>\\(g_n = \\mathbf{1}_{\\mathbb{Q} \\cap [0,1]} \\cdot (-1)^n\\). At every rational, \\(g_n\\) oscillates between \\(\\pm 1\\) and does not converge. At every irrational, \\(g_n = 0\\) for all \\(n\\). So \\(g_n\\) does not converge pointwise, but it converges a.e. to 0 (the rationals form a null set).</li>
                        </ul>
                        <p>The second example illustrates why a.e. convergence is more permissive and more natural for measure theory: it ignores behavior on negligible sets.</p>
                    </div>
                </div>

                <h2>Formal Definitions</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.2 (Pointwise Convergence)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A}, \\mu)\\) be a measure space and let \\(f_n, f: X \\to \\overline{\\mathbb{R}}\\) be measurable. We say \\(f_n \\to f\\) <strong>pointwise</strong> if</p>
                        \\[\\lim_{n \\to \\infty} f_n(x) = f(x) \\quad \\text{for every } x \\in X.\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.3 (Almost-Everywhere Convergence)</div>
                    <div class="env-body">
                        <p>We say \\(f_n \\to f\\) <strong>almost everywhere</strong> (a.e.) if there exists a set \\(N \\in \\mathcal{A}\\) with \\(\\mu(N) = 0\\) such that</p>
                        \\[\\lim_{n \\to \\infty} f_n(x) = f(x) \\quad \\text{for every } x \\in X \\setminus N.\\]
                        <p>Equivalently, \\(\\mu\\big(\\{x : f_n(x) \\not\\to f(x)\\}\\big) = 0\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Discarding a Null Set)</div>
                    <div class="env-body">
                        <p>Almost-everywhere convergence says: "pointwise convergence holds, except possibly on a set so small that we cannot detect it with our measure." Since integrals cannot see null sets (\\(\\int_N f\\,d\\mu = 0\\) whenever \\(\\mu(N) = 0\\) and \\(f\\) is finite a.e.), the a.e. notion is perfectly adequate for all integration purposes.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 8.4 (Characterization of a.e. Convergence)</div>
                    <div class="env-body">
                        <p>\\(f_n \\to f\\) a.e. if and only if</p>
                        \\[\\mu\\!\\left(\\bigcap_{n=1}^{\\infty} \\bigcup_{k=n}^{\\infty} \\{|f_k - f| > \\varepsilon\\}\\right) = 0 \\quad \\text{for every } \\varepsilon > 0.\\]
                        <p>In other words, the \\(\\limsup\\) of the "bad sets" \\(\\{|f_n - f| > \\varepsilon\\}\\) has measure zero.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Proposition 8.4</div>
                    <div class="env-body">
                        <p>The set where \\(f_n \\not\\to f\\) is exactly</p>
                        \\[\\{x : f_n(x) \\not\\to f(x)\\} = \\bigcup_{m=1}^{\\infty} \\bigcap_{n=1}^{\\infty} \\bigcup_{k=n}^{\\infty} \\{|f_k - f| > 1/m\\}.\\]
                        <p>This set has measure zero if and only if each inner set \\(\\bigcap_{n} \\bigcup_{k \\geq n} \\{|f_k - f| > 1/m\\}\\) has measure zero. Replacing \\(1/m\\) by a general \\(\\varepsilon > 0\\) gives the stated condition.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (a.e. Convergence Is Not Metrizable in General)</div>
                    <div class="env-body">
                        <p>On \\(\\sigma\\)-finite measure spaces, there is generally no metric on the space of measurable functions that induces a.e. convergence as its notion of convergence. This is because a.e. convergence is not topological in character: a sequence can converge a.e. without every subsequence converging a.e. to the same limit in a "neighborhood" sense. (On finite measure spaces, convergence in measure, which <em>is</em> metrizable, serves as a topological substitute.)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Pointwise vs. a.e. in Practice)</div>
                    <div name="env-body">
                        <p>In virtually all applications of measure theory, one works with a.e. convergence rather than pointwise convergence. The MCT, DCT, and Fatou's lemma all require only a.e. convergence. Two functions that agree a.e. are identified in \\(L^p\\) spaces. Pointwise convergence at <em>every</em> point is an unnecessarily strong requirement that rarely arises naturally.</p>
                    </div>
                </div>
            `,
            exercises: []
        },

        // ============================================================
        // Section 2: Uniform and Almost-Uniform Convergence
        // ============================================================
        {
            id: 'uniform-almost-uniform',
            title: 'Uniform and Almost-Uniform Convergence',
            content: `
                <div class="bridge section-bridge">
                    <p>Pointwise convergence says that for each fixed \\(x\\), the values \\(f_n(x)\\) approach \\(f(x)\\). But the <em>rate</em> of convergence can vary wildly from point to point. Uniform convergence tames this by demanding a single rate that works everywhere simultaneously. Almost-uniform convergence relaxes this by allowing a small exceptional set.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define uniform and almost-uniform convergence. Show that uniform implies pointwise, and that almost-uniform convergence occupies a useful middle ground. These definitions set the stage for Egorov's theorem in Section 5.</p>
                </div>

                <h2>A Motivating Example: The Sliding Peak</h2>

                <div class="env-block example">
                    <div class="env-title">Example 8.5 (Pointwise but Not Uniform)</div>
                    <div class="env-body">
                        <p>Define \\(f_n: [0,1] \\to \\mathbb{R}\\) by \\(f_n(x) = x^n\\). Then \\(f_n(x) \\to 0\\) for every \\(x \\in [0,1)\\) and \\(f_n(1) = 1\\). Even restricting to \\([0,1)\\) where pointwise convergence holds everywhere, the convergence is <em>not</em> uniform: for any \\(N\\), we can find \\(x\\) close enough to 1 so that \\(x^N > 1/2\\). The "last holdouts" near \\(x = 1\\) converge arbitrarily slowly.</p>
                    </div>
                </div>

                <h2>Formal Definitions</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.6 (Uniform Convergence)</div>
                    <div class="env-body">
                        <p>We say \\(f_n \\to f\\) <strong>uniformly</strong> on \\(X\\) if</p>
                        \\[\\sup_{x \\in X} |f_n(x) - f(x)| \\to 0 \\quad \\text{as } n \\to \\infty.\\]
                        <p>Equivalently, for every \\(\\varepsilon > 0\\) there exists \\(N\\) (depending only on \\(\\varepsilon\\), not on \\(x\\)) such that \\(|f_n(x) - f(x)| < \\varepsilon\\) for all \\(n \\geq N\\) and all \\(x \\in X\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.7 (Almost-Uniform Convergence)</div>
                    <div class="env-body">
                        <p>We say \\(f_n \\to f\\) <strong>almost uniformly</strong> if for every \\(\\delta > 0\\), there exists a measurable set \\(E\\) with \\(\\mu(E) < \\delta\\) such that \\(f_n \\to f\\) uniformly on \\(X \\setminus E\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Almost-Uniform = "Uniform Up to \\(\\delta\\)")</div>
                    <div class="env-body">
                        <p>Almost-uniform convergence says: "I can make the convergence uniform if you let me throw away a set whose measure is as small as you like." The exceptional set \\(E\\) depends on \\(\\delta\\): as we demand smaller \\(\\delta\\), we may need to remove a different (possibly larger in some topological sense) set. But its measure stays below \\(\\delta\\).</p>
                        <p>Crucially, the exceptional set is <em>not</em> required to be a single null set (independent of \\(\\delta\\)). If it were, that would simply be uniform convergence a.e.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 8.8 (Hierarchy)</div>
                    <div class="env-body">
                        <p>The following implications hold:</p>
                        \\[\\text{uniform convergence} \\;\\Longrightarrow\\; \\text{almost-uniform convergence} \\;\\Longrightarrow\\; \\text{a.e. convergence}.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Proposition 8.8</div>
                    <div class="env-body">
                        <p><strong>Uniform \\(\\Rightarrow\\) almost-uniform:</strong> If \\(f_n \\to f\\) uniformly on all of \\(X\\), then for any \\(\\delta > 0\\), take \\(E = \\varnothing\\). Then \\(\\mu(E) = 0 < \\delta\\) and \\(f_n \\to f\\) uniformly on \\(X \\setminus E = X\\).</p>
                        <p><strong>Almost-uniform \\(\\Rightarrow\\) a.e.:</strong> For each \\(k \\geq 1\\), choose \\(E_k\\) with \\(\\mu(E_k) < 1/k\\) such that \\(f_n \\to f\\) uniformly (hence pointwise) on \\(X \\setminus E_k\\). Let \\(N = \\bigcap_{k=1}^{\\infty} E_k\\). Then \\(\\mu(N) \\leq \\mu(E_k) < 1/k\\) for all \\(k\\), so \\(\\mu(N) = 0\\). For any \\(x \\notin N\\), we have \\(x \\notin E_k\\) for some \\(k\\), so \\(f_n(x) \\to f(x)\\). Thus \\(f_n \\to f\\) a.e.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Neither Converse Holds in General)</div>
                    <div class="env-body">
                        <p>Almost-uniform convergence does not imply uniform convergence (Example 8.5 is almost-uniform on \\([0,1]\\) by Egorov's theorem, but not uniform). And a.e. convergence does not imply almost-uniform convergence on infinite measure spaces (see Section 5 for the failure of Egorov on \\(\\mathbb{R}\\)).</p>
                    </div>
                </div>
            `,
            exercises: []
        },

        // ============================================================
        // Section 3: Convergence in Measure
        // ============================================================
        {
            id: 'convergence-in-measure',
            title: 'Convergence in Measure',
            content: `
                <div class="bridge section-bridge">
                    <p>Pointwise convergence asks about each individual point. Convergence in measure takes a fundamentally different perspective: it asks about the <em>size</em> of the set where \\(f_n\\) and \\(f\\) disagree by more than \\(\\varepsilon\\). This is a weaker, more "global" notion, and it arises naturally whenever we care about distribution rather than pointwise behavior.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define convergence in measure, prove its key subsequence characterization, and understand the "typewriter sequence," the canonical example showing that convergence in measure does not imply pointwise convergence.</p>
                </div>

                <h2>The Typewriter Sequence: Convergence Without Pointwise Limits</h2>

                <div class="env-block example">
                    <div class="env-title">Example 8.9 (Typewriter Sequence / Sliding Bumps)</div>
                    <div class="env-body">
                        <p>On \\([0,1]\\) with Lebesgue measure, define a sequence of indicator functions of shrinking intervals that sweep across \\([0,1]\\) repeatedly:</p>
                        \\[f_1 = \\mathbf{1}_{[0,1]}, \\quad f_2 = \\mathbf{1}_{[0,1/2]}, \\quad f_3 = \\mathbf{1}_{[1/2,1]}, \\quad f_4 = \\mathbf{1}_{[0,1/3]}, \\quad f_5 = \\mathbf{1}_{[1/3,2/3]}, \\quad f_6 = \\mathbf{1}_{[2/3,1]}, \\; \\ldots\\]
                        <p>The \\(k\\)-th "pass" uses intervals of width \\(1/k\\), and there are \\(k\\) intervals in each pass. For any fixed \\(x \\in [0,1]\\), the sequence \\(f_n(x)\\) equals 1 infinitely often and 0 infinitely often, so \\(f_n(x)\\) does not converge for any \\(x\\). Yet \\(\\mu(\\{f_n \\neq 0\\}) \\to 0\\), so \\(f_n \\to 0\\) in measure.</p>
                        <p>This is the fundamental counterexample: <strong>convergence in measure does not imply a.e. convergence.</strong></p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="typewriter-sequence"></div>

                <h2>Formal Definition</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.10 (Convergence in Measure)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A}, \\mu)\\) be a measure space. We say \\(f_n \\to f\\) <strong>in measure</strong> (written \\(f_n \\xrightarrow{\\mu} f\\)) if for every \\(\\varepsilon > 0\\),</p>
                        \\[\\lim_{n \\to \\infty} \\mu\\big(\\{x \\in X : |f_n(x) - f(x)| > \\varepsilon\\}\\big) = 0.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Measuring the "Bad Set")</div>
                    <div class="env-body">
                        <p>For each \\(\\varepsilon > 0\\), consider the "bad set" \\(B_n(\\varepsilon) = \\{|f_n - f| > \\varepsilon\\}\\) where \\(f_n\\) deviates from \\(f\\) by more than \\(\\varepsilon\\). Convergence in measure says: these bad sets shrink (in measure) to nothing. It does not say anything about <em>which</em> points are in the bad set at each step. Different points can enter and leave the bad set, as the typewriter sequence demonstrates.</p>
                    </div>
                </div>

                <h2>The Subsequence Characterization</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.11 (Subsequence Principle)</div>
                    <div class="env-body">
                        <p>\\(f_n \\xrightarrow{\\mu} f\\) if and only if every subsequence \\((f_{n_k})\\) has a further subsequence \\((f_{n_{k_j}})\\) that converges to \\(f\\) almost everywhere.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 8.11</div>
                    <div class="env-body">
                        <p><strong>(\\(\\Rightarrow\\)):</strong> Assume \\(f_n \\xrightarrow{\\mu} f\\). Given any subsequence \\((f_{n_k})\\), it also converges to \\(f\\) in measure. We extract a further subsequence converging a.e. by a diagonal argument: choose \\(n_{k_1} < n_{k_2} < \\cdots\\) such that</p>
                        \\[\\mu\\big(\\{|f_{n_{k_j}} - f| > 1/j\\}\\big) < 2^{-j}.\\]
                        <p>This is possible because \\(\\mu(\\{|f_{n_k} - f| > 1/j\\}) \\to 0\\). By the Borel-Cantelli lemma (the series \\(\\sum 2^{-j}\\) converges), for a.e. \\(x\\), the event \\(|f_{n_{k_j}}(x) - f(x)| > 1/j\\) occurs for only finitely many \\(j\\). Hence \\(f_{n_{k_j}}(x) \\to f(x)\\) a.e.</p>
                        <p><strong>(\\(\\Leftarrow\\)):</strong> Suppose \\(f_n \\not\\xrightarrow{\\mu} f\\). Then there exist \\(\\varepsilon_0 > 0\\), \\(\\delta_0 > 0\\), and a subsequence \\((f_{n_k})\\) such that \\(\\mu(\\{|f_{n_k} - f| > \\varepsilon_0\\}) \\geq \\delta_0\\) for all \\(k\\). No further subsequence of \\((f_{n_k})\\) can converge to \\(f\\) a.e., because the measure of the "bad set" stays bounded away from zero. This contradicts the hypothesis.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Metrizability</h2>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 8.12 (Convergence in Measure Is Metrizable on Finite Measure Spaces)</div>
                    <div class="env-body">
                        <p>When \\(\\mu(X) < \\infty\\), convergence in measure is induced by the metric</p>
                        \\[d(f, g) = \\int_X \\frac{|f - g|}{1 + |f - g|}\\,d\\mu.\\]
                        <p>That is, \\(f_n \\xrightarrow{\\mu} f\\) if and only if \\(d(f_n, f) \\to 0\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why Metrizability Matters)</div>
                    <div class="env-body">
                        <p>A metrizable topology means that sequential convergence fully characterizes the topology. This makes convergence in measure much more tractable than a.e. convergence, which (as noted in Section 1) is generally not metrizable. In probability theory, convergence in measure for probability spaces is called <strong>convergence in probability</strong>, and the metric above (or a variant) is the Ky Fan metric.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'typewriter-sequence',
                    title: 'Typewriter Sequence',
                    description: 'Animate the sliding bump functions that converge in measure to 0 but fail to converge pointwise anywhere.',
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
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var seqIndex = 1;
                        var playing = false;
                        var animFrame = null;
                        var lastTime = 0;
                        var speed = 600; // ms per step

                        // Compute pass and position within pass from linear index n (1-based)
                        function getInterval(n) {
                            // n=1: pass 1, interval 0 (width 1)
                            // n=2,3: pass 2, intervals 0,1 (width 1/2)
                            // n=4,5,6: pass 3, intervals 0,1,2 (width 1/3)
                            var cumulative = 0;
                            var pass = 1;
                            while (cumulative + pass < n) {
                                cumulative += pass;
                                pass++;
                            }
                            var idx = n - cumulative - 1;
                            var width = 1.0 / pass;
                            return { pass: pass, idx: idx, left: idx * width, right: (idx + 1) * width, width: width };
                        }

                        VizEngine.createSlider(controls, 'Sequence index n', 1, 120, seqIndex, 1, function(v) {
                            seqIndex = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Play / Pause', function() {
                            playing = !playing;
                            if (playing) {
                                lastTime = performance.now();
                                animate();
                            }
                        });

                        VizEngine.createButton(controls, 'Reset', function() {
                            seqIndex = 1;
                            playing = false;
                            if (animFrame) cancelAnimationFrame(animFrame);
                            draw();
                        });

                        function animate() {
                            if (!playing) return;
                            var now = performance.now();
                            if (now - lastTime > speed) {
                                seqIndex++;
                                if (seqIndex > 120) seqIndex = 1;
                                lastTime = now;
                                draw();
                            }
                            animFrame = requestAnimationFrame(animate);
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { left: 60, right: 30, top: 55, bottom: 80 };
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            var info = getInterval(seqIndex);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Typewriter Sequence: f_n = 1_{[a,b]}', w / 2, 20);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('n = ' + seqIndex + '  |  Pass ' + info.pass + '  |  Interval [' +
                                info.left.toFixed(3) + ', ' + info.right.toFixed(3) + ']  |  Width = 1/' + info.pass, w / 2, 40);

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, margin.top);
                            ctx.lineTo(margin.left, margin.top + plotH);
                            ctx.lineTo(margin.left + plotW, margin.top + plotH);
                            ctx.stroke();

                            // Y-axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('1', margin.left - 8, margin.top + 4);
                            ctx.fillText('0', margin.left - 8, margin.top + plotH + 4);

                            // X-axis labels
                            ctx.textAlign = 'center';
                            for (var i = 0; i <= 10; i++) {
                                var xp = margin.left + (i / 10) * plotW;
                                ctx.fillText((i / 10).toFixed(1), xp, margin.top + plotH + 16);
                                ctx.strokeStyle = colors.grid;
                                ctx.beginPath();
                                ctx.moveTo(xp, margin.top);
                                ctx.lineTo(xp, margin.top + plotH);
                                ctx.stroke();
                            }

                            // Shade the bump
                            var x1 = margin.left + info.left * plotW;
                            var x2 = margin.left + info.right * plotW;
                            ctx.fillStyle = 'rgba(88, 166, 255, 0.25)';
                            ctx.fillRect(x1, margin.top, x2 - x1, plotH);

                            // Draw the function
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            // Left at 0
                            ctx.moveTo(margin.left, margin.top + plotH);
                            ctx.lineTo(x1, margin.top + plotH);
                            // Jump up
                            ctx.lineTo(x1, margin.top);
                            // Top
                            ctx.lineTo(x2, margin.top);
                            // Jump down
                            ctx.lineTo(x2, margin.top + plotH);
                            // Right at 0
                            ctx.lineTo(margin.left + plotW, margin.top + plotH);
                            ctx.stroke();

                            // Show measure of support
                            var measureText = 'mu({f_n != 0}) = 1/' + info.pass + ' = ' + (1 / info.pass).toFixed(4);
                            ctx.fillStyle = colors.teal;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(measureText, w / 2, h - 50);

                            // Show convergence status
                            ctx.fillStyle = colors.orange;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('Converges in measure to 0 (support shrinks)', w / 2, h - 32);
                            ctx.fillStyle = colors.red;
                            ctx.fillText('Does NOT converge pointwise anywhere (bump revisits every x)', w / 2, h - 14);
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
            exercises: []
        },

        // ============================================================
        // Section 4: L^p Convergence
        // ============================================================
        {
            id: 'lp-convergence',
            title: 'L^p Convergence',
            content: `
                <div class="bridge section-bridge">
                    <p>We now introduce a mode of convergence that carries quantitative information: not just "do the functions approach each other?" but "how fast does the <em>integrated</em> difference shrink?" This is \\(L^p\\) convergence, and it is the workhorse of functional analysis and PDE theory.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define \\(L^p\\) convergence. Prove that \\(L^p\\) convergence implies convergence in measure (for finite \\(p\\)), and show by example that it does not imply pointwise convergence.</p>
                </div>

                <h2>A Motivating Example</h2>

                <div class="env-block example">
                    <div class="env-title">Example 8.13 (Tall Thin Spikes)</div>
                    <div class="env-body">
                        <p>On \\([0,1]\\), let \\(f_n = n \\cdot \\mathbf{1}_{(0, 1/n^2)}\\). Then:</p>
                        <ul>
                            <li>\\(f_n \\to 0\\) pointwise (and a.e.) since for any \\(x > 0\\), eventually \\(x \\notin (0, 1/n^2)\\).</li>
                            <li>\\(\\|f_n\\|_1 = n \\cdot 1/n^2 = 1/n \\to 0\\), so \\(f_n \\to 0\\) in \\(L^1\\).</li>
                            <li>\\(\\|f_n\\|_2^2 = n^2 \\cdot 1/n^2 = 1\\), so \\(f_n \\not\\to 0\\) in \\(L^2\\).</li>
                        </ul>
                        <p>Whether a sequence converges in \\(L^p\\) depends on \\(p\\). Higher \\(p\\) is more sensitive to large pointwise values.</p>
                    </div>
                </div>

                <h2>Formal Definition</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.14 (\\(L^p\\) Convergence)</div>
                    <div class="env-body">
                        <p>For \\(1 \\leq p < \\infty\\), we say \\(f_n \\to f\\) in \\(L^p\\) if</p>
                        \\[\\|f_n - f\\|_p = \\left(\\int_X |f_n - f|^p\\,d\\mu\\right)^{1/p} \\to 0.\\]
                        <p>For \\(p = \\infty\\), we say \\(f_n \\to f\\) in \\(L^\\infty\\) if \\(\\|f_n - f\\|_\\infty = \\operatorname{ess\\,sup} |f_n - f| \\to 0\\). Note that \\(L^\\infty\\) convergence is the same as uniform convergence a.e.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.15 (\\(L^p\\) Convergence Implies Convergence in Measure)</div>
                    <div class="env-body">
                        <p>If \\(1 \\leq p < \\infty\\) and \\(f_n \\to f\\) in \\(L^p\\), then \\(f_n \\xrightarrow{\\mu} f\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Markov/Chebyshev Argument)</div>
                    <div class="env-body">
                        <p>Fix \\(\\varepsilon > 0\\). By Markov's inequality,</p>
                        \\[\\mu\\big(\\{|f_n - f| > \\varepsilon\\}\\big) = \\mu\\big(\\{|f_n - f|^p > \\varepsilon^p\\}\\big) \\leq \\frac{1}{\\varepsilon^p} \\int |f_n - f|^p\\,d\\mu = \\frac{\\|f_n - f\\|_p^p}{\\varepsilon^p} \\to 0.\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (The Converse Fails)</div>
                    <div class="env-body">
                        <p>Convergence in measure does not imply \\(L^p\\) convergence. Consider \\(f_n = n \\cdot \\mathbf{1}_{(0,1/n)}\\) on \\([0,1]\\). Then \\(\\mu(\\{f_n > \\varepsilon\\}) \\leq 1/n \\to 0\\), so \\(f_n \\to 0\\) in measure. But \\(\\|f_n\\|_1 = 1\\) for all \\(n\\), so \\(f_n \\not\\to 0\\) in \\(L^1\\). The "tall thin spike" escapes \\(L^p\\) control.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (\\(L^p\\) Does Not Imply Pointwise)</div>
                    <div class="env-body">
                        <p>The typewriter sequence (Example 8.9) can be arranged so that \\(f_n \\to 0\\) in \\(L^p\\) for all \\(p\\) (since the support has measure \\(\\to 0\\) and the functions are bounded by 1). Yet \\(f_n(x) \\not\\to 0\\) for any \\(x\\). So \\(L^p\\) convergence does not imply pointwise convergence.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 8.16 (\\(L^p\\) Hierarchy)</div>
                    <div class="env-body">
                        <p>On a finite measure space (\\(\\mu(X) < \\infty\\)), if \\(1 \\leq p \\leq q \\leq \\infty\\), then \\(L^q\\) convergence implies \\(L^p\\) convergence. In symbols: \\(f_n \\to f\\) in \\(L^q \\Rightarrow f_n \\to f\\) in \\(L^p\\).</p>
                        <p>On infinite measure spaces, this inclusion can fail.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>By H&ouml;lder's inequality with exponent \\(q/p \\geq 1\\):</p>
                        \\[\\int |f_n - f|^p\\,d\\mu \\leq \\left(\\int |f_n - f|^q\\,d\\mu\\right)^{p/q} \\cdot \\mu(X)^{1 - p/q}.\\]
                        <p>Since \\(\\mu(X) < \\infty\\), the right side tends to zero.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>
            `,
            exercises: []
        },

        // ============================================================
        // Section 5: Egorov's Theorem
        // ============================================================
        {
            id: 'egorov-theorem',
            title: "Egorov's Theorem",
            content: `
                <div class="bridge section-bridge">
                    <p>We now establish a beautiful bridge between a.e. convergence and almost-uniform convergence. Egorov's theorem says that on finite measure spaces, these two notions are almost the same: a.e. convergence automatically upgrades to almost-uniform convergence. This is a deep structural result about the interaction between convergence and measure.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove Egorov's theorem. Understand its hypothesis (finite measure), demonstrate it interactively, and show why it fails on infinite measure spaces.</p>
                </div>

                <h2>Statement and Proof</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.17 (Egorov's Theorem, 1911)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A}, \\mu)\\) be a <strong>finite</strong> measure space (\\(\\mu(X) < \\infty\\)), and let \\(f_n, f: X \\to \\mathbb{R}\\) be measurable with \\(f_n \\to f\\) a.e. Then for every \\(\\delta > 0\\), there exists a measurable set \\(E\\) with \\(\\mu(E) < \\delta\\) such that \\(f_n \\to f\\) <strong>uniformly</strong> on \\(X \\setminus E\\).</p>
                        <p>In other words, a.e. convergence implies almost-uniform convergence on finite measure spaces.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 8.17</div>
                    <div class="env-body">
                        <p>Without loss of generality, assume \\(f_n \\to f\\) pointwise everywhere (remove the null set where convergence fails and work on the remainder, which has the same finite measure up to zero).</p>
                        <p>For each \\(m \\geq 1\\) and \\(n \\geq 1\\), define</p>
                        \\[E_n^{(m)} = \\bigcup_{k=n}^{\\infty} \\left\\{x : |f_k(x) - f(x)| > \\frac{1}{m}\\right\\}.\\]
                        <p><strong>Key observations:</strong></p>
                        <ul>
                            <li>For fixed \\(m\\), the sets \\(E_n^{(m)}\\) decrease as \\(n\\) increases: \\(E_1^{(m)} \\supseteq E_2^{(m)} \\supseteq \\cdots\\)</li>
                            <li>Since \\(f_n \\to f\\) everywhere, \\(\\bigcap_{n=1}^{\\infty} E_n^{(m)} = \\varnothing\\). (For each \\(x\\), there exists \\(N\\) such that \\(|f_k(x) - f(x)| \\leq 1/m\\) for all \\(k \\geq N\\), so \\(x \\notin E_N^{(m)}\\).)</li>
                            <li>Since \\(\\mu(X) < \\infty\\) and \\(E_n^{(m)} \\downarrow \\varnothing\\), continuity of measure from above gives \\(\\mu(E_n^{(m)}) \\to 0\\).</li>
                        </ul>
                        <p>Now fix \\(\\delta > 0\\). For each \\(m \\geq 1\\), choose \\(n_m\\) so that \\(\\mu(E_{n_m}^{(m)}) < \\delta / 2^m\\). Define</p>
                        \\[E = \\bigcup_{m=1}^{\\infty} E_{n_m}^{(m)}.\\]
                        <p>Then \\(\\mu(E) \\leq \\sum_{m=1}^{\\infty} \\delta / 2^m = \\delta\\).</p>
                        <p><strong>Uniform convergence on \\(X \\setminus E\\):</strong> Fix \\(\\varepsilon > 0\\) and choose \\(m\\) so that \\(1/m < \\varepsilon\\). For any \\(x \\in X \\setminus E\\), we have \\(x \\notin E_{n_m}^{(m)}\\), which means \\(|f_k(x) - f(x)| \\leq 1/m < \\varepsilon\\) for all \\(k \\geq n_m\\). The index \\(n_m\\) depends only on \\(\\varepsilon\\) (through \\(m\\)), not on \\(x\\). This is precisely uniform convergence on \\(X \\setminus E\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="viz-placeholder" data-viz="egorov-demo"></div>

                <h2>Failure on Infinite Measure Spaces</h2>

                <div class="env-block example">
                    <div class="env-title">Example 8.18 (Egorov Fails on \\(\\mathbb{R}\\))</div>
                    <div class="env-body">
                        <p>On \\((\\mathbb{R}, \\mathcal{B}, \\lambda)\\) with Lebesgue measure, let \\(f_n = \\mathbf{1}_{[n, \\infty)}\\). Then \\(f_n(x) \\to 0\\) for every \\(x \\in \\mathbb{R}\\) (pointwise everywhere, hence a.e.).</p>
                        <p>But \\(f_n \\not\\to 0\\) almost uniformly. To see this, suppose we could find \\(E\\) with \\(\\lambda(E) < 1\\) such that \\(f_n \\to 0\\) uniformly on \\(\\mathbb{R} \\setminus E\\). Then for large enough \\(N\\), \\(|f_n(x)| < 1/2\\) for all \\(n \\geq N\\) and all \\(x \\notin E\\). But \\(\\mathbb{R} \\setminus E\\) is unbounded (its complement has finite measure), so it contains points \\(x > N\\), and \\(f_N(x) = 1 > 1/2\\) for such points. Contradiction.</p>
                        <p>The key issue is that continuity of measure from above (\\(\\mu(E_n) \\to 0\\) when \\(E_n \\downarrow \\varnothing\\)) requires \\(\\mu(E_1) < \\infty\\), which is guaranteed only on finite measure spaces.</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 8.19 (a.e. Convergence Implies Convergence in Measure on Finite Spaces)</div>
                    <div class="env-body">
                        <p>On a finite measure space, if \\(f_n \\to f\\) a.e., then \\(f_n \\xrightarrow{\\mu} f\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By Egorov, \\(f_n \\to f\\) almost uniformly. Almost-uniform convergence implies convergence in measure: given \\(\\varepsilon, \\delta > 0\\), choose \\(E\\) with \\(\\mu(E) < \\delta\\) so that \\(f_n \\to f\\) uniformly on \\(X \\setminus E\\). For large \\(n\\), \\(|f_n - f| \\leq \\varepsilon\\) on \\(X \\setminus E\\), so \\(\\{|f_n - f| > \\varepsilon\\} \\subseteq E\\), giving \\(\\mu(\\{|f_n - f| > \\varepsilon\\}) \\leq \\mu(E) < \\delta\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>
            `,
            visualizations: [
                {
                    id: 'egorov-demo',
                    title: "Egorov's Theorem Demo",
                    description: 'On [0,1], show a.e. convergence of f_n(x) = x^n. User picks delta; the visualization removes a set of measure < delta near x=1 and demonstrates uniform convergence on the remainder.',
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

                        var delta = 0.1;
                        var nMax = 10;
                        var showEgorovSet = true;

                        VizEngine.createSlider(controls, 'delta (remove set of measure < delta)', 0.01, 0.5, delta, 0.01, function(v) {
                            delta = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n (number of curves)', 1, 40, nMax, 1, function(v) {
                            nMax = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Toggle Egorov set', function() {
                            showEgorovSet = !showEgorovSet;
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { left: 55, right: 30, top: 55, bottom: 70 };
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            // The removed set is [1-delta, 1]
                            var cutoff = 1 - delta;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText("Egorov's Theorem: f_n(x) = x^n on [0,1]", w / 2, 20);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('Remove E = [' + cutoff.toFixed(3) + ', 1], mu(E) = ' + delta.toFixed(3) +
                                '. Uniform convergence on [0, ' + cutoff.toFixed(3) + '].', w / 2, 40);

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, margin.top);
                            ctx.lineTo(margin.left, margin.top + plotH);
                            ctx.lineTo(margin.left + plotW, margin.top + plotH);
                            ctx.stroke();

                            // Grid and labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'right';
                            for (var yy = 0; yy <= 4; yy++) {
                                var yVal = yy / 4;
                                var yPx = margin.top + plotH * (1 - yVal);
                                ctx.fillText(yVal.toFixed(2), margin.left - 6, yPx + 3);
                                ctx.strokeStyle = colors.grid;
                                ctx.beginPath();
                                ctx.moveTo(margin.left, yPx);
                                ctx.lineTo(margin.left + plotW, yPx);
                                ctx.stroke();
                            }
                            ctx.textAlign = 'center';
                            for (var xx = 0; xx <= 10; xx++) {
                                var xVal = xx / 10;
                                var xPx = margin.left + plotW * xVal;
                                ctx.fillText(xVal.toFixed(1), xPx, margin.top + plotH + 14);
                            }

                            // Shade the removed set (Egorov exceptional set)
                            if (showEgorovSet) {
                                var exStart = margin.left + cutoff * plotW;
                                ctx.fillStyle = 'rgba(248, 81, 73, 0.15)';
                                ctx.fillRect(exStart, margin.top, plotW * delta, plotH);
                                ctx.fillStyle = colors.red;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('E (removed)', exStart + plotW * delta / 2, margin.top + plotH - 10);
                            }

                            // Shade the "safe" region
                            if (showEgorovSet) {
                                ctx.fillStyle = 'rgba(63, 185, 160, 0.07)';
                                ctx.fillRect(margin.left, margin.top, cutoff * plotW, plotH);
                            }

                            // Draw curves f_n(x) = x^n
                            for (var n = 1; n <= nMax; n++) {
                                var alpha = Math.max(0.15, 0.8 - (n - 1) * 0.03);
                                ctx.strokeStyle = n === nMax ? colors.blue : 'rgba(88, 166, 255, ' + alpha + ')';
                                ctx.lineWidth = n === nMax ? 2.5 : 1;
                                ctx.beginPath();
                                for (var px = 0; px <= plotW; px++) {
                                    var x = px / plotW;
                                    var y = Math.pow(x, n);
                                    var xP = margin.left + px;
                                    var yP = margin.top + plotH * (1 - y);
                                    if (px === 0) ctx.moveTo(xP, yP);
                                    else ctx.lineTo(xP, yP);
                                }
                                ctx.stroke();
                            }

                            // Show sup on safe region
                            var supVal = Math.pow(cutoff, nMax);
                            ctx.fillStyle = colors.green;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('sup_{x in [0,' + cutoff.toFixed(2) + ']} |f_' + nMax + '(x)| = ' +
                                cutoff.toFixed(2) + '^' + nMax + ' = ' + supVal.toFixed(6), w / 2, h - 42);

                            // Show how many terms needed for uniform epsilon
                            var eps = 0.01;
                            var nNeeded = Math.ceil(Math.log(eps) / Math.log(cutoff));
                            ctx.fillStyle = colors.teal;
                            ctx.fillText('For uniform convergence to eps=0.01 on [0,' + cutoff.toFixed(2) +
                                ']: need n >= ' + nNeeded, w / 2, h - 22);

                            // Annotation for latest curve
                            ctx.fillStyle = colors.blue;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('n = ' + nMax, margin.left + plotW * 0.7, margin.top + plotH * (1 - Math.pow(0.7, nMax)) - 8);
                        }

                        draw();
                    }
                }
            ],
            exercises: []
        },

        // ============================================================
        // Section 6: The Implication Diagram
        // ============================================================
        {
            id: 'implication-diagram',
            title: 'The Implication Diagram',
            content: `
                <div class="bridge section-bridge">
                    <p>We have now met five modes of convergence. It is time to assemble the complete map of implications, stating precisely which modes imply which, under what hypotheses, and providing counterexamples for every non-implication.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Present the complete implication diagram. Summarize all proven implications and list the standard counterexamples for all arrows that do not hold.</p>
                </div>

                <h2>The Five Modes</h2>

                <p>We consider the following modes of convergence for a sequence \\(f_n \\to f\\) on a measure space \\((X, \\mathcal{A}, \\mu)\\):</p>
                <ol>
                    <li><strong>Uniform convergence</strong>: \\(\\sup_x |f_n(x) - f(x)| \\to 0\\).</li>
                    <li><strong>Almost-uniform convergence</strong>: for all \\(\\delta > 0\\), uniform on \\(X \\setminus E\\) with \\(\\mu(E) < \\delta\\).</li>
                    <li><strong>Pointwise (everywhere) convergence</strong>: \\(f_n(x) \\to f(x)\\) for all \\(x\\).</li>
                    <li><strong>Almost-everywhere convergence</strong>: \\(f_n(x) \\to f(x)\\) except on a null set.</li>
                    <li><strong>\\(L^p\\) convergence</strong> (\\(1 \\leq p < \\infty\\)): \\(\\|f_n - f\\|_p \\to 0\\).</li>
                    <li><strong>Convergence in measure</strong>: \\(\\mu(\\{|f_n - f| > \\varepsilon\\}) \\to 0\\) for all \\(\\varepsilon > 0\\).</li>
                </ol>

                <h2>Complete Implication Map</h2>

                <div class="viz-placeholder" data-viz="convergence-mode-explorer"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.20 (The Implication Diagram)</div>
                    <div class="env-body">
                        <p>The following implications hold in general:</p>
                        <ul>
                            <li>Uniform \\(\\Rightarrow\\) Almost-uniform \\(\\Rightarrow\\) a.e. convergence</li>
                            <li>Uniform \\(\\Rightarrow\\) Pointwise \\(\\Rightarrow\\) a.e. convergence</li>
                            <li>\\(L^p\\) convergence \\(\\Rightarrow\\) Convergence in measure (Theorem 8.15)</li>
                            <li>Almost-uniform \\(\\Rightarrow\\) Convergence in measure</li>
                        </ul>
                        <p>Under additional hypotheses:</p>
                        <ul>
                            <li>a.e. convergence \\(\\Rightarrow\\) Almost-uniform convergence <strong>(Egorov; requires \\(\\mu(X) < \\infty\\))</strong></li>
                            <li>a.e. convergence \\(\\Rightarrow\\) Convergence in measure <strong>(requires \\(\\mu(X) < \\infty\\))</strong></li>
                            <li>Convergence in measure \\(\\Rightarrow\\) a.e. convergence of a <strong>subsequence</strong> (Theorem 8.11)</li>
                            <li>a.e. convergence + domination \\(\\Rightarrow\\) \\(L^p\\) convergence <strong>(DCT)</strong></li>
                            <li>\\(L^\\infty\\) convergence \\(\\Leftrightarrow\\) uniform convergence a.e.</li>
                        </ul>
                    </div>
                </div>

                <h2>Standard Counterexamples</h2>

                <div class="env-block example">
                    <div class="env-title">Example 8.21 (Counterexample Catalog)</div>
                    <div class="env-body">
                        <p>Each non-implication has a canonical counterexample:</p>
                        <table style="width:100%; border-collapse:collapse; margin-top:8px;">
                            <tr style="border-bottom:1px solid #333;">
                                <th style="text-align:left;padding:4px;color:#c9d1d9;">Non-implication</th>
                                <th style="text-align:left;padding:4px;color:#c9d1d9;">Counterexample</th>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">a.e. \\(\\not\\Rightarrow\\) uniform</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(f_n(x) = x^n\\) on \\([0,1]\\)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">a.e. \\(\\not\\Rightarrow\\) \\(L^p\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(f_n = n \\cdot \\mathbf{1}_{(0,1/n)}\\) (converges a.e. to 0, \\(\\|f_n\\|_1 = 1\\))</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">\\(L^p \\not\\Rightarrow\\) a.e.</td>
                                <td style="padding:4px;color:#c9d1d9;">Typewriter sequence (converges in \\(L^p\\) to 0, no pointwise limit)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">In measure \\(\\not\\Rightarrow\\) a.e.</td>
                                <td style="padding:4px;color:#c9d1d9;">Typewriter sequence (converges in measure, not a.e.)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">In measure \\(\\not\\Rightarrow\\) \\(L^p\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(f_n = n \\cdot \\mathbf{1}_{(0,1/n)}\\) (in measure to 0, \\(\\|f_n\\|_1 = 1\\))</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">a.e. \\(\\not\\Rightarrow\\) in measure (infinite space)</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(f_n = \\mathbf{1}_{[n,n+1]}\\) on \\(\\mathbb{R}\\) (a.e. to 0, \\(\\mu(\\{f_n > 0\\}) = 1\\))</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="convergence-race"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Probability Theory Translations)</div>
                    <div class="env-body">
                        <p>In probability (where \\(\\mu\\) is a probability measure, so \\(\\mu(X) = 1\\)), the modes have traditional names:</p>
                        <ul>
                            <li>a.e. convergence = <strong>almost sure convergence</strong></li>
                            <li>Convergence in measure = <strong>convergence in probability</strong></li>
                            <li>\\(L^p\\) convergence = <strong>convergence in \\(p\\)-th mean</strong></li>
                        </ul>
                        <p>Since probability spaces are finite measure spaces, Egorov's theorem applies, and a.s. convergence implies convergence in probability. The subsequence principle (Theorem 8.11) is used constantly: convergence in probability implies a.s. convergence along a subsequence.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.4; Royden-Fitzpatrick Ch. 5; Stein-Shakarchi III.2; Rudin RCA 3.8-3.14; Bogachev II.4.2-4.4.</p>
            `,
            visualizations: [
                {
                    id: 'convergence-mode-explorer',
                    title: 'Convergence Mode Explorer',
                    description: 'Interactive implication diagram with nodes for each mode and directed edges. Click an edge to see the proof sketch or counterexample.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 480;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var w = canvas.width, h = canvas.height;

                        // Node positions (centered layout)
                        var nodes = [
                            { id: 'uniform', label: 'Uniform', x: w * 0.5, y: 40, col: colors.purple },
                            { id: 'almostuniform', label: 'Almost-Uniform', x: w * 0.25, y: 140, col: colors.teal },
                            { id: 'pointwise', label: 'Pointwise', x: w * 0.75, y: 140, col: colors.blue },
                            { id: 'ae', label: 'a.e.', x: w * 0.4, y: 240, col: colors.green },
                            { id: 'lp', label: 'L^p', x: w * 0.78, y: 290, col: colors.orange },
                            { id: 'inmeasure', label: 'In Measure', x: w * 0.55, y: 370, col: colors.yellow }
                        ];

                        // Edges: from, to, label, type ('always', 'conditional', 'subseq')
                        var edges = [
                            { from: 0, to: 1, label: 'always', type: 'always' },
                            { from: 0, to: 2, label: 'always', type: 'always' },
                            { from: 1, to: 3, label: 'always', type: 'always' },
                            { from: 2, to: 3, label: 'always', type: 'always' },
                            { from: 1, to: 5, label: 'always', type: 'always' },
                            { from: 4, to: 5, label: 'Markov ineq.', type: 'always' },
                            { from: 3, to: 1, label: 'Egorov (mu<inf)', type: 'conditional' },
                            { from: 3, to: 5, label: 'mu(X)<inf', type: 'conditional' },
                            { from: 5, to: 3, label: 'subsequence only', type: 'subseq' }
                        ];

                        var selectedEdge = -1;

                        var edgeInfo = [
                            'Uniform => Almost-uniform: Take E = empty set for any delta.',
                            'Uniform => Pointwise: If sup|f_n-f|->0, then |f_n(x)-f(x)|->0 for each x.',
                            'Almost-uniform => a.e.: Intersect exceptional sets E_k (mu<1/k); get null set.',
                            'Pointwise => a.e.: Take N = empty set.',
                            'Almost-uniform => In measure: On X\\E, |f_n-f|<eps for large n; bad set is in E.',
                            'L^p => In measure: Markov inequality gives mu({|f_n-f|>eps}) <= ||f_n-f||_p^p / eps^p.',
                            "Egorov's thm: a.e. => almost-uniform when mu(X)<inf. Fails on R: f_n=1_{[n,inf)}.",
                            'a.e. => In measure: On finite spaces, combine Egorov + almost-uniform => in measure.',
                            'In measure => a.e. of SUBSEQUENCE: Borel-Cantelli extracts a.e.-convergent subsequence.'
                        ];

                        function nodeAt(mx, my) {
                            for (var i = 0; i < nodes.length; i++) {
                                var dx = mx - nodes[i].x, dy = my - nodes[i].y;
                                if (dx * dx + dy * dy < 900) return i;
                            }
                            return -1;
                        }

                        function edgeNear(mx, my) {
                            var best = -1, bestDist = 25;
                            for (var i = 0; i < edges.length; i++) {
                                var e = edges[i];
                                var x1 = nodes[e.from].x, y1 = nodes[e.from].y;
                                var x2 = nodes[e.to].x, y2 = nodes[e.to].y;
                                // midpoint proximity
                                var midx = (x1 + x2) / 2, midy = (y1 + y2) / 2;
                                var dist = Math.sqrt((mx - midx) * (mx - midx) + (my - midy) * (my - midy));
                                if (dist < bestDist) {
                                    bestDist = dist;
                                    best = i;
                                }
                            }
                            return best;
                        }

                        canvas.addEventListener('click', function(evt) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = evt.clientX - rect.left;
                            var my = evt.clientY - rect.top;
                            selectedEdge = edgeNear(mx, my);
                            draw();
                        });

                        function drawArrow(x1, y1, x2, y2, color, dashed) {
                            // shorten arrow by node radius
                            var dx = x2 - x1, dy = y2 - y1;
                            var len = Math.sqrt(dx * dx + dy * dy);
                            var ux = dx / len, uy = dy / len;
                            var sx = x1 + ux * 22, sy = y1 + uy * 22;
                            var ex = x2 - ux * 22, ey = y2 - uy * 22;

                            ctx.strokeStyle = color;
                            ctx.lineWidth = 2;
                            if (dashed) ctx.setLineDash([6, 4]);
                            else ctx.setLineDash([]);
                            ctx.beginPath();
                            ctx.moveTo(sx, sy);
                            ctx.lineTo(ex, ey);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // arrowhead
                            var angle = Math.atan2(ey - sy, ex - sx);
                            ctx.fillStyle = color;
                            ctx.beginPath();
                            ctx.moveTo(ex, ey);
                            ctx.lineTo(ex - 10 * Math.cos(angle - 0.3), ey - 10 * Math.sin(angle - 0.3));
                            ctx.lineTo(ex - 10 * Math.cos(angle + 0.3), ey - 10 * Math.sin(angle + 0.3));
                            ctx.closePath();
                            ctx.fill();
                        }

                        function draw() {
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Click an arrow to see the proof/counterexample', w / 2, h - 65);

                            // Draw edges
                            for (var i = 0; i < edges.length; i++) {
                                var e = edges[i];
                                var col = e.type === 'always' ? colors.green :
                                          e.type === 'conditional' ? colors.orange : colors.purple;
                                if (i === selectedEdge) col = colors.blue;
                                var dashed = e.type !== 'always';
                                drawArrow(nodes[e.from].x, nodes[e.from].y,
                                          nodes[e.to].x, nodes[e.to].y, col, dashed);

                                // Edge label
                                var midx = (nodes[e.from].x + nodes[e.to].x) / 2;
                                var midy = (nodes[e.from].y + nodes[e.to].y) / 2;
                                ctx.fillStyle = i === selectedEdge ? colors.text : colors.muted;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(e.label, midx + 5, midy - 5);
                            }

                            // Draw nodes
                            for (var i = 0; i < nodes.length; i++) {
                                var nd = nodes[i];
                                ctx.fillStyle = nd.col;
                                ctx.globalAlpha = 0.2;
                                ctx.beginPath();
                                ctx.arc(nd.x, nd.y, 20, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.globalAlpha = 1;
                                ctx.strokeStyle = nd.col;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.arc(nd.x, nd.y, 20, 0, 2 * Math.PI);
                                ctx.stroke();
                                ctx.fillStyle = colors.text;
                                ctx.font = 'bold 11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(nd.label, nd.x, nd.y + 4);
                            }

                            // Legend
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = colors.green;
                            ctx.fillText('--- Always holds', 12, h - 40);
                            ctx.fillStyle = colors.orange;
                            ctx.fillText('- - Conditional (finite measure)', 12, h - 25);
                            ctx.fillStyle = colors.purple;
                            ctx.fillText('- - Subsequence only', 12, h - 10);

                            // Info panel
                            if (selectedEdge >= 0 && selectedEdge < edgeInfo.length) {
                                ctx.fillStyle = 'rgba(20, 20, 50, 0.9)';
                                ctx.fillRect(w * 0.1, h - 100, w * 0.8, 28);
                                ctx.fillStyle = colors.text;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(edgeInfo[selectedEdge], w / 2, h - 82);
                            }
                        }

                        draw();
                    }
                },
                {
                    id: 'convergence-race',
                    title: 'Convergence Race',
                    description: 'Given a sequence, simultaneously track all modes of convergence with real-time indicators.',
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
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var seqChoice = 0;
                        var nVal = 10;

                        var sequences = [
                            {
                                name: 'Typewriter (sliding bumps)',
                                // returns {left, right} of support on [0,1]
                                support: function(n) {
                                    var cum = 0; var pass = 1;
                                    while (cum + pass < n) { cum += pass; pass++; }
                                    var idx = n - cum - 1;
                                    var width = 1.0 / pass;
                                    return { left: idx * width, right: (idx + 1) * width, pass: pass };
                                },
                                fn: function(x, n) {
                                    var s = this.support(n);
                                    return (x >= s.left && x <= s.right) ? 1 : 0;
                                },
                                modes: function(n) {
                                    var s = this.support(n);
                                    var w = s.right - s.left;
                                    return {
                                        supNorm: 1,
                                        muBadSet: w,
                                        lpNorm: Math.pow(w, 1), // L^1 norm
                                        aeStatus: 'No (revisits every x)',
                                        uniformStatus: 'No (sup = 1 always)'
                                    };
                                }
                            },
                            {
                                name: 'Tall thin spikes: f_n = n * 1_{(0,1/n)}',
                                fn: function(x, n) {
                                    return (x > 0 && x < 1.0 / n) ? n : 0;
                                },
                                modes: function(n) {
                                    return {
                                        supNorm: n,
                                        muBadSet: 1.0 / n,
                                        lpNorm: 1, // L^1 norm = 1
                                        aeStatus: 'Yes (to 0)',
                                        uniformStatus: 'No (sup = n -> inf)'
                                    };
                                }
                            },
                            {
                                name: 'Gentle decay: f_n = x^n on [0,1]',
                                fn: function(x, n) {
                                    return Math.pow(x, n);
                                },
                                modes: function(n) {
                                    // L^1 norm of x^n on [0,1] = 1/(n+1)
                                    // mu({x^n > eps}) = mu({x > eps^(1/n)}) = 1 - eps^(1/n)
                                    var eps = 0.1;
                                    return {
                                        supNorm: 1,
                                        muBadSet: 1 - Math.pow(eps, 1.0 / n),
                                        lpNorm: 1.0 / (n + 1),
                                        aeStatus: 'Yes (to 0 on [0,1))',
                                        uniformStatus: 'No (f_n(1)=1 always)'
                                    };
                                }
                            },
                            {
                                name: 'Good convergence: f_n = (1/n)*sin(nx)',
                                fn: function(x, n) {
                                    return Math.sin(n * x * Math.PI) / n;
                                },
                                modes: function(n) {
                                    return {
                                        supNorm: 1.0 / n,
                                        muBadSet: 0,
                                        lpNorm: 1.0 / (n * Math.sqrt(2)),
                                        aeStatus: 'Yes (uniform!)',
                                        uniformStatus: 'Yes (sup = 1/n -> 0)'
                                    };
                                }
                            }
                        ];

                        VizEngine.createSlider(controls, 'n', 1, 60, nVal, 1, function(v) {
                            nVal = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Typewriter', function() { seqChoice = 0; draw(); });
                        VizEngine.createButton(controls, 'Tall spikes', function() { seqChoice = 1; draw(); });
                        VizEngine.createButton(controls, 'x^n', function() { seqChoice = 2; draw(); });
                        VizEngine.createButton(controls, '(1/n)sin(nx)', function() { seqChoice = 3; draw(); });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var seq = sequences[seqChoice];
                            var m = seq.modes(nVal);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Convergence Race: ' + seq.name, w / 2, 22);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('n = ' + nVal, w / 2, 40);

                            // Plot the function
                            var margin = { left: 55, right: 20, top: 55, bottom: 200 };
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, margin.top);
                            ctx.lineTo(margin.left, margin.top + plotH);
                            ctx.lineTo(margin.left + plotW, margin.top + plotH);
                            ctx.stroke();

                            // Determine y range
                            var yMax = 1.2;
                            if (seqChoice === 1) yMax = Math.min(nVal + 1, 30);
                            if (seqChoice === 3) yMax = 1.2;

                            // Plot function
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            var started = false;
                            for (var px = 0; px <= plotW; px++) {
                                var x = px / plotW;
                                var y = seq.fn(x, nVal);
                                var yP = margin.top + plotH * (1 - y / yMax);
                                yP = Math.max(margin.top, Math.min(margin.top + plotH, yP));
                                if (!started) { ctx.moveTo(margin.left + px, yP); started = true; }
                                else ctx.lineTo(margin.left + px, yP);
                            }
                            ctx.stroke();

                            // Zero line
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 1;
                            var zeroY = margin.top + plotH;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, zeroY);
                            ctx.lineTo(margin.left + plotW, zeroY);
                            ctx.stroke();

                            // Y-axis label
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('0', margin.left - 5, margin.top + plotH + 3);
                            ctx.fillText(yMax.toFixed(1), margin.left - 5, margin.top + 10);

                            // Convergence dashboard
                            var dashY = h - 185;
                            var dashH = 175;
                            ctx.fillStyle = 'rgba(20, 20, 50, 0.5)';
                            ctx.fillRect(10, dashY, w - 20, dashH);

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Convergence Dashboard', 20, dashY + 18);

                            var metrics = [
                                { label: 'Uniform (sup norm)', value: m.supNorm.toFixed(4), converges: m.supNorm < 0.01 },
                                { label: 'a.e. convergence', value: m.aeStatus, converges: m.aeStatus.indexOf('Yes') === 0 },
                                { label: 'In measure: mu({|f_n|>0.1})', value: m.muBadSet.toFixed(4), converges: m.muBadSet < 0.01 },
                                { label: 'L^1 norm', value: m.lpNorm.toFixed(4), converges: m.lpNorm < 0.01 }
                            ];

                            for (var i = 0; i < metrics.length; i++) {
                                var my = dashY + 38 + i * 32;
                                // Status indicator
                                ctx.fillStyle = metrics[i].converges ? colors.green : colors.red;
                                ctx.beginPath();
                                ctx.arc(30, my, 5, 0, 2 * Math.PI);
                                ctx.fill();

                                ctx.fillStyle = colors.text;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.fillText(metrics[i].label + ':', 45, my + 4);

                                ctx.fillStyle = metrics[i].converges ? colors.green : colors.orange;
                                ctx.fillText(metrics[i].value, 250, my + 4);

                                // Bar indicator
                                var barX = 380, barW = w - 410, barH = 8;
                                ctx.fillStyle = colors.grid;
                                ctx.fillRect(barX, my - 4, barW, barH);
                                var numVal = parseFloat(metrics[i].value);
                                if (!isNaN(numVal)) {
                                    var frac = Math.min(1, numVal / (seqChoice === 1 && i === 0 ? 60 : 2));
                                    ctx.fillStyle = metrics[i].converges ? colors.green : colors.red;
                                    ctx.fillRect(barX, my - 4, frac * barW, barH);
                                }
                            }

                            // Summary
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Green = converged (value < 0.01). Red = not converged. Increase n to watch convergence.', w / 2, dashY + dashH - 8);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                // ============================================================
                // 17 Exercises (40% computational, 40% proof, 20% exploration)
                // ============================================================

                // --- COMPUTATIONAL (7 exercises) ---
                {
                    question: '<strong>[Computational, 1 star]</strong> Let \\(f_n(x) = \\frac{x}{1 + nx^2}\\) on \\([0,1]\\). Show that \\(f_n \\to 0\\) uniformly.',
                    hint: 'Find the maximum of \\(f_n\\) by differentiation: the maximum occurs at \\(x = 1/\\sqrt{n}\\).',
                    solution: 'Differentiate: \\(f_n\'(x) = \\frac{1 - nx^2}{(1+nx^2)^2}\\), which vanishes at \\(x = 1/\\sqrt{n}\\). The maximum value is \\(f_n(1/\\sqrt{n}) = \\frac{1/\\sqrt{n}}{1+1} = \\frac{1}{2\\sqrt{n}}\\). Therefore \\(\\sup_{x \\in [0,1]} |f_n(x)| = \\frac{1}{2\\sqrt{n}} \\to 0\\), confirming uniform convergence.'
                },
                {
                    question: '<strong>[Computational, 2 stars]</strong> For the typewriter sequence (Example 8.9), compute \\(\\|f_n\\|_p^p\\) as a function of \\(n\\) for \\(1 \\leq p < \\infty\\). Confirm that \\(f_n \\to 0\\) in every \\(L^p\\).',
                    hint: 'Each \\(f_n\\) is the indicator of an interval of width \\(1/\\text{pass}\\). What pass does index \\(n\\) belong to?',
                    solution: 'At index \\(n\\), the typewriter sequence belongs to pass \\(k\\) where \\(k(k-1)/2 < n \\leq k(k+1)/2\\), and the support has width \\(1/k\\). Since \\(f_n = \\mathbf{1}_{\\text{interval}}\\), we have \\(\\|f_n\\|_p^p = 1/k \\to 0\\) as \\(n \\to \\infty\\) (since \\(k \\to \\infty\\)). Therefore \\(\\|f_n\\|_p = (1/k)^{1/p} \\to 0\\) for every \\(p \\in [1,\\infty)\\).'
                },
                {
                    question: '<strong>[Computational, 2 stars]</strong> Let \\(f_n = n^{1/3} \\cdot \\mathbf{1}_{(0, 1/n)}\\) on \\([0,1]\\). Determine whether \\(f_n \\to 0\\) in (a) \\(L^1\\), (b) \\(L^2\\), (c) \\(L^4\\), (d) in measure, (e) a.e.',
                    hint: 'Compute \\(\\|f_n\\|_p^p = n^{p/3} \\cdot 1/n = n^{p/3 - 1}\\).',
                    solution: '\\(\\|f_n\\|_p^p = n^{p/3-1}\\). (a) \\(p=1\\): exponent \\(-2/3 < 0\\), so \\(\\|f_n\\|_1 = n^{-2/3} \\to 0\\). Yes. (b) \\(p=2\\): exponent \\(-1/3 < 0\\), so \\(\\|f_n\\|_2^2 = n^{-1/3} \\to 0\\). Yes. (c) \\(p=4\\): exponent \\(1/3 > 0\\), so \\(\\|f_n\\|_4^4 = n^{1/3} \\to \\infty\\). No. (d) In measure: \\(\\mu(\\{f_n > \\varepsilon\\}) \\leq 1/n \\to 0\\). Yes. (e) a.e.: for \\(x > 0\\), eventually \\(x > 1/n\\), so \\(f_n(x) = 0\\). Yes.'
                },
                {
                    question: '<strong>[Computational, 2 stars]</strong> On \\([0,1]\\), let \\(f_n(x) = n x e^{-nx}\\). Find the pointwise limit and determine whether convergence is uniform.',
                    hint: 'For fixed \\(x > 0\\), \\(nxe^{-nx} \\to 0\\). For \\(x = 0\\), \\(f_n(0) = 0\\). Check the sup by finding the maximum.',
                    solution: 'For \\(x = 0\\): \\(f_n(0) = 0\\). For \\(x > 0\\): \\(nxe^{-nx} \\to 0\\) since \\(e^{-nx}\\) decays faster than \\(nx\\) grows. So \\(f_n \\to 0\\) pointwise. The maximum of \\(f_n\\) occurs at \\(x = 1/n\\): \\(f_n(1/n) = n \\cdot (1/n) \\cdot e^{-1} = e^{-1} \\approx 0.368\\). So \\(\\sup |f_n| = e^{-1}\\) for all \\(n\\), and \\(\\sup |f_n| \\not\\to 0\\). The convergence is pointwise but not uniform.'
                },
                {
                    question: '<strong>[Computational, 3 stars]</strong> Let \\(f_n(x) = \\sin^n(x)\\) on \\([0, \\pi]\\). Find the pointwise limit. Compute \\(\\|f_n\\|_2^2\\) using the reduction formula \\(\\int_0^\\pi \\sin^n(x)\\,dx\\).',
                    hint: 'The pointwise limit is 0 everywhere except at \\(x = \\pi/2\\) where \\(\\sin^n(\\pi/2) = 1\\). For the integral, use the Wallis-type formula.',
                    solution: 'Pointwise: \\(|\\sin(x)| < 1\\) for \\(x \\neq \\pi/2\\), so \\(\\sin^n(x) \\to 0\\). At \\(x = \\pi/2\\): \\(\\sin^n(\\pi/2) = 1\\). So \\(f_n \\to \\mathbf{1}_{\\{\\pi/2\\}} = 0\\) a.e. For \\(\\|f_n\\|_2^2 = \\int_0^\\pi \\sin^{2n}(x)\\,dx\\), the Wallis formula gives \\(\\int_0^\\pi \\sin^{2n}(x)\\,dx = \\pi \\cdot \\frac{(2n)!}{4^n (n!)^2}\\). By Stirling, this behaves like \\(\\pi / \\sqrt{\\pi n} = \\sqrt{\\pi/n} \\to 0\\). So \\(f_n \\to 0\\) in \\(L^2\\).'
                },
                {
                    question: '<strong>[Computational, 3 stars]</strong> On the probability space \\(([0,1], \\mathcal{B}, \\lambda)\\), define \\(f_n = \\sqrt{n} \\cdot \\mathbf{1}_{(0, 1/n)}\\). Does \\(f_n \\to 0\\) (a) a.e.? (b) in \\(L^1\\)? (c) in \\(L^2\\)? (d) in measure?',
                    hint: 'Compute each norm directly. For a.e., note that for fixed \\(x > 0\\), eventually \\(x > 1/n\\).',
                    solution: '(a) a.e.: For \\(x > 0\\), eventually \\(1/n < x\\), so \\(f_n(x) = 0\\). At \\(x = 0\\), \\(f_n(0) = 0\\). Yes, \\(f_n \\to 0\\) a.e. (in fact everywhere). (b) \\(L^1\\): \\(\\|f_n\\|_1 = \\sqrt{n}/n = 1/\\sqrt{n} \\to 0\\). Yes. (c) \\(L^2\\): \\(\\|f_n\\|_2^2 = n/n = 1\\). No, \\(f_n \\not\\to 0\\) in \\(L^2\\). (d) In measure: \\(\\lambda(\\{f_n > \\varepsilon\\}) = 1/n \\to 0\\) for any \\(\\varepsilon > 0\\). Yes.'
                },
                {
                    question: '<strong>[Computational, 1 star]</strong> Show that \\(f_n(x) = x/n\\) converges to 0 uniformly on \\([0,1]\\) but not uniformly on \\([0,\\infty)\\).',
                    hint: 'Compute \\(\\sup_{x \\in [0,1]} |x/n|\\) and \\(\\sup_{x \\in [0,\\infty)} |x/n|\\) separately.',
                    solution: 'On \\([0,1]\\): \\(\\sup |f_n| = 1/n \\to 0\\). Uniform convergence. On \\([0,\\infty)\\): \\(\\sup |f_n| = \\sup_{x \\geq 0} x/n = \\infty\\) for every \\(n\\). Not uniform (in fact the sup norm is infinite).'
                },

                // --- PROOF (7 exercises) ---
                {
                    question: '<strong>[Proof, 2 stars]</strong> Prove that if \\(f_n \\to f\\) in measure and \\(f_n \\to g\\) in measure, then \\(f = g\\) a.e.',
                    hint: 'Use the triangle inequality: \\(\\{|f - g| > \\varepsilon\\} \\subseteq \\{|f_n - f| > \\varepsilon/2\\} \\cup \\{|f_n - g| > \\varepsilon/2\\}\\).',
                    solution: 'For any \\(\\varepsilon > 0\\): \\(\\mu(\\{|f-g|>\\varepsilon\\}) \\leq \\mu(\\{|f_n-f|>\\varepsilon/2\\}) + \\mu(\\{|f_n-g|>\\varepsilon/2\\})\\). Both terms \\(\\to 0\\), so \\(\\mu(\\{|f-g|>\\varepsilon\\}) = 0\\) for every \\(\\varepsilon > 0\\). Then \\(\\{f \\neq g\\} = \\bigcup_{m=1}^\\infty \\{|f-g|>1/m\\}\\) has measure zero.'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Prove that convergence in measure is metrizable on a finite measure space. That is, show \\(f_n \\xrightarrow{\\mu} f\\) if and only if \\(d(f_n, f) \\to 0\\) where \\(d(f,g) = \\int \\frac{|f-g|}{1+|f-g|}\\,d\\mu\\).',
                    hint: 'For (\\(\\Rightarrow\\)), split the integral over \\(\\{|f_n-f|>\\varepsilon\\}\\) and its complement. For (\\(\\Leftarrow\\)), use Markov. The function \\(t/(1+t)\\) is bounded by 1 and bounded below by \\(\\varepsilon/(1+\\varepsilon)\\) on \\(\\{|f_n-f|>\\varepsilon\\}\\).',
                    solution: 'Let \\(\\phi(t) = t/(1+t)\\). (\\(\\Rightarrow\\)) \\(d(f_n,f) = \\int \\phi(|f_n-f|)\\,d\\mu \\leq \\varepsilon/(1+\\varepsilon) \\cdot \\mu(X) + 1 \\cdot \\mu(\\{|f_n-f|>\\varepsilon\\})\\). As \\(n \\to \\infty\\), the second term \\(\\to 0\\). Letting \\(\\varepsilon \\to 0\\), \\(d(f_n,f) \\to 0\\). (\\(\\Leftarrow\\)) On \\(\\{|f_n-f|>\\varepsilon\\}\\), \\(\\phi(|f_n-f|) \\geq \\varepsilon/(1+\\varepsilon)\\). So \\(d(f_n,f) \\geq \\frac{\\varepsilon}{1+\\varepsilon} \\mu(\\{|f_n-f|>\\varepsilon\\})\\). If \\(d(f_n,f) \\to 0\\), then \\(\\mu(\\{|f_n-f|>\\varepsilon\\}) \\to 0\\).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Prove that \\(L^p\\) convergence implies convergence in measure directly from Markov\'s inequality, without invoking Chebyshev.',
                    hint: 'Markov\'s inequality states: for non-negative measurable \\(g\\) and \\(a > 0\\), \\(\\mu(\\{g \\geq a\\}) \\leq \\frac{1}{a}\\int g\\,d\\mu\\). Apply with \\(g = |f_n - f|^p\\) and \\(a = \\varepsilon^p\\).',
                    solution: 'Let \\(\\varepsilon > 0\\). Apply Markov to \\(g = |f_n-f|^p\\) and \\(a = \\varepsilon^p\\): \\(\\mu(\\{|f_n-f|^p \\geq \\varepsilon^p\\}) \\leq \\frac{1}{\\varepsilon^p} \\int |f_n-f|^p\\,d\\mu = \\frac{\\|f_n-f\\|_p^p}{\\varepsilon^p}\\). Since \\(\\{|f_n-f|>\\varepsilon\\} = \\{|f_n-f|^p > \\varepsilon^p\\}\\), we get \\(\\mu(\\{|f_n-f|>\\varepsilon\\}) \\leq \\|f_n-f\\|_p^p / \\varepsilon^p \\to 0\\).'
                },
                {
                    question: '<strong>[Proof, 4 stars]</strong> Prove the "\\(\\Leftarrow\\)" direction of Theorem 8.11: if every subsequence of \\((f_n)\\) has a further subsequence converging a.e. to \\(f\\), then \\(f_n \\to f\\) in measure.',
                    hint: 'Prove the contrapositive. If \\(f_n \\not\\to f\\) in measure, exhibit a subsequence with no further a.e.-convergent subsequence.',
                    solution: 'Contrapositive: Suppose \\(f_n \\not\\xrightarrow{\\mu} f\\). Then there exist \\(\\varepsilon_0 > 0\\), \\(\\delta_0 > 0\\), and a subsequence \\((f_{n_k})\\) with \\(\\mu(\\{|f_{n_k}-f|>\\varepsilon_0\\}) \\geq \\delta_0\\) for all \\(k\\). Now take any further subsequence \\((f_{n_{k_j}})\\). For every \\(j\\), \\(\\mu(\\{|f_{n_{k_j}}-f|>\\varepsilon_0\\}) \\geq \\delta_0\\). If \\(f_{n_{k_j}} \\to f\\) a.e., then by Egorov (on any finite-measure subset) or by the characterization (Proposition 8.4), \\(\\mu(\\{|f_{n_{k_j}}-f|>\\varepsilon_0\\}) \\to 0\\), contradicting the bound \\(\\geq \\delta_0\\). (On sigma-finite spaces, restrict to a set of finite measure containing most of the mass.) Hence no further subsequence converges a.e.'
                },
                {
                    question: '<strong>[Proof, 4 stars]</strong> Prove that on a finite measure space, if \\(f_n \\to f\\) a.e. and \\(|f_n| \\leq g\\) a.e. with \\(g \\in L^p\\), then \\(f_n \\to f\\) in \\(L^p\\).',
                    hint: 'This is the DCT for \\(L^p\\). Apply the standard DCT to the sequence \\(|f_n - f|^p\\) with dominator \\((2g)^p\\).',
                    solution: 'We have \\(|f_n - f|^p \\leq (|f_n| + |f|)^p \\leq (2g)^p\\) a.e. (since \\(|f| \\leq g\\) a.e. by taking limits). Since \\(g \\in L^p\\), we have \\((2g)^p \\in L^1\\). Also \\(|f_n - f|^p \\to 0\\) a.e. By the DCT: \\(\\int |f_n - f|^p\\,d\\mu \\to 0\\), i.e., \\(\\|f_n - f\\|_p \\to 0\\).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Show that a.e. convergence does not imply convergence in measure on \\((\\mathbb{R}, \\mathcal{B}, \\lambda)\\). Construct an explicit counterexample.',
                    hint: 'Consider \\(f_n = \\mathbf{1}_{[n, n+1]}\\).',
                    solution: 'Let \\(f_n = \\mathbf{1}_{[n,n+1]}\\). For any fixed \\(x \\in \\mathbb{R}\\), eventually \\(n > x\\) so \\(x \\notin [n,n+1]\\) and \\(f_n(x) = 0\\). More precisely, \\(f_n(x) = 0\\) for all \\(n > x\\). So \\(f_n \\to 0\\) pointwise everywhere. But \\(\\lambda(\\{|f_n| > 1/2\\}) = \\lambda([n,n+1]) = 1\\) for all \\(n\\). So \\(f_n \\not\\to 0\\) in measure. The issue is that \\(\\lambda(\\mathbb{R}) = \\infty\\), so the finite-measure hypothesis in the corollary of Egorov is essential.'
                },
                {
                    question: '<strong>[Proof, 5 stars]</strong> Prove Egorov\'s theorem directly, without looking at the proof in the text. Then compare your proof with the one given.',
                    hint: 'For each \\(\\varepsilon = 1/m\\), build a decreasing sequence of sets \\(E_n^{(m)} = \\bigcup_{k \\geq n} \\{|f_k - f| > 1/m\\}\\). Use finiteness of the measure and continuity from above.',
                    solution: 'Define \\(E_n^{(m)} = \\bigcup_{k=n}^\\infty \\{|f_k - f| > 1/m\\}\\). For fixed \\(m\\), \\(E_n^{(m)} \\downarrow\\) as \\(n \\to \\infty\\). Since \\(f_n \\to f\\) a.e., \\(\\bigcap_n E_n^{(m)}\\) is a null set. Since \\(\\mu(X) < \\infty\\), \\(\\mu(E_1^{(m)}) < \\infty\\), so continuity from above gives \\(\\mu(E_n^{(m)}) \\to 0\\). For each \\(m\\), pick \\(n_m\\) with \\(\\mu(E_{n_m}^{(m)}) < \\delta/2^m\\). Set \\(E = \\bigcup_m E_{n_m}^{(m)}\\); then \\(\\mu(E) < \\delta\\). On \\(X \\setminus E\\): for any \\(\\varepsilon > 0\\), pick \\(m\\) with \\(1/m < \\varepsilon\\). For \\(x \\notin E\\), \\(x \\notin E_{n_m}^{(m)}\\), so \\(|f_k(x) - f(x)| \\leq 1/m < \\varepsilon\\) for all \\(k \\geq n_m\\). Uniform convergence on \\(X \\setminus E\\).'
                },

                // --- EXPLORATION (3 exercises) ---
                {
                    question: '<strong>[Exploration, 3 stars]</strong> Using the Convergence Race visualization, find a sequence among the options that converges in measure but not in \\(L^1\\). Then find one that converges in \\(L^1\\) but not uniformly. Record the sequences and verify your findings analytically.',
                    hint: 'The "tall thin spikes" sequence has \\(\\|f_n\\|_1 = 1\\) for all \\(n\\) but converges in measure. For \\(L^1\\) but not uniform, try \\(x^n\\).',
                    solution: 'In measure but not \\(L^1\\): The "tall spikes" \\(f_n = n \\cdot \\mathbf{1}_{(0,1/n)}\\). \\(\\mu(\\{f_n > \\varepsilon\\}) = 1/n \\to 0\\) for any \\(\\varepsilon > 0\\) (in measure to 0). But \\(\\|f_n\\|_1 = 1\\) (not in \\(L^1\\)). In \\(L^1\\) but not uniform: \\(f_n(x) = x^n\\) on \\([0,1]\\). \\(\\|f_n\\|_1 = 1/(n+1) \\to 0\\) (in \\(L^1\\)). But \\(\\sup |f_n| = f_n(1) = 1\\) for all \\(n\\) (not uniform, even on \\([0,1)\\) the sup is 1).'
                },
                {
                    question: '<strong>[Exploration, 4 stars]</strong> Using the Egorov\'s Theorem Demo, experiment with different values of \\(\\delta\\). As \\(\\delta \\to 0\\), how does the number of terms needed for uniform convergence (to \\(\\varepsilon = 0.01\\)) on \\([0, 1-\\delta]\\) behave? Derive the formula.',
                    hint: 'On \\([0, 1-\\delta]\\), \\(\\sup x^n = (1-\\delta)^n\\). You need \\((1-\\delta)^n < 0.01\\).',
                    solution: 'We need \\((1-\\delta)^N < 0.01\\), i.e., \\(N > \\frac{\\ln(0.01)}{\\ln(1-\\delta)} = \\frac{-\\ln(100)}{\\ln(1-\\delta)}\\). For small \\(\\delta\\), \\(\\ln(1-\\delta) \\approx -\\delta\\), so \\(N \\approx \\ln(100)/\\delta \\approx 4.605/\\delta\\). As \\(\\delta \\to 0\\), \\(N \\to \\infty\\). Specifically: \\(\\delta = 0.1 \\Rightarrow N \\approx 44\\); \\(\\delta = 0.01 \\Rightarrow N \\approx 459\\); \\(\\delta = 0.001 \\Rightarrow N \\approx 4603\\). The tradeoff is clear: a smaller exceptional set requires many more terms for uniform convergence.'
                },
                {
                    question: '<strong>[Exploration, 5 stars]</strong> The implication diagram shows that on finite measure spaces, a.e. convergence and convergence in measure are "almost equivalent" (a.e. implies in measure; in measure implies a.e. of a subsequence). Construct a single example on \\([0,1]\\) that demonstrates both the forward implication and the failure of the full converse, as concretely as possible.',
                    hint: 'Use the typewriter sequence. It converges in measure. Show that the subsequence extracted by the Borel-Cantelli argument actually converges a.e., but the full sequence does not.',
                    solution: 'Let \\((f_n)\\) be the typewriter sequence on \\([0,1]\\). Forward: it converges in measure to 0 since the support has width \\(1/\\text{pass} \\to 0\\). Failure of converse: \\(f_n(x)\\) does not converge for any \\(x\\) (each \\(x\\) is covered by infinitely many bumps). Subsequence recovery: extract \\(f_{n_j}\\) where \\(n_j\\) is the first index in pass \\(j^2\\). Then \\(f_{n_j}\\) is supported on an interval of width \\(1/j^2\\), and \\(\\sum 1/j^2 < \\infty\\). By Borel-Cantelli, a.e. \\(x\\) belongs to only finitely many supports, so \\(f_{n_j}(x) \\to 0\\) a.e. This is Theorem 8.11 in action: the full sequence fails a.e. convergence, but a carefully chosen subsequence recovers it.'
                }
            ]
        }
    ]
});

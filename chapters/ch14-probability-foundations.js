window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch14',
    number: 14,
    title: 'Measure-Theoretic Probability',
    subtitle: 'Probability Spaces, Expectation, Independence, and Limit Theorems',
    sections: [
        // ============================================================
        // Section 1: Probability Spaces and the Law of Large Numbers
        // ============================================================
        {
            id: 'probability-spaces',
            title: 'Probability Spaces and the Law of Large Numbers',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>We have built the entire machinery of measure theory.</strong> Sigma-algebras, measures, integration, convergence theorems, product spaces, Radon-Nikodym derivatives: all of these were developed in full generality. Now we reveal their most celebrated application. Probability theory is not merely an analogy to measure theory; it <em>is</em> measure theory, with the total mass normalized to one. This chapter translates our abstract results into the language of probability and shows how the great theorems of Chapters 6 through 12 yield the foundational results of modern probability.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define probability spaces as measure spaces of total mass one. Introduce random variables as measurable functions and distributions as pushforward measures. See how this framework resolves paradoxes that plagued pre-Kolmogorov probability.</p>
                </div>

                <h2>From Measure Spaces to Probability Spaces</h2>

                <p>The conceptual leap is small but transformative. We take a measure space \\((\\Omega, \\mathcal{F}, P)\\) and impose one additional axiom: \\(P(\\Omega) = 1\\). Everything we have proven about general measures applies instantly.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.1 (Probability Space)</div>
                    <div class="env-body">
                        <p>A <strong>probability space</strong> is a measure space \\((\\Omega, \\mathcal{F}, P)\\) where:</p>
                        <ul>
                            <li>\\(\\Omega\\) is the <strong>sample space</strong> (the set of all possible outcomes),</li>
                            <li>\\(\\mathcal{F}\\) is a \\(\\sigma\\)-algebra of <strong>events</strong> (subsets of \\(\\Omega\\) to which we assign probabilities),</li>
                            <li>\\(P: \\mathcal{F} \\to [0,1]\\) is a <strong>probability measure</strong>, i.e., a measure with \\(P(\\Omega) = 1\\).</li>
                        </ul>
                        <p>All the axioms of a measure (countable additivity, \\(P(\\emptyset) = 0\\)) carry over verbatim from Chapter 2.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why This Framework?)</div>
                    <div class="env-body">
                        <p>Before Kolmogorov's 1933 axiomatization, probability theory relied on vague appeals to "equally likely outcomes" or limiting frequencies. These approaches broke down for uncountable sample spaces. Consider tossing a coin infinitely many times: the sample space \\(\\{0,1\\}^{\\mathbb{N}}\\) is uncountable, and assigning probabilities to "events" like "heads eventually dominates" requires the full power of sigma-algebras. Measure theory is not optional here; it is the only rigorous path.</p>
                    </div>
                </div>

                <h2>Random Variables as Measurable Functions</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.2 (Random Variable)</div>
                    <div class="env-body">
                        <p>A <strong>random variable</strong> is a measurable function \\(X: (\\Omega, \\mathcal{F}) \\to (\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))\\). That is, for every Borel set \\(B \\in \\mathcal{B}(\\mathbb{R})\\),</p>
                        \\[X^{-1}(B) = \\{\\omega \\in \\Omega : X(\\omega) \\in B\\} \\in \\mathcal{F}.\\]
                        <p>We write \\(\\{X \\in B\\}\\) as shorthand for \\(X^{-1}(B)\\), and \\(\\{X \\leq t\\}\\) for \\(\\{\\omega : X(\\omega) \\leq t\\}\\).</p>
                    </div>
                </div>

                <p>This is exactly Definition 5.1 from Chapter 5. The only novelty is the name: what measure theory calls a "measurable function," probability calls a "random variable." The measurability requirement from Chapter 5 (preimages of Borel sets must lie in \\(\\mathcal{F}\\)) is precisely what ensures we can compute \\(P(X \\in B)\\) for every Borel set \\(B\\).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.3 (Distribution / Law of a Random Variable)</div>
                    <div class="env-body">
                        <p>The <strong>distribution</strong> (or <strong>law</strong>) of \\(X\\) is the pushforward measure \\(\\mu_X = P \\circ X^{-1}\\) on \\((\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))\\), defined by</p>
                        \\[\\mu_X(B) = P(X \\in B) = P(X^{-1}(B)) \\quad \\text{for all } B \\in \\mathcal{B}(\\mathbb{R}).\\]
                        <p>The <strong>cumulative distribution function</strong> (CDF) is \\(F_X(t) = P(X \\leq t) = \\mu_X((-\\infty, t])\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.4 (A Fair Casino Die)</div>
                    <div class="env-body">
                        <p>Roll a fair die: \\(\\Omega = \\{1,2,3,4,5,6\\}\\), \\(\\mathcal{F} = 2^{\\Omega}\\), \\(P(\\{k\\}) = 1/6\\). The random variable \\(X(\\omega) = \\omega\\) (the face value) has distribution \\(\\mu_X = \\frac{1}{6}\\sum_{k=1}^{6} \\delta_k\\), a sum of Dirac point masses. The CDF is a step function with jumps of \\(1/6\\) at each integer from 1 to 6.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.5 (Continuous Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(\\Omega = [0,1]\\), \\(\\mathcal{F} = \\mathcal{B}([0,1])\\), \\(P = \\lambda\\) (Lebesgue measure on \\([0,1]\\)). Define \\(X(\\omega) = -\\ln(\\omega)\\). Then \\(X \\geq 0\\) and for \\(t > 0\\),</p>
                        \\[P(X \\leq t) = P(\\omega \\geq e^{-t}) = 1 - e^{-t},\\]
                        <p>which is the CDF of the exponential distribution with rate 1. This shows how the abstract Lebesgue measure on \\([0,1]\\) can generate any continuous distribution through an appropriate measurable transformation, a fact we formalized in Chapter 5.</p>
                    </div>
                </div>

                <h2>The Measure-Theoretic Dictionary</h2>

                <p>The following table summarizes the translation between the two languages. Every entry on the right is a special case of the corresponding entry on the left.</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>Measure Theory</th><th>Probability Theory</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Measure space \\((X, \\mathcal{A}, \\mu)\\)</td><td>Probability space \\((\\Omega, \\mathcal{F}, P)\\)</td></tr>
                        <tr><td>Measurable set \\(A \\in \\mathcal{A}\\)</td><td>Event \\(A \\in \\mathcal{F}\\)</td></tr>
                        <tr><td>Measurable function \\(f\\)</td><td>Random variable \\(X\\)</td></tr>
                        <tr><td>Integral \\(\\int f\\,d\\mu\\)</td><td>Expectation \\(E[X]\\)</td></tr>
                        <tr><td>a.e. (almost everywhere)</td><td>a.s. (almost surely)</td></tr>
                        <tr><td>\\(\\mu\\)-null set</td><td>Event of probability zero</td></tr>
                        <tr><td>Pushforward measure</td><td>Distribution / Law</td></tr>
                        <tr><td>Product measure</td><td>Joint distribution of independent r.v.'s</td></tr>
                    </tbody>
                </table>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why Keep the Abstract \\(\\Omega\\)?)</div>
                    <div class="env-body">
                        <p>In practice, one often works entirely with distributions (CDFs, densities) without ever specifying \\(\\Omega\\). But the abstract probability space is essential when relating multiple random variables, defining conditional expectations, or constructing stochastic processes. The existence of a sufficiently rich probability space supporting any desired family of random variables is guaranteed by the Kolmogorov extension theorem, which relies on the Carath&eacute;odory extension machinery of Chapter 3.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'lln-simulator',
                    title: 'Law of Large Numbers Simulator',
                    description: 'Simulate rolling dice repeatedly and watch the running average converge to the true mean. This illustrates the LLN: the sample average of i.i.d. random variables converges almost surely to the expectation.',
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

                        var distType = 0;
                        var numSamples = 500;
                        var seed = 1;
                        var trailData = [];

                        var distNames = ['Fair Die (1-6)', 'Coin Flip (0/1)', 'Exponential(1)', 'Uniform(0,1)'];
                        var trueMeans = [3.5, 0.5, 1.0, 0.5];

                        function pseudoRandom(s) {
                            s = (s * 1664525 + 1013904223) & 0x7fffffff;
                            return s;
                        }

                        function sampleDist(type, s) {
                            var u = (s & 0x7fffffff) / 0x7fffffff;
                            if (type === 0) return Math.floor(u * 6) + 1;
                            if (type === 1) return u < 0.5 ? 0 : 1;
                            if (type === 2) return -Math.log(1 - u + 1e-15);
                            return u;
                        }

                        VizEngine.createSlider(controls, 'Distribution (0-3)', 0, 3, distType, 1, function(v) {
                            distType = Math.round(v);
                            generate();
                        });

                        VizEngine.createSlider(controls, 'Number of samples', 10, 2000, numSamples, 10, function(v) {
                            numSamples = Math.round(v);
                            generate();
                        });

                        VizEngine.createSlider(controls, 'Random seed', 1, 100, seed, 1, function(v) {
                            seed = Math.round(v);
                            generate();
                        });

                        function generate() {
                            trailData = [];
                            var s = seed * 12345;
                            var runningSum = 0;
                            for (var i = 1; i <= numSamples; i++) {
                                s = pseudoRandom(s);
                                var val = sampleDist(distType, s);
                                runningSum += val;
                                trailData.push(runningSum / i);
                            }
                            draw();
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { l: 60, r: 25, t: 55, b: 55 };
                            var pw = w - margin.l - margin.r;
                            var ph = h - margin.t - margin.b;

                            var trueMean = trueMeans[distType];

                            // Compute y range
                            var yMin = trueMean, yMax = trueMean;
                            for (var i = 0; i < trailData.length; i++) {
                                if (trailData[i] < yMin) yMin = trailData[i];
                                if (trailData[i] > yMax) yMax = trailData[i];
                            }
                            var yPad = Math.max((yMax - yMin) * 0.15, 0.2);
                            yMin -= yPad;
                            yMax += yPad;

                            function sx(i) { return margin.l + (i / Math.max(trailData.length - 1, 1)) * pw; }
                            function sy(y) { return margin.t + ph - ((y - yMin) / (yMax - yMin)) * ph; }

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Law of Large Numbers: ' + distNames[distType], w / 2, 20);

                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillStyle = colors.muted;
                            ctx.fillText('Running average of ' + trailData.length + ' samples (true mean = ' + trueMean.toFixed(2) + ')', w / 2, 38);

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.l, margin.t);
                            ctx.lineTo(margin.l, margin.t + ph);
                            ctx.lineTo(margin.l + pw, margin.t + ph);
                            ctx.stroke();

                            // Y-axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'right';
                            var nTicks = 5;
                            for (var i = 0; i <= nTicks; i++) {
                                var yVal = yMin + (yMax - yMin) * i / nTicks;
                                var yy = sy(yVal);
                                ctx.fillText(yVal.toFixed(2), margin.l - 8, yy + 4);
                                ctx.beginPath();
                                ctx.strokeStyle = 'rgba(139,148,158,0.2)';
                                ctx.moveTo(margin.l, yy);
                                ctx.lineTo(margin.l + pw, yy);
                                ctx.stroke();
                            }

                            // X-axis labels
                            ctx.textAlign = 'center';
                            for (var i = 0; i <= 4; i++) {
                                var idx = Math.round(i * (trailData.length - 1) / 4);
                                ctx.fillText('' + (idx + 1), sx(idx), margin.t + ph + 20);
                            }
                            ctx.fillText('n (number of trials)', w / 2, h - 8);

                            // True mean line
                            ctx.strokeStyle = colors.red;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([8, 4]);
                            ctx.beginPath();
                            ctx.moveTo(margin.l, sy(trueMean));
                            ctx.lineTo(margin.l + pw, sy(trueMean));
                            ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = colors.red;
                            ctx.textAlign = 'left';
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('E[X] = ' + trueMean.toFixed(2), margin.l + pw - 80, sy(trueMean) - 8);

                            // Running average path
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < trailData.length; i++) {
                                var x = sx(i), y = sy(trailData[i]);
                                if (i === 0) ctx.moveTo(x, y);
                                else ctx.lineTo(x, y);
                            }
                            ctx.stroke();

                            // Final value label
                            if (trailData.length > 0) {
                                var finalVal = trailData[trailData.length - 1];
                                ctx.fillStyle = colors.blue;
                                ctx.textAlign = 'right';
                                ctx.fillText('S_n/n = ' + finalVal.toFixed(4), margin.l + pw - 5, sy(finalVal) + 16);
                            }

                            // Legend
                            ctx.fillStyle = colors.muted;
                            ctx.textAlign = 'left';
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillStyle = colors.blue;
                            ctx.fillRect(margin.l + 10, margin.t + 8, 14, 3);
                            ctx.fillText('Running average', margin.l + 30, margin.t + 14);
                            ctx.fillStyle = colors.red;
                            ctx.fillRect(margin.l + 10, margin.t + 24, 14, 3);
                            ctx.fillText('True mean', margin.l + 30, margin.t + 30);
                        }

                        generate();
                    }
                }
            ],
            exercises: [
                {
                    question: 'A casino offers a game where you roll a fair die and receive dollars equal to the face value. Entry costs $3.50 per play. Model this as a probability space, identify the relevant random variable, and determine whether the game is fair (i.e., whether the expected net gain is zero).',
                    hint: 'The sample space is \\(\\Omega = \\{1,...,6\\}\\) with \\(P(\\{k\\}) = 1/6\\). The net gain is \\(Y = X - 3.50\\) where \\(X\\) is the face value. Compute \\(E[Y]\\).',
                    solution: 'With \\(E[X] = (1+2+3+4+5+6)/6 = 3.5\\), the expected net gain is \\(E[Y] = 3.5 - 3.5 = 0\\). The game is fair. As a probability space: \\(\\Omega = \\{1,...,6\\}\\), \\(\\mathcal{F} = 2^{\\Omega}\\), \\(P\\) is the uniform measure, and \\(Y(\\omega) = \\omega - 3.5\\) is a measurable function (random variable) with distribution \\(\\mu_Y = \\frac{1}{6}\\sum_{k=1}^{6} \\delta_{k-3.5}\\).'
                },
                {
                    question: 'Let \\(\\Omega = [0,1]\\), \\(\\mathcal{F} = \\mathcal{B}([0,1])\\), \\(P = \\lambda\\). Define \\(X(\\omega) = \\mathbf{1}_{[0, 1/2]}(\\omega) + 2 \\cdot \\mathbf{1}_{(1/2, 1]}(\\omega)\\). Find the distribution \\(\\mu_X\\) and the CDF \\(F_X\\).',
                    hint: 'Determine the values \\(X\\) takes and with what probability. \\(X = 1\\) when \\(\\omega \\in [0, 1/2]\\), \\(X = 2\\) when \\(\\omega \\in (1/2, 1]\\).',
                    solution: '\\(\\mu_X = \\frac{1}{2}\\delta_1 + \\frac{1}{2}\\delta_2\\). The CDF is \\(F_X(t) = 0\\) for \\(t < 1\\), \\(F_X(t) = 1/2\\) for \\(1 \\leq t < 2\\), \\(F_X(t) = 1\\) for \\(t \\geq 2\\). This is a Bernoulli-type distribution taking values in \\(\\{1, 2\\}\\).'
                },
                {
                    question: 'Why is the power set \\(2^{\\Omega}\\) not used as the event sigma-algebra when \\(\\Omega = \\mathbb{R}\\)? Give a precise reason referencing results from earlier chapters.',
                    hint: 'Recall the Vitali set construction from Chapter 4 and the theorem that not all subsets of \\(\\mathbb{R}\\) are Lebesgue measurable.',
                    solution: 'By the Vitali construction (Chapter 4), there exist subsets of \\(\\mathbb{R}\\) that are not Lebesgue measurable. More generally, Ulam\'s theorem shows that under ZFC, no countably additive probability measure on \\(\\mathbb{R}\\) extending Lebesgue measure can be defined on all of \\(2^{\\mathbb{R}}\\). Hence we must restrict to a proper sigma-algebra such as the Borel sets \\(\\mathcal{B}(\\mathbb{R})\\) or the Lebesgue sigma-algebra. This is precisely why the sigma-algebra axiom in Definition 14.1 is essential, not decorative.'
                }
            ]
        },

        // ============================================================
        // Section 2: Expectation as Lebesgue Integration
        // ============================================================
        {
            id: 'expectation',
            title: 'Expectation as Lebesgue Integration',
            content: `
                <div class="bridge section-bridge">
                    <p>The previous section established the dictionary: random variables are measurable functions on a probability space. Now we translate the Lebesgue integral (Chapter 6) into the language of expectation. Every property of the integral becomes a property of expectation, and the great convergence theorems of Chapter 7 yield powerful tools for computing and interchanging limits with expectations.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define expectation via the Lebesgue integral. Derive its key properties from integration theory. Show how the convergence theorems (MCT, DCT, Fatou) specialize to probability and give applications to insurance and gambling.</p>
                </div>

                <h2>Definition and Basic Properties</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.6 (Expectation)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a random variable on \\((\\Omega, \\mathcal{F}, P)\\). The <strong>expectation</strong> (or <strong>expected value</strong>) of \\(X\\) is</p>
                        \\[E[X] = \\int_{\\Omega} X\\,dP,\\]
                        <p>provided the Lebesgue integral exists (i.e., \\(\\int X^+\\,dP\\) or \\(\\int X^-\\,dP\\) is finite). We say \\(X\\) is <strong>integrable</strong> if \\(E[|X|] < \\infty\\), which means \\(X \\in L^1(\\Omega, \\mathcal{F}, P)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 14.7 (Computing Expectation via the Distribution)</div>
                    <div class="env-body">
                        <p>If \\(g: \\mathbb{R} \\to \\mathbb{R}\\) is Borel measurable, then</p>
                        \\[E[g(X)] = \\int_{\\Omega} g(X(\\omega))\\,dP(\\omega) = \\int_{\\mathbb{R}} g(x)\\,d\\mu_X(x).\\]
                        <p>This is the change-of-variables formula for pushforward measures (Chapter 6). In particular, if \\(X\\) has density \\(f_X\\) (i.e., \\(\\mu_X \\ll \\lambda\\) with \\(d\\mu_X/d\\lambda = f_X\\), by Radon-Nikodym, Chapter 11), then</p>
                        \\[E[g(X)] = \\int_{-\\infty}^{\\infty} g(x) f_X(x)\\,dx.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>For simple functions \\(g = \\sum a_k \\mathbf{1}_{B_k}\\), both sides equal \\(\\sum a_k P(X \\in B_k) = \\sum a_k \\mu_X(B_k)\\). Extend to nonnegative measurable \\(g\\) by approximation with simple functions (as in Chapter 6), using the MCT. Then handle general \\(g\\) by splitting into \\(g^+ - g^-\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Properties Inherited from the Lebesgue Integral</h2>

                <p>Every property from Chapter 6 translates immediately:</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.8 (Properties of Expectation)</div>
                    <div class="env-body">
                        <p>Let \\(X, Y\\) be random variables on \\((\\Omega, \\mathcal{F}, P)\\).</p>
                        <ol>
                            <li><strong>Linearity:</strong> \\(E[aX + bY] = aE[X] + bE[Y]\\) for \\(a,b \\in \\mathbb{R}\\) (whenever defined).</li>
                            <li><strong>Monotonicity:</strong> If \\(X \\leq Y\\) a.s., then \\(E[X] \\leq E[Y]\\).</li>
                            <li><strong>Triangle inequality:</strong> \\(|E[X]| \\leq E[|X|]\\).</li>
                            <li><strong>Markov's inequality:</strong> For \\(X \\geq 0\\) and \\(a > 0\\), \\(P(X \\geq a) \\leq E[X]/a\\).</li>
                            <li><strong>Chebyshev's inequality:</strong> \\(P(|X - E[X]| \\geq a) \\leq \\text{Var}(X)/a^2\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Markov as a Measure-Theoretic Statement)</div>
                    <div class="env-body">
                        <p>Markov's inequality is just the observation that \\(a \\cdot \\mathbf{1}_{\\{X \\geq a\\}} \\leq X\\) pointwise when \\(X \\geq 0\\). Integrating both sides with respect to \\(P\\) gives \\(a \\cdot P(X \\geq a) \\leq E[X]\\). This is the same monotonicity-of-the-integral argument from Chapter 6, applied to a probability measure.</p>
                    </div>
                </div>

                <h2>Convergence Theorems in Probability</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.9 (Convergence Theorems for Expectations)</div>
                    <div class="env-body">
                        <p>The great convergence theorems of Chapter 7, stated probabilistically:</p>
                        <ul>
                            <li><strong>MCT (Monotone Convergence):</strong> If \\(0 \\leq X_1 \\leq X_2 \\leq \\cdots\\) a.s. and \\(X_n \\to X\\) a.s., then \\(E[X_n] \\uparrow E[X]\\).</li>
                            <li><strong>Fatou's Lemma:</strong> If \\(X_n \\geq 0\\) a.s., then \\(E[\\liminf X_n] \\leq \\liminf E[X_n]\\).</li>
                            <li><strong>DCT (Dominated Convergence):</strong> If \\(X_n \\to X\\) a.s. and \\(|X_n| \\leq Y\\) a.s. with \\(E[Y] < \\infty\\), then \\(E[X_n] \\to E[X]\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.10 (Insurance Pricing with DCT)</div>
                    <div class="env-body">
                        <p>An insurer models claims as \\(X_n = \\min(C, n)\\) where \\(C \\geq 0\\) is the true claim size with \\(E[C] < \\infty\\), and \\(n\\) is the policy cap. As the cap \\(n \\to \\infty\\), the capped claim converges: \\(X_n \\uparrow C\\) a.s. The MCT guarantees \\(E[X_n] \\uparrow E[C]\\). The insurer can thus approximate the true expected claim by raising the cap, confident that the approximation converges. This is not merely a numerical convenience; it is a theorem.</p>
                    </div>
                </div>

                <h2>Variance and Higher Moments</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.11 (Variance and Moments)</div>
                    <div class="env-body">
                        <p>For \\(X \\in L^2(P)\\), the <strong>variance</strong> is</p>
                        \\[\\text{Var}(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2.\\]
                        <p>More generally, the \\(k\\)-th <strong>moment</strong> is \\(E[X^k]\\) (when it exists), and the \\(k\\)-th <strong>central moment</strong> is \\(E[(X - E[X])^k]\\). These are simply \\(L^p\\) norms and inner products (Chapter 9) on the probability space.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (\\(L^2\\) and Variance)</div>
                    <div class="env-body">
                        <p>The space \\(L^2(\\Omega, \\mathcal{F}, P)\\) is a Hilbert space with inner product \\(\\langle X, Y \\rangle = E[XY]\\). The variance \\(\\text{Var}(X) = \\|X - E[X]\\|_2^2\\) is the squared distance from \\(X\\) to its "projection" onto the constants. This geometric viewpoint, rooted in Chapter 9, will be essential when we define conditional expectation as an orthogonal projection in Section 4.</p>
                    </div>
                </div>
            `,
            exercises: [
                {
                    question: 'A gambler plays a game where the payout \\(X\\) has density \\(f_X(x) = 2e^{-2x}\\) for \\(x \\geq 0\\). The entry fee is $0.75. Use Proposition 14.7 to compute \\(E[X]\\) and determine whether the game favors the gambler or the house.',
                    hint: 'Compute \\(E[X] = \\int_0^{\\infty} x \\cdot 2e^{-2x}\\,dx\\) using integration by parts.',
                    solution: '\\(E[X] = \\int_0^{\\infty} 2x e^{-2x}\\,dx = 2 \\cdot \\frac{1}{4} = \\frac{1}{2}\\). The expected net gain is \\(E[X] - 0.75 = -0.25 < 0\\), so the game favors the house. The gambler loses 25 cents on average per play.'
                },
                {
                    question: 'Let \\(X_n\\) be a sequence of nonneg. random variables with \\(E[X_n] = 1 + 1/n\\). Must \\(E[\\liminf X_n] \\leq 1\\)? Can we conclude \\(E[\\liminf X_n] = 1\\)? Which convergence theorem applies?',
                    hint: 'Apply Fatou\'s lemma. The inequality is guaranteed. For the second question, consider whether additional conditions (like dominated convergence) would be needed.',
                    solution: 'By Fatou\'s lemma, \\(E[\\liminf X_n] \\leq \\liminf E[X_n] = \\lim(1 + 1/n) = 1\\). We cannot conclude equality without additional assumptions. For instance, if \\(X_n = (1+1/n)\\mathbf{1}_A\\) for some fixed event \\(A\\), then \\(\\liminf X_n = \\mathbf{1}_A\\) and \\(E[\\liminf X_n] = P(A)\\), which could be anything in \\([0,1]\\). Equality would require something like a dominating integrable function (DCT).'
                },
                {
                    question: 'An insurance company models \\(N\\) independent claims with \\(E[C_i] = \\mu\\), \\(\\text{Var}(C_i) = \\sigma^2\\). Using Chebyshev\'s inequality, find an upper bound on the probability that the total payout \\(S_N = \\sum C_i\\) deviates from \\(N\\mu\\) by more than \\(k\\sigma\\sqrt{N}\\).',
                    hint: 'Compute \\(\\text{Var}(S_N) = N\\sigma^2\\) using independence, then apply Chebyshev.',
                    solution: 'Since the claims are independent, \\(\\text{Var}(S_N) = N\\sigma^2\\). Chebyshev gives \\(P(|S_N - N\\mu| \\geq k\\sigma\\sqrt{N}) \\leq \\frac{N\\sigma^2}{k^2\\sigma^2 N} = \\frac{1}{k^2}\\). For example, with \\(k=3\\), the probability of deviating by more than \\(3\\sigma\\sqrt{N}\\) is at most \\(1/9 \\approx 11\\%\\). This bound is distribution-free but conservative; the CLT (Section 5) will give sharper results.'
                }
            ]
        },

        // ============================================================
        // Section 3: Independence and the Borel-Cantelli Lemmas
        // ============================================================
        {
            id: 'independence-borel-cantelli',
            title: 'Independence and the Borel-Cantelli Lemmas',
            content: `
                <div class="bridge section-bridge">
                    <p>So far, we have translated measure spaces into probability spaces and integrals into expectations. But probability has a concept with no direct counterpart in general measure theory: <em>independence</em>. Independence is formulated as a factorization condition on the probability measure, and it interacts powerfully with product measures (Chapter 12) and the convergence machinery of Chapters 7 and 8.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define independence of events, sigma-algebras, and random variables in measure-theoretic terms. Prove the two Borel-Cantelli lemmas, which determine when infinitely many events occur. Apply these to concrete gambling and reliability scenarios.</p>
                </div>

                <h2>Independence: The Measure-Theoretic Definition</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.12 (Independence of Events)</div>
                    <div class="env-body">
                        <p>Events \\(A_1, A_2, \\ldots, A_n \\in \\mathcal{F}\\) are <strong>independent</strong> if for every subset \\(I \\subseteq \\{1, \\ldots, n\\}\\),</p>
                        \\[P\\!\\left(\\bigcap_{i \\in I} A_i\\right) = \\prod_{i \\in I} P(A_i).\\]
                        <p>Note that pairwise independence (the condition for each pair \\(\\{i,j\\}\\)) is strictly weaker than full independence, which requires the factorization for <em>all</em> subsets.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.13 (Pairwise but Not Mutually Independent)</div>
                    <div class="env-body">
                        <p>Toss two fair coins. Let \\(A = \\{\\text{first is H}\\}\\), \\(B = \\{\\text{second is H}\\}\\), \\(C = \\{\\text{both match}\\}\\). Then \\(P(A) = P(B) = P(C) = 1/2\\), and one can verify \\(P(A \\cap B) = P(A \\cap C) = P(B \\cap C) = 1/4\\), so any two are independent. But \\(P(A \\cap B \\cap C) = P(\\{HH\\}) = 1/4 \\neq 1/8 = P(A)P(B)P(C)\\). Full independence fails.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.14 (Independence of Random Variables)</div>
                    <div class="env-body">
                        <p>Random variables \\(X_1, \\ldots, X_n\\) are <strong>independent</strong> if the sigma-algebras \\(\\sigma(X_1), \\ldots, \\sigma(X_n)\\) are independent, i.e., for all Borel sets \\(B_1, \\ldots, B_n\\),</p>
                        \\[P(X_1 \\in B_1, \\ldots, X_n \\in B_n) = \\prod_{i=1}^n P(X_i \\in B_i).\\]
                        <p>Equivalently, the joint distribution equals the product of the marginals: \\(\\mu_{(X_1,\\ldots,X_n)} = \\mu_{X_1} \\otimes \\cdots \\otimes \\mu_{X_n}\\). This is precisely the product measure construction of Chapter 12.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 14.15 (Independence and Expectation)</div>
                    <div class="env-body">
                        <p>If \\(X_1, \\ldots, X_n\\) are independent and each \\(E[|X_i|] < \\infty\\), then</p>
                        \\[E[X_1 X_2 \\cdots X_n] = E[X_1] \\cdot E[X_2] \\cdots E[X_n].\\]
                        <p>This follows directly from Fubini's theorem (Chapter 12) applied to the product measure \\(\\mu_{X_1} \\otimes \\cdots \\otimes \\mu_{X_n}\\).</p>
                    </div>
                </div>

                <h2>The Borel-Cantelli Lemmas</h2>

                <p>The Borel-Cantelli lemmas answer a fundamental question: given a sequence of events \\(A_1, A_2, \\ldots\\), do infinitely many of them occur? The answer depends on whether the series \\(\\sum P(A_n)\\) converges or diverges, and (for the converse direction) on independence.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.16 (Limsup of Events)</div>
                    <div class="env-body">
                        <p>The event "infinitely many \\(A_n\\) occur" is</p>
                        \\[\\{A_n \\text{ i.o.}\\} = \\limsup_{n \\to \\infty} A_n = \\bigcap_{n=1}^{\\infty} \\bigcup_{k=n}^{\\infty} A_k.\\]
                        <p>An outcome \\(\\omega\\) lies in this set if and only if for every \\(n\\), there exists \\(k \\geq n\\) with \\(\\omega \\in A_k\\). Compare this with Proposition 8.4: the limsup of sets is the same construction that characterizes almost-everywhere convergence.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.17 (First Borel-Cantelli Lemma)</div>
                    <div class="env-body">
                        <p>If \\(\\sum_{n=1}^{\\infty} P(A_n) < \\infty\\), then \\(P(A_n \\text{ i.o.}) = 0\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By countable subadditivity, \\(P\\!\\left(\\bigcup_{k=n}^{\\infty} A_k\\right) \\leq \\sum_{k=n}^{\\infty} P(A_k)\\). Since \\(\\sum P(A_n) < \\infty\\), the tail \\(\\sum_{k=n}^{\\infty} P(A_k) \\to 0\\) as \\(n \\to \\infty\\). The sets \\(B_n = \\bigcup_{k=n}^{\\infty} A_k\\) decrease, so by continuity from above (Chapter 2),</p>
                        \\[P(A_n \\text{ i.o.}) = P\\!\\left(\\bigcap_n B_n\\right) = \\lim_{n \\to \\infty} P(B_n) \\leq \\lim_{n \\to \\infty} \\sum_{k=n}^{\\infty} P(A_k) = 0.\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.18 (Second Borel-Cantelli Lemma)</div>
                    <div class="env-body">
                        <p>If the events \\(A_1, A_2, \\ldots\\) are <strong>independent</strong> and \\(\\sum_{n=1}^{\\infty} P(A_n) = \\infty\\), then \\(P(A_n \\text{ i.o.}) = 1\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>It suffices to show \\(P(B_n^c) = 0\\) for each \\(B_n = \\bigcup_{k=n}^{\\infty} A_k\\). For any \\(N > n\\),</p>
                        \\[P\\!\\left(\\bigcap_{k=n}^{N} A_k^c\\right) = \\prod_{k=n}^{N} (1 - P(A_k)) \\leq \\prod_{k=n}^{N} e^{-P(A_k)} = e^{-\\sum_{k=n}^{N} P(A_k)}.\\]
                        <p>Since \\(\\sum P(A_k) = \\infty\\), the right side tends to 0 as \\(N \\to \\infty\\). By continuity from above, \\(P(B_n^c) = \\lim_{N \\to \\infty} P(\\bigcap_{k=n}^N A_k^c) = 0\\). Since this holds for all \\(n\\), \\(P(A_n \\text{ i.o.}) = 1\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.19 (Monkey Typing Shakespeare)</div>
                    <div class="env-body">
                        <p>A monkey types uniformly random characters from an alphabet of size 26. Let \\(A_n\\) be the event that the \\(n\\)-th block of 18 characters spells "to be or not to be" (with probability \\(p = 26^{-18}\\)). The blocks are independent, and \\(\\sum P(A_n) = \\sum p = \\infty\\). By the second Borel-Cantelli lemma, the monkey types this phrase infinitely often, with probability 1. The first Borel-Cantelli lemma tells us nothing here (the sum diverges), but if \\(p\\) were replaced by \\(p_n = 1/n^2\\), the phrase would occur only finitely often a.s.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'borel-cantelli-demo',
                    title: 'Borel-Cantelli Lemma Demonstration',
                    description: 'Visualize a sequence of independent events with tunable probabilities. When the sum of probabilities diverges, events keep occurring (BC2). When it converges, only finitely many occur (BC1).',
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

                        var exponent = 0.5;
                        var nEvents = 200;
                        var seed = 42;

                        VizEngine.createSlider(controls, 'Exponent alpha (p_n = 1/n^alpha)', 0.2, 2.5, exponent, 0.1, function(v) {
                            exponent = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Number of events', 50, 500, nEvents, 10, function(v) {
                            nEvents = Math.round(v);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Random seed', 1, 100, seed, 1, function(v) {
                            seed = Math.round(v);
                            draw();
                        });

                        function lcg(s) {
                            return ((s * 1664525 + 1013904223) & 0x7fffffff);
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { l: 55, r: 25, t: 60, b: 55 };
                            var pw = w - margin.l - margin.r;
                            var ph = h - margin.t - margin.b;

                            // Generate occurrences
                            var occurrences = [];
                            var cumProb = 0;
                            var totalOccurred = 0;
                            var s = seed * 54321;
                            for (var n = 1; n <= nEvents; n++) {
                                var pn = 1.0 / Math.pow(n, exponent);
                                cumProb += pn;
                                s = lcg(s);
                                var u = (s & 0x7fffffff) / 0x7fffffff;
                                var occurred = u < pn ? 1 : 0;
                                if (occurred) totalOccurred++;
                                occurrences.push({ n: n, p: pn, occurred: occurred });
                            }

                            var converges = exponent > 1;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Borel-Cantelli: p_n = 1/n^' + exponent.toFixed(1), w / 2, 18);

                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillStyle = converges ? colors.teal : colors.orange;
                            var sumText = converges ? 'Sum P(A_n) CONVERGES' : 'Sum P(A_n) DIVERGES';
                            ctx.fillText(sumText + ' (partial sum = ' + cumProb.toFixed(2) + ') | Occurrences: ' + totalOccurred + '/' + nEvents, w / 2, 38);

                            var bcText = converges ? 'BC1: Only finitely many occur a.s.' : 'BC2 (independent): Infinitely many occur a.s.';
                            ctx.fillStyle = colors.muted;
                            ctx.fillText(bcText, w / 2, 52);

                            // Draw event grid
                            var cols = Math.ceil(Math.sqrt(nEvents * pw / ph));
                            var rows = Math.ceil(nEvents / cols);
                            var cellW = pw / cols;
                            var cellH = ph / rows;
                            var cellSize = Math.min(cellW, cellH) * 0.85;

                            for (var i = 0; i < occurrences.length; i++) {
                                var col = i % cols;
                                var row = Math.floor(i / cols);
                                var cx = margin.l + col * cellW + cellW / 2;
                                var cy = margin.t + row * cellH + cellH / 2;

                                if (occurrences[i].occurred) {
                                    ctx.fillStyle = colors.orange;
                                    ctx.globalAlpha = 0.3 + 0.7 * occurrences[i].p;
                                    ctx.fillRect(cx - cellSize / 2, cy - cellSize / 2, cellSize, cellSize);
                                    ctx.globalAlpha = 1.0;
                                } else {
                                    ctx.strokeStyle = 'rgba(139,148,158,0.2)';
                                    ctx.lineWidth = 0.5;
                                    ctx.strokeRect(cx - cellSize / 2, cy - cellSize / 2, cellSize, cellSize);
                                }
                            }

                            // X-axis label
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Each cell = one event A_n (orange = occurred, dark = did not occur)', w / 2, h - 8);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'A polling firm conducts independent surveys, each reaching voter \\(v\\) with probability \\(p_n = 1/(n \\ln n)\\) on the \\(n\\)-th survey (for \\(n \\geq 2\\)). Does the firm reach voter \\(v\\) infinitely often? Which Borel-Cantelli lemma applies?',
                    hint: 'Determine whether \\(\\sum_{n=2}^{\\infty} 1/(n \\ln n)\\) converges or diverges (integral test), then apply the appropriate lemma.',
                    solution: 'By the integral test, \\(\\int_2^{\\infty} \\frac{dx}{x \\ln x} = [\\ln(\\ln x)]_2^{\\infty} = \\infty\\), so \\(\\sum 1/(n \\ln n) = \\infty\\). Since the surveys are independent, the second Borel-Cantelli lemma gives \\(P(\\text{voter } v \\text{ reached i.o.}) = 1\\). The firm will reach every specific voter infinitely often, almost surely.'
                },
                {
                    question: 'Let \\(X_1, X_2, \\ldots\\) be independent with \\(P(X_n > n) = 1/n^2\\). Show that \\(P(X_n > n \\text{ for infinitely many } n) = 0\\).',
                    hint: 'Let \\(A_n = \\{X_n > n\\}\\). Check \\(\\sum P(A_n)\\) and apply the first Borel-Cantelli lemma. Independence is not needed here.',
                    solution: '\\(\\sum_{n=1}^{\\infty} P(A_n) = \\sum 1/n^2 = \\pi^2/6 < \\infty\\). By the first Borel-Cantelli lemma, \\(P(A_n \\text{ i.o.}) = 0\\). That is, with probability one, only finitely many \\(X_n\\) exceed \\(n\\). Note: independence was not used. The first BC lemma requires no independence assumption.'
                },
                {
                    question: 'Give an example of <em>dependent</em> events \\(A_1, A_2, \\ldots\\) with \\(\\sum P(A_n) = \\infty\\) but \\(P(A_n \\text{ i.o.}) = 0\\). This shows that independence is essential in the second Borel-Cantelli lemma.',
                    hint: 'Try taking \\(A_n = A\\) for all \\(n\\), where \\(A\\) is a fixed event with \\(P(A) = 0\\). That is too easy. Instead, try \\(A_n = A\\) with \\(P(A) > 0\\) but make the limsup fail. Actually, the simplest example: \\(A_n = A\\) for a fixed event with \\(0 < P(A) < 1\\) gives i.o. So try a different approach.',
                    solution: 'Let \\(\\Omega = [0,1]\\) with Lebesgue measure. Define \\(A_n = [0, 1/n]\\). Then \\(P(A_n) = 1/n\\) and \\(\\sum P(A_n) = \\infty\\). But \\(\\limsup A_n = \\bigcap_n \\bigcup_{k \\geq n} [0, 1/k] = \\bigcap_n [0, 1/n] = \\{0\\}\\), which has \\(P(\\{0\\}) = 0\\). So infinitely many \\(A_n\\) occur only at the single point 0, which has probability zero. The events are highly dependent (nested), and the second BC lemma does not apply.'
                }
            ]
        },

        // ============================================================
        // Section 4: Conditional Expectation
        // ============================================================
        {
            id: 'conditional-expectation',
            title: 'Conditional Expectation',
            content: `
                <div class="bridge section-bridge">
                    <p>In elementary probability, conditioning on an event \\(B\\) with \\(P(B) > 0\\) is straightforward: \\(P(A|B) = P(A \\cap B)/P(B)\\). But what does it mean to condition on a continuous random variable \\(Y\\), where \\(P(Y = y) = 0\\) for every individual value \\(y\\)? Measure theory, specifically the Radon-Nikodym theorem (Chapter 11), provides the definitive answer.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define conditional expectation \\(E[X | \\mathcal{G}]\\) as an orthogonal projection in \\(L^2\\), characterize it via the Radon-Nikodym theorem, and establish its key properties. See how this resolves the conditioning paradox for continuous random variables.</p>
                </div>

                <h2>The Problem with Naive Conditioning</h2>

                <div class="env-block example">
                    <div class="env-title">Example 14.20 (The Conditioning Paradox)</div>
                    <div class="env-body">
                        <p>Suppose \\((X, Y)\\) is uniformly distributed on the unit disk \\(\\{(x,y) : x^2 + y^2 \\leq 1\\}\\). We want \\(E[X | Y = 0.5]\\). But \\(P(Y = 0.5) = 0\\), so the ratio \\(P(X \\in A, Y = 0.5)/P(Y = 0.5)\\) is \\(0/0\\). The elementary definition fails. We need a definition that does not require conditioning on events of positive probability.</p>
                    </div>
                </div>

                <h2>The Measure-Theoretic Definition</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.21 (Conditional Expectation)</div>
                    <div class="env-body">
                        <p>Let \\(X \\in L^1(\\Omega, \\mathcal{F}, P)\\) and let \\(\\mathcal{G} \\subseteq \\mathcal{F}\\) be a sub-sigma-algebra. The <strong>conditional expectation</strong> \\(E[X | \\mathcal{G}]\\) is the (a.s. unique) random variable satisfying:</p>
                        <ol>
                            <li><strong>Measurability:</strong> \\(E[X | \\mathcal{G}]\\) is \\(\\mathcal{G}\\)-measurable.</li>
                            <li><strong>Integral condition:</strong> For every \\(G \\in \\mathcal{G}\\),
                            \\[\\int_G E[X | \\mathcal{G}]\\,dP = \\int_G X\\,dP.\\]</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.22 (Existence and Uniqueness)</div>
                    <div class="env-body">
                        <p>Conditional expectation exists and is unique (a.s.). This follows from the Radon-Nikodym theorem (Chapter 11). Define the signed measure \\(\\nu(G) = \\int_G X\\,dP\\) on \\(\\mathcal{G}\\). Then \\(\\nu \\ll P|_{\\mathcal{G}}\\), and the Radon-Nikodym derivative \\(d\\nu/dP|_{\\mathcal{G}}\\) is precisely \\(E[X | \\mathcal{G}]\\).</p>
                    </div>
                </div>

                <h2>The Projection Viewpoint</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.23 (Conditional Expectation as Orthogonal Projection)</div>
                    <div class="env-body">
                        <p>If \\(X \\in L^2(\\Omega, \\mathcal{F}, P)\\), then \\(E[X | \\mathcal{G}]\\) is the orthogonal projection of \\(X\\) onto the closed subspace \\(L^2(\\Omega, \\mathcal{G}, P)\\). That is, \\(E[X | \\mathcal{G}]\\) is the unique element of \\(L^2(\\mathcal{G})\\) minimizing</p>
                        \\[\\|X - Z\\|_2^2 = E[(X - Z)^2]\\]
                        <p>over all \\(\\mathcal{G}\\)-measurable \\(Z \\in L^2\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Best Guess with Partial Information)</div>
                    <div class="env-body">
                        <p>Think of \\(\\mathcal{G}\\) as representing "partial information." If \\(\\mathcal{G} = \\sigma(Y)\\), then \\(\\mathcal{G}\\)-measurable functions are precisely those that can be written as \\(g(Y)\\). The conditional expectation \\(E[X | Y]\\) is the best (least-squares) prediction of \\(X\\) using only the information contained in \\(Y\\). The "error" \\(X - E[X|Y]\\) is orthogonal to every function of \\(Y\\), just like the residual in a least-squares regression is orthogonal to the fitted values.</p>
                    </div>
                </div>

                <h2>Key Properties</h2>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 14.24 (Properties of Conditional Expectation)</div>
                    <div class="env-body">
                        <p>Let \\(X, Y \\in L^1(P)\\) and \\(\\mathcal{G}, \\mathcal{H}\\) be sub-sigma-algebras of \\(\\mathcal{F}\\).</p>
                        <ol>
                            <li><strong>Linearity:</strong> \\(E[aX + bY | \\mathcal{G}] = aE[X|\\mathcal{G}] + bE[Y|\\mathcal{G}]\\) a.s.</li>
                            <li><strong>Tower property:</strong> If \\(\\mathcal{H} \\subseteq \\mathcal{G}\\), then \\(E[E[X|\\mathcal{G}] | \\mathcal{H}] = E[X|\\mathcal{H}]\\) a.s.</li>
                            <li><strong>Taking out what is known:</strong> If \\(Y\\) is \\(\\mathcal{G}\\)-measurable and bounded, \\(E[YX|\\mathcal{G}] = Y \\cdot E[X|\\mathcal{G}]\\) a.s.</li>
                            <li><strong>Independence:</strong> If \\(X\\) is independent of \\(\\mathcal{G}\\), then \\(E[X|\\mathcal{G}] = E[X]\\) a.s.</li>
                            <li><strong>Total expectation:</strong> \\(E[E[X|\\mathcal{G}]] = E[X]\\) (integrate property 2 with \\(\\mathcal{H} = \\{\\emptyset, \\Omega\\}\\)).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.25 (Insurance: Conditional Claim Severity)</div>
                    <div class="env-body">
                        <p>An insurer classifies policyholders by risk type \\(Y \\in \\{\\text{low}, \\text{high}\\}\\). The claim amount \\(X\\) depends on \\(Y\\). Given \\(E[X | Y = \\text{low}] = 200\\) and \\(E[X | Y = \\text{high}] = 800\\) with \\(P(Y = \\text{high}) = 0.3\\), the tower property (law of total expectation) yields \\(E[X] = E[E[X|Y]] = 200(0.7) + 800(0.3) = 380\\). The conditional expectation \\(E[X|Y]\\) is a random variable taking value 200 on \\(\\{Y = \\text{low}\\}\\) and 800 on \\(\\{Y = \\text{high}\\}\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'conditional-expectation-projection',
                    title: 'Conditional Expectation as Projection',
                    description: 'Visualize conditional expectation as orthogonal projection in L^2. A random variable X (a vector in function space) is projected onto the subspace of G-measurable functions. The residual is orthogonal to the subspace.',
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

                        var angle = 55;
                        var showResidual = 1;

                        VizEngine.createSlider(controls, 'Angle of X from G-subspace (degrees)', 5, 85, angle, 1, function(v) {
                            angle = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Show residual (0=no, 1=yes)', 0, 1, showResidual, 1, function(v) {
                            showResidual = Math.round(v);
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var cx = w * 0.4;
                            var cy = h * 0.7;
                            var scale = Math.min(w, h) * 0.35;

                            // Subspace G direction (horizontal-ish, tilted slightly)
                            var gAngle = -0.15;
                            var gDirX = Math.cos(gAngle);
                            var gDirY = Math.sin(gAngle);

                            // Draw the G-subspace as a line/plane
                            ctx.strokeStyle = colors.teal;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(cx - gDirX * scale * 1.4, cy - gDirY * scale * 1.4);
                            ctx.lineTo(cx + gDirX * scale * 1.4, cy + gDirY * scale * 1.4);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Label subspace
                            ctx.fillStyle = colors.teal;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('L\u00B2(\u03A9, G, P)', cx + gDirX * scale * 1.15 + 5, cy + gDirY * scale * 1.15 - 10);

                            // X vector
                            var rad = angle * Math.PI / 180;
                            var xVecAngle = gAngle - rad;
                            var xLen = scale * 0.9;
                            var xTipX = cx + Math.cos(xVecAngle) * xLen;
                            var xTipY = cy + Math.sin(xVecAngle) * xLen;

                            // Projection onto G
                            var dot = Math.cos(xVecAngle) * gDirX + Math.sin(xVecAngle) * gDirY;
                            var projLen = xLen * dot;
                            var projX = cx + gDirX * projLen;
                            var projY = cy + gDirY * projLen;

                            // Draw projection (E[X|G]) vector
                            ctx.strokeStyle = colors.green;
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(cx, cy);
                            ctx.lineTo(projX, projY);
                            ctx.stroke();

                            // Arrowhead for projection
                            var pAng = Math.atan2(projY - cy, projX - cx);
                            ctx.fillStyle = colors.green;
                            ctx.beginPath();
                            ctx.moveTo(projX, projY);
                            ctx.lineTo(projX - 10 * Math.cos(pAng - 0.3), projY - 10 * Math.sin(pAng - 0.3));
                            ctx.lineTo(projX - 10 * Math.cos(pAng + 0.3), projY - 10 * Math.sin(pAng + 0.3));
                            ctx.closePath();
                            ctx.fill();

                            // Draw X vector
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(cx, cy);
                            ctx.lineTo(xTipX, xTipY);
                            ctx.stroke();

                            // Arrowhead for X
                            var xAng = Math.atan2(xTipY - cy, xTipX - cx);
                            ctx.fillStyle = colors.blue;
                            ctx.beginPath();
                            ctx.moveTo(xTipX, xTipY);
                            ctx.lineTo(xTipX - 10 * Math.cos(xAng - 0.3), xTipY - 10 * Math.sin(xAng - 0.3));
                            ctx.lineTo(xTipX - 10 * Math.cos(xAng + 0.3), xTipY - 10 * Math.sin(xAng + 0.3));
                            ctx.closePath();
                            ctx.fill();

                            // Residual
                            if (showResidual) {
                                ctx.strokeStyle = colors.red;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath();
                                ctx.moveTo(projX, projY);
                                ctx.lineTo(xTipX, xTipY);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                // Right-angle marker
                                var rSize = 12;
                                var perpX = (xTipX - projX);
                                var perpY = (xTipY - projY);
                                var perpNorm = Math.sqrt(perpX * perpX + perpY * perpY);
                                if (perpNorm > 0) {
                                    perpX /= perpNorm; perpY /= perpNorm;
                                    var parX = gDirX, parY = gDirY;
                                    if (projLen < 0) { parX = -parX; parY = -parY; }
                                    ctx.strokeStyle = colors.muted;
                                    ctx.lineWidth = 1.5;
                                    ctx.beginPath();
                                    ctx.moveTo(projX + perpX * rSize, projY + perpY * rSize);
                                    ctx.lineTo(projX + perpX * rSize + parX * rSize, projY + perpY * rSize + parY * rSize);
                                    ctx.lineTo(projX + parX * rSize, projY + parY * rSize);
                                    ctx.stroke();
                                }

                                ctx.fillStyle = colors.red;
                                ctx.font = '12px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                var midRX = (projX + xTipX) / 2 + 8;
                                var midRY = (projY + xTipY) / 2;
                                ctx.fillText('X \u2212 E[X|G]', midRX, midRY);
                                ctx.fillText('(residual \u22A5 G)', midRX, midRY + 14);
                            }

                            // Labels
                            ctx.fillStyle = colors.blue;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('X', xTipX + 8, xTipY - 5);

                            ctx.fillStyle = colors.green;
                            ctx.fillText('E[X|G]', projX + 8, projY + 20);

                            // Origin
                            ctx.fillStyle = colors.text;
                            ctx.beginPath();
                            ctx.arc(cx, cy, 4, 0, 2 * Math.PI);
                            ctx.fill();
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('0', cx - 10, cy + 5);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Conditional Expectation = Orthogonal Projection in L\u00B2', w / 2, 25);

                            // Info
                            var errNorm = Math.sin(rad);
                            var projNorm = Math.abs(Math.cos(rad));
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillStyle = colors.muted;
                            ctx.textAlign = 'center';
                            ctx.fillText('||E[X|G]|| / ||X|| = cos(' + angle + '\u00B0) = ' + projNorm.toFixed(3) +
                                '    ||X \u2212 E[X|G]|| / ||X|| = sin(' + angle + '\u00B0) = ' + errNorm.toFixed(3), w / 2, h - 15);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X\\) be uniform on \\([0,1]\\) and \\(Y = \\mathbf{1}_{[0, 1/2]}(X)\\). Compute \\(E[X | Y]\\) explicitly. What values does this conditional expectation take?',
                    hint: 'The sigma-algebra \\(\\sigma(Y) = \\{\\emptyset, [0,1/2], (1/2,1], [0,1]\\}\\). On \\(\\{Y=1\\} = [0,1/2]\\), compute \\(E[X | Y=1] = E[X | X \\in [0,1/2]]\\).',
                    solution: 'On \\(\\{Y=1\\} = [0,1/2]\\): \\(E[X | Y=1] = \\frac{\\int_0^{1/2} x\\,dx}{1/2} = \\frac{1/8}{1/2} = 1/4\\). On \\(\\{Y=0\\} = (1/2,1]\\): \\(E[X | Y=0] = \\frac{\\int_{1/2}^{1} x\\,dx}{1/2} = \\frac{3/8}{1/2} = 3/4\\). So \\(E[X|Y] = (1/4)\\mathbf{1}_{[0,1/2]} + (3/4)\\mathbf{1}_{(1/2,1]}\\). Check: \\(E[E[X|Y]] = (1/4)(1/2) + (3/4)(1/2) = 1/2 = E[X]\\). The tower property holds.'
                },
                {
                    question: 'Prove the tower property: if \\(\\mathcal{H} \\subseteq \\mathcal{G} \\subseteq \\mathcal{F}\\), then \\(E[E[X|\\mathcal{G}] | \\mathcal{H}] = E[X|\\mathcal{H}]\\) a.s.',
                    hint: 'Verify the two defining properties. Let \\(Z = E[X|\\mathcal{G}]\\). Show \\(E[Z|\\mathcal{H}]\\) is \\(\\mathcal{H}\\)-measurable and satisfies \\(\\int_H E[Z|\\mathcal{H}]\\,dP = \\int_H X\\,dP\\) for all \\(H \\in \\mathcal{H}\\).',
                    solution: 'Let \\(Z = E[X|\\mathcal{G}]\\) and \\(W = E[Z|\\mathcal{H}]\\). Then \\(W\\) is \\(\\mathcal{H}\\)-measurable by definition. For any \\(H \\in \\mathcal{H}\\), since \\(\\mathcal{H} \\subseteq \\mathcal{G}\\) we have \\(H \\in \\mathcal{G}\\), so: \\(\\int_H W\\,dP = \\int_H Z\\,dP\\) (by definition of \\(W = E[Z|\\mathcal{H}]\\)) \\(= \\int_H X\\,dP\\) (by definition of \\(Z = E[X|\\mathcal{G}]\\), since \\(H \\in \\mathcal{G}\\)). So \\(W\\) satisfies both defining properties of \\(E[X|\\mathcal{H}]\\), hence \\(W = E[X|\\mathcal{H}]\\) a.s. by uniqueness.'
                },
                {
                    question: 'In a poll, let \\(X_i = 1\\) if voter \\(i\\) supports a candidate and \\(X_i = 0\\) otherwise. The true support rate \\(p\\) is itself random (the pollster is uncertain about it), with \\(E[p] = 0.5\\) and \\(\\text{Var}(p) = 0.01\\). Conditional on \\(p\\), the \\(X_i\\) are i.i.d. Bernoulli(\\(p\\)). Compute \\(E[\\bar{X}_n]\\) and \\(\\text{Var}(\\bar{X}_n)\\) where \\(\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i\\).',
                    hint: 'Use the tower property: \\(E[\\bar{X}_n] = E[E[\\bar{X}_n | p]]\\). For variance, use \\(\\text{Var}(\\bar{X}_n) = E[\\text{Var}(\\bar{X}_n|p)] + \\text{Var}(E[\\bar{X}_n|p])\\) (law of total variance).',
                    solution: 'By the tower property, \\(E[\\bar{X}_n] = E[E[\\bar{X}_n|p]] = E[p] = 0.5\\). For variance, \\(\\text{Var}(\\bar{X}_n|p) = p(1-p)/n\\) and \\(E[\\bar{X}_n|p] = p\\). The law of total variance gives \\(\\text{Var}(\\bar{X}_n) = E[p(1-p)/n] + \\text{Var}(p) = \\frac{E[p] - E[p^2]}{n} + 0.01\\). Since \\(E[p^2] = \\text{Var}(p) + (E[p])^2 = 0.01 + 0.25 = 0.26\\), we get \\(\\text{Var}(\\bar{X}_n) = \\frac{0.5 - 0.26}{n} + 0.01 = \\frac{0.24}{n} + 0.01\\). Even with \\(n \\to \\infty\\), the variance does not vanish; the irreducible \\(0.01\\) reflects uncertainty about \\(p\\) itself.'
                }
            ]
        },

        // ============================================================
        // Section 5: The Law of Large Numbers and Central Limit Theorem
        // ============================================================
        {
            id: 'lln-clt',
            title: 'The Law of Large Numbers and Central Limit Theorem',
            content: `
                <div class="bridge section-bridge">
                    <p>We have defined probability spaces, expectation, independence, and conditional expectation. Now we harvest the two most celebrated results in all of probability: the Law of Large Numbers (averages converge to the mean) and the Central Limit Theorem (fluctuations around the mean are Gaussian). Both are consequences of the measure-theoretic machinery developed in previous chapters.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove the Weak and Strong Laws of Large Numbers using Chebyshev's inequality and the Borel-Cantelli lemma. State the Central Limit Theorem and explain how it follows from convergence of characteristic functions (Fourier transforms on probability spaces).</p>
                </div>

                <h2>The Weak Law of Large Numbers</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.26 (Weak Law of Large Numbers)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, X_2, \\ldots\\) be i.i.d. random variables with \\(E[X_1] = \\mu\\) and \\(\\text{Var}(X_1) = \\sigma^2 < \\infty\\). Let \\(\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i\\). Then for every \\(\\varepsilon > 0\\),</p>
                        \\[P(|\\bar{X}_n - \\mu| > \\varepsilon) \\to 0 \\quad \\text{as } n \\to \\infty.\\]
                        <p>That is, \\(\\bar{X}_n \\to \\mu\\) in probability (convergence in measure, Chapter 8).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By independence, \\(\\text{Var}(\\bar{X}_n) = \\sigma^2/n\\). Chebyshev's inequality (Theorem 14.8) gives</p>
                        \\[P(|\\bar{X}_n - \\mu| > \\varepsilon) \\leq \\frac{\\text{Var}(\\bar{X}_n)}{\\varepsilon^2} = \\frac{\\sigma^2}{n\\varepsilon^2} \\to 0.\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>The Strong Law of Large Numbers</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.27 (Strong Law of Large Numbers, Kolmogorov)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, X_2, \\ldots\\) be i.i.d. with \\(E[|X_1|] < \\infty\\) and \\(E[X_1] = \\mu\\). Then</p>
                        \\[\\bar{X}_n \\to \\mu \\quad \\text{almost surely}.\\]
                        <p>This is a.e. convergence (Chapter 8), which is strictly stronger than convergence in probability.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch (under the stronger assumption \\(E[X_1^4] < \\infty\\))</div>
                    <div class="env-body">
                        <p>WLOG \\(\\mu = 0\\). Expand \\(E[(\\bar{X}_n)^4] = E[(\\sum X_i)^4]/n^4\\). By independence, most cross terms vanish, and</p>
                        \\[E\\!\\left[\\left(\\sum_{i=1}^n X_i\\right)^{\\!4}\\right] = n\\,E[X_1^4] + 3n(n-1)(E[X_1^2])^2 = O(n^2).\\]
                        <p>So \\(E[\\bar{X}_n^4] = O(1/n^2)\\). By Markov's inequality, \\(P(|\\bar{X}_n| > \\varepsilon) \\leq E[\\bar{X}_n^4]/\\varepsilon^4 = O(1/n^2)\\). Since \\(\\sum 1/n^2 < \\infty\\), the first Borel-Cantelli lemma gives \\(P(|\\bar{X}_n| > \\varepsilon \\text{ i.o.}) = 0\\) for every \\(\\varepsilon > 0\\). This is precisely a.s. convergence to 0.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Full Proof)</div>
                    <div class="env-body">
                        <p>The proof under the minimal assumption \\(E[|X_1|] < \\infty\\) (no moment assumption beyond the first) is substantially more delicate. It uses truncation (replacing \\(X_i\\) by \\(X_i \\mathbf{1}_{|X_i| \\leq i}\\)), Kolmogorov's maximal inequality, and a careful subsequence argument. The key insight is that DCT ensures the truncated variables approximate the originals. See Durrett (2019) for the complete argument.</p>
                    </div>
                </div>

                <h2>The Central Limit Theorem</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.28 (Convergence in Distribution)</div>
                    <div class="env-body">
                        <p>Random variables \\(Y_n\\) <strong>converge in distribution</strong> to \\(Y\\), written \\(Y_n \\xrightarrow{d} Y\\), if \\(F_{Y_n}(t) \\to F_Y(t)\\) at every continuity point \\(t\\) of \\(F_Y\\). Equivalently, \\(\\int g\\,d\\mu_{Y_n} \\to \\int g\\,d\\mu_Y\\) for every bounded continuous \\(g\\). This is weak convergence of measures (the vague topology on the space of probability measures).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.29 (Central Limit Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, X_2, \\ldots\\) be i.i.d. with \\(E[X_1] = \\mu\\) and \\(\\text{Var}(X_1) = \\sigma^2 \\in (0, \\infty)\\). Then</p>
                        \\[\\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} = \\frac{\\sum_{i=1}^n (X_i - \\mu)}{\\sigma\\sqrt{n}} \\xrightarrow{d} N(0,1).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch (via characteristic functions)</div>
                    <div class="env-body">
                        <p>The <strong>characteristic function</strong> of a random variable \\(Y\\) is \\(\\varphi_Y(t) = E[e^{itY}] = \\int e^{itx}\\,d\\mu_Y(x)\\), the Fourier transform of the distribution. L&eacute;vy's continuity theorem states that \\(Y_n \\xrightarrow{d} Y\\) if and only if \\(\\varphi_{Y_n}(t) \\to \\varphi_Y(t)\\) for all \\(t\\), and the limit is continuous at 0.</p>
                        <p>Let \\(Z_i = (X_i - \\mu)/\\sigma\\) so \\(E[Z_i] = 0\\), \\(E[Z_i^2] = 1\\). Then \\(\\varphi_{Z_i}(t) = 1 - t^2/2 + o(t^2)\\) as \\(t \\to 0\\), and</p>
                        \\[\\varphi_{S_n/\\sqrt{n}}(t) = \\left[\\varphi_{Z_1}\\!\\left(\\frac{t}{\\sqrt{n}}\\right)\\right]^n = \\left[1 - \\frac{t^2}{2n} + o(1/n)\\right]^n \\to e^{-t^2/2},\\]
                        <p>which is the characteristic function of \\(N(0,1)\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.30 (Polling Margin of Error)</div>
                    <div class="env-body">
                        <p>A pollster surveys \\(n = 1000\\) voters, each independently supporting candidate A with unknown probability \\(p\\). The sample proportion \\(\\hat{p} = \\bar{X}_n\\) satisfies \\(\\sqrt{n}(\\hat{p} - p)/\\sqrt{p(1-p)} \\xrightarrow{d} N(0,1)\\) by the CLT. For \\(p \\approx 0.5\\), the standard error is \\(\\sqrt{0.25/1000} \\approx 0.016\\), giving a 95% margin of error of \\(\\pm 1.96 \\times 0.016 \\approx \\pm 3.1\\%\\). This is why polls of 1000 people report margins around \\(\\pm 3\\%\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'clt-histogram',
                    title: 'Central Limit Theorem in Action',
                    description: 'Draw many samples of size n from a chosen distribution, compute the standardized mean of each, and plot the histogram. As n grows, the histogram converges to the standard normal bell curve.',
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

                        var distType = 0;
                        var sampleSize = 5;
                        var nTrials = 2000;

                        var distNames = ['Uniform(0,1)', 'Exponential(1)', 'Bernoulli(0.3)', 'Dice (1-6)'];
                        var distMeans = [0.5, 1.0, 0.3, 3.5];
                        var distVars = [1/12, 1.0, 0.21, 35/12];

                        VizEngine.createSlider(controls, 'Distribution (0-3)', 0, 3, distType, 1, function(v) {
                            distType = Math.round(v);
                            generate();
                        });

                        VizEngine.createSlider(controls, 'Sample size n', 1, 100, sampleSize, 1, function(v) {
                            sampleSize = Math.round(v);
                            generate();
                        });

                        VizEngine.createSlider(controls, 'Number of trials', 200, 5000, nTrials, 100, function(v) {
                            nTrials = Math.round(v);
                            generate();
                        });

                        var zValues = [];

                        function lcg(s) {
                            return ((s * 1664525 + 1013904223) & 0x7fffffff);
                        }

                        function sampleOne(type, s) {
                            var u = (s & 0x7fffffff) / 0x7fffffff;
                            if (type === 0) return u;
                            if (type === 1) return -Math.log(1 - u + 1e-15);
                            if (type === 2) return u < 0.3 ? 1 : 0;
                            return Math.floor(u * 6) + 1;
                        }

                        function generate() {
                            zValues = [];
                            var mu = distMeans[distType];
                            var sig = Math.sqrt(distVars[distType]);
                            var s = 98765;
                            for (var t = 0; t < nTrials; t++) {
                                var sum = 0;
                                for (var i = 0; i < sampleSize; i++) {
                                    s = lcg(s);
                                    sum += sampleOne(distType, s);
                                }
                                var xbar = sum / sampleSize;
                                var z = (xbar - mu) / (sig / Math.sqrt(sampleSize));
                                zValues.push(z);
                            }
                            draw();
                        }

                        function normalPDF(x) {
                            return Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { l: 55, r: 25, t: 55, b: 55 };
                            var pw = w - margin.l - margin.r;
                            var ph = h - margin.t - margin.b;

                            var zMin = -4, zMax = 4;
                            var nBins = 40;
                            var binWidth = (zMax - zMin) / nBins;
                            var bins = new Array(nBins).fill(0);

                            for (var i = 0; i < zValues.length; i++) {
                                var idx = Math.floor((zValues[i] - zMin) / binWidth);
                                if (idx >= 0 && idx < nBins) bins[idx]++;
                            }

                            // Convert to density
                            var maxDensity = 0;
                            for (var i = 0; i < nBins; i++) {
                                bins[i] = bins[i] / (zValues.length * binWidth);
                                if (bins[i] > maxDensity) maxDensity = bins[i];
                            }
                            var normalMax = normalPDF(0);
                            var yMax = Math.max(maxDensity, normalMax) * 1.15;

                            function sx(x) { return margin.l + ((x - zMin) / (zMax - zMin)) * pw; }
                            function sy(y) { return margin.t + ph - (y / yMax) * ph; }

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('CLT: Standardized means of ' + distNames[distType] + ' (n = ' + sampleSize + ')', w / 2, 20);

                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillStyle = colors.muted;
                            ctx.fillText(nTrials + ' trials, ' + nBins + ' bins', w / 2, 38);

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.l, margin.t + ph);
                            ctx.lineTo(margin.l + pw, margin.t + ph);
                            ctx.stroke();

                            // X labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var z = -4; z <= 4; z++) {
                                ctx.fillText('' + z, sx(z), margin.t + ph + 18);
                            }
                            ctx.fillText('z = (X\u0304 \u2212 \u03BC) / (\u03C3/\u221An)', w / 2, h - 8);

                            // Histogram bars
                            ctx.fillStyle = 'rgba(88, 166, 255, 0.5)';
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 1;
                            for (var i = 0; i < nBins; i++) {
                                var x0 = sx(zMin + i * binWidth);
                                var x1 = sx(zMin + (i + 1) * binWidth);
                                var y0 = sy(bins[i]);
                                var y1 = sy(0);
                                ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
                                ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
                            }

                            // Normal PDF overlay
                            ctx.strokeStyle = colors.red;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var nPts = 200;
                            for (var i = 0; i <= nPts; i++) {
                                var z = zMin + (zMax - zMin) * i / nPts;
                                var y = normalPDF(z);
                                var px = sx(z), py = sy(y);
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Legend
                            ctx.fillStyle = colors.blue;
                            ctx.fillRect(margin.l + 10, margin.t + 5, 14, 10);
                            ctx.fillStyle = colors.text;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Histogram of standardized means', margin.l + 30, margin.t + 14);

                            ctx.strokeStyle = colors.red;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            ctx.moveTo(margin.l + 10, margin.t + 25);
                            ctx.lineTo(margin.l + 24, margin.t + 25);
                            ctx.stroke();
                            ctx.fillStyle = colors.text;
                            ctx.fillText('N(0,1) density', margin.l + 30, margin.t + 29);
                        }

                        generate();
                    }
                }
            ],
            exercises: [
                {
                    question: 'A roulette wheel has 18 red, 18 black, and 2 green slots. A gambler bets $1 on red each spin (winning $1 if red, losing $1 otherwise). After 10,000 spins, what does the SLLN say about the gambler\'s average gain per spin? What does the CLT say about the total gain?',
                    hint: 'Each spin yields \\(X_i = +1\\) with prob \\(18/38\\) and \\(X_i = -1\\) with prob \\(20/38\\). Compute \\(\\mu\\) and \\(\\sigma^2\\), then apply SLLN and CLT.',
                    solution: '\\(\\mu = E[X_i] = (18 - 20)/38 = -2/38 \\approx -0.0526\\). \\(E[X_i^2] = 1\\), so \\(\\sigma^2 = 1 - \\mu^2 \\approx 0.9972\\). SLLN: \\(\\bar{X}_n \\to -0.0526\\) a.s., so the gambler loses about 5.26 cents per spin in the long run. CLT: \\(S_n = \\sum X_i \\approx N(n\\mu, n\\sigma^2) = N(-526, 9972)\\). The gambler expects to lose $526, and \\(P(S_n > 0) \\approx P(Z > 526/\\sqrt{9972}) = P(Z > 5.27) \\approx 0\\). After 10,000 spins, a net profit is essentially impossible.'
                },
                {
                    question: 'Show that the SLLN is strictly stronger than the WLLN: give an example of a sequence converging in probability to \\(\\mu\\) but not almost surely.',
                    hint: 'Consider the "typewriter sequence" from Chapter 8: \\(f_n = \\mathbf{1}_{I_n}\\) where the intervals \\(I_n\\) cycle through \\([0,1]\\) with decreasing length. Adapt this to a probability setting.',
                    solution: 'On \\(([0,1], \\mathcal{B}, \\lambda)\\), define \\(Y_n = \\mathbf{1}_{I_n}\\) where the intervals \\(I_n\\) are the "typewriter sequence" from Chapter 8 (Section 3): \\(I_1 = [0,1]\\), \\(I_2 = [0, 1/2]\\), \\(I_3 = [1/2, 1]\\), \\(I_4 = [0, 1/3]\\), etc. Then \\(P(|Y_n| > \\varepsilon) = \\lambda(I_n) \\to 0\\), so \\(Y_n \\to 0\\) in probability. But for every \\(\\omega \\in [0,1]\\), \\(Y_n(\\omega) = 1\\) infinitely often and \\(Y_n(\\omega) = 0\\) infinitely often, so \\(Y_n(\\omega)\\) does not converge for any \\(\\omega\\). This is convergence in measure without a.e. convergence (exactly the gap between WLLN and SLLN).'
                },
                {
                    question: 'The CLT requires \\(\\sigma^2 < \\infty\\). Give an example of i.i.d. random variables with \\(E[|X_1|] < \\infty\\) but \\(\\text{Var}(X_1) = \\infty\\) where the CLT normalization \\(\\sqrt{n}\\) does not work. What happens instead?',
                    hint: 'Consider a distribution with density \\(f(x) \\propto |x|^{-3}\\) for \\(|x| > 1\\). This has finite mean (by symmetry, zero) but infinite variance.',
                    solution: 'Let \\(X\\) have density \\(f(x) = 1/(x^2)\\) for \\(|x| > 1\\) (suitably normalized). Then \\(E[X] = 0\\) by symmetry, but \\(E[X^2] = \\int_{|x|>1} x^2 \\cdot x^{-2}\\,dx/(\\text{const}) = \\int_{|x|>1} dx/(\\text{const}) = \\infty\\). The usual CLT fails. Instead, for distributions in the domain of attraction of a stable law with index \\(\\alpha \\in (1,2)\\), the sum \\(S_n/n^{1/\\alpha}\\) converges in distribution to a stable law (not Gaussian). The normalization is \\(n^{1/\\alpha}\\) instead of \\(\\sqrt{n}\\). This shows the finite-variance assumption is essential for the Gaussian limit.'
                }
            ]
        },

        // ============================================================
        // Section 6: Connections and the Measure-Theoretic Perspective
        // ============================================================
        {
            id: 'connections-measure-theory',
            title: 'Connections and the Measure-Theoretic Perspective',
            content: `
                <div class="bridge section-bridge">
                    <p>We have now seen the major results of probability theory derived from measure theory. In this final section, we step back and survey the connections systematically. Each probabilistic concept is rooted in a specific chapter of our development, and recognizing these connections deepens understanding of both subjects.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Map every major probabilistic concept to its measure-theoretic origin. Discuss the Kolmogorov extension theorem, zero-one laws, and the role of product measures in constructing stochastic processes. Highlight why measure theory is indispensable for modern probability.</p>
                </div>

                <h2>The Complete Dictionary</h2>

                <p>The following table extends the dictionary from Section 1, linking each probabilistic tool to the chapter where its measure-theoretic foundation was established.</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>Probability Concept</th><th>Measure Theory Foundation</th><th>Chapter</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Probability space</td><td>Finite measure space</td><td>Ch. 2</td></tr>
                        <tr><td>Kolmogorov extension</td><td>Carath&eacute;odory extension</td><td>Ch. 3</td></tr>
                        <tr><td>Uniform distribution on \\([0,1]\\)</td><td>Lebesgue measure</td><td>Ch. 4</td></tr>
                        <tr><td>Random variable</td><td>Measurable function</td><td>Ch. 5</td></tr>
                        <tr><td>Expectation</td><td>Lebesgue integral</td><td>Ch. 6</td></tr>
                        <tr><td>MCT, DCT, Fatou for expectations</td><td>Convergence theorems</td><td>Ch. 7</td></tr>
                        <tr><td>a.s., in prob., in distribution</td><td>Modes of convergence</td><td>Ch. 8</td></tr>
                        <tr><td>\\(L^p\\) moments, Hilbert space of r.v.'s</td><td>\\(L^p\\) spaces</td><td>Ch. 9</td></tr>
                        <tr><td>Signed expectations, Hahn decomp.</td><td>Signed measures</td><td>Ch. 10</td></tr>
                        <tr><td>Cond. expectation, densities</td><td>Radon-Nikodym theorem</td><td>Ch. 11</td></tr>
                        <tr><td>Independence, joint distributions</td><td>Product measures, Fubini</td><td>Ch. 12</td></tr>
                        <tr><td>Density recovery from CDF</td><td>Differentiation of measures</td><td>Ch. 13</td></tr>
                    </tbody>
                </table>

                <h2>The Kolmogorov Extension Theorem</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.31 (Kolmogorov Extension Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(\\{\\mu_F : F \\subseteq \\mathbb{N}, |F| < \\infty\\}\\) be a consistent family of finite-dimensional distributions on \\(\\mathbb{R}^F\\) (consistent means that marginalization agrees: projecting \\(\\mu_G\\) onto coordinates in \\(F \\subseteq G\\) recovers \\(\\mu_F\\)). Then there exists a unique probability measure \\(P\\) on \\((\\mathbb{R}^{\\mathbb{N}}, \\mathcal{B}(\\mathbb{R})^{\\otimes \\mathbb{N}})\\) whose finite-dimensional marginals are exactly the \\(\\mu_F\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Building Infinite from Finite)</div>
                    <div class="env-body">
                        <p>The Kolmogorov extension theorem is the Carath&eacute;odory extension theorem (Chapter 3) in disguise. The consistent family defines a premeasure on the algebra of "cylinder sets" (sets determined by finitely many coordinates). Carath&eacute;odory's machinery extends this to the full product sigma-algebra. This is how we construct infinite sequences of coin flips, Brownian motion, and all stochastic processes. Without the extension theorems of Chapter 3, modern probability could not handle infinite-dimensional settings.</p>
                    </div>
                </div>

                <h2>Zero-One Laws</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.32 (Tail Sigma-Algebra)</div>
                    <div class="env-body">
                        <p>Given independent random variables \\(X_1, X_2, \\ldots\\), the <strong>tail sigma-algebra</strong> is</p>
                        \\[\\mathcal{T} = \\bigcap_{n=1}^{\\infty} \\sigma(X_{n+1}, X_{n+2}, \\ldots).\\]
                        <p>Events in \\(\\mathcal{T}\\) depend on the "eventual behavior" of the sequence but not on any finite collection of \\(X_i\\)'s. Examples: \\(\\{\\sum X_n \\text{ converges}\\}\\), \\(\\{\\limsup \\bar{X}_n > 0\\}\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.33 (Kolmogorov Zero-One Law)</div>
                    <div class="env-body">
                        <p>If \\(X_1, X_2, \\ldots\\) are independent, then every event \\(A \\in \\mathcal{T}\\) satisfies \\(P(A) = 0\\) or \\(P(A) = 1\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>The key step is showing that \\(\\mathcal{T}\\) is independent of itself. Since \\(\\mathcal{T} \\subseteq \\sigma(X_{n+1}, X_{n+2}, \\ldots)\\), it is independent of \\(\\sigma(X_1, \\ldots, X_n)\\) for every \\(n\\). A Dynkin-system argument (using the \\(\\pi\\)-\\(\\lambda\\) theorem from Chapter 2) shows \\(\\mathcal{T}\\) is independent of \\(\\sigma(X_1, X_2, \\ldots) \\supseteq \\mathcal{T}\\). Hence for \\(A \\in \\mathcal{T}\\), \\(P(A) = P(A \\cap A) = P(A)^2\\), forcing \\(P(A) \\in \\{0, 1\\}\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.34 (Convergence of Random Series)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, X_2, \\ldots\\) be independent. The event \\(\\{\\sum_{n=1}^{\\infty} X_n \\text{ converges}\\}\\) belongs to the tail sigma-algebra (it does not depend on any finite number of terms). By the zero-one law, this series either converges a.s. or diverges a.s. There is no intermediate possibility. This is a purely measure-theoretic result with no elementary analogue.</p>
                    </div>
                </div>

                <h2>Why Measure Theory Is Indispensable</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark (What Breaks Without Measure Theory)</div>
                    <div class="env-body">
                        <p>Without the measure-theoretic framework, the following constructions are impossible or ill-defined:</p>
                        <ul>
                            <li><strong>Continuous random variables:</strong> Assigning probabilities to uncountable sample spaces requires sigma-algebras and the Carath&eacute;odory extension. Elementary "equally likely outcomes" fails.</li>
                            <li><strong>Conditional expectation on continuous variables:</strong> The Radon-Nikodym theorem is the only rigorous way to condition on events of probability zero.</li>
                            <li><strong>Stochastic processes:</strong> Constructing Brownian motion requires the Kolmogorov extension theorem on an uncountable product space.</li>
                            <li><strong>Rigorous limit theorems:</strong> The SLLN requires a.s. convergence (a measure-theoretic concept), and its proof uses Borel-Cantelli, which is a statement about measures of limsup sets.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Looking Ahead)</div>
                    <div class="env-body">
                        <p>This chapter has shown that probability theory is a specialized, rich application of everything we have built. The next frontier, not covered in this course, is stochastic processes: Brownian motion (which requires product measures on uncountable index sets), martingales (which require conditional expectation as we defined it), and stochastic calculus (which requires a careful extension of Lebesgue integration to stochastic integrals). All of these rest on the measure-theoretic foundations of Chapters 1 through 13.</p>
                    </div>
                </div>
            `,
            exercises: [
                {
                    question: 'Let \\(X_1, X_2, \\ldots\\) be independent Bernoulli(1/2) random variables (fair coin flips). Use the Kolmogorov zero-one law to show that \\(P(\\limsup_{n \\to \\infty} \\bar{X}_n = 1/2) \\in \\{0, 1\\}\\). Which value is it?',
                    hint: 'The event \\(\\{\\limsup \\bar{X}_n = 1/2\\}\\) is a tail event (it does not depend on any finite number of \\(X_i\\)). Apply the zero-one law, then use the SLLN to determine the probability.',
                    solution: 'The event \\(A = \\{\\limsup \\bar{X}_n = 1/2\\}\\) is measurable with respect to the tail sigma-algebra: changing finitely many \\(X_i\\) does not affect \\(\\limsup \\bar{X}_n\\). By the zero-one law, \\(P(A) \\in \\{0,1\\}\\). By the SLLN, \\(\\bar{X}_n \\to 1/2\\) a.s., which implies \\(\\limsup \\bar{X}_n = 1/2\\) a.s. Therefore \\(P(A) = 1\\).'
                },
                {
                    question: 'Explain precisely how the Kolmogorov extension theorem uses the Carath&eacute;odory extension theorem. What is the algebra? What is the premeasure? Why is consistency needed?',
                    hint: 'The algebra consists of cylinder sets (sets determined by finitely many coordinates). The premeasure assigns the finite-dimensional distribution to each cylinder set.',
                    solution: 'The sample space is \\(\\Omega = \\mathbb{R}^{\\mathbb{N}}\\). The algebra \\(\\mathcal{A}\\) consists of all cylinder sets \\(C = \\{\\omega : (\\omega_{i_1}, \\ldots, \\omega_{i_k}) \\in B\\}\\) for finite \\(\\{i_1,\\ldots,i_k\\} \\subset \\mathbb{N}\\) and Borel \\(B \\subseteq \\mathbb{R}^k\\). The premeasure is \\(\\mu_0(C) = \\mu_{\\{i_1,\\ldots,i_k\\}}(B)\\). Consistency ensures \\(\\mu_0\\) is well-defined: the same cylinder set can be described using different coordinate subsets, and consistency guarantees the assigned probability is the same regardless of representation. Carath&eacute;odory then extends \\(\\mu_0\\) from \\(\\mathcal{A}\\) to \\(\\sigma(\\mathcal{A}) = \\mathcal{B}(\\mathbb{R})^{\\otimes \\mathbb{N}}\\). The key technical step is verifying countable additivity of \\(\\mu_0\\), which uses tightness of probability measures on \\(\\mathbb{R}^k\\).'
                },
                {
                    question: 'Consider an infinite sequence of independent fair coin flips. Why can we not define the probability space using the power set \\(2^{\\{0,1\\}^{\\mathbb{N}}}\\) as the sigma-algebra? Why must we use the product sigma-algebra \\(\\mathcal{B}(\\{0,1\\})^{\\otimes \\mathbb{N}}\\)?',
                    hint: 'The product sigma-algebra is the smallest sigma-algebra making all coordinate projections measurable. Think about cardinality and the axiom of choice.',
                    solution: 'The set \\(\\{0,1\\}^{\\mathbb{N}}\\) has the cardinality of the continuum. Under ZFC, one can construct non-measurable subsets analogous to the Vitali set (Chapter 4). Specifically, the "fair coin" measure (the product measure \\((1/2, 1/2)^{\\otimes \\mathbb{N}}\\)) cannot be extended to all subsets of \\(\\{0,1\\}^{\\mathbb{N}}\\) while remaining countably additive. The product sigma-algebra \\(\\mathcal{B}(\\{0,1\\})^{\\otimes \\mathbb{N}}\\) is generated by the cylinder sets and is the natural domain for the product measure. It is strictly smaller than the power set but large enough to contain all events one can describe in terms of the individual coin flips (finite intersections, countable unions, limits). This is the same trade-off we encountered in Chapter 4: we sacrifice totality (measuring every set) to preserve countable additivity.'
                }
            ]
        }
    ]
});

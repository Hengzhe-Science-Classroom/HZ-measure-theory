window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch15',
    number: 15,
    title: 'Measure Theory and Fourier Analysis',
    subtitle: 'The Fourier Transform through the Lens of L^p Spaces',
    sections: [
        // ============================================================
        // Section 1: Fourier Transform on L^1(R^n)
        // ============================================================
        {
            id: 'fourier-transform-l1',
            title: 'Fourier Transform on L^1(\\(\\mathbb{R}^n\\))',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>Chapters 9 and 10 built the machinery of \\(L^p\\) spaces and complex measures.</strong> We now put this machinery to work in one of its most spectacular applications: Fourier analysis. The Fourier transform decomposes a function into its frequency components, and measure theory provides the natural language for making this decomposition rigorous. The interplay between \\(L^1\\) (where the Fourier transform is defined by an absolutely convergent integral), \\(L^2\\) (where it becomes a unitary operator), and the space of measures (where it extends to characteristic functions) is one of the great triumphs of modern analysis.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define the Fourier transform on \\(L^1(\\mathbb{R}^n)\\), establish its basic properties (linearity, continuity, behavior under translation and dilation), and prove the Riemann-Lebesgue lemma: the Fourier transform of an \\(L^1\\) function vanishes at infinity.</p>
                </div>

                <h2>Definition and First Properties</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Frequency Decomposition)</div>
                    <div class="env-body">
                        <p>The Fourier transform of \\(f\\) at frequency \\(\\xi\\) measures the correlation between \\(f\\) and the complex exponential \\(e^{-2\\pi i \\xi \\cdot x}\\). If \\(f\\) oscillates predominantly at frequency \\(\\xi_0\\), then the integral \\(\\int f(x) e^{-2\\pi i \\xi_0 \\cdot x}\\,dx\\) will be large, while at other frequencies the oscillations of \\(f\\) and \\(e^{-2\\pi i \\xi \\cdot x}\\) will tend to cancel. The absolute integrability condition \\(f \\in L^1\\) ensures this correlation integral converges.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.1 (Fourier Transform on \\(L^1\\))</div>
                    <div class="env-body">
                        <p>For \\(f \\in L^1(\\mathbb{R}^n)\\), the <strong>Fourier transform</strong> of \\(f\\) is the function \\(\\hat{f}: \\mathbb{R}^n \\to \\mathbb{C}\\) defined by</p>
                        \\[\\hat{f}(\\xi) = \\int_{\\mathbb{R}^n} f(x)\\, e^{-2\\pi i \\xi \\cdot x}\\,dx,\\]
                        <p>where \\(\\xi \\cdot x = \\sum_{j=1}^n \\xi_j x_j\\) is the standard inner product on \\(\\mathbb{R}^n\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Convention)</div>
                    <div class="env-body">
                        <p>There are several conventions for the Fourier transform, differing in the placement of the factor \\(2\\pi\\). We use the convention with \\(e^{-2\\pi i \\xi \\cdot x}\\), which has the advantage that Plancherel's theorem takes the clean form \\(\\|\\hat{f}\\|_2 = \\|f\\|_2\\) without any prefactors. Other common conventions place the \\(2\\pi\\) in the exponent as \\(e^{-i\\xi \\cdot x}\\) (then a factor of \\((2\\pi)^{-n/2}\\) appears in front), or distribute it symmetrically. These are all equivalent up to rescaling.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 15.2 (Basic Properties)</div>
                    <div class="env-body">
                        <p>Let \\(f, g \\in L^1(\\mathbb{R}^n)\\) and \\(a \\in \\mathbb{R}^n\\), \\(\\lambda > 0\\). Then:</p>
                        <ol>
                            <li><strong>Linearity:</strong> \\(\\widehat{\\alpha f + \\beta g} = \\alpha \\hat{f} + \\beta \\hat{g}\\) for \\(\\alpha, \\beta \\in \\mathbb{C}\\).</li>
                            <li><strong>Translation:</strong> If \\(\\tau_a f(x) = f(x - a)\\), then \\(\\widehat{\\tau_a f}(\\xi) = e^{-2\\pi i a \\cdot \\xi}\\hat{f}(\\xi)\\).</li>
                            <li><strong>Modulation:</strong> If \\(M_a f(x) = e^{2\\pi i a \\cdot x}f(x)\\), then \\(\\widehat{M_a f}(\\xi) = \\hat{f}(\\xi - a)\\).</li>
                            <li><strong>Dilation:</strong> If \\(D_\\lambda f(x) = f(\\lambda x)\\), then \\(\\widehat{D_\\lambda f}(\\xi) = \\lambda^{-n} \\hat{f}(\\xi/\\lambda)\\).</li>
                            <li><strong>Boundedness:</strong> \\(\\|\\hat{f}\\|_\\infty \\leq \\|f\\|_1\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Proposition 15.2</div>
                    <div class="env-body">
                        <p><strong>(1)</strong> follows immediately from linearity of integration.</p>
                        <p><strong>(2)</strong> Substituting \\(y = x - a\\):</p>
                        \\[\\widehat{\\tau_a f}(\\xi) = \\int f(x-a)e^{-2\\pi i \\xi \\cdot x}\\,dx = \\int f(y)e^{-2\\pi i \\xi \\cdot (y+a)}\\,dy = e^{-2\\pi i a \\cdot \\xi}\\hat{f}(\\xi).\\]
                        <p><strong>(3)</strong> \\(\\widehat{M_a f}(\\xi) = \\int f(x)e^{2\\pi i a \\cdot x}e^{-2\\pi i \\xi \\cdot x}\\,dx = \\int f(x)e^{-2\\pi i(\\xi - a)\\cdot x}\\,dx = \\hat{f}(\\xi - a).\\)</p>
                        <p><strong>(4)</strong> Substituting \\(y = \\lambda x\\), so \\(dx = \\lambda^{-n}dy\\):</p>
                        \\[\\widehat{D_\\lambda f}(\\xi) = \\int f(\\lambda x)e^{-2\\pi i \\xi \\cdot x}\\,dx = \\lambda^{-n}\\int f(y)e^{-2\\pi i (\\xi/\\lambda)\\cdot y}\\,dy = \\lambda^{-n}\\hat{f}(\\xi/\\lambda).\\]
                        <p><strong>(5)</strong> \\(|\\hat{f}(\\xi)| \\leq \\int |f(x)|\\,dx = \\|f\\|_1\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 15.3 (Continuity of the Fourier Transform)</div>
                    <div class="env-body">
                        <p>For \\(f \\in L^1(\\mathbb{R}^n)\\), the function \\(\\hat{f}: \\mathbb{R}^n \\to \\mathbb{C}\\) is continuous.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(\\xi_k \\to \\xi\\). Then \\(f(x)e^{-2\\pi i \\xi_k \\cdot x} \\to f(x)e^{-2\\pi i \\xi \\cdot x}\\) pointwise for every \\(x\\), and \\(|f(x)e^{-2\\pi i \\xi_k \\cdot x}| = |f(x)| \\in L^1\\). By the dominated convergence theorem,</p>
                        \\[\\hat{f}(\\xi_k) = \\int f(x)e^{-2\\pi i \\xi_k \\cdot x}\\,dx \\to \\int f(x)e^{-2\\pi i \\xi \\cdot x}\\,dx = \\hat{f}(\\xi).\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>The Riemann-Lebesgue Lemma</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Cancellation at High Frequencies)</div>
                    <div class="env-body">
                        <p>As \\(|\\xi| \\to \\infty\\), the exponential \\(e^{-2\\pi i \\xi \\cdot x}\\) oscillates ever more rapidly. For a fixed \\(L^1\\) function \\(f\\), these rapid oscillations cause positive and negative contributions to the integral to nearly cancel. The Riemann-Lebesgue lemma quantifies this: the Fourier transform of any \\(L^1\\) function decays to zero at infinity.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.4 (Riemann-Lebesgue Lemma)</div>
                    <div class="env-body">
                        <p>If \\(f \\in L^1(\\mathbb{R}^n)\\), then \\(\\hat{f} \\in C_0(\\mathbb{R}^n)\\); that is, \\(\\hat{f}\\) is continuous and \\(\\hat{f}(\\xi) \\to 0\\) as \\(|\\xi| \\to \\infty\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 15.4</div>
                    <div class="env-body">
                        <p>Continuity was established in Proposition 15.3. It remains to show decay at infinity.</p>
                        <p><strong>Step 1 (Characteristic functions of rectangles).</strong> Let \\(f = \\mathbf{1}_{[a_1,b_1] \\times \\cdots \\times [a_n,b_n]}\\). A direct computation gives \\(\\hat{f}(\\xi) = \\prod_{j=1}^n \\frac{e^{-2\\pi i \\xi_j a_j} - e^{-2\\pi i \\xi_j b_j}}{2\\pi i \\xi_j}\\) (when each \\(\\xi_j \\neq 0\\)), which clearly tends to 0 as \\(|\\xi| \\to \\infty\\).</p>
                        <p><strong>Step 2 (Simple functions).</strong> By linearity, the result holds for all finite linear combinations of characteristic functions of rectangles (step functions).</p>
                        <p><strong>Step 3 (Density argument).</strong> Step functions are dense in \\(L^1(\\mathbb{R}^n)\\). Given \\(f \\in L^1\\) and \\(\\varepsilon > 0\\), choose a step function \\(g\\) with \\(\\|f - g\\|_1 < \\varepsilon\\). Then</p>
                        \\[|\\hat{f}(\\xi)| \\leq |\\widehat{f-g}(\\xi)| + |\\hat{g}(\\xi)| \\leq \\|f - g\\|_1 + |\\hat{g}(\\xi)| < \\varepsilon + |\\hat{g}(\\xi)|.\\]
                        <p>Since \\(\\hat{g}(\\xi) \\to 0\\) by Step 2, we get \\(\\limsup_{|\\xi| \\to \\infty} |\\hat{f}(\\xi)| \\leq \\varepsilon\\). Since \\(\\varepsilon\\) is arbitrary, \\(\\hat{f}(\\xi) \\to 0\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (\\(\\hat{f} \\in C_0\\) Does Not Mean \\(\\hat{f} \\in L^1\\))</div>
                    <div class="env-body">
                        <p>The Riemann-Lebesgue lemma says \\(\\hat{f}\\) is continuous and vanishes at infinity, but it does <em>not</em> guarantee that \\(\\hat{f}\\) is integrable. In fact, the Fourier transform \\(\\mathcal{F}: L^1 \\to C_0\\) is <em>not</em> surjective: there exist continuous functions vanishing at infinity that are not Fourier transforms of \\(L^1\\) functions. Moreover, \\(\\hat{f}\\) may decay arbitrarily slowly; the rate of decay depends on the smoothness of \\(f\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.5 (Fourier Transform of a Gaussian)</div>
                    <div class="env-body">
                        <p>The Gaussian \\(f(x) = e^{-\\pi |x|^2}\\) on \\(\\mathbb{R}^n\\) is its own Fourier transform: \\(\\hat{f}(\\xi) = e^{-\\pi |\\xi|^2}\\).</p>
                        <p><em>Verification (\\(n = 1\\)):</em> We compute \\(\\int_{-\\infty}^\\infty e^{-\\pi x^2} e^{-2\\pi i \\xi x}\\,dx\\). Completing the square in the exponent: \\(-\\pi x^2 - 2\\pi i \\xi x = -\\pi(x + i\\xi)^2 - \\pi\\xi^2\\). Contour integration (or the known integral \\(\\int e^{-\\pi z^2}dz = 1\\) along a shifted contour) gives \\(e^{-\\pi\\xi^2}\\). The \\(n\\)-dimensional case factors as a product of one-dimensional transforms.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Fourier Transform as a Map \\(L^1 \\to C_0\\))</div>
                    <div class="env-body">
                        <p>Combining Proposition 15.2(5) and Theorem 15.4, the Fourier transform defines a bounded linear map \\(\\mathcal{F}: L^1(\\mathbb{R}^n) \\to C_0(\\mathbb{R}^n)\\) with operator norm \\(\\|\\mathcal{F}\\| = 1\\). This map is injective (a consequence of the Fourier inversion theorem, Section 4) but not surjective. It does not preserve the algebraic structure of \\(L^1\\) under pointwise multiplication, but it does intertwine convolution and pointwise multiplication (Section 2).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="fourier-live-plotter"></div>

                <p><strong>Reference alignment:</strong> Folland 8.1; Stein-Shakarchi III.1; Rudin RCA 9.1-9.6; Grafakos, Classical Fourier Analysis 2.2.</p>
            `,
            visualizations: [
                {
                    id: 'fourier-live-plotter',
                    title: 'Fourier Transform Live Plotter',
                    description: 'Choose a function from a library (Gaussian, rectangle, triangle, sinc) and watch its Fourier transform computed in real-time. Adjust parameters to see how changes in the spatial domain affect the frequency domain.',
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

                        var funcType = 0; // 0=Gaussian, 1=Rectangle, 2=Triangle, 3=Exponential decay
                        var paramA = 1.0; // width/scale parameter
                        var funcNames = ['Gaussian: exp(-a pi x^2)', 'Rectangle: 1_{|x|<a}', 'Triangle: (1-|x|/a)+', 'Exp decay: exp(-a|x|)'];

                        VizEngine.createSlider(controls, 'Parameter a (width/scale)', 0.2, 5.0, paramA, 0.1, function(v) {
                            paramA = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Next function', function() {
                            funcType = (funcType + 1) % 4;
                            draw();
                        });

                        // Function definitions
                        function f_spatial(x) {
                            switch(funcType) {
                                case 0: return Math.exp(-paramA * Math.PI * x * x);
                                case 1: return Math.abs(x) < paramA ? 1 : 0;
                                case 2: return Math.abs(x) < paramA ? 1 - Math.abs(x)/paramA : 0;
                                case 3: return Math.exp(-paramA * Math.abs(x));
                                default: return 0;
                            }
                        }

                        // Analytic Fourier transforms
                        function f_fourier_real(xi) {
                            switch(funcType) {
                                case 0: // Gaussian: (1/sqrt(a)) * exp(-pi xi^2 / a)
                                    return (1/Math.sqrt(paramA)) * Math.exp(-Math.PI * xi * xi / paramA);
                                case 1: // Rectangle: 2a sinc(2 a xi) = sin(2 pi a xi)/(pi xi)
                                    if (Math.abs(xi) < 1e-12) return 2 * paramA;
                                    return Math.sin(2 * Math.PI * paramA * xi) / (Math.PI * xi);
                                case 2: // Triangle: a sinc^2(a xi)
                                    if (Math.abs(xi) < 1e-12) return paramA;
                                    var s = Math.sin(Math.PI * paramA * xi) / (Math.PI * paramA * xi);
                                    return paramA * s * s;
                                case 3: // Exponential: 2a / (a^2 + 4 pi^2 xi^2)
                                    return 2 * paramA / (paramA * paramA + 4 * Math.PI * Math.PI * xi * xi);
                                default: return 0;
                            }
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var halfH = h / 2;
                            var margin = { left: 55, right: 20, top: 35, bottom: 10 };
                            var plotW = w - margin.left - margin.right;
                            var plotH = halfH - margin.top - 15;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Fourier Transform Live Plotter', w/2, 18);

                            // Draw two plots: top = spatial, bottom = frequency
                            for (var panel = 0; panel < 2; panel++) {
                                var yOff = panel * halfH + margin.top;
                                var xRange = 6;

                                // Panel label
                                ctx.fillStyle = panel === 0 ? colors.blue : colors.orange;
                                ctx.font = 'bold 12px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText(panel === 0 ? 'f(x)  [spatial domain]' : 'f\u0302(\u03be)  [frequency domain]', margin.left + 5, yOff - 5);
                                if (panel === 0) {
                                    ctx.fillStyle = colors.muted;
                                    ctx.font = '11px -apple-system, sans-serif';
                                    ctx.textAlign = 'right';
                                    ctx.fillText(funcNames[funcType], w - margin.right - 5, yOff - 5);
                                }

                                // Background
                                ctx.fillStyle = '#111130';
                                ctx.fillRect(margin.left, yOff, plotW, plotH);

                                // Grid lines
                                ctx.strokeStyle = colors.grid;
                                ctx.lineWidth = 0.5;
                                for (var gx = -xRange; gx <= xRange; gx++) {
                                    var sx = margin.left + (gx + xRange) / (2 * xRange) * plotW;
                                    ctx.beginPath(); ctx.moveTo(sx, yOff); ctx.lineTo(sx, yOff + plotH); ctx.stroke();
                                }
                                // Axes
                                ctx.strokeStyle = colors.muted;
                                ctx.lineWidth = 1;
                                var zeroY = yOff + plotH * 0.8;
                                ctx.beginPath(); ctx.moveTo(margin.left, zeroY); ctx.lineTo(margin.left + plotW, zeroY); ctx.stroke();
                                var zeroX = margin.left + plotW / 2;
                                ctx.beginPath(); ctx.moveTo(zeroX, yOff); ctx.lineTo(zeroX, yOff + plotH); ctx.stroke();

                                // Axis labels
                                ctx.fillStyle = colors.muted;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                for (var lx = -xRange; lx <= xRange; lx += 2) {
                                    var lsx = margin.left + (lx + xRange) / (2 * xRange) * plotW;
                                    ctx.fillText(lx.toString(), lsx, zeroY + 13);
                                }

                                // Plot function
                                ctx.strokeStyle = panel === 0 ? colors.blue : colors.orange;
                                ctx.lineWidth = 2.5;
                                ctx.beginPath();

                                // Find max for scaling
                                var maxVal = 0.01;
                                for (var i = 0; i <= 400; i++) {
                                    var t = -xRange + (2 * xRange) * i / 400;
                                    var v = panel === 0 ? f_spatial(t) : f_fourier_real(t);
                                    if (Math.abs(v) > maxVal) maxVal = Math.abs(v);
                                }
                                var scale = plotH * 0.7 / maxVal;

                                for (var i = 0; i <= 400; i++) {
                                    var t = -xRange + (2 * xRange) * i / 400;
                                    var v = panel === 0 ? f_spatial(t) : f_fourier_real(t);
                                    var sx = margin.left + i / 400 * plotW;
                                    var sy = zeroY - v * scale;
                                    if (i === 0) ctx.moveTo(sx, sy);
                                    else ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: '<strong>[Computational, 2 stars]</strong> Compute the Fourier transform of \\(f(x) = e^{-2\\pi a|x|}\\) for \\(a > 0\\) on \\(\\mathbb{R}\\). Verify that \\(\\hat{f} \\in L^1(\\mathbb{R})\\).',
                    hint: 'Split the integral into \\((-\\infty, 0)\\) and \\((0, \\infty)\\) and compute each as a geometric integral. Then check integrability of the result.',
                    solution: 'Split: \\(\\hat{f}(\\xi) = \\int_0^\\infty e^{-2\\pi a x} e^{-2\\pi i \\xi x}\\,dx + \\int_{-\\infty}^0 e^{2\\pi a x} e^{-2\\pi i \\xi x}\\,dx = \\frac{1}{2\\pi(a + i\\xi)} + \\frac{1}{2\\pi(a - i\\xi)} = \\frac{a}{\\pi(a^2 + \\xi^2)}\\). This is the Poisson kernel. Since \\(\\int \\frac{a}{\\pi(a^2+\\xi^2)}\\,d\\xi = 1\\), we have \\(\\hat{f} \\in L^1(\\mathbb{R})\\).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Prove that if \\(f \\in L^1(\\mathbb{R}^n)\\) and \\(f\\) has a continuous, integrable derivative \\(f\'\\) (in dimension \\(n=1\\)), then \\(\\widehat{f\'}(\\xi) = 2\\pi i \\xi \\hat{f}(\\xi)\\). Deduce that \\(|\\hat{f}(\\xi)| \\leq C/(1+|\\xi|)\\) for some constant \\(C\\).',
                    hint: 'Integrate by parts. For the decay estimate, use \\(|\\hat{f}(\\xi)| \\leq \\|f\\|_1\\) and \\(2\\pi|\\xi||\\hat{f}(\\xi)| = |\\widehat{f\'}(\\xi)| \\leq \\|f\'\\|_1\\), then take the minimum.',
                    solution: 'Integration by parts: \\(\\widehat{f\'}(\\xi) = \\int f\'(x)e^{-2\\pi i\\xi x}\\,dx = [f(x)e^{-2\\pi i\\xi x}]_{-\\infty}^\\infty + 2\\pi i\\xi \\int f(x)e^{-2\\pi i\\xi x}\\,dx\\). The boundary term vanishes since \\(f \\in L^1\\) implies \\(f(x) \\to 0\\) as \\(|x| \\to \\infty\\) (in the sense of limits along a subsequence, and here by assumption of continuity). So \\(\\widehat{f\'} = 2\\pi i\\xi\\hat{f}\\). For decay: \\(|\\hat{f}(\\xi)| \\leq \\min(\\|f\\|_1, \\|f\'\\|_1/(2\\pi|\\xi|)) \\leq C/(1+|\\xi|)\\) with \\(C = \\max(\\|f\\|_1, \\|f\'\\|_1/(2\\pi))\\).'
                },
                {
                    question: '<strong>[Proof, 2 stars]</strong> Show that the Fourier transform \\(\\mathcal{F}: L^1(\\mathbb{R}^n) \\to C_0(\\mathbb{R}^n)\\) is injective but not surjective.',
                    hint: 'Injectivity follows from the Fourier inversion theorem (or can be proved via approximate identities). For non-surjectivity, consider a function in \\(C_0\\) that decays too slowly to be a Fourier transform, or use the open mapping theorem.',
                    solution: 'Injectivity: If \\(\\hat{f} = 0\\), then for every Schwartz function \\(\\varphi\\), \\(\\int f\\varphi\\,dx = \\int f\\hat{\\hat{\\varphi}}\\,dx = 0\\) (using Fubini and the fact that the double Fourier transform of a Schwartz function is a reflection). Since Schwartz functions are dense in \\(L^1\\), this forces \\(f = 0\\) a.e. Non-surjectivity: \\(L^1\\) is a Banach algebra under convolution, so its image \\(\\mathcal{F}(L^1)\\) is a subalgebra of \\(C_0\\). By a theorem of Wiener, \\(\\mathcal{F}(L^1) \\neq C_0\\); alternatively, \\(\\mathcal{F}(L^1)\\) is not closed under complex conjugation (\\(\\overline{\\hat{f}(\\xi)} = \\widehat{\\bar{f}(-\\cdot)}(\\xi)\\)), making it a proper subalgebra. More concretely, there exist \\(g \\in C_0\\) with \\(g \\notin L^1\\) such that the formal inverse transform is not in \\(L^1\\).'
                }
            ]
        },

        // ============================================================
        // Section 2: Convolution and Fourier Transform
        // ============================================================
        {
            id: 'convolution-fourier',
            title: 'Convolution and the Fourier Transform',
            content: `
                <div class="bridge section-bridge">
                    <p>The Fourier transform converts <em>convolution</em> into pointwise multiplication. This single fact underpins most applications of Fourier analysis to differential equations, probability, and signal processing. Convolution itself is defined through the product measure machinery of Chapter 12 (Fubini's theorem ensures the relevant double integrals converge).</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define convolution on \\(L^1\\), prove the convolution theorem (\\(\\widehat{f * g} = \\hat{f} \\cdot \\hat{g}\\)), introduce approximate identities, and show how convolution with an approximate identity provides a regularization tool.</p>
                </div>

                <h2>Convolution in \\(L^1\\)</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.6 (Convolution)</div>
                    <div class="env-body">
                        <p>For \\(f, g \\in L^1(\\mathbb{R}^n)\\), the <strong>convolution</strong> \\(f * g\\) is defined by</p>
                        \\[(f * g)(x) = \\int_{\\mathbb{R}^n} f(x - y)\\,g(y)\\,dy.\\]
                        <p>By Fubini's theorem (Chapter 12), the integral converges for a.e. \\(x\\), and \\(f * g \\in L^1(\\mathbb{R}^n)\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Convolution as Weighted Averaging)</div>
                    <div class="env-body">
                        <p>The value \\((f * g)(x)\\) is a weighted average of \\(f\\) near the point \\(x\\), with the weight function \\(g\\) reversed and shifted to be centered at \\(x\\). If \\(g\\) is concentrated near the origin (like a bump function), then \\(f * g\\) is a smoothed version of \\(f\\). The measure-theoretic foundation is essential: Fubini's theorem guarantees that the double integral \\(\\iint |f(x-y)||g(y)|\\,dy\\,dx = \\|f\\|_1 \\|g\\|_1 < \\infty\\), so the convolution is well-defined a.e.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 15.7 (Properties of Convolution)</div>
                    <div class="env-body">
                        <p>For \\(f, g, h \\in L^1(\\mathbb{R}^n)\\):</p>
                        <ol>
                            <li><strong>Young's inequality:</strong> \\(\\|f * g\\|_1 \\leq \\|f\\|_1 \\|g\\|_1\\).</li>
                            <li><strong>Commutativity:</strong> \\(f * g = g * f\\).</li>
                            <li><strong>Associativity:</strong> \\((f * g) * h = f * (g * h)\\).</li>
                            <li>\\(L^1(\\mathbb{R}^n)\\) is a <strong>commutative Banach algebra</strong> under convolution (but without a unit element).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p><strong>(1)</strong> By Tonelli's theorem: \\(\\int|f*g|\\,dx \\leq \\iint |f(x-y)||g(y)|\\,dy\\,dx = \\|f\\|_1\\|g\\|_1\\).</p>
                        <p><strong>(2)</strong> Substitute \\(z = x - y\\): \\((f*g)(x) = \\int f(x-y)g(y)\\,dy = \\int f(z)g(x-z)\\,dz = (g*f)(x)\\).</p>
                        <p><strong>(3)</strong> By Fubini's theorem, both sides equal \\(\\iiint f(x-y-z)g(y)h(z)\\,dy\\,dz\\,dx\\) (suitably interpreted).</p>
                        <p><strong>(4)</strong> Combining (1)(2)(3), \\(L^1\\) is a commutative Banach algebra. It has no unit: if \\(e * f = f\\) for all \\(f\\), then \\(\\hat{e} = 1\\) everywhere, contradicting \\(\\hat{e} \\in C_0\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>The Convolution Theorem</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.8 (Convolution Theorem)</div>
                    <div class="env-body">
                        <p>If \\(f, g \\in L^1(\\mathbb{R}^n)\\), then</p>
                        \\[\\widehat{f * g}(\\xi) = \\hat{f}(\\xi) \\cdot \\hat{g}(\\xi) \\quad \\text{for all } \\xi \\in \\mathbb{R}^n.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 15.8</div>
                    <div class="env-body">
                        <p>We compute directly, using Fubini's theorem (justified since \\(f, g \\in L^1\\) and \\(|e^{-2\\pi i \\xi \\cdot x}| = 1\\)):</p>
                        \\[\\widehat{f * g}(\\xi) = \\int \\left(\\int f(x-y)g(y)\\,dy\\right) e^{-2\\pi i \\xi \\cdot x}\\,dx.\\]
                        <p>By Fubini, we may exchange the order of integration:</p>
                        \\[= \\int g(y) \\left(\\int f(x-y)e^{-2\\pi i \\xi \\cdot x}\\,dx\\right) dy.\\]
                        <p>Substituting \\(z = x - y\\) in the inner integral:</p>
                        \\[= \\int g(y) e^{-2\\pi i \\xi \\cdot y} \\left(\\int f(z) e^{-2\\pi i \\xi \\cdot z}\\,dz\\right) dy = \\hat{f}(\\xi) \\int g(y) e^{-2\\pi i \\xi \\cdot y}\\,dy = \\hat{f}(\\xi) \\hat{g}(\\xi).\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Algebra Homomorphism)</div>
                    <div class="env-body">
                        <p>The convolution theorem says that \\(\\mathcal{F}: (L^1, *)  \\to (C_0, \\cdot)\\) is an algebra homomorphism: it maps the convolution product to the pointwise product. This transforms convolution equations (which are integral equations) into algebraic equations in the frequency domain, a simplification that lies at the heart of signal processing and PDE theory.</p>
                    </div>
                </div>

                <h2>Approximate Identities</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.9 (Approximate Identity)</div>
                    <div class="env-body">
                        <p>A family \\(\\{K_\\varepsilon\\}_{\\varepsilon > 0}\\) in \\(L^1(\\mathbb{R}^n)\\) is an <strong>approximate identity</strong> (or summability kernel) if:</p>
                        <ol>
                            <li>\\(\\int_{\\mathbb{R}^n} K_\\varepsilon(x)\\,dx = 1\\) for all \\(\\varepsilon > 0\\),</li>
                            <li>\\(\\sup_{\\varepsilon > 0} \\|K_\\varepsilon\\|_1 < \\infty\\),</li>
                            <li>For every \\(\\delta > 0\\), \\(\\int_{|x| > \\delta} |K_\\varepsilon(x)|\\,dx \\to 0\\) as \\(\\varepsilon \\to 0\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.10 (Standard Approximate Identities)</div>
                    <div class="env-body">
                        <p>Given \\(K \\in L^1(\\mathbb{R}^n)\\) with \\(\\int K = 1\\), define \\(K_\\varepsilon(x) = \\varepsilon^{-n} K(x/\\varepsilon)\\). Then \\(\\{K_\\varepsilon\\}\\) is an approximate identity. Common choices:</p>
                        <ul>
                            <li><strong>Gaussian kernel:</strong> \\(K(x) = e^{-\\pi|x|^2}\\), so \\(K_\\varepsilon(x) = \\varepsilon^{-n} e^{-\\pi|x/\\varepsilon|^2}\\).</li>
                            <li><strong>Poisson kernel:</strong> \\(P_\\varepsilon(x) = c_n \\frac{\\varepsilon}{(\\varepsilon^2 + |x|^2)^{(n+1)/2}}\\).</li>
                            <li><strong>Fej\\unicode{0xe9}r kernel:</strong> arises in summability of Fourier series.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.11 (Approximation by Convolution)</div>
                    <div class="env-body">
                        <p>Let \\(\\{K_\\varepsilon\\}\\) be an approximate identity and \\(f \\in L^p(\\mathbb{R}^n)\\) for \\(1 \\leq p < \\infty\\). Then</p>
                        \\[\\|f * K_\\varepsilon - f\\|_p \\to 0 \\quad \\text{as } \\varepsilon \\to 0.\\]
                        <p>If additionally \\(f\\) is continuous and bounded, then \\(f * K_\\varepsilon \\to f\\) uniformly on compact sets.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>Write \\((f * K_\\varepsilon)(x) - f(x) = \\int [f(x-y) - f(x)] K_\\varepsilon(y)\\,dy\\) (using \\(\\int K_\\varepsilon = 1\\)). By Minkowski's integral inequality:</p>
                        \\[\\|f * K_\\varepsilon - f\\|_p \\leq \\int \\|\\tau_y f - f\\|_p \\, |K_\\varepsilon(y)|\\,dy.\\]
                        <p>Since translation is continuous in \\(L^p\\) (i.e., \\(\\|\\tau_y f - f\\|_p \\to 0\\) as \\(y \\to 0\\)), and \\(K_\\varepsilon\\) concentrates near the origin as \\(\\varepsilon \\to 0\\), the integral tends to zero.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="viz-placeholder" data-viz="convolution-demo"></div>

                <p><strong>Reference alignment:</strong> Folland 8.1-8.2; Stein-Shakarchi III.2; Rudin RCA 9.7-9.14; Grafakos 1.2.</p>
            `,
            visualizations: [
                {
                    id: 'convolution-demo',
                    title: 'Convolution and Approximate Identity Demo',
                    description: 'Visualize convolution of f with an approximate identity K_eps. As eps shrinks, the convolution approaches f. Toggle between spatial and frequency domain views to see the convolution theorem in action.',
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

                        var eps = 0.5;
                        var showFreq = false;
                        var funcType = 0; // 0=rect, 1=triangle wave

                        VizEngine.createSlider(controls, 'epsilon (kernel width)', 0.05, 2.0, eps, 0.05, function(v) {
                            eps = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Toggle: Spatial / Frequency', function() {
                            showFreq = !showFreq;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Switch f: Rectangle / Sawtooth', function() {
                            funcType = (funcType + 1) % 2;
                            draw();
                        });

                        function f_orig(x) {
                            if (funcType === 0) return (Math.abs(x) < 1.5) ? 1 : 0;
                            else {
                                // sawtooth on [-2,2]
                                if (Math.abs(x) > 2) return 0;
                                return 1 - Math.abs(x)/2;
                            }
                        }

                        function gauss(x, s) {
                            return Math.exp(-Math.PI * x * x / (s * s)) / s;
                        }

                        // Numerical convolution
                        function convolve(x) {
                            var sum = 0;
                            var dt = 0.02;
                            for (var t = -8; t <= 8; t += dt) {
                                sum += f_orig(x - t) * gauss(t, eps) * dt;
                            }
                            return sum;
                        }

                        // FT of f_orig (numerical via DFT-like sum)
                        function ft_magnitude(xi) {
                            var reSum = 0, imSum = 0;
                            var dt = 0.02;
                            for (var t = -8; t <= 8; t += dt) {
                                var v = f_orig(t);
                                reSum += v * Math.cos(2 * Math.PI * xi * t) * dt;
                                imSum -= v * Math.sin(2 * Math.PI * xi * t) * dt;
                            }
                            return Math.sqrt(reSum * reSum + imSum * imSum);
                        }

                        function ft_kernel_mag(xi) {
                            // FT of Gaussian with width eps: exp(-pi eps^2 xi^2)
                            return Math.exp(-Math.PI * eps * eps * xi * xi);
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { left: 55, right: 20, top: 40, bottom: 45 };
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;
                            var xRange = showFreq ? 4 : 5;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(showFreq ? 'Frequency Domain: |f\u0302| and |K\u0302_\u03b5| and |f\u0302 \u00b7 K\u0302_\u03b5|' : 'Spatial Domain: f, K_\u03b5, and f * K_\u03b5', w/2, 20);

                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('\u03b5 = ' + eps.toFixed(2), w/2, 34);

                            // Background
                            ctx.fillStyle = '#111130';
                            ctx.fillRect(margin.left, margin.top, plotW, plotH);

                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var gx = -xRange; gx <= xRange; gx++) {
                                var sx = margin.left + (gx + xRange) / (2 * xRange) * plotW;
                                ctx.beginPath(); ctx.moveTo(sx, margin.top); ctx.lineTo(sx, margin.top + plotH); ctx.stroke();
                            }

                            // Zero axis
                            var zeroY = margin.top + plotH * 0.75;
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(margin.left, zeroY); ctx.lineTo(margin.left + plotW, zeroY); ctx.stroke();

                            // Axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var lx = -xRange; lx <= xRange; lx++) {
                                var lsx = margin.left + (lx + xRange) / (2 * xRange) * plotW;
                                ctx.fillText(lx.toString(), lsx, margin.top + plotH + 15);
                            }
                            ctx.fillText(showFreq ? '\u03be' : 'x', margin.left + plotW + 10, zeroY + 4);

                            var maxVal = 2.5;
                            var scale = plotH * 0.65 / maxVal;
                            var nPts = 400;

                            function plotFunc(func, color, dashed) {
                                ctx.strokeStyle = color;
                                ctx.lineWidth = dashed ? 1.5 : 2.5;
                                if (dashed) ctx.setLineDash([6, 4]);
                                else ctx.setLineDash([]);
                                ctx.beginPath();
                                for (var i = 0; i <= nPts; i++) {
                                    var t = -xRange + 2 * xRange * i / nPts;
                                    var v = func(t);
                                    var sx = margin.left + i / nPts * plotW;
                                    var sy = zeroY - v * scale;
                                    if (i === 0) ctx.moveTo(sx, sy);
                                    else ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            if (!showFreq) {
                                plotFunc(f_orig, colors.blue, false);
                                plotFunc(function(x) { return gauss(x, eps); }, colors.yellow, true);
                                plotFunc(convolve, colors.green, false);
                            } else {
                                plotFunc(ft_magnitude, colors.blue, false);
                                plotFunc(ft_kernel_mag, colors.yellow, true);
                                plotFunc(function(xi) { return ft_magnitude(xi) * ft_kernel_mag(xi); }, colors.green, false);
                            }

                            // Legend
                            var legendY = margin.top + 15;
                            var items = showFreq ?
                                [{c: colors.blue, l: '|f\u0302(\u03be)|'}, {c: colors.yellow, l: '|K\u0302_\u03b5(\u03be)|'}, {c: colors.green, l: '|f\u0302 \u00b7 K\u0302_\u03b5|'}] :
                                [{c: colors.blue, l: 'f(x)'}, {c: colors.yellow, l: 'K_\u03b5(x)'}, {c: colors.green, l: '(f * K_\u03b5)(x)'}];
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            for (var li = 0; li < items.length; li++) {
                                ctx.fillStyle = items[li].c;
                                ctx.fillRect(margin.left + 10, legendY + li * 18, 20, 3);
                                ctx.fillText(items[li].l, margin.left + 35, legendY + li * 18 + 4);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: '<strong>[Computational, 2 stars]</strong> Compute \\(f * g\\) explicitly, where \\(f = g = \\mathbf{1}_{[0,1]}\\) on \\(\\mathbb{R}\\). Verify the convolution theorem by computing \\(\\widehat{f * g}\\) directly and comparing with \\(\\hat{f}(\\xi)^2\\).',
                    hint: 'For \\(x \\in [0,2]\\), compute \\(\\int_0^1 \\mathbf{1}_{[0,1]}(x-y)\\,dy\\) by finding the range of \\(y\\) where \\(0 \\leq x - y \\leq 1\\).',
                    solution: '\\((f*g)(x) = \\int_0^1 \\mathbf{1}_{[0,1]}(x-y)\\,dy\\). This is nonzero when \\([0,1] \\cap [x-1,x] \\neq \\emptyset\\), i.e., \\(x \\in (0,2)\\). For \\(0 < x \\leq 1\\): \\((f*g)(x) = x\\). For \\(1 < x < 2\\): \\((f*g)(x) = 2-x\\). This is the triangle function. Its Fourier transform is \\(\\text{sinc}^2(\\xi)\\) (where \\(\\text{sinc}(\\xi) = \\sin(\\pi\\xi)/(\\pi\\xi)\\)), times a phase factor from the shift. Meanwhile, \\(\\hat{f}(\\xi) = e^{-\\pi i \\xi}\\text{sinc}(\\xi)\\), so \\(\\hat{f}^2 = e^{-2\\pi i\\xi}\\text{sinc}^2(\\xi)\\), matching \\(\\widehat{f*g}\\).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> (Young\'s inequality, general form) Prove that if \\(f \\in L^p(\\mathbb{R}^n)\\) and \\(g \\in L^1(\\mathbb{R}^n)\\), then \\(f * g \\in L^p(\\mathbb{R}^n)\\) and \\(\\|f * g\\|_p \\leq \\|f\\|_p \\|g\\|_1\\).',
                    hint: 'Use Minkowski\'s integral inequality: \\(\\left\\|\\int F(\\cdot, y)\\,dy\\right\\|_p \\leq \\int \\|F(\\cdot, y)\\|_p\\,dy\\). Apply with \\(F(x,y) = f(x-y)g(y)\\).',
                    solution: 'By Minkowski\'s integral inequality: \\(\\|f * g\\|_p = \\left\\|\\int f(\\cdot - y)g(y)\\,dy\\right\\|_p \\leq \\int \\|f(\\cdot - y)g(y)\\|_p\\,dy = \\int |g(y)| \\cdot \\|f(\\cdot - y)\\|_p\\,dy\\). Since translation preserves \\(L^p\\) norms, \\(\\|f(\\cdot - y)\\|_p = \\|f\\|_p\\). Thus \\(\\|f*g\\|_p \\leq \\|f\\|_p \\int |g(y)|\\,dy = \\|f\\|_p\\|g\\|_1\\).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Show that \\(L^1(\\mathbb{R}^n)\\) has no identity element under convolution. That is, there is no \\(e \\in L^1\\) with \\(e * f = f\\) for all \\(f \\in L^1\\).',
                    hint: 'Apply the Fourier transform to the equation \\(e * f = f\\). What would \\(\\hat{e}\\) have to satisfy? Does this contradict the Riemann-Lebesgue lemma?',
                    solution: 'Suppose \\(e \\in L^1\\) satisfies \\(e * f = f\\) for all \\(f \\in L^1\\). Taking Fourier transforms: \\(\\hat{e}(\\xi)\\hat{f}(\\xi) = \\hat{f}(\\xi)\\) for all \\(\\xi\\) and all \\(f\\). Choosing \\(f\\) with \\(\\hat{f}(\\xi_0) \\neq 0\\) at any given \\(\\xi_0\\) (which is possible since the Fourier transform is not identically zero for nonzero \\(f\\)), we get \\(\\hat{e}(\\xi_0) = 1\\). Since \\(\\xi_0\\) is arbitrary, \\(\\hat{e} \\equiv 1\\). But by Riemann-Lebesgue, \\(\\hat{e}(\\xi) \\to 0\\) as \\(|\\xi| \\to \\infty\\). Contradiction.'
                }
            ]
        },

        // ============================================================
        // Section 3: Plancherel's Theorem
        // ============================================================
        {
            id: 'plancherel-theorem',
            title: "Plancherel's Theorem",
            content: `
                <div class="bridge section-bridge">
                    <p>The Fourier transform on \\(L^1\\) is bounded (\\(\\|\\hat{f}\\|_\\infty \\leq \\|f\\|_1\\)) but does not preserve norms. On \\(L^2\\), something remarkable happens: the Fourier transform becomes an <em>isometry</em>. Plancherel's theorem establishes this, extending the Fourier transform from \\(L^1 \\cap L^2\\) (where the integral definition makes sense) to all of \\(L^2\\) (where it does not, since \\(L^2\\) functions need not be integrable). This extension relies on the density results from Chapter 9.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove Plancherel's theorem (\\(\\|\\hat{f}\\|_2 = \\|f\\|_2\\)) and Parseval's identity. Understand the Fourier transform as a unitary operator on \\(L^2(\\mathbb{R}^n)\\).</p>
                </div>

                <h2>From \\(L^1 \\cap L^2\\) to \\(L^2\\)</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Extension Problem)</div>
                    <div class="env-body">
                        <p>The integral \\(\\hat{f}(\\xi) = \\int f(x)e^{-2\\pi i \\xi \\cdot x}\\,dx\\) requires \\(f \\in L^1\\) for absolute convergence. But many important \\(L^2\\) functions (such as \\(f(x) = (1+|x|)^{-1}\\) in one dimension) are not in \\(L^1\\). The strategy is: prove the isometry on the dense subspace \\(L^1 \\cap L^2\\), then extend by continuity to all of \\(L^2\\). This is the bounded linear transformation (BLT) theorem in action, a standard functional analysis argument that appears throughout \\(L^p\\) theory.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Lemma 15.12 (Isometry on \\(L^1 \\cap L^2\\))</div>
                    <div class="env-body">
                        <p>For \\(f \\in L^1(\\mathbb{R}^n) \\cap L^2(\\mathbb{R}^n)\\),</p>
                        \\[\\|\\hat{f}\\|_2 = \\|f\\|_2.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Lemma 15.12</div>
                    <div class="env-body">
                        <p>Define \\(g(x) = \\overline{f(-x)}\\), so \\(\\hat{g}(\\xi) = \\overline{\\hat{f}(\\xi)}\\). Let \\(h = f * g\\). Then \\(h \\in L^1\\) (by Young's inequality) and the convolution theorem gives</p>
                        \\[\\hat{h}(\\xi) = \\hat{f}(\\xi)\\hat{g}(\\xi) = \\hat{f}(\\xi)\\overline{\\hat{f}(\\xi)} = |\\hat{f}(\\xi)|^2 \\geq 0.\\]
                        <p>On the other hand, \\(h(0) = \\int f(y)\\overline{f(y)}\\,dy = \\|f\\|_2^2\\). We need to show \\(\\int |\\hat{f}|^2 = h(0)\\). This is accomplished by the following trick: consider the Gaussian approximate identity \\(\\varphi_\\varepsilon(x) = e^{-\\pi\\varepsilon|x|^2}\\). Since \\(\\hat{h} = |\\hat{f}|^2 \\geq 0\\) and \\(\\hat{h}\\) is continuous, we compute:</p>
                        \\[\\int \\hat{h}(\\xi)\\varphi_\\varepsilon(\\xi)\\,d\\xi = \\int h(x)\\hat{\\varphi}_\\varepsilon(x)\\,dx = \\int h(x)\\varepsilon^{-n/2}e^{-\\pi|x|^2/\\varepsilon}\\,dx.\\]
                        <p>As \\(\\varepsilon \\to \\infty\\), \\(\\varphi_\\varepsilon \\to 1\\) pointwise and the left side converges to \\(\\int|\\hat{f}|^2\\,d\\xi\\) by monotone convergence (since \\(\\hat{h} \\geq 0\\)). The right side, by the approximate identity property as \\(\\varepsilon \\to \\infty\\), converges to \\(h(0) = \\|f\\|_2^2\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.13 (Plancherel's Theorem)</div>
                    <div class="env-body">
                        <p>There exists a unique bounded linear operator \\(\\mathcal{F}: L^2(\\mathbb{R}^n) \\to L^2(\\mathbb{R}^n)\\) that extends the Fourier transform on \\(L^1 \\cap L^2\\) and satisfies</p>
                        \\[\\|\\mathcal{F}f\\|_2 = \\|f\\|_2 \\quad \\text{for all } f \\in L^2(\\mathbb{R}^n).\\]
                        <p>Moreover, \\(\\mathcal{F}\\) is a unitary operator: it is a surjective isometry with \\(\\mathcal{F}^{-1} = \\mathcal{F}^*\\), where \\(\\mathcal{F}^*g(x) = \\mathcal{F}g(-x) = \\check{g}(x) = \\int g(\\xi)e^{2\\pi i x \\cdot \\xi}\\,d\\xi\\) (the inverse Fourier transform).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 15.13</div>
                    <div class="env-body">
                        <p><strong>Existence and isometry.</strong> The subspace \\(L^1 \\cap L^2\\) is dense in \\(L^2\\) (since, for example, bounded functions with compact support lie in \\(L^1 \\cap L^2\\) and are dense in \\(L^2\\)). By Lemma 15.12, \\(\\mathcal{F}\\) is an isometry on this dense subspace. By the BLT theorem (every bounded linear map from a dense subspace of a Banach space extends uniquely to the closure), \\(\\mathcal{F}\\) extends to a unique isometry on all of \\(L^2\\).</p>
                        <p><strong>Unitarity (surjectivity).</strong> We must show \\(\\mathcal{F}\\) is surjective. Since \\(\\mathcal{F}\\) is an isometry, its range is closed. It suffices to show the range is dense. But \\(\\mathcal{F}(L^1 \\cap L^2) \\supseteq \\mathcal{F}(\\mathcal{S})\\) where \\(\\mathcal{S}\\) is the Schwartz space, and \\(\\mathcal{F}\\) maps \\(\\mathcal{S}\\) onto \\(\\mathcal{S}\\) (a classical fact). Since \\(\\mathcal{S}\\) is dense in \\(L^2\\), the range of \\(\\mathcal{F}\\) is dense, hence \\(\\mathcal{F}\\) is surjective.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Parseval's Identity</h2>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 15.14 (Parseval's Identity)</div>
                    <div class="env-body">
                        <p>For \\(f, g \\in L^2(\\mathbb{R}^n)\\),</p>
                        \\[\\langle \\hat{f}, \\hat{g} \\rangle_{L^2} = \\langle f, g \\rangle_{L^2},\\]
                        <p>that is, \\(\\int \\hat{f}(\\xi)\\overline{\\hat{g}(\\xi)}\\,d\\xi = \\int f(x)\\overline{g(x)}\\,dx\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>This follows from the polarization identity. Since \\(\\|\\hat{h}\\|_2 = \\|h\\|_2\\) for all \\(h \\in L^2\\), apply this to \\(h = f + g\\), \\(h = f - g\\), \\(h = f + ig\\), and \\(h = f - ig\\), then combine:</p>
                        \\[\\langle \\hat{f}, \\hat{g}\\rangle = \\tfrac{1}{4}\\left(\\|\\widehat{f+g}\\|_2^2 - \\|\\widehat{f-g}\\|_2^2 + i\\|\\widehat{f+ig}\\|_2^2 - i\\|\\widehat{f-ig}\\|_2^2\\right)\\]
                        \\[= \\tfrac{1}{4}\\left(\\|f+g\\|_2^2 - \\|f-g\\|_2^2 + i\\|f+ig\\|_2^2 - i\\|f-ig\\|_2^2\\right) = \\langle f, g\\rangle.\\]
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Computing \\(\\hat{f}\\) for \\(f \\in L^2 \\setminus L^1\\))</div>
                    <div class="env-body">
                        <p>For \\(f \\in L^2 \\setminus L^1\\), the Fourier transform is <em>not</em> given by the integral formula \\(\\int f(x)e^{-2\\pi i\\xi \\cdot x}\\,dx\\), which may diverge. Instead, \\(\\hat{f}\\) is defined as the \\(L^2\\)-limit: choose \\(f_n \\in L^1 \\cap L^2\\) with \\(f_n \\to f\\) in \\(L^2\\), and set \\(\\hat{f} = \\lim_{n} \\hat{f}_n\\) (the limit in \\(L^2\\)). A common choice is \\(f_n = f \\cdot \\mathbf{1}_{B(0,n)}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.15 (Plancherel for a Gaussian)</div>
                    <div class="env-body">
                        <p>Let \\(f(x) = e^{-\\pi|x|^2}\\). Then \\(\\hat{f} = f\\) (Example 15.5), and</p>
                        \\[\\|f\\|_2^2 = \\int e^{-2\\pi|x|^2}\\,dx = \\left(\\frac{1}{\\sqrt{2}}\\right)^n = 2^{-n/2}.\\]
                        \\[\\|\\hat{f}\\|_2^2 = \\int e^{-2\\pi|\\xi|^2}\\,d\\xi = 2^{-n/2}.\\]
                        <p>The two sides agree, confirming Plancherel.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="plancherel-isometry"></div>

                <p><strong>Reference alignment:</strong> Folland 8.3; Stein-Shakarchi III.3; Rudin RCA 9.13; Grafakos 2.2.14.</p>
            `,
            visualizations: [
                {
                    id: 'plancherel-isometry',
                    title: "Plancherel Isometry Display",
                    description: 'Choose a function f in L^1 cap L^2 and see its L^2 norm alongside the L^2 norm of its Fourier transform. A bar chart shows both norms, demonstrating they are equal. Adjust parameters to see the equality maintained.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 460;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var funcType = 0;
                        var paramA = 1.0;
                        var funcNames = ['Gaussian: exp(-a\u03c0x\u00b2)', 'Rectangle: 1_{|x|<a}', 'Triangle: (1-|x|/a)+', 'Exp decay: exp(-a|x|)'];

                        VizEngine.createSlider(controls, 'Parameter a', 0.2, 4.0, paramA, 0.1, function(v) {
                            paramA = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Next function', function() {
                            funcType = (funcType + 1) % 4;
                            draw();
                        });

                        function f_spatial(x) {
                            switch(funcType) {
                                case 0: return Math.exp(-paramA * Math.PI * x * x);
                                case 1: return Math.abs(x) < paramA ? 1 : 0;
                                case 2: return Math.abs(x) < paramA ? 1 - Math.abs(x)/paramA : 0;
                                case 3: return Math.exp(-paramA * Math.abs(x));
                                default: return 0;
                            }
                        }

                        function f_fourier(xi) {
                            switch(funcType) {
                                case 0: return (1/Math.sqrt(paramA)) * Math.exp(-Math.PI * xi * xi / paramA);
                                case 1:
                                    if (Math.abs(xi) < 1e-12) return 2 * paramA;
                                    return Math.sin(2 * Math.PI * paramA * xi) / (Math.PI * xi);
                                case 2:
                                    if (Math.abs(xi) < 1e-12) return paramA;
                                    var s = Math.sin(Math.PI * paramA * xi) / (Math.PI * paramA * xi);
                                    return paramA * s * s;
                                case 3: return 2 * paramA / (paramA * paramA + 4 * Math.PI * Math.PI * xi * xi);
                                default: return 0;
                            }
                        }

                        // Numerical L^2 norms
                        function computeNorms() {
                            var dt = 0.01;
                            var norm_f = 0, norm_fhat = 0;
                            for (var t = -15; t <= 15; t += dt) {
                                var vf = f_spatial(t);
                                norm_f += vf * vf * dt;
                                var vh = f_fourier(t);
                                norm_fhat += vh * vh * dt;
                            }
                            return { spatial: Math.sqrt(norm_f), frequency: Math.sqrt(norm_fhat) };
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var norms = computeNorms();

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText("Plancherel's Theorem: ||f||_2 = ||f\u0302||_2", w/2, 20);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText(funcNames[funcType] + ', a = ' + paramA.toFixed(1), w/2, 36);

                            // Top: function plots side by side
                            var margin = { left: 45, right: 15, top: 50, bottom: 10 };
                            var halfW = (w - margin.left - margin.right - 20) / 2;
                            var plotH = h * 0.45;

                            for (var panel = 0; panel < 2; panel++) {
                                var xOff = margin.left + panel * (halfW + 20);
                                var yOff = margin.top;
                                var xRange = 5;

                                ctx.fillStyle = '#111130';
                                ctx.fillRect(xOff, yOff, halfW, plotH);

                                // Label
                                ctx.fillStyle = panel === 0 ? colors.blue : colors.orange;
                                ctx.font = 'bold 11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(panel === 0 ? 'f(x)' : 'f\u0302(\u03be)', xOff + halfW/2, yOff - 5);

                                // Axis
                                var zeroY = yOff + plotH * 0.75;
                                ctx.strokeStyle = colors.muted;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath(); ctx.moveTo(xOff, zeroY); ctx.lineTo(xOff + halfW, zeroY); ctx.stroke();

                                // Plot
                                var maxVal = 0.01;
                                for (var i = 0; i <= 300; i++) {
                                    var t = -xRange + 2*xRange*i/300;
                                    var v = panel === 0 ? f_spatial(t) : f_fourier(t);
                                    if (Math.abs(v) > maxVal) maxVal = Math.abs(v);
                                }
                                var scale = plotH * 0.65 / maxVal;

                                ctx.strokeStyle = panel === 0 ? colors.blue : colors.orange;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= 300; i++) {
                                    var t = -xRange + 2*xRange*i/300;
                                    var v = panel === 0 ? f_spatial(t) : f_fourier(t);
                                    var sx = xOff + i/300 * halfW;
                                    var sy = zeroY - v * scale;
                                    if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();

                                // Fill area under |f|^2
                                ctx.fillStyle = panel === 0 ? 'rgba(88,166,255,0.15)' : 'rgba(240,136,62,0.15)';
                                ctx.beginPath();
                                ctx.moveTo(xOff, zeroY);
                                for (var i = 0; i <= 300; i++) {
                                    var t = -xRange + 2*xRange*i/300;
                                    var v = panel === 0 ? f_spatial(t) : f_fourier(t);
                                    var sx = xOff + i/300 * halfW;
                                    var sy = zeroY - v * v * scale * 0.8;
                                    ctx.lineTo(sx, sy);
                                }
                                ctx.lineTo(xOff + halfW, zeroY);
                                ctx.closePath();
                                ctx.fill();
                            }

                            // Bottom: norm comparison bars
                            var barY = margin.top + plotH + 40;
                            var barH = h - barY - 30;
                            var barW = 60;
                            var maxNorm = Math.max(norms.spatial, norms.frequency, 0.5);
                            var barScale = barH / maxNorm;

                            var cx = w / 2;

                            // f norm bar
                            var h1 = norms.spatial * barScale;
                            ctx.fillStyle = colors.blue;
                            ctx.fillRect(cx - 80, barY + barH - h1, barW, h1);
                            ctx.fillStyle = colors.text;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('||f||_2 = ' + norms.spatial.toFixed(4), cx - 50, barY + barH + 15);

                            // fhat norm bar
                            var h2 = norms.frequency * barScale;
                            ctx.fillStyle = colors.orange;
                            ctx.fillRect(cx + 20, barY + barH - h2, barW, h2);
                            ctx.fillText('||f\u0302||_2 = ' + norms.frequency.toFixed(4), cx + 50, barY + barH + 15);

                            // Equality indicator
                            var diff = Math.abs(norms.spatial - norms.frequency);
                            ctx.fillStyle = diff < 0.01 ? colors.green : colors.yellow;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.fillText(diff < 0.01 ? '\u2713 Equal (Plancherel)' : '\u2248 Equal (numerical)', cx, barY - 8);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: '<strong>[Computational, 2 stars]</strong> Using Plancherel\'s theorem, compute \\(\\int_{-\\infty}^\\infty \\frac{\\sin^2(\\pi a \\xi)}{(\\pi \\xi)^2}\\,d\\xi\\) for \\(a > 0\\) without directly evaluating the integral.',
                    hint: 'Recognize the integrand as \\(|\\hat{f}(\\xi)|^2\\) for some simple function \\(f\\). What function has Fourier transform \\(\\frac{\\sin(\\pi a \\xi)}{\\pi \\xi}\\)?',
                    solution: 'The function \\(f = \\mathbf{1}_{[-a/2, a/2]}\\) has Fourier transform \\(\\hat{f}(\\xi) = \\frac{\\sin(\\pi a \\xi)}{\\pi \\xi}\\). By Plancherel: \\(\\int |\\hat{f}|^2\\,d\\xi = \\int |f|^2\\,dx = a\\). Therefore \\(\\int_{-\\infty}^\\infty \\frac{\\sin^2(\\pi a\\xi)}{(\\pi\\xi)^2}\\,d\\xi = a\\).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Prove that the Fourier transform maps the Schwartz space \\(\\mathcal{S}(\\mathbb{R}^n)\\) into itself. (Recall: \\(\\varphi \\in \\mathcal{S}\\) iff \\(\\varphi\\) is \\(C^\\infty\\) and \\(\\sup_x |x^\\alpha D^\\beta \\varphi(x)| < \\infty\\) for all multi-indices \\(\\alpha, \\beta\\).)',
                    hint: 'Use the identities: \\(\\widehat{D^\\beta f}(\\xi) = (2\\pi i \\xi)^\\beta \\hat{f}(\\xi)\\) and \\(\\widehat{(-2\\pi i x)^\\alpha f}(\\xi) = D^\\alpha \\hat{f}(\\xi)\\). Show that \\(\\xi^\\alpha D^\\beta \\hat{f}\\) is bounded for all \\(\\alpha, \\beta\\).',
                    solution: 'For \\(\\varphi \\in \\mathcal{S}\\), the identity \\(D_\\xi^\\alpha \\hat{\\varphi}(\\xi) = \\widehat{(-2\\pi ix)^\\alpha \\varphi}(\\xi)\\) shows \\(\\hat{\\varphi}\\) is \\(C^\\infty\\). Also, \\(\\xi^\\beta \\hat{\\varphi}(\\xi) = \\frac{1}{(2\\pi i)^{|\\beta|}} \\widehat{D^\\beta \\varphi}(\\xi)\\). Since \\((-2\\pi ix)^\\alpha \\varphi \\in \\mathcal{S} \\subset L^1\\) and \\(D^\\beta \\varphi \\in \\mathcal{S} \\subset L^1\\), both \\(D^\\alpha \\hat{\\varphi}\\) and \\(\\xi^\\beta \\hat{\\varphi}\\) are bounded continuous functions (by \\(\\|\\cdot\\|_\\infty \\leq \\|\\cdot\\|_1\\)). Combining: \\(\\xi^\\beta D^\\alpha \\hat{\\varphi}(\\xi) = \\frac{1}{(2\\pi i)^{|\\beta|}} \\widehat{D^\\beta[(-2\\pi ix)^\\alpha \\varphi]}(\\xi)\\), which is bounded since \\(D^\\beta[x^\\alpha \\varphi] \\in L^1\\). Hence \\(\\hat{\\varphi} \\in \\mathcal{S}\\).'
                },
                {
                    question: '<strong>[Proof, 4 stars]</strong> Give a direct proof (without using Schwartz space) that the Fourier transform extends to a bounded operator on \\(L^2(\\mathbb{R})\\) using the Gaussian truncation \\(f_R(x) = f(x)e^{-\\pi x^2/R^2}\\).',
                    hint: 'Show \\(f_R \\in L^1 \\cap L^2\\), compute \\(\\|\\hat{f}_R\\|_2 = \\|f_R\\|_2\\), and take \\(R \\to \\infty\\). Use dominated convergence to show \\(f_R \\to f\\) in \\(L^2\\).',
                    solution: 'For \\(f \\in L^2\\), set \\(f_R(x) = f(x)e^{-\\pi x^2/R^2}\\). Then \\(|f_R| \\leq |f|\\) and \\(f_R \\in L^1 \\cap L^2\\) (since \\(|f_R| \\leq |f| \\cdot 1\\) and the Gaussian ensures integrability). By Lemma 15.12, \\(\\|\\hat{f}_R\\|_2 = \\|f_R\\|_2\\). As \\(R \\to \\infty\\), \\(f_R \\to f\\) pointwise and \\(|f_R| \\leq |f| \\in L^2\\), so \\(\\|f_R - f\\|_2 \\to 0\\) by DCT. The sequence \\((\\hat{f}_R)\\) is Cauchy in \\(L^2\\) (since \\(\\|\\hat{f}_R - \\hat{f}_S\\|_2 = \\|f_R - f_S\\|_2 \\to 0\\)). Define \\(\\hat{f} = \\lim_R \\hat{f}_R\\) in \\(L^2\\). Then \\(\\|\\hat{f}\\|_2 = \\lim_R \\|\\hat{f}_R\\|_2 = \\lim_R \\|f_R\\|_2 = \\|f\\|_2\\).'
                },
                {
                    question: '<strong>[Exploration, 2 stars]</strong> Using the Plancherel Isometry Display, verify the isometry for several functions and parameter values. For the rectangle function, observe that when \\(a\\) is large, \\(f\\) has large \\(L^2\\) norm (spread out in space), and so does \\(\\hat{f}\\) (concentrated in frequency but with large amplitude near \\(\\xi = 0\\)). Explain why both norms scale as \\(\\sqrt{a}\\) for the rectangle.',
                    hint: 'Compute \\(\\|\\mathbf{1}_{[-a,a]}\\|_2 = \\sqrt{2a}\\). For \\(\\hat{f}\\), use Plancherel directly rather than computing the integral of \\(\\text{sinc}^2\\).',
                    solution: 'For \\(f = \\mathbf{1}_{[-a,a]}\\): \\(\\|f\\|_2^2 = \\int_{-a}^a 1\\,dx = 2a\\), so \\(\\|f\\|_2 = \\sqrt{2a}\\). By Plancherel, \\(\\|\\hat{f}\\|_2 = \\sqrt{2a}\\) as well. One can verify numerically: \\(\\int |\\text{sinc}(2a\\xi)|^2 \\cdot (2a)^2\\,d\\xi = 2a\\). As \\(a\\) grows, both norms grow as \\(\\sqrt{a}\\). The spatial norm grows because \\(f\\) is supported on a larger set. The frequency-domain norm grows because \\(\\hat{f}(0) = 2a\\) (the peak at zero frequency is proportional to \\(a\\)), though the oscillations of \\(\\text{sinc}\\) spread the energy.'
                }
            ]
        },

        // ============================================================
        // Section 4: Fourier Inversion
        // ============================================================
        {
            id: 'fourier-inversion',
            title: 'Fourier Inversion',
            content: `
                <div class="bridge section-bridge">
                    <p>The Fourier transform maps a function to its frequency profile. Can we recover \\(f\\) from \\(\\hat{f}\\)? The inversion formula says yes: under appropriate conditions, \\(f(x) = \\int \\hat{f}(\\xi)e^{2\\pi i x \\cdot \\xi}\\,d\\xi\\). The proof requires care, because the integral on the right may not converge absolutely (\\(\\hat{f}\\) need not be in \\(L^1\\) even when \\(f \\in L^1\\)). Approximate identities in the frequency domain provide the tool to make this rigorous.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove the Fourier inversion theorem for \\(f \\in L^1\\) with \\(\\hat{f} \\in L^1\\), discuss the role of summability methods, and establish the uniqueness theorem for \\(L^1\\) functions.</p>
                </div>

                <h2>The Inversion Formula</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.15 (Fourier Inversion Theorem)</div>
                    <div class="env-body">
                        <p>If \\(f \\in L^1(\\mathbb{R}^n)\\) and \\(\\hat{f} \\in L^1(\\mathbb{R}^n)\\), then</p>
                        \\[f(x) = \\int_{\\mathbb{R}^n} \\hat{f}(\\xi)\\,e^{2\\pi i x \\cdot \\xi}\\,d\\xi \\quad \\text{for a.e. } x.\\]
                        <p>Moreover, the right side is continuous, so after modification on a null set, \\(f\\) is continuous.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 15.15</div>
                    <div class="env-body">
                        <p>Define \\(g(x) = \\int \\hat{f}(\\xi)e^{2\\pi i x \\cdot \\xi}\\,d\\xi\\). Since \\(\\hat{f} \\in L^1\\), the integral converges absolutely, and \\(g\\) is continuous (by dominated convergence, as in the proof of Proposition 15.3). We need to show \\(f = g\\) a.e.</p>
                        <p>Compute \\(\\hat{g}\\): for \\(\\eta \\in \\mathbb{R}^n\\),</p>
                        \\[\\hat{g}(\\eta) = \\int g(x)e^{-2\\pi i \\eta \\cdot x}\\,dx = \\int\\!\\int \\hat{f}(\\xi)e^{2\\pi i x \\cdot \\xi}e^{-2\\pi i \\eta \\cdot x}\\,d\\xi\\,dx.\\]
                        <p>Since \\(\\hat{f} \\in L^1\\) and \\(g \\in L^\\infty\\) (in fact \\(g\\) is bounded by \\(\\|\\hat{f}\\|_1\\)), we can apply Fubini to get:</p>
                        \\[\\hat{g}(\\eta) = \\int \\hat{f}(\\xi) \\left(\\int e^{-2\\pi i(\\eta - \\xi)\\cdot x}\\,dx\\right) d\\xi.\\]
                        <p>The inner integral is \\(\\delta(\\eta - \\xi)\\) in the distributional sense. To make this rigorous, we use the Gaussian regularization: multiply by \\(e^{-\\pi\\varepsilon|x|^2}\\), compute, and let \\(\\varepsilon \\to 0\\). This yields \\(\\hat{g} = \\hat{f}\\). Since the Fourier transform on \\(L^1\\) is injective (by the argument below), \\(g = f\\) a.e.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 15.16 (Uniqueness)</div>
                    <div class="env-body">
                        <p>If \\(f, g \\in L^1(\\mathbb{R}^n)\\) and \\(\\hat{f} = \\hat{g}\\), then \\(f = g\\) a.e.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(h = f - g\\). Then \\(\\hat{h} = 0\\). For any Schwartz function \\(\\varphi\\),</p>
                        \\[\\int h(x)\\varphi(x)\\,dx = \\int h(x)\\widehat{\\hat{\\varphi}(-\\cdot)}(x)\\,dx = \\int \\hat{h}(\\xi)\\hat{\\varphi}(-\\xi)\\,d\\xi = 0,\\]
                        <p>where we used Fubini and the identity \\(\\varphi(x) = \\int \\hat{\\varphi}(\\xi)e^{2\\pi i x \\cdot \\xi}\\,d\\xi\\). Since Schwartz functions are dense in \\(L^\\infty\\) in the weak-* topology (and separate points of \\(L^1\\)), \\(h = 0\\) a.e.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Inversion via Approximate Identities</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Summability)</div>
                    <div class="env-body">
                        <p>When \\(\\hat{f} \\notin L^1\\), the inversion integral \\(\\int \\hat{f}(\\xi)e^{2\\pi i x \\cdot \\xi}\\,d\\xi\\) does not converge absolutely. The remedy is to insert a convergence factor: compute \\(\\int \\hat{f}(\\xi)\\varphi_\\varepsilon(\\xi)e^{2\\pi i x \\cdot \\xi}\\,d\\xi\\) where \\(\\varphi_\\varepsilon\\) is an approximate identity in the frequency domain (e.g., \\(\\varphi_\\varepsilon(\\xi) = e^{-\\pi\\varepsilon^2|\\xi|^2}\\)). As \\(\\varepsilon \\to 0\\), the factor \\(\\varphi_\\varepsilon \\to 1\\) and we recover \\(f\\) in an appropriate sense. This is the frequency-domain analog of the spatial-domain approximation theorem (Theorem 15.11).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.17 (Summability Inversion)</div>
                    <div class="env-body">
                        <p>Let \\(f \\in L^1(\\mathbb{R}^n)\\) (or \\(f \\in L^2(\\mathbb{R}^n)\\)). Then</p>
                        \\[f(x) = \\lim_{\\varepsilon \\to 0^+} \\int_{\\mathbb{R}^n} \\hat{f}(\\xi)\\,e^{-\\pi\\varepsilon^2|\\xi|^2}\\,e^{2\\pi i x \\cdot \\xi}\\,d\\xi\\]
                        <p>where the limit holds in the \\(L^1\\) (resp. \\(L^2\\)) norm. If \\(f\\) is additionally continuous at \\(x\\), the limit holds pointwise.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>The right side equals \\(f * \\Phi_\\varepsilon(x)\\), where \\(\\Phi_\\varepsilon\\) is the inverse Fourier transform of \\(e^{-\\pi\\varepsilon^2|\\xi|^2}\\), which is \\(\\Phi_\\varepsilon(x) = \\varepsilon^{-n}e^{-\\pi|x|^2/\\varepsilon^2}\\), a Gaussian approximate identity. By Theorem 15.11, \\(f * \\Phi_\\varepsilon \\to f\\) in \\(L^p\\). Pointwise convergence at continuity points follows from standard approximate identity results.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Fourier Transform on \\(L^p\\) for \\(1 < p < 2\\))</div>
                    <div class="env-body">
                        <p>By the Riesz-Thorin interpolation theorem (Chapter 9), the Fourier transform extends to a bounded operator \\(\\mathcal{F}: L^p(\\mathbb{R}^n) \\to L^{p'}(\\mathbb{R}^n)\\) for \\(1 \\leq p \\leq 2\\), where \\(1/p + 1/p' = 1\\). The Hausdorff-Young inequality gives \\(\\|\\hat{f}\\|_{p'} \\leq \\|f\\|_p\\). For \\(p > 2\\), the Fourier transform does not map \\(L^p\\) into any \\(L^q\\) space in general, and must be interpreted distributionally.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="fourier-inversion-demo"></div>

                <p><strong>Reference alignment:</strong> Folland 8.3; Stein-Shakarchi III.3; Rudin RCA 9.11-9.14; Grafakos 2.2.</p>
            `,
            visualizations: [
                {
                    id: 'fourier-inversion-demo',
                    title: 'Fourier Inversion and Uncertainty Principle',
                    description: 'Demonstrates inversion by showing f and its reconstruction via inverse Fourier transform with a Gaussian convergence factor. A slider controls eps, and as eps decreases the reconstruction converges to f. Also displays spatial and frequency spreads to illustrate the uncertainty principle.',
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

                        var eps = 0.5;
                        var sigma = 1.0; // Gaussian width

                        VizEngine.createSlider(controls, 'Gaussian width \u03c3', 0.2, 3.0, sigma, 0.1, function(v) {
                            sigma = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Inversion factor \u03b5', 0.01, 1.0, eps, 0.01, function(v) {
                            eps = v;
                            draw();
                        });

                        function gauss(x, s) {
                            return Math.exp(-Math.PI * x * x / (s * s));
                        }

                        function gaussFT(xi, s) {
                            return s * Math.exp(-Math.PI * s * s * xi * xi);
                        }

                        // Inverse FT with convergence factor
                        function inversionApprox(x) {
                            var sum = 0;
                            var dxi = 0.02;
                            for (var xi = -12; xi <= 12; xi += dxi) {
                                var fhat = gaussFT(xi, sigma);
                                var factor = Math.exp(-Math.PI * eps * eps * xi * xi);
                                sum += fhat * factor * Math.cos(2 * Math.PI * x * xi) * dxi;
                            }
                            return sum;
                        }

                        // Compute spread: sqrt(int x^2 |f(x)|^2 dx / int |f|^2 dx)
                        function spatialSpread() {
                            var num = 0, den = 0, dt = 0.02;
                            for (var x = -10; x <= 10; x += dt) {
                                var v = gauss(x, sigma);
                                den += v * v * dt;
                                num += x * x * v * v * dt;
                            }
                            return Math.sqrt(num / den);
                        }

                        function freqSpread() {
                            var num = 0, den = 0, dt = 0.02;
                            for (var xi = -10; xi <= 10; xi += dt) {
                                var v = gaussFT(xi, sigma);
                                den += v * v * dt;
                                num += xi * xi * v * v * dt;
                            }
                            return Math.sqrt(num / den);
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { left: 50, right: 15, top: 40, bottom: 10 };
                            var plotH = (h - margin.top - 90) / 2;
                            var plotW = w - margin.left - margin.right;
                            var xRange = 5;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Fourier Inversion with Gaussian Convergence Factor', w/2, 18);

                            for (var panel = 0; panel < 2; panel++) {
                                var yOff = margin.top + panel * (plotH + 45);

                                ctx.fillStyle = '#111130';
                                ctx.fillRect(margin.left, yOff, plotW, plotH);

                                // Label
                                ctx.fillStyle = panel === 0 ? colors.blue : colors.orange;
                                ctx.font = 'bold 11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText(panel === 0 ? 'Spatial: f(x) = exp(-\u03c0x\u00b2/\u03c3\u00b2) and reconstruction' : 'Frequency: f\u0302(\u03be) = \u03c3 exp(-\u03c0\u03c3\u00b2\u03be\u00b2) and convergence factor', margin.left + 5, yOff - 5);

                                var zeroY = yOff + plotH * 0.78;
                                ctx.strokeStyle = colors.muted;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath(); ctx.moveTo(margin.left, zeroY); ctx.lineTo(margin.left + plotW, zeroY); ctx.stroke();

                                var nPts = 400;
                                if (panel === 0) {
                                    // Original function
                                    var maxVal = 1.2;
                                    var scale = plotH * 0.65 / maxVal;

                                    ctx.strokeStyle = colors.blue;
                                    ctx.lineWidth = 2.5;
                                    ctx.beginPath();
                                    for (var i = 0; i <= nPts; i++) {
                                        var t = -xRange + 2*xRange*i/nPts;
                                        var v = gauss(t, sigma);
                                        var sx = margin.left + i/nPts * plotW;
                                        var sy = zeroY - v * scale;
                                        if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                                    }
                                    ctx.stroke();

                                    // Reconstruction
                                    ctx.strokeStyle = colors.green;
                                    ctx.lineWidth = 2;
                                    ctx.setLineDash([6, 4]);
                                    ctx.beginPath();
                                    for (var i = 0; i <= nPts; i++) {
                                        var t = -xRange + 2*xRange*i/nPts;
                                        var v = inversionApprox(t);
                                        var sx = margin.left + i/nPts * plotW;
                                        var sy = zeroY - v * scale;
                                        if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                                    }
                                    ctx.stroke();
                                    ctx.setLineDash([]);

                                    // Legend
                                    ctx.font = '10px -apple-system, sans-serif';
                                    ctx.textAlign = 'right';
                                    ctx.fillStyle = colors.blue;
                                    ctx.fillText('f(x)', margin.left + plotW - 5, yOff + 15);
                                    ctx.fillStyle = colors.green;
                                    ctx.fillText('Reconstruction (\u03b5=' + eps.toFixed(2) + ')', margin.left + plotW - 5, yOff + 28);
                                } else {
                                    // Fourier transform
                                    var maxVal2 = Math.max(sigma * 1.1, 1.2);
                                    var scale2 = plotH * 0.65 / maxVal2;

                                    ctx.strokeStyle = colors.orange;
                                    ctx.lineWidth = 2.5;
                                    ctx.beginPath();
                                    for (var i = 0; i <= nPts; i++) {
                                        var t = -xRange + 2*xRange*i/nPts;
                                        var v = gaussFT(t, sigma);
                                        var sx = margin.left + i/nPts * plotW;
                                        var sy = zeroY - v * scale2;
                                        if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                                    }
                                    ctx.stroke();

                                    // Convergence factor
                                    ctx.strokeStyle = colors.yellow;
                                    ctx.lineWidth = 1.5;
                                    ctx.setLineDash([4, 3]);
                                    ctx.beginPath();
                                    for (var i = 0; i <= nPts; i++) {
                                        var t = -xRange + 2*xRange*i/nPts;
                                        var v = Math.exp(-Math.PI * eps * eps * t * t);
                                        var sx = margin.left + i/nPts * plotW;
                                        var sy = zeroY - v * scale2;
                                        if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                                    }
                                    ctx.stroke();
                                    ctx.setLineDash([]);

                                    // Product
                                    ctx.strokeStyle = colors.teal;
                                    ctx.lineWidth = 2;
                                    ctx.beginPath();
                                    for (var i = 0; i <= nPts; i++) {
                                        var t = -xRange + 2*xRange*i/nPts;
                                        var v = gaussFT(t, sigma) * Math.exp(-Math.PI * eps * eps * t * t);
                                        var sx = margin.left + i/nPts * plotW;
                                        var sy = zeroY - v * scale2;
                                        if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                                    }
                                    ctx.stroke();

                                    ctx.font = '10px -apple-system, sans-serif';
                                    ctx.textAlign = 'right';
                                    ctx.fillStyle = colors.orange;
                                    ctx.fillText('f\u0302(\u03be)', margin.left + plotW - 5, yOff + 15);
                                    ctx.fillStyle = colors.yellow;
                                    ctx.fillText('e^{-\u03c0\u03b5\u00b2\u03be\u00b2}', margin.left + plotW - 5, yOff + 28);
                                    ctx.fillStyle = colors.teal;
                                    ctx.fillText('Product', margin.left + plotW - 5, yOff + 41);
                                }
                            }

                            // Uncertainty principle display
                            var dx = spatialSpread();
                            var dxi = freqSpread();
                            var product = dx * dxi;
                            var boxY = h - 40;

                            ctx.fillStyle = colors.text;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Uncertainty: \u0394x = ' + dx.toFixed(3) + ',  \u0394\u03be = ' + dxi.toFixed(3) + ',  \u0394x \u00b7 \u0394\u03be = ' + product.toFixed(4) + '  (lower bound: ' + (1/(4*Math.PI)).toFixed(4) + ')', w/2, boxY);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.fillText('Gaussian achieves equality in the uncertainty principle', w/2, boxY + 16);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: '<strong>[Computational, 2 stars]</strong> Let \\(f(x) = e^{-2\\pi|x|}\\) on \\(\\mathbb{R}\\). Verify that \\(\\hat{f}(\\xi) = \\frac{1}{\\pi(1 + 4\\pi^2\\xi^2)}\\) (Poisson kernel). Show \\(\\hat{f} \\in L^1(\\mathbb{R})\\), and use the Fourier inversion theorem to recover \\(f\\) from \\(\\hat{f}\\).',
                    hint: 'To verify \\(\\hat{f} \\in L^1\\), compute \\(\\int \\frac{d\\xi}{1 + 4\\pi^2\\xi^2}\\). For inversion, compute \\(\\int \\hat{f}(\\xi)e^{2\\pi i x\\xi}\\,d\\xi\\) using contour integration or the known formula.',
                    solution: 'From Section 1: \\(\\hat{f}(\\xi) = \\frac{1}{\\pi(1 + 4\\pi^2\\xi^2)}\\). Integrability: \\(\\int \\frac{d\\xi}{\\pi(1+4\\pi^2\\xi^2)} = \\frac{1}{\\pi} \\cdot \\frac{1}{2\\pi}\\arctan(2\\pi\\xi)\\big|_{-\\infty}^\\infty = \\frac{1}{\\pi} \\cdot \\frac{1}{2\\pi} \\cdot \\pi = \\frac{1}{2\\pi}\\). Wait: more carefully, \\(\\int_{-\\infty}^\\infty \\frac{d\\xi}{1+4\\pi^2\\xi^2} = \\frac{1}{2\\pi}[\\arctan(2\\pi\\xi)]_{-\\infty}^\\infty = \\frac{1}{2\\pi}\\cdot\\pi = \\frac{1}{2}\\). So \\(\\|\\hat{f}\\|_1 = 1/(2\\pi^2)\\cdot(\\pi/2)\\). Actually, \\(\\int \\hat{f} = \\hat{f}\\) evaluated at... Let us just note \\(\\hat{f} \\sim 1/\\xi^2\\) for large \\(\\xi\\), so \\(\\hat{f} \\in L^1\\). Inversion: \\(\\check{\\hat{f}}(x) = \\int \\hat{f}(\\xi)e^{2\\pi ix\\xi}\\,d\\xi = e^{-2\\pi|x|} = f(x)\\) by contour integration (closing in the upper/lower half-plane depending on the sign of \\(x\\)).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Prove that if \\(f \\in L^1(\\mathbb{R}^n)\\) is continuous at \\(x_0\\) and \\(\\hat{f} \\geq 0\\), then \\(\\hat{f} \\in L^1(\\mathbb{R}^n)\\) and the inversion formula holds pointwise at \\(x_0\\).',
                    hint: 'Use the Gaussian summability: \\(\\int \\hat{f}(\\xi)e^{-\\pi\\varepsilon^2|\\xi|^2}\\,d\\xi = (f * \\Phi_\\varepsilon)(0)\\) where \\(\\Phi_\\varepsilon\\) is a Gaussian. Since \\(\\hat{f} \\geq 0\\), monotone convergence applies.',
                    solution: 'Since \\(\\hat{f} \\geq 0\\), the functions \\(\\hat{f}(\\xi)e^{-\\pi\\varepsilon^2|\\xi|^2}\\) increase to \\(\\hat{f}(\\xi)\\) as \\(\\varepsilon \\to 0\\). By monotone convergence: \\(\\int \\hat{f}(\\xi)\\,d\\xi = \\lim_{\\varepsilon \\to 0} \\int \\hat{f}(\\xi)e^{-\\pi\\varepsilon^2|\\xi|^2}\\,d\\xi\\). The right side equals \\(\\lim_{\\varepsilon \\to 0} (f * \\Phi_\\varepsilon)(0)\\), where \\(\\Phi_\\varepsilon(x) = \\varepsilon^{-n}e^{-\\pi|x|^2/\\varepsilon^2}\\). Since \\(f\\) is continuous at 0 (take \\(x_0 = 0\\) WLOG by translation), \\(f * \\Phi_\\varepsilon(0) \\to f(0)\\). So \\(\\int \\hat{f} = f(0) < \\infty\\), proving \\(\\hat{f} \\in L^1\\). The inversion formula then holds by Theorem 15.15.'
                },
                {
                    question: '<strong>[Proof, 4 stars]</strong> Prove that the Fourier transform \\(\\mathcal{F}: \\mathcal{S}(\\mathbb{R}^n) \\to \\mathcal{S}(\\mathbb{R}^n)\\) is a bijection with inverse given by \\(\\mathcal{F}^{-1}g(x) = \\int g(\\xi)e^{2\\pi i x \\cdot \\xi}\\,d\\xi\\), i.e., \\(\\mathcal{F}^{-1} = \\check{\\mathcal{F}}\\) (the inverse Fourier transform).',
                    hint: 'Show \\(\\mathcal{F}^{-1}\\mathcal{F}\\varphi = \\varphi\\) for \\(\\varphi \\in \\mathcal{S}\\) by the inversion theorem (since \\(\\varphi, \\hat{\\varphi} \\in L^1\\)). Then show \\(\\mathcal{F}\\mathcal{F}^{-1} = \\text{Id}\\) similarly.',
                    solution: 'For \\(\\varphi \\in \\mathcal{S}\\), both \\(\\varphi\\) and \\(\\hat{\\varphi}\\) are in \\(\\mathcal{S} \\subset L^1\\) (by the exercise in Section 3). By Theorem 15.15, \\(\\mathcal{F}^{-1}(\\hat{\\varphi})(x) = \\int \\hat{\\varphi}(\\xi)e^{2\\pi ix\\cdot\\xi}\\,d\\xi = \\varphi(x)\\) for all \\(x\\) (pointwise, since \\(\\varphi\\) is continuous). So \\(\\mathcal{F}^{-1}\\circ\\mathcal{F} = \\text{Id}\\) on \\(\\mathcal{S}\\). Similarly, \\(\\mathcal{F}(\\mathcal{F}^{-1}\\psi) = \\psi\\) for \\(\\psi \\in \\mathcal{S}\\), since \\(\\mathcal{F}^{-1}\\psi(x) = \\hat{\\psi}(-x)\\) (reflection), and \\(\\mathcal{F}[\\hat{\\psi}(-\\cdot)](\\xi) = \\psi(\\xi)\\) by the double-transform identity \\(\\hat{\\hat{f}}(x) = f(-x)\\) (which follows from applying inversion twice).'
                },
                {
                    question: '<strong>[Exploration, 3 stars]</strong> Using the Fourier Inversion visualization, set \\(\\sigma = 1\\) and observe the reconstruction for various values of \\(\\varepsilon\\). At what value of \\(\\varepsilon\\) does the reconstruction become visually indistinguishable from \\(f\\)? Now increase \\(\\sigma\\) to 3. Does convergence become faster or slower? Explain using the uncertainty principle.',
                    hint: 'The convergence factor \\(e^{-\\pi\\varepsilon^2\\xi^2}\\) suppresses frequencies \\(|\\xi| \\gg 1/\\varepsilon\\). If \\(\\hat{f}\\) is concentrated near \\(\\xi = 0\\) (large \\(\\sigma\\)), less suppression occurs.',
                    solution: 'For \\(\\sigma = 1\\): the Gaussian \\(f\\) and its FT have the same spread (\\(\\Delta x = \\Delta\\xi\\)), so the convergence factor needs \\(\\varepsilon\\) small enough to capture the frequency content. Visually, \\(\\varepsilon \\lesssim 0.1\\) gives good reconstruction. For \\(\\sigma = 3\\): \\(f\\) is wide in space, so \\(\\hat{f}\\) is narrow in frequency (\\(\\hat{f}(\\xi) = 3e^{-9\\pi\\xi^2}\\) decays rapidly). The convergence factor \\(e^{-\\pi\\varepsilon^2\\xi^2}\\) barely affects the already-concentrated \\(\\hat{f}\\), so even \\(\\varepsilon \\approx 0.5\\) gives good reconstruction. This is the uncertainty principle in action: a wide spatial function has concentrated frequency content, requiring less regularization for inversion.'
                }
            ]
        },

        // ============================================================
        // Section 5: Applications
        // ============================================================
        {
            id: 'fourier-applications',
            title: 'Applications: Heat Equation and Uncertainty Principle',
            content: `
                <div class="bridge section-bridge">
                    <p>The machinery of the Fourier transform, built on the measure-theoretic foundations of \\(L^1\\) and \\(L^2\\), reaches its payoff in applications. We present two: the solution of the heat equation (where the Fourier transform converts a PDE into an ODE) and the Heisenberg uncertainty principle (a direct consequence of the Plancherel and Cauchy-Schwarz inequalities). Both demonstrate how abstract \\(L^p\\) theory yields concrete, quantitative results.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Solve the heat equation on \\(\\mathbb{R}^n\\) using the Fourier transform. State and prove the uncertainty principle. Connect both to the preceding theory.</p>
                </div>

                <h2>The Heat Equation</h2>

                <div class="env-block definition">
                    <div class="env-title">Problem Setup (Heat Equation on \\(\\mathbb{R}^n\\))</div>
                    <div class="env-body">
                        <p>Find \\(u: \\mathbb{R}^n \\times (0,\\infty) \\to \\mathbb{R}\\) satisfying</p>
                        \\[\\frac{\\partial u}{\\partial t} = \\Delta u, \\qquad u(x, 0) = f(x),\\]
                        <p>where \\(\\Delta = \\sum_{j=1}^n \\frac{\\partial^2}{\\partial x_j^2}\\) is the Laplacian and \\(f \\in L^1(\\mathbb{R}^n) \\cap L^\\infty(\\mathbb{R}^n)\\) is the initial temperature distribution.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Fourier Transform Diagonalizes the Laplacian)</div>
                    <div class="env-body">
                        <p>The Laplacian in the spatial domain becomes multiplication by \\(-4\\pi^2|\\xi|^2\\) in the frequency domain: \\(\\widehat{\\Delta u}(\\xi, t) = -4\\pi^2|\\xi|^2 \\hat{u}(\\xi, t)\\). This converts the PDE \\(\\partial_t u = \\Delta u\\) into the family of ODEs \\(\\partial_t \\hat{u}(\\xi, t) = -4\\pi^2|\\xi|^2 \\hat{u}(\\xi, t)\\), one for each frequency \\(\\xi\\). Each ODE has the solution \\(\\hat{u}(\\xi, t) = \\hat{f}(\\xi)e^{-4\\pi^2|\\xi|^2 t}\\). The Fourier transform has "diagonalized" the differential operator.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.18 (Solution of the Heat Equation)</div>
                    <div class="env-body">
                        <p>The solution to the heat equation with initial data \\(f \\in L^1(\\mathbb{R}^n)\\) is</p>
                        \\[u(x, t) = (f * H_t)(x) = \\int_{\\mathbb{R}^n} f(y)\\, H_t(x - y)\\,dy,\\]
                        <p>where the <strong>heat kernel</strong> is</p>
                        \\[H_t(x) = (4\\pi t)^{-n/2} e^{-|x|^2/(4t)}, \\quad t > 0.\\]
                        <p>Moreover, \\(u \\in C^\\infty(\\mathbb{R}^n \\times (0,\\infty))\\), \\(u\\) satisfies \\(\\partial_t u = \\Delta u\\), and \\(u(\\cdot, t) \\to f\\) in \\(L^1\\) as \\(t \\to 0^+\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p><strong>Step 1 (Transform the PDE).</strong> Taking the Fourier transform in \\(x\\): \\(\\partial_t \\hat{u}(\\xi,t) = -4\\pi^2|\\xi|^2 \\hat{u}(\\xi,t)\\), with \\(\\hat{u}(\\xi, 0) = \\hat{f}(\\xi)\\).</p>
                        <p><strong>Step 2 (Solve the ODE).</strong> For each \\(\\xi\\), this is \\(\\hat{u}(\\xi,t) = \\hat{f}(\\xi)e^{-4\\pi^2|\\xi|^2 t}\\).</p>
                        <p><strong>Step 3 (Invert).</strong> Recognize \\(e^{-4\\pi^2|\\xi|^2 t} = \\hat{H}_t(\\xi)\\), where \\(H_t(x) = (4\\pi t)^{-n/2}e^{-|x|^2/(4t)}\\). By the convolution theorem: \\(\\hat{u} = \\hat{f} \\cdot \\hat{H}_t = \\widehat{f * H_t}\\). By uniqueness (Corollary 15.16), \\(u = f * H_t\\).</p>
                        <p><strong>Step 4 (Regularity and convergence).</strong> Since \\(H_t\\) is \\(C^\\infty\\) and all its derivatives are rapidly decreasing, differentiation under the integral sign (justified by DCT) shows \\(u \\in C^\\infty\\) for \\(t > 0\\). The family \\(\\{H_t\\}_{t > 0}\\) is an approximate identity as \\(t \\to 0^+\\), so \\(u(\\cdot, t) \\to f\\) in \\(L^1\\) by Theorem 15.11.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.19 (Heat Equation with Point Source)</div>
                    <div class="env-body">
                        <p>If the initial condition is a Dirac delta \\(f = \\delta_0\\) (a point source of heat at the origin, interpreted as a measure rather than an \\(L^1\\) function), the solution is \\(u(x,t) = H_t(x)\\) itself. This is the <em>fundamental solution</em>: a Gaussian that spreads out over time, with total mass \\(\\int H_t = 1\\) preserved. The width grows as \\(\\sqrt{t}\\), reflecting the diffusive character of the heat equation.</p>
                    </div>
                </div>

                <h2>The Heisenberg Uncertainty Principle</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.20 (Heisenberg Uncertainty Principle)</div>
                    <div class="env-body">
                        <p>For \\(f \\in L^2(\\mathbb{R}^n)\\) with \\(xf \\in L^2\\) and \\(\\xi\\hat{f} \\in L^2\\),</p>
                        \\[\\left(\\int_{\\mathbb{R}^n} |x|^2 |f(x)|^2\\,dx\\right)^{1/2} \\cdot \\left(\\int_{\\mathbb{R}^n} |\\xi|^2 |\\hat{f}(\\xi)|^2\\,d\\xi\\right)^{1/2} \\geq \\frac{n}{4\\pi} \\|f\\|_2^2.\\]
                        <p>Equivalently, writing \\(\\Delta x = \\|\\,|x|f\\|_2/\\|f\\|_2\\) and \\(\\Delta\\xi = \\|\\,|\\xi|\\hat{f}\\|_2/\\|\\hat{f}\\|_2\\): \\(\\Delta x \\cdot \\Delta\\xi \\geq \\frac{n}{4\\pi}\\).</p>
                        <p>Equality holds if and only if \\(f\\) is a Gaussian: \\(f(x) = Ce^{-a|x|^2}\\) for some \\(C \\in \\mathbb{C}\\), \\(a > 0\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 15.20 (case \\(n = 1\\))</div>
                    <div class="env-body">
                        <p>We may assume \\(f\\) is Schwartz (the general case follows by density). Integrate by parts:</p>
                        \\[\\|f\\|_2^2 = \\int_{-\\infty}^\\infty |f(x)|^2\\,dx = -\\int_{-\\infty}^\\infty x \\frac{d}{dx}|f(x)|^2\\,dx = -\\int x \\cdot 2\\,\\text{Re}(\\overline{f(x)}f'(x))\\,dx.\\]
                        <p>By Cauchy-Schwarz:</p>
                        \\[\\|f\\|_2^2 \\leq 2\\left(\\int x^2|f|^2\\,dx\\right)^{1/2}\\left(\\int |f'|^2\\,dx\\right)^{1/2} = 2\\|xf\\|_2 \\|f'\\|_2.\\]
                        <p>By Plancherel, \\(\\|f'\\|_2 = \\|\\widehat{f'}\\|_2 = \\|2\\pi i\\xi\\hat{f}\\|_2 = 2\\pi\\|\\xi\\hat{f}\\|_2\\). Therefore:</p>
                        \\[\\|f\\|_2^2 \\leq 4\\pi\\|xf\\|_2\\|\\xi\\hat{f}\\|_2,\\]
                        <p>which gives \\(\\|xf\\|_2\\|\\xi\\hat{f}\\|_2 \\geq \\frac{1}{4\\pi}\\|f\\|_2^2\\). Equality in Cauchy-Schwarz requires \\(xf(x) = c f'(x)\\) for some constant, whose solution is \\(f(x) = Ce^{x^2/(2c)}\\). Integrability forces \\(c < 0\\), giving a Gaussian.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Physical Interpretation)</div>
                    <div class="env-body">
                        <p>In quantum mechanics, \\(|f(x)|^2\\) is the probability density for position and \\(|\\hat{f}(\\xi)|^2\\) is the probability density for momentum (up to a factor of \\(\\hbar\\)). The uncertainty principle states that one cannot simultaneously localize a quantum particle in both position and momentum. The measure-theoretic content is that this is a theorem about \\(L^2\\) norms and the Fourier transform, not a statement about measurement limitations or experimental error.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Summary: The Fourier Transform on \\(L^p\\))</div>
                    <div class="env-body">
                        <p>We summarize the mapping properties of the Fourier transform established in this chapter:</p>
                        <ul>
                            <li>\\(\\mathcal{F}: L^1 \\to C_0\\), bounded with \\(\\|\\hat{f}\\|_\\infty \\leq \\|f\\|_1\\), injective, not surjective (Section 1).</li>
                            <li>\\(\\mathcal{F}: L^2 \\to L^2\\), unitary isometry, \\(\\|\\hat{f}\\|_2 = \\|f\\|_2\\) (Section 3).</li>
                            <li>\\(\\mathcal{F}: L^p \\to L^{p'}\\) for \\(1 \\leq p \\leq 2\\), \\(1/p + 1/p' = 1\\), bounded by Hausdorff-Young (Section 4).</li>
                            <li>\\(\\mathcal{F}: \\mathcal{S} \\to \\mathcal{S}\\), bijection, and extends to tempered distributions \\(\\mathcal{S}' \\to \\mathcal{S}'\\).</li>
                        </ul>
                        <p>Each of these relies essentially on the Lebesgue integral and \\(L^p\\) space theory developed in Chapters 6 and 9.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="heat-equation-solver"></div>

                <p><strong>Reference alignment:</strong> Folland 8.5; Stein-Shakarchi III.4-5; Evans PDE Ch. 2; Grafakos 2.2.16.</p>
            `,
            visualizations: [
                {
                    id: 'heat-equation-solver',
                    title: 'Heat Equation Solver',
                    description: 'Solve the heat equation with various initial conditions. Watch the solution evolve as time increases, with the initial data smoothed by convolution with the heat kernel. A slider controls time, and the initial condition can be changed.',
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

                        var time = 0.01;
                        var initType = 0; // 0=step, 1=delta approx, 2=two bumps, 3=sawtooth
                        var playing = false;
                        var animFrame = null;
                        var initNames = ['Step function', 'Narrow Gaussian (approx delta)', 'Two bumps', 'Sawtooth'];

                        VizEngine.createSlider(controls, 'Time t', 0.001, 2.0, time, 0.001, function(v) {
                            time = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Next initial condition', function() {
                            initType = (initType + 1) % 4;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Play / Pause', function() {
                            playing = !playing;
                            if (playing) animate();
                            else if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
                        });

                        function initialData(x) {
                            switch(initType) {
                                case 0: return (Math.abs(x) < 1) ? 1 : 0;
                                case 1: return Math.exp(-x*x/0.01) / Math.sqrt(0.01 * Math.PI);
                                case 2: return Math.exp(-(x-1.5)*(x-1.5)/0.2) + Math.exp(-(x+1.5)*(x+1.5)/0.2);
                                case 3:
                                    if (Math.abs(x) > 2) return 0;
                                    return 1 - Math.abs(x)/2;
                                default: return 0;
                            }
                        }

                        function heatKernel(x, t) {
                            return Math.exp(-x*x/(4*t)) / Math.sqrt(4 * Math.PI * t);
                        }

                        function solution(x, t) {
                            if (t < 1e-6) return initialData(x);
                            var sum = 0;
                            var dy = 0.03;
                            for (var y = -8; y <= 8; y += dy) {
                                sum += initialData(y) * heatKernel(x - y, t) * dy;
                            }
                            return sum;
                        }

                        function animate() {
                            if (!playing) return;
                            time += 0.005;
                            if (time > 2.0) time = 0.001;
                            draw();
                            animFrame = requestAnimationFrame(animate);
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = { left: 55, right: 20, top: 50, bottom: 60 };
                            var plotW = w - margin.left - margin.right;
                            var plotH = h - margin.top - margin.bottom;
                            var xRange = 5;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Heat Equation: \u2202u/\u2202t = \u2202\u00b2u/\u2202x\u00b2', w/2, 18);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('Initial condition: ' + initNames[initType] + '    t = ' + time.toFixed(3), w/2, 36);

                            // Plot area
                            ctx.fillStyle = '#111130';
                            ctx.fillRect(margin.left, margin.top, plotW, plotH);

                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var gx = -xRange; gx <= xRange; gx++) {
                                var sx = margin.left + (gx + xRange)/(2*xRange) * plotW;
                                ctx.beginPath(); ctx.moveTo(sx, margin.top); ctx.lineTo(sx, margin.top + plotH); ctx.stroke();
                            }

                            // Zero axis
                            var zeroY = margin.top + plotH * 0.82;
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(margin.left, zeroY); ctx.lineTo(margin.left + plotW, zeroY); ctx.stroke();

                            // Axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var lx = -xRange; lx <= xRange; lx++) {
                                var lsx = margin.left + (lx + xRange)/(2*xRange) * plotW;
                                ctx.fillText(lx.toString(), lsx, zeroY + 14);
                            }

                            // Find scale
                            var maxVal = 0.1;
                            var nPts = 500;
                            for (var i = 0; i <= nPts; i++) {
                                var t = -xRange + 2*xRange*i/nPts;
                                var v0 = Math.abs(initialData(t));
                                var v1 = Math.abs(solution(t, time));
                                if (v0 > maxVal) maxVal = v0;
                                if (v1 > maxVal) maxVal = v1;
                            }
                            var scale = plotH * 0.7 / maxVal;

                            // Initial data (faded)
                            ctx.strokeStyle = 'rgba(88,166,255,0.35)';
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4,3]);
                            ctx.beginPath();
                            for (var i = 0; i <= nPts; i++) {
                                var t = -xRange + 2*xRange*i/nPts;
                                var v = initialData(t);
                                var sx = margin.left + i/nPts * plotW;
                                var sy = zeroY - v * scale;
                                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Solution at time t
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (var i = 0; i <= nPts; i++) {
                                var t = -xRange + 2*xRange*i/nPts;
                                var v = solution(t, time);
                                var sx = margin.left + i/nPts * plotW;
                                var sy = zeroY - v * scale;
                                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Fill under solution
                            ctx.fillStyle = 'rgba(240,136,62,0.12)';
                            ctx.beginPath();
                            ctx.moveTo(margin.left, zeroY);
                            for (var i = 0; i <= nPts; i++) {
                                var t = -xRange + 2*xRange*i/nPts;
                                var v = solution(t, time);
                                var sx = margin.left + i/nPts * plotW;
                                var sy = zeroY - v * scale;
                                ctx.lineTo(sx, sy);
                            }
                            ctx.lineTo(margin.left + plotW, zeroY);
                            ctx.closePath();
                            ctx.fill();

                            // Heat kernel (small inset)
                            var insetW = 140, insetH = 80;
                            var insetX = margin.left + plotW - insetW - 10;
                            var insetY = margin.top + 10;
                            ctx.fillStyle = 'rgba(12,12,32,0.85)';
                            ctx.fillRect(insetX, insetY, insetW, insetH);
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 0.5;
                            ctx.strokeRect(insetX, insetY, insetW, insetH);

                            ctx.fillStyle = colors.muted;
                            ctx.font = '9px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Heat kernel H_t', insetX + insetW/2, insetY + 11);

                            var hkMax = heatKernel(0, Math.max(time, 0.01));
                            var hkScale = (insetH - 20) / hkMax;
                            var hkZero = insetY + insetH - 5;
                            ctx.strokeStyle = colors.teal;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var i = 0; i <= 100; i++) {
                                var t = -3 + 6*i/100;
                                var v = heatKernel(t, Math.max(time, 0.01));
                                var sx = insetX + i/100 * insetW;
                                var sy = hkZero - v * hkScale;
                                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Legend
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = colors.blue;
                            ctx.fillText('f(x) [initial]', margin.left + 10, margin.top + plotH + 25);
                            ctx.fillStyle = colors.orange;
                            ctx.fillText('u(x,t) = (f * H_t)(x)', margin.left + 10, margin.top + plotH + 42);
                            ctx.fillStyle = colors.teal;
                            ctx.fillText('H_t(x) [heat kernel]', margin.left + 200, margin.top + plotH + 25);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: '<strong>[Computational, 2 stars]</strong> Solve the heat equation on \\(\\mathbb{R}\\) with initial data \\(f(x) = e^{-|x|}\\). Write the solution as an explicit convolution integral, and verify that \\(u(0, t) = \\frac{1}{\\sqrt{\\pi t}}\\int_0^\\infty e^{-y}e^{-y^2/(4t)}\\,dy\\).',
                    hint: 'Use \\(u(x,t) = (f * H_t)(x) = \\int f(y)H_t(x-y)\\,dy\\). At \\(x = 0\\), exploit symmetry.',
                    solution: '\\(u(x,t) = \\int_{-\\infty}^\\infty e^{-|y|} \\frac{1}{\\sqrt{4\\pi t}} e^{-(x-y)^2/(4t)}\\,dy\\). At \\(x=0\\): \\(u(0,t) = \\frac{1}{\\sqrt{4\\pi t}} \\int_{-\\infty}^\\infty e^{-|y|} e^{-y^2/(4t)}\\,dy = \\frac{2}{\\sqrt{4\\pi t}} \\int_0^\\infty e^{-y} e^{-y^2/(4t)}\\,dy = \\frac{1}{\\sqrt{\\pi t}} \\int_0^\\infty e^{-y} e^{-y^2/(4t)}\\,dy\\), using symmetry of the integrand. This can be evaluated by completing the square: the exponent is \\(-y - y^2/(4t) = -(y + 2t)^2/(4t) + t\\), giving \\(u(0,t) = \\frac{e^t}{\\sqrt{\\pi t}} \\int_{2t}^\\infty \\frac{1}{2\\sqrt{t}} e^{-s^2/(4t)}\\,ds = e^t \\text{erfc}(\\sqrt{t})\\).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Show that the total heat is conserved: if \\(u(x,t) = (f * H_t)(x)\\) solves the heat equation with \\(f \\in L^1(\\mathbb{R}^n)\\), then \\(\\int_{\\mathbb{R}^n} u(x,t)\\,dx = \\int_{\\mathbb{R}^n} f(x)\\,dx\\) for all \\(t > 0\\).',
                    hint: 'Use Fubini and the fact that \\(\\int H_t = 1\\).',
                    solution: 'By Fubini (justified since \\(f \\in L^1\\) and \\(H_t \\geq 0\\) with \\(\\int H_t = 1\\)): \\(\\int u(x,t)\\,dx = \\int\\int f(y)H_t(x-y)\\,dy\\,dx = \\int f(y)\\left(\\int H_t(x-y)\\,dx\\right)dy = \\int f(y) \\cdot 1\\,dy = \\int f\\). Alternatively, in the frequency domain: \\(\\hat{u}(0,t) = \\hat{f}(0) \\cdot e^0 = \\hat{f}(0) = \\int f\\). Since \\(\\hat{u}(0,t) = \\int u(x,t)\\,dx\\), conservation follows.'
                },
                {
                    question: '<strong>[Proof, 4 stars]</strong> Prove the uncertainty principle (Theorem 15.20) in dimension \\(n = 1\\) by filling in all details of the integration-by-parts argument. In particular, justify the boundary term vanishing and the equality case.',
                    hint: 'Start from \\(\\int |f|^2\\,dx = -\\int x \\frac{d}{dx}|f|^2\\,dx\\) (integration by parts with \\(u = |f|^2\\), \\(dv = dx\\), reversed). The boundary terms vanish since \\(x|f(x)|^2 \\to 0\\) as \\(|x| \\to \\infty\\) (because \\(xf \\in L^2\\) implies \\(x^2|f|^2 \\in L^1\\)). For the equality case, trace back through Cauchy-Schwarz.',
                    solution: 'Integration by parts: \\(\\int_{-R}^R |f|^2\\,dx = [x|f(x)|^2]_{-R}^R - \\int_{-R}^R x \\frac{d}{dx}|f(x)|^2\\,dx\\). Boundary: \\(R|f(R)|^2 \\leq (\\int_R^\\infty x^2|f|^2\\,dx)^{1/2} \\cdot (\\int_R^\\infty |f|^2\\,dx)^{1/2} \\cdot R / \\sqrt{R} \\to 0\\) (since \\(xf \\in L^2\\) and \\(f \\in L^2\\)). So the boundary term vanishes as \\(R \\to \\infty\\). Now \\(\\frac{d}{dx}|f|^2 = 2\\text{Re}(\\bar{f}f\')\\), so \\(\\|f\\|_2^2 \\leq 2\\int |x||f||f\'|\\,dx \\leq 2\\|xf\\|_2\\|f\'\\|_2\\) by Cauchy-Schwarz. Plancherel gives \\(\\|f\'\\|_2 = 2\\pi\\|\\xi\\hat{f}\\|_2\\), yielding \\(\\|f\\|_2^2 \\leq 4\\pi\\|xf\\|_2\\|\\xi\\hat{f}\\|_2\\). Equality in Cauchy-Schwarz requires \\(xf(x) = cf\'(x)\\) a.e. for some \\(c\\). Solution: \\(f(x) = Ae^{x^2/(2c)}\\). For \\(f \\in L^2\\), need \\(c < 0\\), so \\(f\\) is a Gaussian \\(Ae^{-\\alpha x^2}\\) with \\(\\alpha > 0\\).'
                }
            ]
        }
    ]
});

window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch10',
    number: 10,
    title: 'Signed and Complex Measures',
    subtitle: 'Measures That Can Take Negative Values and the Hahn-Jordan Decomposition',
    sections: [
        // ============================================================
        // Section 1: Signed Measures
        // ============================================================
        {
            id: 'signed-measures',
            title: 'Signed Measures',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>Until now, every measure has been non-negative.</strong> But nature is full of quantities that carry a sign. Electric charge distributes itself over a region: some parts carry positive charge, others negative. Net force on a surface can push inward or outward. The balance in a bank account accrues interest (positive) and fees (negative). To model such phenomena, we need measures that can take negative values.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define signed measures rigorously and see how they arise naturally as differences of positive measures and as integrals of sign-changing functions. Establish the basic properties that distinguish signed measures from their non-negative cousins.</p>
                </div>

                <h2>Motivation: Charge Distributions</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Charge Analogy)</div>
                    <div class="env-body">
                        <p>Imagine a metallic plate with charge distributed across its surface. Some regions carry positive charge, others negative. If \\(E\\) is a region of the plate, we want \\(\\nu(E)\\) to represent the <em>net charge</em> on \\(E\\): positive charge minus negative charge. This quantity can be positive, negative, or zero, depending on which charge dominates in the region \\(E\\).</p>
                        <p>The total charge on a union of disjoint regions should equal the sum of the charges on each piece (charge is additive). This is precisely countable additivity, the same axiom that governs ordinary measures, except now the values can be negative.</p>
                    </div>
                </div>

                <h2>Formal Definition</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.1 (Signed Measure)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A})\\) be a measurable space. A <strong>signed measure</strong> is a function \\(\\nu: \\mathcal{A} \\to [-\\infty, \\infty]\\) satisfying:</p>
                        <ol>
                            <li>\\(\\nu(\\varnothing) = 0\\).</li>
                            <li><strong>Countable additivity:</strong> If \\(\\{E_n\\}_{n=1}^{\\infty}\\) is a sequence of pairwise disjoint sets in \\(\\mathcal{A}\\), then
                            \\[\\nu\\!\\left(\\bigcup_{n=1}^{\\infty} E_n\\right) = \\sum_{n=1}^{\\infty} \\nu(E_n),\\]
                            where the series on the right converges absolutely when the left side is finite.</li>
                            <li><strong>No simultaneous infinities:</strong> \\(\\nu\\) assumes at most one of the values \\(+\\infty\\) and \\(-\\infty\\). That is, either \\(\\nu(E) > -\\infty\\) for all \\(E \\in \\mathcal{A}\\), or \\(\\nu(E) < +\\infty\\) for all \\(E \\in \\mathcal{A}\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why Exclude Simultaneous \\(\\pm\\infty\\))</div>
                    <div class="env-body">
                        <p>If \\(\\nu\\) could take both values \\(+\\infty\\) and \\(-\\infty\\), we would face the undefined expression \\(\\infty - \\infty\\) when applying additivity. For example, if \\(\\nu(A) = +\\infty\\) and \\(\\nu(B) = -\\infty\\) with \\(A \\cap B = \\varnothing\\), then \\(\\nu(A \\cup B) = \\nu(A) + \\nu(B) = \\infty + (-\\infty)\\), which is undefined. Banning one of the two infinities avoids this arithmetic disaster.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Positive Measures Are Special Cases)</div>
                    <div class="env-body">
                        <p>Every (positive) measure \\(\\mu\\) is a signed measure: it satisfies all three conditions above, with \\(\\nu(E) \\geq 0\\) for all \\(E\\). Signed measures genuinely extend the concept.</p>
                    </div>
                </div>

                <h2>Constructing Signed Measures</h2>

                <p>Signed measures arise naturally in two ways.</p>

                <div class="env-block example">
                    <div class="env-title">Example 10.2 (Difference of Positive Measures)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu_1\\) and \\(\\mu_2\\) be positive measures on \\((X, \\mathcal{A})\\), with at least one of them finite. Define \\(\\nu = \\mu_1 - \\mu_2\\) by</p>
                        \\[\\nu(E) = \\mu_1(E) - \\mu_2(E) \\quad \\text{for all } E \\in \\mathcal{A}.\\]
                        <p>Then \\(\\nu\\) is a signed measure. The finiteness requirement on at least one of \\(\\mu_1, \\mu_2\\) ensures the "no simultaneous infinities" condition: if \\(\\mu_2\\) is finite, then \\(\\nu(E) = \\mu_1(E) - \\mu_2(E) > -\\infty\\) for all \\(E\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.3 (Integral of a Sign-Changing Function)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A}, \\mu)\\) be a measure space and let \\(f: X \\to \\overline{\\mathbb{R}}\\) be a measurable function with either \\(\\int f^+ \\, d\\mu < \\infty\\) or \\(\\int f^- \\, d\\mu < \\infty\\). Define</p>
                        \\[\\nu(E) = \\int_E f \\, d\\mu \\quad \\text{for all } E \\in \\mathcal{A}.\\]
                        <p>Then \\(\\nu\\) is a signed measure. Where \\(f > 0\\), the measure \\(\\nu\\) is positive; where \\(f < 0\\), it is negative. The function \\(f\\) is called the <strong>density</strong> or <strong>Radon-Nikodym derivative</strong> of \\(\\nu\\) with respect to \\(\\mu\\).</p>
                        <p>For instance, on \\(\\mathbb{R}\\) with Lebesgue measure, taking \\(f(x) = \\sin(x)\\) gives \\(\\nu([0, \\pi]) = 2 > 0\\) and \\(\\nu([\\pi, 2\\pi]) = -2 < 0\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Every Signed Measure Looks Like Example 10.2)</div>
                    <div class="env-body">
                        <p>The Jordan Decomposition Theorem (Section 3) will show that <em>every</em> signed measure is a difference of two positive measures, in an essentially unique and minimal way. Example 10.2 is not just one source of signed measures; it is, up to a canonical choice, the <em>only</em> source.</p>
                    </div>
                </div>

                <h2>Basic Properties</h2>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 10.4 (Properties of Signed Measures)</div>
                    <div class="env-body">
                        <p>Let \\(\\nu\\) be a signed measure on \\((X, \\mathcal{A})\\). Then:</p>
                        <ol>
                            <li><strong>Monotonicity (with a twist):</strong> If \\(A \\subseteq B\\) and \\(\\nu(A)\\) is finite, then \\(\\nu(B) = \\nu(A) + \\nu(B \\setminus A)\\). However, \\(A \\subseteq B\\) does <em>not</em> imply \\(\\nu(A) \\leq \\nu(B)\\) in general (the set \\(B \\setminus A\\) may carry negative charge).</li>
                            <li><strong>Continuity from below:</strong> If \\(E_1 \\subseteq E_2 \\subseteq \\cdots\\) and \\(E = \\bigcup E_n\\), then \\(\\nu(E) = \\lim_{n \\to \\infty} \\nu(E_n)\\).</li>
                            <li><strong>Continuity from above:</strong> If \\(E_1 \\supseteq E_2 \\supseteq \\cdots\\), \\(E = \\bigcap E_n\\), and \\(\\nu(E_k)\\) is finite for some \\(k\\), then \\(\\nu(E) = \\lim_{n \\to \\infty} \\nu(E_n)\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Proposition 10.4</div>
                    <div class="env-body">
                        <p><strong>(1)</strong> Write \\(B = A \\cup (B \\setminus A)\\) as a disjoint union. By additivity, \\(\\nu(B) = \\nu(A) + \\nu(B \\setminus A)\\).</p>
                        <p><strong>(2)</strong> Define \\(F_1 = E_1\\) and \\(F_n = E_n \\setminus E_{n-1}\\) for \\(n \\geq 2\\). Then \\(\\{F_n\\}\\) are pairwise disjoint, \\(E = \\bigcup F_n\\), and \\(E_n = \\bigcup_{k=1}^n F_k\\). By countable additivity, \\(\\nu(E) = \\sum_{n=1}^{\\infty} \\nu(F_n) = \\lim_{N \\to \\infty} \\sum_{n=1}^N \\nu(F_n) = \\lim_{N \\to \\infty} \\nu(E_N)\\).</p>
                        <p><strong>(3)</strong> Apply continuity from below to the increasing sequence \\(E_k \\setminus E_n\\) (for \\(n \\geq k\\)) whose union is \\(E_k \\setminus E\\). Since \\(\\nu(E_k)\\) is finite, \\(\\nu(E_k \\setminus E_n) = \\nu(E_k) - \\nu(E_n)\\) and \\(\\nu(E_k \\setminus E) = \\nu(E_k) - \\nu(E)\\). Taking the limit gives \\(\\nu(E_k) - \\nu(E) = \\lim_n (\\nu(E_k) - \\nu(E_n))\\), so \\(\\nu(E) = \\lim_n \\nu(E_n)\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Monotonicity Fails for Signed Measures)</div>
                    <div class="env-body">
                        <p>For positive measures, \\(A \\subseteq B\\) implies \\(\\mu(A) \\leq \\mu(B)\\). This is <em>false</em> for signed measures. Consider \\(\\nu = \\mu_1 - \\mu_2\\) on \\(\\{1, 2\\}\\), with \\(\\mu_1(\\{1\\}) = 3\\), \\(\\mu_1(\\{2\\}) = 0\\), \\(\\mu_2(\\{1\\}) = 0\\), \\(\\mu_2(\\{2\\}) = 5\\). Then \\(\\nu(\\{1\\}) = 3\\) but \\(\\nu(\\{1,2\\}) = -2\\). The subset has a <em>larger</em> signed measure than the superset.</p>
                    </div>
                </div>

                <h2>Positive, Negative, and Null Sets</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.5 (Positive, Negative, and Null Sets)</div>
                    <div class="env-body">
                        <p>Let \\(\\nu\\) be a signed measure on \\((X, \\mathcal{A})\\). A set \\(A \\in \\mathcal{A}\\) is called:</p>
                        <ul>
                            <li><strong>Positive</strong> (for \\(\\nu\\)) if \\(\\nu(E) \\geq 0\\) for every measurable \\(E \\subseteq A\\).</li>
                            <li><strong>Negative</strong> (for \\(\\nu\\)) if \\(\\nu(E) \\leq 0\\) for every measurable \\(E \\subseteq A\\).</li>
                            <li><strong>Null</strong> (for \\(\\nu\\)) if \\(\\nu(E) = 0\\) for every measurable \\(E \\subseteq A\\).</li>
                        </ul>
                        <p>A null set is simultaneously positive and negative.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Positive Set \\(\\neq\\) Set with Positive Measure)</div>
                    <div class="env-body">
                        <p>A positive set is <em>not</em> merely a set \\(A\\) with \\(\\nu(A) > 0\\). It requires that <em>every</em> measurable subset has non-negative measure. The set \\(A\\) could have \\(\\nu(A) > 0\\) while containing a subset \\(B\\) with \\(\\nu(B) < 0\\); in that case \\(A\\) is not a positive set.</p>
                    </div>
                </div>

                <div class="env-block lemma">
                    <div class="env-title">Lemma 10.6 (Subsets and Unions of Positive Sets)</div>
                    <div class="env-body">
                        <p>(a) Every measurable subset of a positive set is positive.</p>
                        <p>(b) A countable union of positive sets is positive.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Lemma 10.6</div>
                    <div class="env-body">
                        <p><strong>(a)</strong> If \\(A\\) is positive and \\(B \\subseteq A\\) is measurable, then any measurable \\(E \\subseteq B\\) also satisfies \\(E \\subseteq A\\), so \\(\\nu(E) \\geq 0\\). Hence \\(B\\) is positive.</p>
                        <p><strong>(b)</strong> Let \\(P_1, P_2, \\ldots\\) be positive sets and \\(P = \\bigcup_n P_n\\). Define \\(Q_1 = P_1\\) and \\(Q_n = P_n \\setminus \\bigcup_{k=1}^{n-1} P_k\\). Each \\(Q_n \\subseteq P_n\\) is positive by part (a). For any measurable \\(E \\subseteq P\\), write \\(E = \\bigcup_n (E \\cap Q_n)\\), a disjoint union. By countable additivity, \\(\\nu(E) = \\sum_n \\nu(E \\cap Q_n) \\geq 0\\) since each \\(E \\cap Q_n \\subseteq Q_n\\) and \\(Q_n\\) is positive.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 3.1; Royden-Fitzpatrick 17.1; Rudin RCA 6.1; Stein-Shakarchi III.6.1.</p>
            `,
            exercises: [
                {
                    question: 'Let \\(\\nu_1\\) and \\(\\nu_2\\) be signed measures on \\((X, \\mathcal{A})\\) and let \\(a, b \\in \\mathbb{R}\\). Show that \\(a\\nu_1 + b\\nu_2\\) is a signed measure, provided the sum is well-defined (i.e., we never encounter \\(\\infty - \\infty\\)).',
                    hint: 'Check the three conditions in Definition 10.1 separately. For countable additivity, use the linearity of convergent series.',
                    solution: 'Define \\(\\nu = a\\nu_1 + b\\nu_2\\). (1) \\(\\nu(\\varnothing) = a\\nu_1(\\varnothing) + b\\nu_2(\\varnothing) = 0\\). (2) For disjoint \\(\\{E_n\\}\\), \\(\\nu(\\bigcup E_n) = a\\nu_1(\\bigcup E_n) + b\\nu_2(\\bigcup E_n) = a\\sum \\nu_1(E_n) + b\\sum \\nu_2(E_n) = \\sum(a\\nu_1(E_n) + b\\nu_2(E_n)) = \\sum \\nu(E_n)\\), where the rearrangement is valid because the series converge (the left side is well-defined by hypothesis). (3) If \\(\\nu_1\\) never takes \\(-\\infty\\) and \\(\\nu_2\\) never takes \\(-\\infty\\), and \\(a, b \\geq 0\\), then \\(\\nu\\) never takes \\(-\\infty\\). The other cases follow by similar sign analysis, using the hypothesis that \\(\\infty - \\infty\\) never occurs.'
                },
                {
                    question: 'Let \\(\\mu\\) be Lebesgue measure on \\(\\mathbb{R}\\) and \\(f(x) = x e^{-x^2}\\). Define \\(\\nu(E) = \\int_E f \\, d\\mu\\). Show that \\(\\nu\\) is a signed measure. Find \\(\\nu([0, \\infty))\\), \\(\\nu((-\\infty, 0])\\), and \\(\\nu(\\mathbb{R})\\).',
                    hint: 'Compute \\(\\int_0^\\infty x e^{-x^2} dx\\) via the substitution \\(u = x^2\\). Use the odd symmetry of \\(f\\).',
                    solution: 'The function \\(f(x) = xe^{-x^2}\\) is integrable since \\(\\int |f| = 2\\int_0^\\infty xe^{-x^2}dx = 2 \\cdot \\frac{1}{2} = 1 < \\infty\\). So \\(\\nu\\) is a finite signed measure. By the substitution \\(u = x^2\\): \\(\\nu([0,\\infty)) = \\int_0^\\infty xe^{-x^2}dx = \\frac{1}{2}\\int_0^\\infty e^{-u}du = \\frac{1}{2}\\). Since \\(f\\) is odd, \\(\\nu((-\\infty, 0]) = -\\frac{1}{2}\\). By additivity, \\(\\nu(\\mathbb{R}) = \\frac{1}{2} + (-\\frac{1}{2}) = 0\\). The net "charge" over all of \\(\\mathbb{R}\\) is zero, though positive charge concentrates on \\((0,\\infty)\\) and negative charge on \\((-\\infty, 0)\\).'
                },
                {
                    question: 'Give an example of a set \\(A\\) with \\(\\nu(A) > 0\\) that is <em>not</em> a positive set for \\(\\nu\\). (This illustrates Warning 10.5.)',
                    hint: 'Consider a simple signed measure on a finite set, where \\(A\\) contains both a positively charged and a negatively charged atom.',
                    solution: 'Let \\(X = \\{1, 2\\}\\), \\(\\mathcal{A} = \\mathcal{P}(X)\\), and define \\(\\nu(\\{1\\}) = 3\\), \\(\\nu(\\{2\\}) = -1\\), so \\(\\nu(X) = 2\\). Then \\(A = X\\) has \\(\\nu(A) = 2 > 0\\), but the subset \\(\\{2\\} \\subseteq A\\) has \\(\\nu(\\{2\\}) = -1 < 0\\), so \\(A\\) is not a positive set. A positive set must have <em>every</em> measurable subset with non-negative measure.'
                }
            ]
        },

        // ============================================================
        // Section 2: The Hahn Decomposition Theorem
        // ============================================================
        {
            id: 'hahn-decomposition',
            title: 'The Hahn Decomposition Theorem',
            content: `
                <div class="bridge section-bridge">
                    <p>The examples above show that a signed measure can assign positive values in some regions and negative values in others. A natural question emerges: can we split the entire space into a "positive part" and a "negative part" in a clean, canonical way? The Hahn Decomposition Theorem says yes, and the decomposition is essentially unique.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove that for any signed measure \\(\\nu\\), the space \\(X\\) decomposes into a positive set \\(P\\) and a negative set \\(N\\), and that this decomposition is unique up to \\(\\nu\\)-null sets. Develop the proof in full and explore the geometric picture.</p>
                </div>

                <h2>Statement and Geometric Picture</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Separating Charges)</div>
                    <div class="env-body">
                        <p>Think of the space \\(X\\) as a plate carrying a charge distribution \\(\\nu\\). The Hahn decomposition draws a boundary across the plate: on one side (the positive set \\(P\\)), every region carries non-negative net charge; on the other side (the negative set \\(N\\)), every region carries non-positive net charge. No charge can "leak" across the boundary in the wrong direction.</p>
                        <p>The boundary is not unique (you can shift it through regions of zero charge without changing anything), but the split into "positive territory" and "negative territory" is essentially the only one possible.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.7 (Hahn Decomposition Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(\\nu\\) be a signed measure on \\((X, \\mathcal{A})\\). There exist sets \\(P, N \\in \\mathcal{A}\\) such that:</p>
                        <ol>
                            <li>\\(P\\) is a positive set for \\(\\nu\\) and \\(N\\) is a negative set for \\(\\nu\\).</li>
                            <li>\\(X = P \\cup N\\) and \\(P \\cap N = \\varnothing\\).</li>
                        </ol>
                        <p>Moreover, this decomposition is <strong>essentially unique</strong>: if \\(X = P' \\cup N'\\) is another such decomposition, then \\(P \\triangle P' = (P \\setminus P') \\cup (P' \\setminus P)\\) is a \\(\\nu\\)-null set.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="hahn-decomposition-viz"></div>

                <h2>The Proof</h2>

                <p>The proof is constructive: we build the positive set \\(P\\) by maximizing \\(\\nu\\) over measurable sets.</p>

                <div class="env-block proof">
                    <div class="env-title">Proof of the Hahn Decomposition Theorem</div>
                    <div class="env-body">
                        <p>We may assume without loss of generality that \\(\\nu\\) does not take the value \\(-\\infty\\) (otherwise replace \\(\\nu\\) by \\(-\\nu\\) and swap the roles of \\(P\\) and \\(N\\)).</p>

                        <p><strong>Step 1: Define the supremum.</strong> Let \\(s = \\sup\\{\\nu(A) : A \\in \\mathcal{A}\\}\\). Since \\(\\nu(\\varnothing) = 0\\), we have \\(s \\geq 0\\). We claim \\(s < \\infty\\) and is attained by a positive set.</p>

                        <p><strong>Step 2: Choose an approximating sequence.</strong> Pick sets \\(A_n \\in \\mathcal{A}\\) with \\(\\nu(A_n) \\to s\\). We will extract a positive set from these \\(A_n\\).</p>

                        <p><strong>Step 3: Extract a positive set from a single set.</strong> We need a key lemma: every set \\(A\\) with \\(\\nu(A) > 0\\) contains a positive set \\(B\\) with \\(\\nu(B) \\geq \\nu(A)\\).</p>

                        <p><em>Proof of the lemma:</em> If \\(A\\) is already positive, take \\(B = A\\). Otherwise, there exists a measurable \\(E_1 \\subseteq A\\) with \\(\\nu(E_1) < 0\\). Let \\(n_1\\) be the smallest positive integer such that there exists \\(E \\subseteq A\\) with \\(\\nu(E) < -1/n_1\\). Then \\(\\nu(A \\setminus E_1) = \\nu(A) - \\nu(E_1) > \\nu(A)\\).</p>

                        <p>If \\(A \\setminus E_1\\) is positive, we are done with \\(B = A \\setminus E_1\\). Otherwise, repeat: find \\(E_2 \\subseteq A \\setminus E_1\\) with \\(\\nu(E_2) < -1/n_2\\) (where \\(n_2\\) is the smallest integer for which such a subset exists), and pass to \\(A \\setminus (E_1 \\cup E_2)\\).</p>

                        <p>If this process terminates at step \\(k\\) (meaning \\(A \\setminus (E_1 \\cup \\cdots \\cup E_k)\\) is positive), set \\(B = A \\setminus (E_1 \\cup \\cdots \\cup E_k)\\). If it continues indefinitely, set \\(B = A \\setminus \\bigcup_{j=1}^{\\infty} E_j\\). Then:</p>
                        <ul>
                            <li>\\(\\nu(B) = \\nu(A) - \\sum_{j=1}^{\\infty} \\nu(E_j) \\geq \\nu(A)\\) since each \\(\\nu(E_j) < 0\\).</li>
                            <li>The series \\(\\sum 1/n_j\\) converges (since \\(\\nu(A) - \\sum \\nu(E_j) \\leq s < \\infty\\) implies \\(\\sum |\\nu(E_j)| < \\infty\\), forcing \\(1/n_j \\to 0\\)).</li>
                            <li>\\(B\\) is positive: any measurable \\(F \\subseteq B\\) with \\(\\nu(F) < 0\\) would have \\(\\nu(F) < -1/n_j\\) for some \\(j\\) (since \\(1/n_j \\to 0\\)), contradicting the minimality of \\(n_j\\) at step \\(j\\) (because \\(F \\subseteq B \\subseteq A \\setminus (E_1 \\cup \\cdots \\cup E_{j-1})\\)).</li>
                        </ul>

                        <p><strong>Step 4: Build the positive set \\(P\\).</strong> Apply the lemma to each \\(A_n\\) to get positive sets \\(B_n\\) with \\(\\nu(B_n) \\geq \\nu(A_n)\\). Let \\(P = \\bigcup_n B_n\\). By Lemma 10.6, \\(P\\) is a positive set. Since \\(P \\supseteq B_n\\) and \\(P\\) is positive,</p>
                        \\[\\nu(P) \\geq \\nu(B_n) \\geq \\nu(A_n) \\to s,\\]
                        <p>so \\(\\nu(P) \\geq s\\). But \\(\\nu(P) \\leq s\\) by definition of \\(s\\), so \\(\\nu(P) = s\\). In particular, \\(s < \\infty\\) (since \\(\\nu\\) does not take \\(-\\infty\\), and \\(P\\) is positive so \\(\\nu(P) \\in [0, \\infty)\\) or \\(\\nu(P) = +\\infty\\); but if \\(\\nu(P) = +\\infty\\), then for any \\(E \\subseteq P\\), \\(\\nu(P \\setminus E) \\geq 0\\) and \\(\\nu(P) = \\nu(E) + \\nu(P \\setminus E)\\), forcing \\(\\nu(E) < \\infty\\) to be impossible... actually, \\(s = \\nu(P)\\) could be \\(+\\infty\\) only if \\(\\nu\\) takes \\(+\\infty\\), which is allowed). So \\(\\nu(P) = s \\in [0, \\infty]\\).</p>

                        <p><strong>Step 5: \\(N = X \\setminus P\\) is negative.</strong> If \\(N\\) were not negative, there would exist \\(E \\subseteq N\\) with \\(\\nu(E) > 0\\). By the lemma, \\(E\\) contains a positive set \\(F\\) with \\(\\nu(F) \\geq \\nu(E) > 0\\). Then \\(P \\cup F\\) is a positive set (union of positive sets) with \\(\\nu(P \\cup F) = \\nu(P) + \\nu(F) > \\nu(P) = s\\), contradicting the definition of \\(s\\). (If \\(s = +\\infty\\), note that \\(\\nu(P) = +\\infty\\) and we would need \\(\\nu(P \\cup F) > \\nu(P) = +\\infty\\), which is impossible, so this case causes no trouble.)</p>

                        <p><strong>Step 6: Uniqueness.</strong> Let \\(X = P' \\cup N'\\) be another Hahn decomposition. Consider \\(E \\subseteq P \\setminus P'\\). Then \\(E \\subseteq P\\) (so \\(\\nu(E) \\geq 0\\)) and \\(E \\subseteq N'\\) (so \\(\\nu(E) \\leq 0\\)). Thus \\(\\nu(E) = 0\\) for all measurable \\(E \\subseteq P \\setminus P'\\), making \\(P \\setminus P'\\) a null set. By symmetry, \\(P' \\setminus P\\) is also null, so \\(P \\triangle P'\\) is null.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Constructive Nature)</div>
                    <div class="env-body">
                        <p>The proof constructs \\(P\\) as a set that maximizes \\(\\nu\\). This is a variational argument: we optimize over the \\(\\sigma\\)-algebra, much like finding a maximizer in calculus. The "extract a positive set" lemma is the key technical ingredient; it peels off layers of negativity from a set, like removing impurities from a solution until only the positive part remains.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.8 (Hahn Decomposition for an Integral Signed Measure)</div>
                    <div class="env-body">
                        <p>Let \\(\\nu(E) = \\int_E f \\, d\\mu\\) where \\(f\\) is integrable. Then the Hahn decomposition is simply:</p>
                        \\[P = \\{x : f(x) \\geq 0\\}, \\qquad N = \\{x : f(x) < 0\\}.\\]
                        <p>Every measurable subset of \\(P\\) has non-negative integral (since \\(f \\geq 0\\) on \\(P\\)), and every measurable subset of \\(N\\) has non-positive integral (since \\(f < 0\\) on \\(N\\)). The decomposition boundary is exactly the zero set of \\(f\\).</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 3.1, Theorem 3.3; Royden-Fitzpatrick 17.2, Theorem 1; Rudin RCA 6.14.</p>
            `,
            visualizations: [
                {
                    id: 'hahn-decomposition-viz',
                    title: 'Hahn Decomposition Visualizer',
                    description: 'Visualize a signed measure on a 2D region. Positive regions appear in blue, negative regions in red. Drag the charge centers to see how the decomposition changes.',
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

                        // Charge centers (positive and negative)
                        var charges = [
                            { x: 0.3, y: 0.4, q: 1.5, label: '+' },
                            { x: 0.7, y: 0.6, q: -1.2, label: '−' },
                            { x: 0.5, y: 0.2, q: 0.8, label: '+' },
                            { x: 0.2, y: 0.8, q: -0.6, label: '−' }
                        ];

                        var sigma = 0.15;
                        var dragging = -1;

                        VizEngine.createSlider(controls, 'Spread (σ)', 0.05, 0.4, sigma, 0.01, function(v) {
                            sigma = v;
                            draw();
                        });

                        function chargeDensity(px, py) {
                            var val = 0;
                            for (var i = 0; i < charges.length; i++) {
                                var dx = px - charges[i].x;
                                var dy = py - charges[i].y;
                                var r2 = dx * dx + dy * dy;
                                val += charges[i].q * Math.exp(-r2 / (2 * sigma * sigma));
                            }
                            return val;
                        }

                        canvas.addEventListener('mousedown', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = (e.clientX - rect.left - 60) / (canvas.width - 120);
                            var my = (e.clientY - rect.top - 50) / (canvas.height - 100);
                            for (var i = 0; i < charges.length; i++) {
                                var dx = mx - charges[i].x;
                                var dy = my - charges[i].y;
                                if (dx * dx + dy * dy < 0.002) {
                                    dragging = i;
                                    break;
                                }
                            }
                        });

                        canvas.addEventListener('mousemove', function(e) {
                            if (dragging < 0) return;
                            var rect = canvas.getBoundingClientRect();
                            charges[dragging].x = Math.max(0, Math.min(1, (e.clientX - rect.left - 60) / (canvas.width - 120)));
                            charges[dragging].y = Math.max(0, Math.min(1, (e.clientY - rect.top - 50) / (canvas.height - 100)));
                            draw();
                        });

                        canvas.addEventListener('mouseup', function() { dragging = -1; });
                        canvas.addEventListener('mouseleave', function() { dragging = -1; });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var ox = 60, oy = 50;
                            var pw = w - 120, ph = h - 100;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Hahn Decomposition: Positive (blue) vs. Negative (red)', w / 2, 22);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('Drag charge centers to reconfigure. Boundary = zero level set.', w / 2, 38);

                            // Render the charge density as a heatmap
                            var res = 120;
                            var cellW = pw / res;
                            var cellH = ph / res;

                            for (var ix = 0; ix < res; ix++) {
                                for (var iy = 0; iy < res; iy++) {
                                    var px = (ix + 0.5) / res;
                                    var py = (iy + 0.5) / res;
                                    var val = chargeDensity(px, py);

                                    var intensity = Math.min(1, Math.abs(val) / 1.5);
                                    if (val >= 0) {
                                        // Blue for positive
                                        var r = Math.round(12 + intensity * 60);
                                        var g = Math.round(12 + intensity * 120);
                                        var b = Math.round(32 + intensity * 223);
                                        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
                                    } else {
                                        // Red for negative
                                        var r = Math.round(32 + intensity * 216);
                                        var g = Math.round(12 + intensity * 50);
                                        var b = Math.round(12 + intensity * 40);
                                        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
                                    }
                                    ctx.fillRect(ox + ix * cellW, oy + iy * cellH, Math.ceil(cellW), Math.ceil(cellH));
                                }
                            }

                            // Draw the zero contour (boundary between P and N)
                            ctx.strokeStyle = colors.yellow;
                            ctx.lineWidth = 2;
                            var contourRes = 200;
                            // March through grid to find zero crossings
                            for (var ix = 0; ix < contourRes; ix++) {
                                for (var iy = 0; iy < contourRes; iy++) {
                                    var px = ix / contourRes;
                                    var py = iy / contourRes;
                                    var v00 = chargeDensity(px, py);
                                    var v10 = chargeDensity(px + 1/contourRes, py);
                                    var v01 = chargeDensity(px, py + 1/contourRes);

                                    if (v00 * v10 < 0 || v00 * v01 < 0) {
                                        var sx = ox + px * pw;
                                        var sy = oy + py * ph;
                                        ctx.fillStyle = colors.yellow;
                                        ctx.fillRect(sx, sy, 2, 2);
                                    }
                                }
                            }

                            // Draw charge centers
                            for (var i = 0; i < charges.length; i++) {
                                var cx = ox + charges[i].x * pw;
                                var cy = oy + charges[i].y * ph;
                                ctx.beginPath();
                                ctx.arc(cx, cy, 10, 0, 2 * Math.PI);
                                ctx.fillStyle = charges[i].q > 0 ? colors.blue : colors.red;
                                ctx.fill();
                                ctx.strokeStyle = colors.text;
                                ctx.lineWidth = 2;
                                ctx.stroke();

                                ctx.fillStyle = '#ffffff';
                                ctx.font = 'bold 14px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(charges[i].label, cx, cy);
                            }
                            ctx.textBaseline = 'alphabetic';

                            // Legend
                            ctx.fillStyle = colors.blue;
                            ctx.fillRect(ox, h - 22, 14, 14);
                            ctx.fillStyle = colors.text;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('P (positive set)', ox + 20, h - 11);

                            ctx.fillStyle = colors.red;
                            ctx.fillRect(ox + 150, h - 22, 14, 14);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('N (negative set)', ox + 170, h - 11);

                            ctx.fillStyle = colors.yellow;
                            ctx.fillRect(ox + 310, h - 22, 14, 14);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('Boundary (ν = 0)', ox + 330, h - 11);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(\\nu(E) = \\int_E (x^2 - 1) \\, dx\\) on \\([-2, 2]\\) with Lebesgue measure. Find the Hahn decomposition explicitly.',
                    hint: 'The density is \\(f(x) = x^2 - 1\\). Find where \\(f \\geq 0\\) and where \\(f < 0\\).',
                    solution: 'The density \\(f(x) = x^2 - 1 = (x-1)(x+1)\\) satisfies \\(f(x) \\geq 0\\) when \\(|x| \\geq 1\\) and \\(f(x) < 0\\) when \\(|x| < 1\\). So the Hahn decomposition is \\(P = [-2, -1] \\cup [1, 2]\\) and \\(N = (-1, 1)\\). One can verify: \\(\\nu(P) = 2\\int_1^2 (x^2 - 1)dx = 2[x^3/3 - x]_1^2 = 2(8/3 - 2 - 1/3 + 1) = 2 \\cdot 4/3 = 8/3\\), and \\(\\nu(N) = \\int_{-1}^1 (x^2 - 1)dx = [x^3/3 - x]_{-1}^1 = (1/3 - 1) - (-1/3 + 1) = -4/3\\).'
                },
                {
                    question: 'Prove the uniqueness part of the Hahn Decomposition Theorem: if \\(X = P \\cup N = P\' \\cup N\'\\) are two Hahn decompositions, then \\(P \\triangle P\'\\) is a \\(\\nu\\)-null set.',
                    hint: 'Show that every measurable subset of \\(P \\setminus P\'\\) has measure zero by noting it lies in both \\(P\\) and \\(N\'\\).',
                    solution: 'Let \\(E \\subseteq P \\setminus P\'\\) be measurable. Since \\(E \\subseteq P\\), which is positive, \\(\\nu(E) \\geq 0\\). Since \\(P \\setminus P\' \\subseteq N\'\\) (because \\(X = P\' \\cup N\'\\) and the point is not in \\(P\'\\)), \\(E \\subseteq N\'\\), which is negative, so \\(\\nu(E) \\leq 0\\). Therefore \\(\\nu(E) = 0\\). Since \\(E\\) was arbitrary, \\(P \\setminus P\'\\) is a null set. By symmetry (swap \\(P \\leftrightarrow P\'\\) and \\(N \\leftrightarrow N\'\\)), \\(P\' \\setminus P\\) is also null. Hence \\(P \\triangle P\' = (P \\setminus P\') \\cup (P\' \\setminus P)\\) is null.'
                },
                {
                    question: 'Show that if \\(A\\) is a positive set and \\(B\\) is a negative set for a signed measure \\(\\nu\\), then \\(A \\cap B\\) is a \\(\\nu\\)-null set.',
                    hint: 'Any measurable subset of \\(A \\cap B\\) lies in both a positive and a negative set.',
                    solution: 'Let \\(E \\subseteq A \\cap B\\) be measurable. Since \\(E \\subseteq A\\) and \\(A\\) is positive, \\(\\nu(E) \\geq 0\\). Since \\(E \\subseteq B\\) and \\(B\\) is negative, \\(\\nu(E) \\leq 0\\). Hence \\(\\nu(E) = 0\\). Since this holds for every measurable \\(E \\subseteq A \\cap B\\), the set \\(A \\cap B\\) is \\(\\nu\\)-null.'
                },
                {
                    question: '(Exploration) Using the Hahn Decomposition Visualizer, place two positive charges close together and two negative charges close together. Describe the geometry of the boundary. What happens to the boundary as you increase \\(\\sigma\\)?',
                    hint: 'Observe how the zero level set (yellow boundary) changes shape. Think about what happens when the Gaussian tails overlap more.',
                    solution: 'When charges of the same sign are clustered, the boundary is approximately a straight line or smooth curve separating the positive and negative clusters. As \\(\\sigma\\) increases, the Gaussian bells spread out, their tails overlap more, and the boundary becomes smoother and more linear (approaching a plane/line separating the average positions of positive and negative charges). For small \\(\\sigma\\), the boundary follows the detailed geometry of individual charge positions, potentially forming curved or even disconnected contours. This illustrates that the Hahn decomposition boundary depends on the global structure of the signed measure, not just local properties.'
                }
            ]
        },

        // ============================================================
        // Section 3: The Jordan Decomposition
        // ============================================================
        {
            id: 'jordan-decomposition',
            title: 'The Jordan Decomposition',
            content: `
                <div class="bridge section-bridge">
                    <p>The Hahn decomposition splits the <em>space</em> into positive and negative parts. The Jordan decomposition goes further: it splits the <em>measure itself</em> into a positive part and a negative part. This is the precise sense in which every signed measure is a difference of two positive measures.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define the positive variation \\(\\nu^+\\), negative variation \\(\\nu^-\\), and total variation \\(|\\nu|\\) of a signed measure. Prove the Jordan decomposition \\(\\nu = \\nu^+ - \\nu^-\\) and its minimality.</p>
                </div>

                <h2>From Hahn to Jordan</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Separating Debits and Credits)</div>
                    <div class="env-body">
                        <p>A bank statement lists transactions: some deposits (positive), some withdrawals (negative). The net balance of any period is deposits minus withdrawals. The Hahn decomposition separates the <em>time periods</em> into "mostly deposit" and "mostly withdrawal" phases. The Jordan decomposition separates the <em>transactions themselves</em>: the total deposits form one positive measure \\(\\nu^+\\), the total withdrawals form another \\(\\nu^-\\), and the net balance is \\(\\nu = \\nu^+ - \\nu^-\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.9 (Jordan Decomposition)</div>
                    <div class="env-body">
                        <p>Let \\(\\nu\\) be a signed measure on \\((X, \\mathcal{A})\\) and let \\(X = P \\cup N\\) be a Hahn decomposition. Define:</p>
                        <ul>
                            <li>The <strong>positive variation:</strong> \\(\\nu^+(E) = \\nu(E \\cap P)\\) for all \\(E \\in \\mathcal{A}\\).</li>
                            <li>The <strong>negative variation:</strong> \\(\\nu^-(E) = -\\nu(E \\cap N)\\) for all \\(E \\in \\mathcal{A}\\).</li>
                            <li>The <strong>total variation:</strong> \\(|\\nu|(E) = \\nu^+(E) + \\nu^-(E)\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.10 (Jordan Decomposition Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(\\nu\\) be a signed measure on \\((X, \\mathcal{A})\\). Then:</p>
                        <ol>
                            <li>\\(\\nu^+\\) and \\(\\nu^-\\) are positive measures, and at least one of them is finite.</li>
                            <li>\\(\\nu = \\nu^+ - \\nu^-\\) (the <strong>Jordan decomposition</strong>).</li>
                            <li>\\(\\nu^+\\) and \\(\\nu^-\\) are <strong>mutually singular</strong>: \\(\\nu^+ \\perp \\nu^-\\), meaning there exist disjoint sets \\(A, B\\) with \\(X = A \\cup B\\), \\(\\nu^+(B) = 0\\), and \\(\\nu^-(A) = 0\\).</li>
                            <li><strong>Minimality:</strong> If \\(\\nu = \\mu_1 - \\mu_2\\) for positive measures \\(\\mu_1, \\mu_2\\), then \\(\\mu_1 \\geq \\nu^+\\) and \\(\\mu_2 \\geq \\nu^-\\) (as measures).</li>
                        </ol>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="jordan-decomposition-viz"></div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 10.10</div>
                    <div class="env-body">
                        <p><strong>(1)</strong> Let \\(X = P \\cup N\\) be a Hahn decomposition. For any \\(E\\), \\(\\nu^+(E) = \\nu(E \\cap P) \\geq 0\\) since \\(E \\cap P \\subseteq P\\) and \\(P\\) is a positive set. Similarly \\(\\nu^-(E) = -\\nu(E \\cap N) \\geq 0\\) since \\(E \\cap N \\subseteq N\\) and \\(N\\) is negative. Countable additivity of \\(\\nu^+\\) and \\(\\nu^-\\) follows from that of \\(\\nu\\). If \\(\\nu\\) does not take \\(-\\infty\\), then \\(\\nu^-\\) is finite (since \\(\\nu^-(X) = -\\nu(N) < \\infty\\)). If \\(\\nu\\) does not take \\(+\\infty\\), then \\(\\nu^+\\) is finite.</p>

                        <p><strong>(2)</strong> For any \\(E\\), \\(\\nu^+(E) - \\nu^-(E) = \\nu(E \\cap P) + \\nu(E \\cap N) = \\nu(E)\\), where the last equality uses additivity since \\(E = (E \\cap P) \\cup (E \\cap N)\\) is a disjoint union.</p>

                        <p><strong>(3)</strong> Take \\(A = P\\) and \\(B = N\\). Then \\(\\nu^+(B) = \\nu^+(N) = \\nu(N \\cap P) = \\nu(\\varnothing) = 0\\) and \\(\\nu^-(A) = \\nu^-(P) = -\\nu(P \\cap N) = -\\nu(\\varnothing) = 0\\). So \\(\\nu^+ \\perp \\nu^-\\).</p>

                        <p><strong>(4) Minimality.</strong> Suppose \\(\\nu = \\mu_1 - \\mu_2\\) with \\(\\mu_1, \\mu_2 \\geq 0\\). For any \\(E\\),</p>
                        \\[\\nu^+(E) = \\nu(E \\cap P) = \\mu_1(E \\cap P) - \\mu_2(E \\cap P) \\leq \\mu_1(E \\cap P) \\leq \\mu_1(E).\\]
                        <p>Similarly, \\(\\nu^-(E) = -\\nu(E \\cap N) = \\mu_2(E \\cap N) - \\mu_1(E \\cap N) \\leq \\mu_2(E \\cap N) \\leq \\mu_2(E)\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Well-Definedness)</div>
                    <div class="env-body">
                        <p>Although the Hahn decomposition is only unique up to null sets, the Jordan decomposition is <em>completely</em> unique. If \\(X = P' \\cup N'\\) is another Hahn decomposition, then for any \\(E\\), \\(\\nu(E \\cap P) = \\nu(E \\cap P')\\) because \\(E \\cap (P \\triangle P')\\) is a \\(\\nu\\)-null set. So \\(\\nu^+\\) and \\(\\nu^-\\) do not depend on which Hahn decomposition we chose.</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 10.11 (Total Variation as Supremum)</div>
                    <div class="env-body">
                        <p>For any \\(E \\in \\mathcal{A}\\),</p>
                        \\[|\\nu|(E) = \\sup\\left\\{\\sum_{i=1}^{n} |\\nu(E_i)| : E = E_1 \\cup \\cdots \\cup E_n, \\text{ pairwise disjoint, } E_i \\in \\mathcal{A}\\right\\}.\\]
                        <p>The supremum is over all finite measurable partitions of \\(E\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Corollary 10.11</div>
                    <div class="env-body">
                        <p>Denote the right side by \\(\\tau(E)\\). For any partition \\(E = \\bigcup E_i\\),</p>
                        \\[\\sum |\\nu(E_i)| = \\sum |\\nu^+(E_i) - \\nu^-(E_i)| \\leq \\sum (\\nu^+(E_i) + \\nu^-(E_i)) = \\nu^+(E) + \\nu^-(E) = |\\nu|(E).\\]
                        <p>So \\(\\tau(E) \\leq |\\nu|(E)\\). For the reverse, take the two-element partition \\(E = (E \\cap P) \\cup (E \\cap N)\\):</p>
                        \\[|\\nu(E \\cap P)| + |\\nu(E \\cap N)| = \\nu^+(E) + \\nu^-(E) = |\\nu|(E).\\]
                        <p>So \\(\\tau(E) \\geq |\\nu|(E)\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.12 (Jordan Decomposition of \\(\\sin\\))</div>
                    <div class="env-body">
                        <p>Let \\(\\nu(E) = \\int_E \\sin(x) \\, dx\\) on \\([0, 2\\pi]\\). The density \\(f(x) = \\sin(x)\\) satisfies \\(f \\geq 0\\) on \\([0, \\pi]\\) and \\(f < 0\\) on \\((\\pi, 2\\pi]\\). The Jordan decomposition is:</p>
                        \\[\\nu^+(E) = \\int_{E \\cap [0,\\pi]} \\sin(x) \\, dx, \\qquad \\nu^-(E) = \\int_{E \\cap (\\pi, 2\\pi]} (-\\sin(x)) \\, dx = \\int_{E \\cap (\\pi, 2\\pi]} |\\sin(x)| \\, dx.\\]
                        <p>The total variation is \\(|\\nu|([0, 2\\pi]) = \\nu^+([0, 2\\pi]) + \\nu^-([0, 2\\pi]) = 2 + 2 = 4\\), even though \\(\\nu([0, 2\\pi]) = 0\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Analogy with Real Numbers)</div>
                    <div name="env-body">
                        <p>The Jordan decomposition of a signed measure parallels the decomposition of a real number into positive and negative parts: for \\(x \\in \\mathbb{R}\\), \\(x = x^+ - x^-\\) where \\(x^+ = \\max(x, 0)\\) and \\(x^- = \\max(-x, 0)\\), and \\(|x| = x^+ + x^-\\). The signed measure \\(\\nu\\), its positive variation \\(\\nu^+\\), its negative variation \\(\\nu^-\\), and its total variation \\(|\\nu|\\) stand in exactly the same algebraic relationship.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 3.1, Theorem 3.4; Royden-Fitzpatrick 17.2, Theorem 2; Rudin RCA 6.6-6.7.</p>
            `,
            visualizations: [
                {
                    id: 'jordan-decomposition-viz',
                    title: 'Jordan Decomposition Splitter',
                    description: 'See a signed measure ν and its decomposition into ν⁺ and ν⁻ side by side. Adjust the density function and watch the pieces separate.',
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

                        var freq = 1.0;
                        var phase = 0;

                        VizEngine.createSlider(controls, 'Frequency', 0.5, 4, freq, 0.1, function(v) {
                            freq = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Phase shift', -3.14, 3.14, phase, 0.05, function(v) {
                            phase = v;
                            draw();
                        });

                        function density(x) {
                            return Math.sin(freq * Math.PI * x + phase) + 0.3 * Math.cos(2 * freq * Math.PI * x);
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var panels = 3;
                            var panelW = Math.floor((w - 40) / panels);
                            var mg = { l: 35, r: 5, t: 55, b: 35 };

                            var titles = ['ν (signed measure)', 'ν⁺ (positive variation)', 'ν⁻ (negative variation)'];
                            var panelColors = [null, colors.blue, colors.red];

                            // Compute y range
                            var yMin = -2, yMax = 2;

                            for (var p = 0; p < panels; p++) {
                                var ox = 20 + p * (panelW + 10);
                                var pw = panelW - mg.l - mg.r;
                                var ph = h - mg.t - mg.b;

                                // Panel title
                                ctx.fillStyle = colors.text;
                                ctx.font = 'bold 12px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(titles[p], ox + mg.l + pw / 2, 22);

                                function sx(x) { return ox + mg.l + x * pw; }
                                function sy(y) { return mg.t + ph / 2 - (y / (yMax - yMin)) * ph; }

                                // Axes
                                ctx.strokeStyle = colors.muted;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(sx(0), mg.t);
                                ctx.lineTo(sx(0), h - mg.b);
                                ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(sx(0), sy(0));
                                ctx.lineTo(sx(1), sy(0));
                                ctx.stroke();

                                // Fill and draw density
                                var steps = 200;
                                var totalPos = 0, totalNeg = 0;
                                for (var i = 0; i < steps; i++) {
                                    var x = i / steps;
                                    var dx = 1 / steps;
                                    var fv = density(x);
                                    var fp = Math.max(0, fv);
                                    var fn = Math.max(0, -fv);

                                    totalPos += fp * dx;
                                    totalNeg += fn * dx;

                                    var drawVal;
                                    if (p === 0) drawVal = fv;
                                    else if (p === 1) drawVal = fp;
                                    else drawVal = fn;

                                    var x1 = sx(x);
                                    var x2 = sx(x + dx);
                                    var y0 = sy(0);
                                    var y1 = sy(drawVal);

                                    if (p === 0) {
                                        ctx.fillStyle = fv >= 0 ? 'rgba(88, 166, 255, 0.4)' : 'rgba(248, 81, 73, 0.4)';
                                    } else if (p === 1) {
                                        ctx.fillStyle = 'rgba(88, 166, 255, 0.5)';
                                    } else {
                                        ctx.fillStyle = 'rgba(248, 81, 73, 0.5)';
                                    }

                                    if (drawVal !== 0) {
                                        ctx.fillRect(x1, Math.min(y0, y1), Math.max(1, x2 - x1), Math.abs(y1 - y0));
                                    }
                                }

                                // Draw the curve
                                ctx.strokeStyle = p === 0 ? colors.teal : (p === 1 ? colors.blue : colors.red);
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= steps; i++) {
                                    var x = i / steps;
                                    var fv = density(x);
                                    var drawVal;
                                    if (p === 0) drawVal = fv;
                                    else if (p === 1) drawVal = Math.max(0, fv);
                                    else drawVal = Math.max(0, -fv);

                                    if (i === 0) ctx.moveTo(sx(x), sy(drawVal));
                                    else ctx.lineTo(sx(x), sy(drawVal));
                                }
                                ctx.stroke();

                                // Show integral value
                                var intVal;
                                if (p === 0) intVal = totalPos - totalNeg;
                                else if (p === 1) intVal = totalPos;
                                else intVal = totalNeg;

                                ctx.fillStyle = colors.muted;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                var label = p === 0 ? 'ν([0,1])' : (p === 1 ? 'ν⁺([0,1])' : 'ν⁻([0,1])');
                                ctx.fillText(label + ' = ' + intVal.toFixed(3), ox + mg.l + pw / 2, h - 10);
                            }

                            // Annotation
                            ctx.fillStyle = colors.yellow;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('ν = ν⁺ − ν⁻       |ν| = ν⁺ + ν⁻ = ' + (totalPos + totalNeg).toFixed(3), w / 2, 42);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(\\nu\\) be the signed measure on \\([0, 2]\\) defined by \\(\\nu(E) = \\int_E (1 - x) \\, dx\\). Find \\(\\nu^+\\), \\(\\nu^-\\), and \\(|\\nu|\\) explicitly.',
                    hint: 'The density \\(f(x) = 1 - x\\) changes sign at \\(x = 1\\). Use this to find the Hahn decomposition first.',
                    solution: 'The density \\(f(x) = 1 - x \\geq 0\\) on \\([0, 1]\\) and \\(f(x) < 0\\) on \\((1, 2]\\). So \\(P = [0, 1]\\) and \\(N = (1, 2]\\). For any measurable \\(E\\): \\(\\nu^+(E) = \\int_{E \\cap [0,1]} (1-x) dx\\), \\(\\nu^-(E) = \\int_{E \\cap (1,2]} (x-1) dx\\), \\(|\\nu|(E) = \\int_{E \\cap [0,1]} (1-x)dx + \\int_{E \\cap (1,2]} (x-1)dx = \\int_E |1-x| dx\\). In particular, \\(\\nu^+([0,2]) = \\int_0^1 (1-x)dx = 1/2\\), \\(\\nu^-([0,2]) = \\int_1^2 (x-1)dx = 1/2\\), and \\(|\\nu|([0,2]) = 1\\).'
                },
                {
                    question: 'Prove the minimality of the Jordan decomposition: if \\(\\nu = \\mu_1 - \\mu_2\\) with \\(\\mu_1, \\mu_2\\) positive measures, then \\(\\mu_1(E) \\geq \\nu^+(E)\\) and \\(\\mu_2(E) \\geq \\nu^-(E)\\) for all \\(E\\).',
                    hint: 'Use \\(\\mu_1(E) \\geq \\mu_1(E \\cap P) \\geq \\nu(E \\cap P) = \\nu^+(E)\\).',
                    solution: 'Let \\(X = P \\cup N\\) be a Hahn decomposition. For any measurable \\(E\\): \\(\\mu_1(E) \\geq \\mu_1(E \\cap P)\\) (monotonicity of positive measure). Since \\(\\mu_1(E \\cap P) = \\nu(E \\cap P) + \\mu_2(E \\cap P) \\geq \\nu(E \\cap P) = \\nu^+(E)\\), we get \\(\\mu_1(E) \\geq \\nu^+(E)\\). Similarly, \\(\\mu_2(E) \\geq \\mu_2(E \\cap N) = -\\nu(E \\cap N) + \\mu_1(E \\cap N) \\geq -\\nu(E \\cap N) = \\nu^-(E)\\).'
                },
                {
                    question: 'Show that \\(|\\nu(E)| \\leq |\\nu|(E)\\) for every \\(E \\in \\mathcal{A}\\).',
                    hint: 'Write \\(\\nu(E) = \\nu^+(E) - \\nu^-(E)\\) and use the triangle inequality.',
                    solution: '\\(|\\nu(E)| = |\\nu^+(E) - \\nu^-(E)| \\leq \\nu^+(E) + \\nu^-(E) = |\\nu|(E)\\). The inequality follows from \\(|a - b| \\leq a + b\\) for non-negative \\(a, b\\). This shows the total variation measure dominates the absolute value of the signed measure on every set.'
                },
                {
                    question: 'Prove that \\(|\\nu|(E) = \\sup \\{\\sum_{i=1}^n |\\nu(E_i)| : E = \\bigcup E_i \\text{ disjoint}\\}\\) directly from the Jordan decomposition.',
                    hint: 'The partition \\(E = (E \\cap P) \\cup (E \\cap N)\\) achieves the supremum. For the upper bound, use the triangle inequality on each piece.',
                    solution: 'Let \\(\\tau(E)\\) denote the supremum. For any partition \\(E = \\bigcup_i E_i\\): \\(\\sum |\\nu(E_i)| = \\sum |\\nu^+(E_i) - \\nu^-(E_i)| \\leq \\sum (\\nu^+(E_i) + \\nu^-(E_i)) = \\nu^+(E) + \\nu^-(E) = |\\nu|(E)\\). So \\(\\tau(E) \\leq |\\nu|(E)\\). For the reverse, the partition \\(E = (E \\cap P) \\cup (E \\cap N)\\) gives \\(|\\nu(E \\cap P)| + |\\nu(E \\cap N)| = \\nu^+(E) + \\nu^-(E) = |\\nu|(E)\\). So \\(\\tau(E) \\geq |\\nu|(E)\\).'
                }
            ]
        },

        // ============================================================
        // Section 4: The Total Variation Norm
        // ============================================================
        {
            id: 'total-variation-norm',
            title: 'The Total Variation Norm',
            content: `
                <div class="bridge section-bridge">
                    <p>The total variation measure \\(|\\nu|\\) assigns a non-negative number to each measurable set. When we evaluate it on the whole space, \\(|\\nu|(X)\\), we get a single number that measures the "total amount of charge" carried by \\(\\nu\\), counting positive and negative charge with the same sign. This number turns out to be a norm, and the space of finite signed measures becomes a Banach space.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define the total variation norm on the space of finite signed measures, verify it is indeed a norm, prove completeness (Banach space), and connect the total variation to the supremum-over-partitions formula.</p>
                </div>

                <h2>The Space of Finite Signed Measures</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.13 (Space of Finite Signed Measures)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A})\\) be a measurable space. Denote by \\(\\mathcal{M}(X, \\mathcal{A})\\) the set of all <strong>finite signed measures</strong> on \\((X, \\mathcal{A})\\), i.e., signed measures \\(\\nu\\) with \\(\\nu(E) \\in \\mathbb{R}\\) for all \\(E \\in \\mathcal{A}\\) (equivalently, \\(|\\nu|(X) < \\infty\\)).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.14 (Total Variation Norm)</div>
                    <div class="env-body">
                        <p>For \\(\\nu \\in \\mathcal{M}(X, \\mathcal{A})\\), the <strong>total variation norm</strong> is</p>
                        \\[\\|\\nu\\| = |\\nu|(X) = \\nu^+(X) + \\nu^-(X).\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.15 (\\(\\mathcal{M}(X, \\mathcal{A})\\) is a Banach Space)</div>
                    <div class="env-body">
                        <p>The space \\(\\mathcal{M}(X, \\mathcal{A})\\) with the total variation norm \\(\\|\\cdot\\|\\) is a Banach space (complete normed vector space).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Norm Axioms)</div>
                    <div class="env-body">
                        <p>We verify the three norm axioms.</p>
                        <p><strong>Positive definiteness:</strong> \\(\\|\\nu\\| = |\\nu|(X) \\geq 0\\), and \\(\\|\\nu\\| = 0\\) if and only if \\(|\\nu|(X) = 0\\), which means \\(\\nu^+(X) = \\nu^-(X) = 0\\), so \\(\\nu(E) = \\nu^+(E) - \\nu^-(E) = 0\\) for all \\(E\\), i.e., \\(\\nu = 0\\).</p>
                        <p><strong>Homogeneity:</strong> For \\(c \\in \\mathbb{R}\\), the Jordan decomposition of \\(c\\nu\\) is: if \\(c \\geq 0\\), then \\((c\\nu)^+ = c\\nu^+\\) and \\((c\\nu)^- = c\\nu^-\\); if \\(c < 0\\), then \\((c\\nu)^+ = |c|\\nu^-\\) and \\((c\\nu)^- = |c|\\nu^+\\). In both cases, \\(\\|c\\nu\\| = |c|(\\nu^+(X) + \\nu^-(X)) = |c| \\cdot \\|\\nu\\|\\).</p>
                        <p><strong>Triangle inequality:</strong> Let \\(\\nu, \\lambda \\in \\mathcal{M}(X, \\mathcal{A})\\). For any finite measurable partition \\(X = \\bigcup_i E_i\\),</p>
                        \\[\\sum_i |(\\nu + \\lambda)(E_i)| \\leq \\sum_i |\\nu(E_i)| + \\sum_i |\\lambda(E_i)| \\leq |\\nu|(X) + |\\lambda|(X).\\]
                        <p>Taking the supremum over all partitions on the left gives \\(|\\nu + \\lambda|(X) \\leq |\\nu|(X) + |\\lambda|(X)\\), i.e., \\(\\|\\nu + \\lambda\\| \\leq \\|\\nu\\| + \\|\\lambda\\|\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Completeness)</div>
                    <div class="env-body">
                        <p>Let \\(\\{\\nu_n\\}\\) be a Cauchy sequence in \\(\\mathcal{M}(X, \\mathcal{A})\\). For each \\(E \\in \\mathcal{A}\\),</p>
                        \\[|\\nu_n(E) - \\nu_m(E)| = |(\\nu_n - \\nu_m)(E)| \\leq |\\nu_n - \\nu_m|(X) = \\|\\nu_n - \\nu_m\\| \\to 0,\\]
                        <p>so \\(\\{\\nu_n(E)\\}\\) is Cauchy in \\(\\mathbb{R}\\). Define \\(\\nu(E) = \\lim_n \\nu_n(E)\\). One verifies: (i) \\(\\nu(\\varnothing) = 0\\); (ii) \\(\\nu\\) is countably additive (pass to the limit in \\(\\nu_n(\\bigcup E_k) = \\sum \\nu_n(E_k)\\), using the dominated convergence theorem for series, since \\(|\\nu_n(E_k)| \\leq (\\|\\nu_N\\| + 1)|\\) for large \\(n\\) uniformly); (iii) \\(\\|\\nu_n - \\nu\\| \\to 0\\) by taking limits in partition sums.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Total Variation as a Supremum over Partitions</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Finer Partitions Reveal More Variation)</div>
                    <div class="env-body">
                        <p>Imagine measuring the total variation of a signed measure by partitioning a set into pieces and summing \\(|\\nu(E_i)|\\). With a coarse partition, positive and negative parts within a single piece may cancel, underestimating the total variation. Finer partitions separate positive from negative regions more precisely, revealing more of the true variation. The total variation \\(|\\nu|(E)\\) is the supremum of this process over all possible partitions.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="total-variation-explorer"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Connection to Functions of Bounded Variation)</div>
                    <div class="env-body">
                        <p>For a function \\(F: [a, b] \\to \\mathbb{R}\\) of bounded variation, its total variation \\(V_a^b(F) = \\sup \\sum |F(x_i) - F(x_{i-1})|\\) over partitions of \\([a, b]\\) is precisely the total variation of the associated signed Stieltjes measure \\(\\nu_F\\). The function-analytic and measure-theoretic concepts align perfectly.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.16 (Total Variation Norm Computation)</div>
                    <div class="env-body">
                        <p>Let \\(\\nu(E) = \\int_E \\cos(x) \\, dx\\) on \\([0, 2\\pi]\\). The density \\(f(x) = \\cos(x)\\) changes sign at \\(x = \\pi/2\\) and \\(x = 3\\pi/2\\). The total variation norm is</p>
                        \\[\\|\\nu\\| = |\\nu|([0, 2\\pi]) = \\int_0^{2\\pi} |\\cos(x)| \\, dx = 4.\\]
                        <p>This counts the "total oscillation" of the cosine function, ignoring cancellation between positive and negative humps.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 10.17 (Total Variation and Absolute Continuity)</div>
                    <div class="env-body">
                        <p>If \\(\\nu(E) = \\int_E f \\, d\\mu\\) for an integrable \\(f\\), then \\(|\\nu|(E) = \\int_E |f| \\, d\\mu\\). In particular,</p>
                        \\[\\|\\nu\\| = \\int_X |f| \\, d\\mu = \\|f\\|_{L^1(\\mu)}.\\]
                        <p>The total variation norm of the signed measure equals the \\(L^1\\) norm of its density.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Proposition 10.17</div>
                    <div class="env-body">
                        <p>The Hahn decomposition is \\(P = \\{f \\geq 0\\}\\), \\(N = \\{f < 0\\}\\). Then \\(\\nu^+(E) = \\int_{E \\cap P} f \\, d\\mu = \\int_E f^+ \\, d\\mu\\) and \\(\\nu^-(E) = -\\int_{E \\cap N} f \\, d\\mu = \\int_E f^- \\, d\\mu\\). So \\(|\\nu|(E) = \\nu^+(E) + \\nu^-(E) = \\int_E f^+ \\, d\\mu + \\int_E f^- \\, d\\mu = \\int_E |f| \\, d\\mu\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 3.1; Royden-Fitzpatrick 17.3; Rudin RCA 6.1-6.4.</p>
            `,
            visualizations: [
                {
                    id: 'total-variation-explorer',
                    title: 'Total Variation Explorer',
                    description: 'Partition a set into pieces and compute Σ|ν(Eᵢ)|. Increase the number of partition elements to approach |ν|(E).',
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

                        var nParts = 2;
                        var funcChoice = 0;

                        var funcs = [
                            { name: 'sin(πx)', fn: function(x) { return Math.sin(Math.PI * x); }, tv: 2 },
                            { name: 'sin(2πx)', fn: function(x) { return Math.sin(2 * Math.PI * x); }, tv: 4 },
                            { name: 'cos(3πx)', fn: function(x) { return Math.cos(3 * Math.PI * x); }, tv: 6 },
                            { name: 'x² − 0.5', fn: function(x) { return x * x - 0.5; }, tv: -1 }
                        ];

                        // Compute true TV for x^2 - 0.5
                        (function() {
                            var s = 0;
                            for (var i = 0; i < 1000; i++) {
                                var x = i / 1000;
                                s += Math.abs(funcs[3].fn(x)) / 1000;
                            }
                            funcs[3].tv = s;
                        })();

                        VizEngine.createSlider(controls, 'Partition elements', 1, 50, nParts, 1, function(v) {
                            nParts = Math.round(v);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Function (0-3)', 0, 3, funcChoice, 1, function(v) {
                            funcChoice = Math.round(v);
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var mg = { l: 60, r: 30, t: 60, b: 55 };
                            var pw = w - mg.l - mg.r;
                            var ph = h - mg.t - mg.b;

                            var fn = funcs[funcChoice].fn;
                            var trueTV = funcs[funcChoice].tv;
                            var fnName = funcs[funcChoice].name;

                            // Compute yrange
                            var yMin = 0, yMax = 0;
                            for (var i = 0; i <= 200; i++) {
                                var val = fn(i / 200);
                                if (val < yMin) yMin = val;
                                if (val > yMax) yMax = val;
                            }
                            yMin = yMin - 0.2;
                            yMax = yMax + 0.2;

                            function sx(x) { return mg.l + x * pw; }
                            function sy(y) { return mg.t + ph - ((y - yMin) / (yMax - yMin)) * ph; }

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Total Variation: Supremum over Partitions', w / 2, 22);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('f(x) = ' + fnName + '  on [0, 1],   ν(E) = ∫_E f dμ', w / 2, 40);

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(sx(0), mg.t);
                            ctx.lineTo(sx(0), h - mg.b);
                            ctx.lineTo(sx(1), h - mg.b);
                            ctx.stroke();

                            // Zero line
                            if (yMin < 0 && yMax > 0) {
                                ctx.strokeStyle = 'rgba(201, 209, 217, 0.2)';
                                ctx.beginPath();
                                ctx.moveTo(sx(0), sy(0));
                                ctx.lineTo(sx(1), sy(0));
                                ctx.stroke();
                            }

                            // Draw partition bars
                            var dx = 1 / nParts;
                            var partSum = 0;

                            for (var i = 0; i < nParts; i++) {
                                var xL = i * dx;
                                var xR = (i + 1) * dx;

                                // Compute ν(Eᵢ) = integral of f over [xL, xR]
                                var integral = 0;
                                var subSteps = 100;
                                for (var s = 0; s < subSteps; s++) {
                                    integral += fn(xL + (s + 0.5) * dx / subSteps) * dx / subSteps;
                                }

                                partSum += Math.abs(integral);

                                var barX1 = sx(xL) + 1;
                                var barX2 = sx(xR) - 1;
                                var barY0 = sy(0);
                                var barY1 = sy(integral);

                                ctx.fillStyle = integral >= 0 ? 'rgba(88, 166, 255, 0.3)' : 'rgba(248, 81, 73, 0.3)';
                                ctx.fillRect(barX1, Math.min(barY0, barY1), barX2 - barX1, Math.abs(barY1 - barY0));

                                ctx.strokeStyle = integral >= 0 ? colors.blue : colors.red;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(barX1, Math.min(barY0, barY1), barX2 - barX1, Math.abs(barY1 - barY0));

                                // Label partition boundary
                                if (i > 0) {
                                    ctx.strokeStyle = 'rgba(201, 209, 217, 0.15)';
                                    ctx.beginPath();
                                    ctx.moveTo(sx(xL), mg.t);
                                    ctx.lineTo(sx(xL), h - mg.b);
                                    ctx.stroke();
                                }
                            }

                            // Draw the function curve on top
                            ctx.strokeStyle = colors.teal;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (var i = 0; i <= 300; i++) {
                                var x = i / 300;
                                var y = fn(x);
                                if (i === 0) ctx.moveTo(sx(x), sy(y));
                                else ctx.lineTo(sx(x), sy(y));
                            }
                            ctx.stroke();

                            // Results text
                            var ratio = trueTV > 0 ? (partSum / trueTV * 100).toFixed(1) : '---';
                            ctx.fillStyle = colors.green;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(
                                'Σ|ν(Eᵢ)| = ' + partSum.toFixed(4) +
                                '    |ν|([0,1]) = ' + trueTV.toFixed(4) +
                                '    (' + ratio + '% captured)',
                                w / 2, h - 18
                            );

                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('n = ' + nParts + ' partition elements. Increase n to approach the true total variation.', w / 2, h - 3);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that the total variation norm satisfies the triangle inequality: \\(\\|\\nu + \\lambda\\| \\leq \\|\\nu\\| + \\|\\lambda\\|\\) for finite signed measures \\(\\nu, \\lambda\\).',
                    hint: 'Use the supremum-over-partitions characterization of total variation.',
                    solution: 'For any partition \\(X = \\bigcup_i E_i\\), \\(\\sum_i |(\\nu + \\lambda)(E_i)| \\leq \\sum_i (|\\nu(E_i)| + |\\lambda(E_i)|) \\leq |\\nu|(X) + |\\lambda|(X) = \\|\\nu\\| + \\|\\lambda\\|\\). Taking the supremum over all partitions on the left gives \\(|\\nu + \\lambda|(X) \\leq \\|\\nu\\| + \\|\\lambda\\|\\), which is \\(\\|\\nu + \\lambda\\| \\leq \\|\\nu\\| + \\|\\lambda\\|\\).'
                },
                {
                    question: 'Let \\(\\nu(E) = \\int_E f \\, d\\mu\\) with \\(f \\in L^1(\\mu)\\). Prove that \\(\\|\\nu\\| = \\|f\\|_{L^1}\\).',
                    hint: 'Show \\(|\\nu|(E) = \\int_E |f| \\, d\\mu\\) using the Hahn decomposition \\(P = \\{f \\geq 0\\}\\), \\(N = \\{f < 0\\}\\).',
                    solution: 'The Hahn decomposition is \\(P = \\{f \\geq 0\\}\\), \\(N = \\{f < 0\\}\\). Then \\(\\nu^+(E) = \\int_{E \\cap P} f = \\int_E f^+\\) and \\(\\nu^-(E) = \\int_E f^-\\). So \\(|\\nu|(E) = \\int_E f^+ + \\int_E f^- = \\int_E |f|\\). Setting \\(E = X\\): \\(\\|\\nu\\| = |\\nu|(X) = \\int_X |f| = \\|f\\|_{L^1}\\).'
                },
                {
                    question: '(Exploration) Using the Total Variation Explorer, compare the partition sums for \\(\\sin(\\pi x)\\) and \\(\\sin(2\\pi x)\\) with \\(n = 2\\) partition elements. Which function\'s total variation is better approximated by this coarse partition, and why?',
                    hint: 'Think about where the zero crossings fall relative to the partition boundaries.',
                    solution: 'With \\(n = 2\\) (partition \\([0, 1/2] \\cup [1/2, 1]\\)): For \\(\\sin(\\pi x)\\), the function is positive on all of \\([0, 1]\\), so \\(|\\nu([0, 1/2])| + |\\nu([1/2, 1])| = \\nu([0, 1/2]) + \\nu([1/2, 1]) = \\int_0^1 \\sin(\\pi x) dx = 2/\\pi \\approx 0.637\\), capturing \\(0.637/0.637 = 100\\%\\) (the TV is \\(2/\\pi\\) for the positive function on \\([0,1]\\)). Wait: the true TV of \\(\\sin(\\pi x)\\) on \\([0,1]\\) is \\(\\int_0^1 |\\sin(\\pi x)| dx = 2/\\pi \\approx 0.637\\). For \\(\\sin(2\\pi x)\\), the zero crossing at \\(x = 1/2\\) lands exactly on a partition boundary, so each piece captures one full hump, and the 2-element partition achieves \\(100\\%\\) too. The key insight: when partition boundaries align with sign changes, even a coarse partition can capture most of the variation. Misaligned boundaries cause cancellation within each piece.'
                }
            ]
        },

        // ============================================================
        // Section 5: Complex Measures
        // ============================================================
        {
            id: 'complex-measures',
            title: 'Complex Measures',
            content: `
                <div class="bridge section-bridge">
                    <p>Signed measures extend the range of a measure from \\([0, \\infty]\\) to \\([-\\infty, \\infty]\\). But in many areas of analysis and physics (Fourier analysis, quantum mechanics, spectral theory), we need measures that take complex values. A complex measure assigns a complex number \\(\\nu(E) \\in \\mathbb{C}\\) to each measurable set, with the same additivity requirement.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define complex measures, decompose them into real and imaginary parts, define their total variation, and establish that the space of complex measures is a Banach space. Visualize complex measures as vector fields in the complex plane.</p>
                </div>

                <h2>Definition and Basic Properties</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.18 (Complex Measure)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{A})\\) be a measurable space. A <strong>complex measure</strong> is a function \\(\\nu: \\mathcal{A} \\to \\mathbb{C}\\) satisfying:</p>
                        <ol>
                            <li>\\(\\nu(\\varnothing) = 0\\).</li>
                            <li><strong>Countable additivity:</strong> If \\(\\{E_n\\}_{n=1}^{\\infty}\\) is a sequence of pairwise disjoint sets in \\(\\mathcal{A}\\), then
                            \\[\\nu\\!\\left(\\bigcup_{n=1}^{\\infty} E_n\\right) = \\sum_{n=1}^{\\infty} \\nu(E_n),\\]
                            where the series converges absolutely (in \\(\\mathbb{C}\\)).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (No Infinities Allowed)</div>
                    <div class="env-body">
                        <p>Unlike signed measures, complex measures are required to take values in \\(\\mathbb{C}\\) (not \\(\\overline{\\mathbb{C}}\\)). There is no "complex infinity" that plays nicely with addition. Consequently, every complex measure is automatically <em>finite</em>: \\(|\\nu(E)| < \\infty\\) for all \\(E\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Absolute Convergence)</div>
                    <div class="env-body">
                        <p>The requirement that \\(\\sum \\nu(E_n)\\) converges absolutely is not an extra condition; it is a consequence of the definition. Since the series must converge for every ordering of the \\(E_n\\) (the union \\(\\bigcup E_n\\) does not depend on the ordering), the series must converge unconditionally, which in \\(\\mathbb{C}\\) implies absolute convergence.</p>
                    </div>
                </div>

                <h2>Real and Imaginary Decomposition</h2>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 10.19 (Decomposition into Real and Imaginary Parts)</div>
                    <div class="env-body">
                        <p>Every complex measure \\(\\nu\\) can be written uniquely as</p>
                        \\[\\nu = \\nu_r + i\\nu_i,\\]
                        <p>where \\(\\nu_r = \\operatorname{Re}(\\nu)\\) and \\(\\nu_i = \\operatorname{Im}(\\nu)\\) are finite signed measures defined by \\(\\nu_r(E) = \\operatorname{Re}(\\nu(E))\\) and \\(\\nu_i(E) = \\operatorname{Im}(\\nu(E))\\).</p>
                        <p>Applying the Jordan decomposition to each, we get four positive measures:</p>
                        \\[\\nu = (\\nu_r^+ - \\nu_r^-) + i(\\nu_i^+ - \\nu_i^-).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Proposition 10.19</div>
                    <div class="env-body">
                        <p>Define \\(\\nu_r(E) = \\operatorname{Re}(\\nu(E))\\) and \\(\\nu_i(E) = \\operatorname{Im}(\\nu(E))\\). Both are clearly real-valued, and \\(\\nu_r(\\varnothing) = \\nu_i(\\varnothing) = 0\\). For disjoint \\(\\{E_n\\}\\),</p>
                        \\[\\nu_r\\!\\left(\\bigcup E_n\\right) = \\operatorname{Re}\\!\\left(\\sum \\nu(E_n)\\right) = \\sum \\operatorname{Re}(\\nu(E_n)) = \\sum \\nu_r(E_n),\\]
                        <p>where the exchange of \\(\\operatorname{Re}\\) and the sum is valid because the series converges absolutely. The same argument applies to \\(\\nu_i\\). Since \\(\\nu\\) is finite, both \\(\\nu_r\\) and \\(\\nu_i\\) are finite signed measures.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.20 (Complex Measure from a Complex Density)</div>
                    <div class="env-body">
                        <p>Let \\(f \\in L^1(\\mu)\\) be a complex-valued integrable function. Define</p>
                        \\[\\nu(E) = \\int_E f \\, d\\mu.\\]
                        <p>Then \\(\\nu\\) is a complex measure. For instance, on \\([0, 2\\pi]\\) with \\(f(x) = e^{ix} = \\cos(x) + i\\sin(x)\\):</p>
                        \\[\\nu([0, 2\\pi]) = \\int_0^{2\\pi} e^{ix} dx = 0, \\quad \\nu([0, \\pi]) = \\int_0^{\\pi} e^{ix} dx = -2i.\\]
                        <p>The real part \\(\\nu_r(E) = \\int_E \\cos(x) dx\\) and imaginary part \\(\\nu_i(E) = \\int_E \\sin(x) dx\\) are signed measures.</p>
                    </div>
                </div>

                <h2>Total Variation of a Complex Measure</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.21 (Total Variation of a Complex Measure)</div>
                    <div class="env-body">
                        <p>Let \\(\\nu\\) be a complex measure on \\((X, \\mathcal{A})\\). The <strong>total variation</strong> of \\(\\nu\\) is the positive measure \\(|\\nu|\\) defined by</p>
                        \\[|\\nu|(E) = \\sup\\left\\{\\sum_{i=1}^{n} |\\nu(E_i)| : E = E_1 \\cup \\cdots \\cup E_n, \\text{ pairwise disjoint, } E_i \\in \\mathcal{A}\\right\\}.\\]
                        <p>Here \\(|\\nu(E_i)|\\) denotes the modulus of the complex number \\(\\nu(E_i)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.22 (Properties of the Total Variation of a Complex Measure)</div>
                    <div class="env-body">
                        <p>Let \\(\\nu\\) be a complex measure on \\((X, \\mathcal{A})\\). Then:</p>
                        <ol>
                            <li>\\(|\\nu|\\) is a finite positive measure.</li>
                            <li>\\(|\\nu(E)| \\leq |\\nu|(E)\\) for all \\(E \\in \\mathcal{A}\\).</li>
                            <li>\\(|\\nu|(E) \\leq |\\nu_r|(E) + |\\nu_i|(E) \\leq 2|\\nu|(E)\\), where \\(\\nu_r = \\operatorname{Re}(\\nu)\\) and \\(\\nu_i = \\operatorname{Im}(\\nu)\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 10.22</div>
                    <div class="env-body">
                        <p><strong>(1) Finiteness:</strong> For any partition \\(E = \\bigcup_i E_i\\), \\(\\sum |\\nu(E_i)| \\leq \\sum (|\\nu_r(E_i)| + |\\nu_i(E_i)|) \\leq |\\nu_r|(E) + |\\nu_i|(E)\\). Since \\(\\nu_r\\) and \\(\\nu_i\\) are finite signed measures, \\(|\\nu_r|(E)\\) and \\(|\\nu_i|(E)\\) are finite, so \\(|\\nu|(E)\\) is finite. Countable additivity of \\(|\\nu|\\) can be verified by a standard argument (approximate the supremum for each \\(E_n\\) in a disjoint union and combine the partitions).</p>
                        <p><strong>(2)</strong> The trivial partition \\(\\{E\\}\\) gives \\(|\\nu(E)| \\leq |\\nu|(E)\\).</p>
                        <p><strong>(3)</strong> For the left inequality: for any partition \\(E = \\bigcup E_i\\), \\(\\sum |\\nu(E_i)| \\geq \\sum |\\operatorname{Re}(\\nu(E_i))| = \\sum |\\nu_r(E_i)|\\) is false in general (since \\(|z| \\geq |\\operatorname{Re}(z)|\\), but the suprema do not directly compare). Instead, note \\(|\\nu_r(E_i)| = |\\operatorname{Re}(\\nu(E_i))| \\leq |\\nu(E_i)|\\), so \\(\\sum |\\nu_r(E_i)| \\leq \\sum |\\nu(E_i)|\\). Taking suprema: \\(|\\nu_r|(E) \\leq |\\nu|(E)\\). Similarly \\(|\\nu_i|(E) \\leq |\\nu|(E)\\). For the right inequality: \\(|\\nu(E_i)| \\leq |\\nu_r(E_i)| + |\\nu_i(E_i)|\\), so \\(\\sum |\\nu(E_i)| \\leq \\sum |\\nu_r(E_i)| + \\sum |\\nu_i(E_i)| \\leq |\\nu_r|(E) + |\\nu_i|(E)\\). Taking the supremum on the left: \\(|\\nu|(E) \\leq |\\nu_r|(E) + |\\nu_i|(E) \\leq 2|\\nu|(E)\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="viz-placeholder" data-viz="complex-measure-phase"></div>

                <h2>The Banach Space of Complex Measures</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.23 (Total Variation Norm for Complex Measures)</div>
                    <div class="env-body">
                        <p>The <strong>total variation norm</strong> of a complex measure \\(\\nu\\) is</p>
                        \\[\\|\\nu\\| = |\\nu|(X).\\]
                        <p>The space of all complex measures on \\((X, \\mathcal{A})\\), denoted \\(\\mathcal{M}_{\\mathbb{C}}(X, \\mathcal{A})\\), is a Banach space under this norm.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.24 (Complex Measures Form a Banach Space)</div>
                    <div class="env-body">
                        <p>\\((\\mathcal{M}_{\\mathbb{C}}(X, \\mathcal{A}), \\|\\cdot\\|)\\) is a Banach space. The proof follows the same pattern as for finite signed measures: the norm axioms are verified using the partition characterization, and completeness uses the fact that a Cauchy sequence in the total variation norm is pointwise Cauchy on each set \\(E\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Hierarchy of Measure Spaces)</div>
                    <div class="env-body">
                        <p>We now have a clean hierarchy:</p>
                        <ul>
                            <li><strong>Positive finite measures</strong> \\(\\subset\\) <strong>Finite signed measures</strong> \\(\\subset\\) <strong>Complex measures</strong>.</li>
                            <li>Each level adds generality in the range: \\([0, \\infty) \\subset \\mathbb{R} \\subset \\mathbb{C}\\).</li>
                            <li>All three spaces carry the total variation norm, and all three are Banach spaces.</li>
                        </ul>
                        <p>The inclusion is strict: every signed measure with finite total variation is a complex measure (with zero imaginary part), and every positive finite measure is a signed measure (with zero negative variation).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.25 (Fourier-Stieltjes Measures)</div>
                    <div class="env-body">
                        <p>In harmonic analysis, a bounded regular Borel measure \\(\\mu\\) on \\(\\mathbb{R}\\) (possibly complex) has a Fourier-Stieltjes transform</p>
                        \\[\\hat{\\mu}(\\xi) = \\int_{\\mathbb{R}} e^{-2\\pi i \\xi x} \\, d\\mu(x).\\]
                        <p>The transform is well-defined precisely because \\(|\\mu|\\) is finite: \\(|\\hat{\\mu}(\\xi)| \\leq \\int |e^{-2\\pi i \\xi x}| \\, d|\\mu| = |\\mu|(\\mathbb{R}) = \\|\\mu\\|\\). The space of complex measures on \\(\\mathbb{R}\\) is the natural domain for the Fourier-Stieltjes transform, and the total variation norm controls the size of the transform.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 10.26 (Total Variation via Density)</div>
                    <div class="env-body">
                        <p>If \\(\\nu(E) = \\int_E f \\, d\\mu\\) for a complex-valued \\(f \\in L^1(\\mu)\\), then</p>
                        \\[|\\nu|(E) = \\int_E |f| \\, d\\mu, \\qquad \\|\\nu\\| = \\|f\\|_{L^1(\\mu)}.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Proposition 10.26</div>
                    <div class="env-body">
                        <p><strong>Upper bound:</strong> For any partition \\(E = \\bigcup E_i\\), \\(\\sum |\\nu(E_i)| = \\sum |\\int_{E_i} f \\, d\\mu| \\leq \\sum \\int_{E_i} |f| \\, d\\mu = \\int_E |f| \\, d\\mu\\).</p>
                        <p><strong>Lower bound:</strong> For \\(\\varepsilon > 0\\), write \\(f = |f| \\cdot g\\) where \\(g = f/|f|\\) when \\(f \\neq 0\\) and \\(g = 1\\) when \\(f = 0\\), so \\(|g| = 1\\). Approximate \\(g\\) by a simple function \\(s = \\sum_j c_j \\mathbf{1}_{A_j}\\) with \\(|c_j| = 1\\) and \\(\\int_E |g - s| \\cdot |f| \\, d\\mu < \\varepsilon\\). Then \\(\\sum_j |\\nu(E \\cap A_j)| = \\sum_j |\\int_{E \\cap A_j} f| \\geq \\sum_j |\\int_{E \\cap A_j} |f| \\cdot c_j \\, d\\mu| - \\varepsilon \\geq \\int_E |f| \\, d\\mu - 2\\varepsilon\\). Taking \\(\\varepsilon \\to 0\\) gives \\(|\\nu|(E) \\geq \\int_E |f| \\, d\\mu\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 3.1-3.2; Royden-Fitzpatrick 17.4; Rudin RCA 6.1-6.4, 6.12.</p>
            `,
            visualizations: [
                {
                    id: 'complex-measure-phase',
                    title: 'Complex Measure Phase Diagram',
                    description: 'Visualize a complex measure as vectors in the complex plane. Each subinterval contributes a vector ν(Eᵢ); the total is their sum.',
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

                        var nParts = 8;
                        var funcChoice = 0;

                        var complexFuncs = [
                            { name: 'e^(iπx)', re: function(x) { return Math.cos(Math.PI * x); }, im: function(x) { return Math.sin(Math.PI * x); } },
                            { name: 'e^(2iπx)', re: function(x) { return Math.cos(2 * Math.PI * x); }, im: function(x) { return Math.sin(2 * Math.PI * x); } },
                            { name: '(1+ix)e^(iπx)', re: function(x) { return Math.cos(Math.PI * x) - x * Math.sin(Math.PI * x); }, im: function(x) { return Math.sin(Math.PI * x) + x * Math.cos(Math.PI * x); } }
                        ];

                        VizEngine.createSlider(controls, 'Partition elements', 2, 30, nParts, 1, function(v) {
                            nParts = Math.round(v);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Function (0-2)', 0, 2, funcChoice, 1, function(v) {
                            funcChoice = Math.round(v);
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var fn = complexFuncs[funcChoice];

                            // Left panel: the function on [0,1]
                            var leftW = Math.floor(w * 0.45);
                            var rightW = w - leftW - 20;
                            var mg = { l: 40, r: 10, t: 55, b: 40 };

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Complex Measure: f(x) = ' + fn.name + ' on [0, 1]', w / 2, 22);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('Left: Re/Im parts. Right: ν(Eᵢ) as vectors in C.', w / 2, 40);

                            // Left panel: Re and Im curves
                            var lpw = leftW - mg.l - mg.r;
                            var lph = h - mg.t - mg.b;

                            // Y range
                            var yMin = -2, yMax = 2;

                            function lsx(x) { return mg.l + x * lpw; }
                            function lsy(y) { return mg.t + lph / 2 - (y / (yMax - yMin)) * lph; }

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(lsx(0), mg.t);
                            ctx.lineTo(lsx(0), h - mg.b);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(lsx(0), lsy(0));
                            ctx.lineTo(lsx(1), lsy(0));
                            ctx.stroke();

                            // Draw partition bands
                            var dx = 1 / nParts;
                            var vectors = [];

                            for (var i = 0; i < nParts; i++) {
                                var xL = i * dx;
                                var xR = (i + 1) * dx;

                                // Compute integral
                                var reInt = 0, imInt = 0;
                                var subSteps = 100;
                                for (var s = 0; s < subSteps; s++) {
                                    var xx = xL + (s + 0.5) * dx / subSteps;
                                    reInt += fn.re(xx) * dx / subSteps;
                                    imInt += fn.im(xx) * dx / subSteps;
                                }
                                vectors.push({ re: reInt, im: imInt });

                                // Shade partition on left panel
                                var hue = (i / nParts) * 300;
                                ctx.fillStyle = 'hsla(' + hue + ', 70%, 50%, 0.15)';
                                ctx.fillRect(lsx(xL), mg.t, lsx(xR) - lsx(xL), lph);
                            }

                            // Draw Re curve
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= 200; i++) {
                                var x = i / 200;
                                var y = fn.re(x);
                                if (i === 0) ctx.moveTo(lsx(x), lsy(y));
                                else ctx.lineTo(lsx(x), lsy(y));
                            }
                            ctx.stroke();

                            // Draw Im curve
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= 200; i++) {
                                var x = i / 200;
                                var y = fn.im(x);
                                if (i === 0) ctx.moveTo(lsx(x), lsy(y));
                                else ctx.lineTo(lsx(x), lsy(y));
                            }
                            ctx.stroke();

                            // Legend
                            ctx.fillStyle = colors.blue;
                            ctx.fillRect(lsx(0.05), mg.t + 5, 12, 3);
                            ctx.fillStyle = colors.text;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Re(f)', lsx(0.05) + 16, mg.t + 10);

                            ctx.fillStyle = colors.orange;
                            ctx.fillRect(lsx(0.05), mg.t + 18, 12, 3);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('Im(f)', lsx(0.05) + 16, mg.t + 23);

                            // Right panel: complex plane with vectors
                            var rox = leftW + 20;
                            var rpw = rightW - mg.l - mg.r;
                            var rph = h - mg.t - mg.b;

                            // Find scale
                            var maxMod = 0;
                            for (var i = 0; i < vectors.length; i++) {
                                var mod = Math.sqrt(vectors[i].re * vectors[i].re + vectors[i].im * vectors[i].im);
                                if (mod > maxMod) maxMod = mod;
                            }
                            // Also consider total sum
                            var totalRe = 0, totalIm = 0, totalTV = 0;
                            for (var i = 0; i < vectors.length; i++) {
                                totalRe += vectors[i].re;
                                totalIm += vectors[i].im;
                                totalTV += Math.sqrt(vectors[i].re * vectors[i].re + vectors[i].im * vectors[i].im);
                            }
                            var totalMod = Math.sqrt(totalRe * totalRe + totalIm * totalIm);
                            var scale = Math.min(rpw, rph) * 0.4 / Math.max(maxMod, 0.001);

                            var rcx = rox + mg.l + rpw / 2;
                            var rcy = mg.t + rph / 2;

                            // Axes in complex plane
                            ctx.strokeStyle = 'rgba(201, 209, 217, 0.2)';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(rox + mg.l, rcy);
                            ctx.lineTo(rox + mg.l + rpw, rcy);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(rcx, mg.t);
                            ctx.lineTo(rcx, h - mg.b);
                            ctx.stroke();

                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Re', rox + mg.l + rpw - 5, rcy - 5);
                            ctx.fillText('Im', rcx + 10, mg.t + 10);

                            // Draw individual vectors from origin
                            for (var i = 0; i < vectors.length; i++) {
                                var vx = vectors[i].re * scale;
                                var vy = -vectors[i].im * scale; // flip y

                                var hue = (i / nParts) * 300;
                                ctx.strokeStyle = 'hsla(' + hue + ', 70%, 60%, 0.7)';
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(rcx, rcy);
                                ctx.lineTo(rcx + vx, rcy + vy);
                                ctx.stroke();

                                // Arrowhead
                                var len = Math.sqrt(vx * vx + vy * vy);
                                if (len > 5) {
                                    var ax = vx / len, ay = vy / len;
                                    ctx.fillStyle = 'hsla(' + hue + ', 70%, 60%, 0.9)';
                                    ctx.beginPath();
                                    ctx.moveTo(rcx + vx, rcy + vy);
                                    ctx.lineTo(rcx + vx - 6 * ax + 3 * ay, rcy + vy - 6 * ay - 3 * ax);
                                    ctx.lineTo(rcx + vx - 6 * ax - 3 * ay, rcy + vy - 6 * ay + 3 * ax);
                                    ctx.closePath();
                                    ctx.fill();
                                }

                                // Small dot
                                ctx.fillStyle = 'hsla(' + hue + ', 70%, 60%, 1)';
                                ctx.beginPath();
                                ctx.arc(rcx + vx, rcy + vy, 3, 0, 2 * Math.PI);
                                ctx.fill();
                            }

                            // Draw the total vector (sum)
                            var tvx = totalRe * scale;
                            var tvy = -totalIm * scale;
                            ctx.strokeStyle = colors.green;
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(rcx, rcy);
                            ctx.lineTo(rcx + tvx, rcy + tvy);
                            ctx.stroke();

                            // Total arrowhead
                            var tlen = Math.sqrt(tvx * tvx + tvy * tvy);
                            if (tlen > 5) {
                                var tax = tvx / tlen, tay = tvy / tlen;
                                ctx.fillStyle = colors.green;
                                ctx.beginPath();
                                ctx.moveTo(rcx + tvx, rcy + tvy);
                                ctx.lineTo(rcx + tvx - 8 * tax + 4 * tay, rcy + tvy - 8 * tay - 4 * tax);
                                ctx.lineTo(rcx + tvx - 8 * tax - 4 * tay, rcy + tvy - 8 * tay + 4 * tax);
                                ctx.closePath();
                                ctx.fill();
                            }

                            // Info text
                            ctx.fillStyle = colors.green;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(
                                'ν([0,1]) = ' + totalRe.toFixed(3) + ' + ' + totalIm.toFixed(3) + 'i',
                                rox + mg.l + rpw / 2, h - 22
                            );
                            ctx.fillStyle = colors.yellow;
                            ctx.fillText(
                                '|ν|([0,1]) ≈ Σ|ν(Eᵢ)| = ' + totalTV.toFixed(3) + '   |ν([0,1])| = ' + totalMod.toFixed(3),
                                rox + mg.l + rpw / 2, h - 6
                            );
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that if \\(\\nu\\) is a complex measure, the series \\(\\sum \\nu(E_n)\\) in the definition of countable additivity must converge absolutely.',
                    hint: 'If a series in \\(\\mathbb{C}\\) converges for every rearrangement, it converges absolutely. Use the fact that countable additivity is independent of the ordering of the sets.',
                    solution: 'The left side \\(\\nu(\\bigcup E_n)\\) is a fixed complex number, independent of how we list the \\(E_n\\). So the series \\(\\sum \\nu(E_n)\\) converges to the same value regardless of the ordering of terms. By the Riemann rearrangement theorem (or rather its converse), a series in \\(\\mathbb{C}\\) (or \\(\\mathbb{R}^n\\)) that converges for every rearrangement must converge absolutely. Therefore \\(\\sum |\\nu(E_n)| < \\infty\\).'
                },
                {
                    question: 'Let \\(\\nu(E) = \\int_E e^{ix} dx\\) on \\([0, 2\\pi]\\). Compute \\(|\\nu|([0, 2\\pi])\\) and \\(\\|\\nu\\|\\).',
                    hint: 'Use Proposition 10.26: \\(|\\nu|(E) = \\int_E |f| \\, d\\mu\\) where \\(f(x) = e^{ix}\\).',
                    solution: 'Since \\(|e^{ix}| = 1\\) for all \\(x\\), Proposition 10.26 gives \\(|\\nu|(E) = \\int_E |e^{ix}| dx = \\int_E 1 \\, dx = \\mu(E)\\) (Lebesgue measure). In particular, \\(\\|\\nu\\| = |\\nu|([0, 2\\pi]) = 2\\pi\\). Note that \\(\\nu([0, 2\\pi]) = 0\\) (the integral of \\(e^{ix}\\) over a full period is zero), but \\(\\|\\nu\\| = 2\\pi\\). The total variation measures "how much measure is there in total," while \\(\\nu([0, 2\\pi])\\) measures the net effect after cancellation.'
                },
                {
                    question: 'Prove that \\(|\\nu_r|(E) \\leq |\\nu|(E)\\) and \\(|\\nu_i|(E) \\leq |\\nu|(E)\\) for any complex measure \\(\\nu = \\nu_r + i\\nu_i\\).',
                    hint: 'For any partition, \\(\\sum |\\nu_r(E_i)| = \\sum |\\operatorname{Re}(\\nu(E_i))| \\leq \\sum |\\nu(E_i)|\\).',
                    solution: 'For any finite partition \\(E = \\bigcup_j E_j\\): \\(\\sum_j |\\nu_r(E_j)| = \\sum_j |\\operatorname{Re}(\\nu(E_j))| \\leq \\sum_j |\\nu(E_j)| \\leq |\\nu|(E)\\), where we used \\(|\\operatorname{Re}(z)| \\leq |z|\\). Taking the supremum over partitions on the left: \\(|\\nu_r|(E) \\leq |\\nu|(E)\\). The same argument with \\(\\operatorname{Im}\\) replacing \\(\\operatorname{Re}\\) gives \\(|\\nu_i|(E) \\leq |\\nu|(E)\\).'
                },
                {
                    question: '(Exploration) In the Complex Measure Phase Diagram, set the function to \\(e^{2i\\pi x}\\) and vary the number of partition elements. What geometric shape do the vectors trace out? What happens to \\(\\nu([0,1])\\) and \\(|\\nu|([0,1])\\)?',
                    hint: 'Think about \\(e^{2i\\pi x}\\) as a point tracing a circle in the complex plane as \\(x\\) goes from 0 to 1.',
                    solution: 'The function \\(e^{2\\pi i x}\\) traces a full circle in \\(\\mathbb{C}\\) as \\(x\\) goes from 0 to 1. When the interval is partitioned into \\(n\\) equal pieces, each vector \\(\\nu(E_k)\\) is approximately \\(\\frac{1}{n} e^{2\\pi i (k-1/2)/n}\\), pointing in the direction of the arc. These vectors are approximately equally spaced around a circle of radius \\(1/n\\), forming a regular polygon. Their sum \\(\\nu([0,1]) = \\int_0^1 e^{2\\pi ix} dx = 0\\) (the vectors cancel by symmetry). But the total variation \\(|\\nu|([0,1]) = \\int_0^1 |e^{2\\pi ix}| dx = 1\\) since each vector has modulus \\(\\approx 1/n\\) and there are \\(n\\) of them. This illustrates: complex cancellation can make \\(\\nu(E) = 0\\) even when \\(|\\nu|(E)\\) is large.'
                },
                {
                    question: 'Show that the space of complex measures \\(\\mathcal{M}_{\\mathbb{C}}(X, \\mathcal{A})\\) contains the space of finite signed measures \\(\\mathcal{M}(X, \\mathcal{A})\\) as a closed subspace.',
                    hint: 'A finite signed measure is a complex measure with zero imaginary part. Show that the subset is closed in the total variation norm.',
                    solution: 'The map \\(\\nu \\mapsto \\nu + 0 \\cdot i\\) embeds \\(\\mathcal{M}(X, \\mathcal{A})\\) into \\(\\mathcal{M}_{\\mathbb{C}}(X, \\mathcal{A})\\), and the total variation norms agree. To show closedness: if \\(\\{\\nu_n\\}\\) is a sequence in \\(\\mathcal{M}\\) converging to \\(\\nu \\in \\mathcal{M}_{\\mathbb{C}}\\) in total variation, then for each \\(E\\), \\(\\nu_n(E) \\to \\nu(E)\\) in \\(\\mathbb{C}\\). But \\(\\nu_n(E) \\in \\mathbb{R}\\) for all \\(n\\), so \\(\\nu(E) \\in \\mathbb{R}\\). Since \\(\\nu(E) \\in \\mathbb{R}\\) for all \\(E\\), \\(\\nu\\) is a (real) signed measure, hence \\(\\nu \\in \\mathcal{M}\\). Therefore \\(\\mathcal{M}\\) is closed in \\(\\mathcal{M}_{\\mathbb{C}}\\).'
                }
            ]
        }
    ]
});
